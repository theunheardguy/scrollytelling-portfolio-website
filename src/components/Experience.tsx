"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const EXPERIENCES = [
  {
    role: "Software Engineer II",
    company: "Arcadia",
    date: "Jul 2024 – Present",
    location: "Chennai (Remote)",
    description: [
      "Maintained 98% invoice extraction accuracy by developing Java-based automation scripts resolving CAPTCHA, MFA, and Cloudflare bot protections, leveraging AWS S3 for end-to-end data processing workflows.",
      "Resolved 1500+ Jira tickets — the highest across the team — applying structured problem-solving to identify root causes and improve system reliability.",
      "Mentored and onboarded 2 software engineers, reducing ramp-up time through daily knowledge-sharing sessions.",
      "Awarded the Impact Guardian Award and Employee of the Quarter for exceptional technical contributions."
    ],
    tags: ["Java", "AWS S3", "Jenkins", "Selenium"]
  },
  {
    role: "Software Engineer Intern",
    company: "Arcadia",
    date: "Sep 2023 – Jun 2024",
    location: "Chennai (Remote)",
    description: [
      "Developed and deployed daily-use Java automation scripts, contributing to invoice extraction workflows and platform stability.",
      "Built RESTful API integrations and MySQL queries ensuring end-to-end accuracy across invoice processing pipelines.",
      "Earned Employee of the Quarter for ownership, technical excellence, and consistent value delivery."
    ],
    tags: ["Java", "MySQL", "REST APIs"]
  },
  {
    role: "Project Intern",
    company: "ISRO",
    date: "Aug – Sep 2023",
    location: "Trivandrum",
    description: [
      "Comparative analysis of log analytics tools vs. SIEM solutions for cybersecurity threat detection, delivering a technical whitepaper adopted by the cybersecurity team.",
      "Authored cross-functional documentation guiding future on-premises monitoring investments for the ISRO cybersecurity team."
    ],
    tags: ["SIEM", "Log Analytics", "Cybersecurity"]
  }
];

import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

interface Experience {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  tags: string[];
}

function ExperienceCard({ exp, idx }: { exp: Experience; idx: number }) {
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
      className="group relative flex flex-col p-8 md:p-10 bg-[#0a0a0a] border border-[#18181b] rounded-3xl overflow-hidden"
    >
      {/* Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
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
      
      {/* Relative z-10 ensures content sits strictly above the spotlight gradient */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4 transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400">
              {exp.role}
            </h3>
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-zinc-400 font-medium">
              <span className="flex items-center gap-2 text-white">
                <FiBriefcase className="text-indigo-400 text-base" />
                {exp.company}
              </span>
              <span className="flex items-center gap-2 text-zinc-400">
                <FiMapPin className="text-emerald-400 text-base" />
                {exp.location}
              </span>
            </div>
          </div>
          <span className="inline-flex items-center justify-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-zinc-400 uppercase tracking-widest mt-1 md:mt-0">
            <FiCalendar className="mr-2 text-neutral-500" />
            {exp.date}
          </span>
        </div>
        
        <ul className="space-y-5 text-[#a1a1aa] text-base font-light leading-relaxed mb-8 mt-8">
          {exp.description.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-4">
              <span className="text-neutral-600 mt-1.5 text-xs group-hover:text-indigo-400 transition-colors duration-500">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {exp.tags.map((tag: string, tIdx: number) => (
            <span key={tIdx} className="text-xs font-semibold text-zinc-400 border border-white/10 bg-white/[0.02] px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#121212] py-16 md:py-20 px-6 md:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-20">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase mb-4">
            My Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            <span className="text-neutral-400 font-light">Professional </span>
            <span className="text-white font-bold">Experience</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
