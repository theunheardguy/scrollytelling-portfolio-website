"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { FaRobot, FaChrome, FaJava, FaJira, FaNetworkWired } from "react-icons/fa";

const PROJECTS = [
  {
    title: "Aegis Agent",
    category: "Multi-Agent System",
    description: "AI-powered tool using Python and Anthropic Claude API that classifies Jira tickets, integrates with Jenkins, and auto-generates resolutions. Achieved 90% classification accuracy.",
    tags: ["Python", "Claude API", "Jira API", "Jenkins", "RAG"],
    icon: FaRobot,
  },
  {
    title: "Console Log Linkify",
    category: "Chrome Extension",
    description: "Auto-linkifies console log data. Adopted by 80–100 engineers, rated 4.8/5. Saved ~350 engineer-hours/quarter.",
    tags: ["JavaScript", "Chrome APIs", "DOM"],
    icon: FaChrome,
  },
  {
    title: "Eclipse Console Linkify",
    category: "Eclipse IDE Plugin",
    description: "Native Eclipse plugin replicating log linkify with zero configuration. Delivered 70% reduction in manual log analysis time.",
    tags: ["Java", "Eclipse Framework"],
    icon: FaJava,
  },
  {
    title: "JIRA RCA Auto-Generator",
    category: "Chrome Extension",
    description: "LLM-powered extension auto-generating two-tier RCA reports from Bitbucket PRs. Cut drafting time by 60%.",
    tags: ["JavaScript", "LLM", "Bitbucket API"],
    icon: FaJira,
  },
  {
    title: "Multi-Agent RAG Code Generator",
    category: "Automation System",
    description: "End-to-end RAG-based system generating complete automation scripts from repo context via specialised agents.",
    tags: ["Python", "RAG", "Multi-Agent", "Jenkins", "Git"],
    icon: FaNetworkWired,
  }
];

function ProjectCard({ project, idx }: { project: any; idx: number }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] group relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[20px] overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500 shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] flex flex-col"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-20 rounded-[20px]"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-[#0a0a0a] flex items-center justify-center transition-colors duration-500 group-hover:bg-[#111118] z-10">
        {project.icon && (
          <project.icon className="text-5xl md:text-6xl text-zinc-700 transition-all duration-700 ease-out group-hover:scale-110 group-hover:text-indigo-400" />
        )}
      </div>

      <div className="relative z-10 p-6 md:p-8 flex flex-col flex-grow bg-transparent">
        <p className="text-zinc-400 text-[10px] md:text-xs font-mono tracking-widest uppercase mb-2">
          {project.category}
        </p>
        <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-3 transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm font-light mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag: any, tagIdx: number) => (
            <span key={tagIdx} className="text-[10px] md:text-xs font-semibold text-zinc-400 border border-white/10 bg-white/[0.02] px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#121212] py-16 md:py-20 px-6 md:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-20">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase mb-4">
            Portfolio Highlights
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            <span className="text-neutral-400 font-light">Selected </span>
            <span className="text-white font-bold">Work</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
