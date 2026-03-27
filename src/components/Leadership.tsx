"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function Leadership() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="leadership" className="relative w-full bg-[#121212] py-16 md:py-20 px-6 md:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-20">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase mb-4">
            Beyond Code
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            <span className="text-neutral-400 font-light">Leadership & </span>
            <span className="text-white font-bold">Achievements</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          onMouseMove={handleMouseMove}
          className="group relative flex flex-col p-8 md:p-10 bg-[#0a0a0a] border border-[#18181b] rounded-3xl overflow-hidden transition-colors"
        >
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(255,255,255,0.06),
                  transparent 80%
                )
              `,
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-1 transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400">Lead <span className="text-neutral-500 font-normal ml-1 transition-colors duration-500 group-hover:text-cyan-400/50">— Google Developer Students Club</span></h3>
              <div className="flex items-center gap-2 text-sm text-zinc-400 mt-2">
                <span className="font-medium text-white transition-colors duration-500 group-hover:text-indigo-400">Campus Chapter</span>
              </div>
            </div>
            <span className="inline-flex items-center justify-center px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-400 uppercase tracking-wider mt-1 md:mt-0">
              2022 – 2023
            </span>
          </div>

          <ul className="relative z-10 space-y-3 text-gray-300 text-base font-light leading-relaxed mt-2">
            <li className="flex items-start gap-3">
              <span className="text-neutral-500 mt-1 text-xs transition-colors duration-500 group-hover:text-indigo-400">▹</span>
              <span>Led a 12-member core team, partnering with college teams globally to organize 8 technical workshops attracting 200+ attendees and growing club membership by 41% YoY while securing 3 Google-sponsored grants for student hackathons.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neutral-500 mt-1 text-xs transition-colors duration-500 group-hover:text-indigo-400">▹</span>
              <span>Mentored 8 junior members through 1:1 code reviews and project coaching; 2 members landed software engineering internships at leading tech firms.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
