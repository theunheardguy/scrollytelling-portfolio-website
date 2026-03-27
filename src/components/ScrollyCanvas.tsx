"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

const FRAME_COUNT = 109;
const FRAME_GENERATE_URL = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCountState, setLoadedCountState] = useState(0);

  useEffect(() => {
    // Preload all images to prevent flickering
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_GENERATE_URL(i);
      img.onload = () => {
        loadedCount++;
        setLoadedCountState(loadedCount);
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          if (canvasRef.current && loadedImages[0]) {
            renderFrame(0, loadedImages);
          }
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const renderFrame = (index: number, imgs: HTMLImageElement[]) => {
    if (!imgs[index] || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgs[index];
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Canvas Logic
    if (images.length > 0) {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(latest * FRAME_COUNT))
      );
      renderFrame(frameIndex, images);
    }

    // RAW DOM OVERLAY MATH
    // Helper: Map range to opacity
    const getOp = (val: number, inStart: number, inEnd: number, outStart: number, outEnd: number) => {
      if (val < inStart || val > outEnd) return 0;
      if (val >= inEnd && val <= outStart) return 1;
      if (val < inEnd) return (val - inStart) / (inEnd - inStart);
      return 1 - ((val - outStart) / (outEnd - outStart));
    };

    // Helper: Map range to Y offset (-100px to 100px max bounds)
    const getY = (val: number, start: number, end: number, yStart: number, yEnd: number) => {
      if (val <= start) return yStart;
      if (val >= end) return yEnd;
      return yStart + ((val - start) / (end - start)) * (yEnd - yStart);
    };

    if (text1Ref.current) {
      // Plays 0% to 15%
      const op = latest < 0.10 ? 1 : latest > 0.15 ? 0 : 1 - ((latest - 0.10) / 0.05);
      const y = getY(latest, 0, 0.15, 0, -100);
      text1Ref.current.style.opacity = op.toString();
      text1Ref.current.style.transform = `translateY(${y}px)`;
      text1Ref.current.style.visibility = op <= 0 ? "hidden" : "visible";
    }

    if (text2Ref.current) {
      // Plays 15% to 45% (Safe isolated timeline)
      const op = getOp(latest, 0.15, 0.25, 0.35, 0.45);
      const y = getY(latest, 0.15, 0.45, 120, -120);
      text2Ref.current.style.opacity = op.toString();
      text2Ref.current.style.transform = `translateY(${y}px)`;
      text2Ref.current.style.visibility = op <= 0 ? "hidden" : "visible";
    }

    if (text3Ref.current) {
      // Plays 45% to 75%
      const op = getOp(latest, 0.45, 0.55, 0.65, 0.75);
      const y = getY(latest, 0.45, 0.75, 120, -120);
      text3Ref.current.style.opacity = op.toString();
      text3Ref.current.style.transform = `translateY(${y}px)`;
      text3Ref.current.style.visibility = op <= 0 ? "hidden" : "visible";
    }
  });

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (images.length > 0) {
          const latest = scrollYProgress.get();
          const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.floor(latest * FRAME_COUNT))
          );
          renderFrame(frameIndex, images);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <>
      <AnimatePresence>
        {loadedCountState < FRAME_COUNT && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#121212] flex flex-col items-center justify-center p-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8"
            >
              SHIVAM<span className="text-neutral-500">.</span>
            </motion.h1>
            
            <div className="w-full max-w-sm h-1 bg-neutral-800 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${(loadedCountState / FRAME_COUNT) * 100}%` }}
                transition={{ ease: "circOut" }}
              />
            </div>
            
            <div className="mt-6 flex flex-col items-center gap-2">
              <span className="text-neutral-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
                Initializing Sequence
              </span>
              <span className="text-white font-mono text-sm tracking-widest">
                {Math.round((loadedCountState / FRAME_COUNT) * 100)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={containerRef} className="w-full bg-[#121212]" style={{ height: "500vh", position: "relative" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Sequence Canvas */}
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        
        {/* TEXT SWEEP OVERLAYS INTERIOR FRAME */}
        <div className="absolute inset-0 w-full h-full flex flex-col justify-center px-6 md:px-24 pointer-events-none z-20">
          
          {/* Section 1 */}
          <div 
            ref={text1Ref}
            className="absolute inset-0 flex flex-col items-center justify-center text-center will-change-transform"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl leading-none">
              Shivam Kumar<span className="text-neutral-500">.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 font-mono tracking-widest drop-shadow-lg mt-4">
              &lt;Software Engineer/&gt;
            </p>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-12 md:bottom-20 flex flex-col items-center gap-3"
            >
              <div className="w-[30px] h-[50px] rounded-full border-2 border-neutral-600 flex justify-center pt-2">
                <motion.div 
                  animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }} 
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-neutral-400"
                />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-600">Scroll</span>
            </motion.div>
          </div>

          {/* Section 2 */}
          <div 
            ref={text2Ref}
            className="absolute inset-0 flex flex-col items-start justify-center pl-6 md:pl-24 will-change-transform"
            style={{ opacity: 0, transform: "translateY(120px)", visibility: "hidden" }}
          >
            <h2 className="text-4xl md:text-6xl max-w-3xl font-bold tracking-tighter leading-tight text-white drop-shadow-2xl">
              Results-driven <br/><span className="text-neutral-500">engineer.</span>
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-neutral-400 max-w-xl font-light tracking-wide">
              Delivering 70% efficiency gains through intelligent automation.
            </p>
          </div>

          {/* Section 3 */}
          <div 
            ref={text3Ref}
            className="absolute inset-0 flex flex-col items-end justify-center pr-6 md:pr-24 text-right will-change-transform"
            style={{ opacity: 0, transform: "translateY(120px)", visibility: "hidden" }}
          >
            <h2 className="text-4xl md:text-6xl max-w-3xl font-bold tracking-tighter leading-tight text-white drop-shadow-2xl">
              AI & Automation <br/> <span className="text-neutral-500">Developer.</span>
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-neutral-400 max-w-xl font-light tracking-wide ml-auto">
              Engineering RAG-based multi-agent systems at scale.
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
