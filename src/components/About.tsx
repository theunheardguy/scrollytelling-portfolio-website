"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#121212] py-24 px-6 md:px-24 z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Left Column - Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 lg:sticky top-32"
        >
          <div className="flex flex-col items-start mb-12 lg:mb-0">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase mb-4">
              Who am I
            </span>
            <h2 className="text-4xl md:text-5xl tracking-tight">
              <span className="text-neutral-400 font-light">About </span>
              <span className="text-white font-bold">Me</span>
            </h2>
          </div>
        </motion.div>

        {/* Right Column - Narrative */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-8 flex flex-col gap-8 text-lg md:text-xl text-neutral-400 font-light leading-relaxed tracking-wide"
        >
          <p>
            I am a <span className="text-white font-medium">Software Engineer II</span> with over 2.5 years of experience delivering highly impactful engineering solutions. 
          </p>
          <p>
            Currently, I focus heavily on <span className="text-white font-medium">RAG-based multi-agent systems</span>, intelligent automation, and building scalable LLM-powered tools. My work consistently bridges the gap between complex backend architectures and seamless user experiences.
          </p>
          <p>
            Whether it&apos;s accelerating internal processes by 70% through intelligent automation or architecting resilient data workflows, I thrive on turning highly technical challenges into elegant, resilient applications.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
