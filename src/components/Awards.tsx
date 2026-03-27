"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";

const AWARDS = [
  {
    title: "Impact Guardian Award",
    issuer: "ISSUED BY ARCADIA",
    icon: <FaTrophy className="text-yellow-500 text-2xl" />,
  },
  {
    title: "Employee of the Quarter",
    issuer: "ISSUED BY ARCADIA",
    icon: <FaAward className="text-sky-500 text-2xl" />,
  },
  {
    title: "Best Tech Speaker",
    issuer: "GITA AUTONOMOUS COLLEGE",
    icon: <FaMedal className="text-emerald-500 text-2xl" />,
  }
];

export default function Awards() {
  return (
    <section id="awards" className="relative w-full bg-[#121212] py-16 md:py-20 px-6 md:px-24 z-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 items-start">
        
        {/* Left Column */}
        <div className="lg:w-1/3 lg:sticky top-32">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-6 leading-tight">
            <span className="text-neutral-400 font-light">Awards & </span><br className="hidden md:block"/>
            <span className="text-white font-bold">Recognition</span>
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl font-light">
            Honors received for creating digital experiences.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {AWARDS.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-between text-center p-8 bg-[#0a0a0a] border border-[#18181b] rounded-3xl group hover:border-white/10 transition-colors h-full min-h-[320px]"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                {award.icon}
              </div>
              
              <h3 className="text-xl md:text-lg lg:text-xl font-bold text-white mb-6 leading-snug">
                {award.title}
              </h3>
              
              <div className="mt-auto text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-relaxed whitespace-pre-wrap">
                {award.issuer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
