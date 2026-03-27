"use client";

import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Arsenal", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Work", href: "#projects" },
  { name: "Awards", href: "#awards" },
  { name: "Leadership", href: "#leadership" },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 md:px-12 py-4 bg-black/20 backdrop-blur-sm border-b border-white/5 text-white pointer-events-auto"
    >
      <div className="text-xl md:text-2xl font-bold tracking-tighter uppercase cursor-pointer">
        Shivam<span className="text-neutral-500">.</span>
      </div>
      
      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300 absolute left-1/2 -translate-x-1/2">
        {NAV_LINKS.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-white transition-colors">
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 text-xl text-neutral-400 mr-2">
          <a href="https://github.com/theunheardguy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/theunheardguy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin />
          </a>
        </div>
        <a 
          href="/Shivam_Kumar_Resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full px-6 py-2 border border-white/20 bg-white/10 text-sm font-medium hover:bg-white/20 transition-all uppercase tracking-widest text-white"
        >
          <span>Resume</span>
          <FaDownload className="text-xs" />
        </a>
      </div>
    </motion.nav>
  );
}
