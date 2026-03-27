"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function FrameLines() {
  const { scrollYProgress } = useScroll();
  
  // Left line draws rapidly right as the user begins scrolling past the hero
  const leftHeight = useTransform(scrollYProgress, [0.01, 0.1], ["0vh", "100vh"]);
  
  // Right line draws sequentially immediately after the left finishes
  const rightHeight = useTransform(scrollYProgress, [0.1, 0.2], ["0vh", "100vh"]);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-6 md:left-12 w-px bg-white/10 z-[40] pointer-events-none"
        style={{ height: leftHeight }}
      />
      <motion.div 
        className="fixed top-0 right-6 md:right-12 w-px bg-white/10 z-[40] pointer-events-none"
        style={{ height: rightHeight }}
      />
    </>
  );
}
