"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const EDUCATION = [
  {
    year: "2026",
    degree: "MBA",
    school: "University of Massachusetts Global",
    location: "Irvine, CA (Online)"
  },
  {
    year: "2024",
    degree: "B.Tech — CS/IT · CGPA 9.6",
    school: "GITA Autonomous College",
    location: "Bhubaneswar, India"
  },
  {
    year: "2020",
    degree: "Higher Secondary — 81%",
    school: "CBSE",
    location: "Purnea, Bihar"
  }
];

interface Education {
  year: string;
  degree: string;
  school: string;
  location: string;
}

function EducationCard({ edu, idx }: { edu: Education; idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col p-8 md:p-10 bg-[#0a0a0a] border border-[#18181b] rounded-3xl overflow-hidden hover:border-white/10 transition-colors"
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
      <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-start gap-4 mb-2">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight mb-1 transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400">{edu.school}</h3>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span className="font-medium text-white transition-colors duration-500 group-hover:text-indigo-400">{edu.degree}</span>
            <span>&bull;</span>
            <span className="transition-colors duration-500 group-hover:text-cyan-400">{edu.location}</span>
          </div>
        </div>
        <span className="inline-flex items-center justify-center px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-400 uppercase tracking-wider mt-1 md:mt-0">
          {edu.year}
        </span>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative w-full bg-[#121212] py-16 md:py-20 px-6 md:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-20">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase mb-4">
            Educational History
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            <span className="text-neutral-400 font-light">Academic </span>
            <span className="text-white font-bold">Background</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {EDUCATION.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
