"use client";

import { motion } from "framer-motion";
import { 
  SiPython, SiJavascript, SiHtml5,
  SiNodedotjs, SiSelenium, SiPuppeteer, SiReact, 
  SiTailwindcss, SiBootstrap, SiGit, SiJenkins, 
  SiJira, SiBitbucket, SiPostman, 
  SiNetlify, SiMysql
} from "react-icons/si";

import { FaRobot, FaDatabase, FaServer, FaCodeBranch, FaJava, FaCss3Alt, FaAws } from "react-icons/fa";

const SKILLS_ROW_1 = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const SKILLS_ROW_2 = [
  { name: "Claude API", icon: FaRobot, color: "#8A2BE2" }, 
  { name: "LangChain", icon: FaCodeBranch, color: "#1E90FF" },
  { name: "RAG Systems", icon: FaDatabase, color: "#20B2AA" },
  { name: "Multi-Agent", icon: FaServer, color: "#FF8C00" },
  { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
  { name: "Puppeteer", icon: SiPuppeteer, color: "#40B5A4" },
  { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
  { name: "AWS S3", icon: FaAws, color: "#FF9900" },
  { name: "JIRA", icon: SiJira, color: "#0052CC" },
  { name: "Bitbucket", icon: SiBitbucket, color: "#205081" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
];

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: { name: string; icon: React.ElementType; color: string }[], direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="flex overflow-hidden w-full relative">
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        className="flex gap-6 min-w-max pr-6"
      >
        {/* Render items twice to loop seamlessly */}
        {[...items, ...items].map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 px-8 py-4 bg-white/[0.03] border border-white/10 rounded-full text-white text-base md:text-lg font-medium hover:bg-white/10 hover:border-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-default"
          >
            <skill.icon style={{ color: skill.color }} className="w-6 h-6 md:w-8 md:h-8" />
            <span className="tracking-wide">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden bg-[#121212] py-16 md:py-20 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="flex flex-col items-start mb-20">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase mb-4">
            Technologies & Tools
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            <span className="text-neutral-400 font-light">My </span>
            <span className="text-white font-bold">Arsenal</span>
          </h2>
        </div>
      </div>

      {/* Marquee Container with fade masks */}
      <div className="relative w-full flex flex-col gap-8">
        {/* Left/Right Fade Masks for Marquee */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

        <MarqueeRow items={SKILLS_ROW_1} direction="left" speed={45} />
        <MarqueeRow items={SKILLS_ROW_2} direction="right" speed={55} />
      </div>
    </section>
  );
}
