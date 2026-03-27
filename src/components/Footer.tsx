"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/theunheardguy", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/theunheardguy/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/theunheardguy/", label: "Instagram" },
];

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0e0e0e] overflow-hidden border-t border-white/5">

      {/* Giant blurred background name */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[22vw] font-black tracking-tighter text-white/[0.02] leading-none whitespace-nowrap uppercase translate-y-8">
          Shivam
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-10">

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16"
        >
          {/* Left: Heading */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">Ready to collaborate?</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
              Let&apos;s build<br />
              <span className="text-neutral-600">something great.</span>
            </h2>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="mailto:approachshivamkumar@gmail.com"
              className="group flex items-center gap-3 px-7 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:bg-neutral-200 transition-all"
            >
              <HiOutlineMail className="text-lg" />
              <span>Say Hello</span>
            </a>
            <a
              href="/Shivam_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-4 border border-white/15 rounded-full font-bold text-sm tracking-widest uppercase text-white hover:bg-white/5 transition-all"
            >
              <FiDownload className="text-lg" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-xl font-black tracking-tighter text-white uppercase">
            Shivam<span className="text-neutral-600">.</span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-semibold text-neutral-500">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5 text-xl text-neutral-500">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-white transition-colors hover:scale-110 transform">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-neutral-700">
          © {new Date().getFullYear()} Shivam Kumar — All rights reserved.
        </p>

      </div>
    </footer>
  );
}
