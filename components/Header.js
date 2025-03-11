"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-500 ${
        scrolled ? "bg-black bg-opacity-90 shadow-lg backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="#hero" className="text-2xl font-bold text-cyan-400 tracking-wide neon-text">
          ⚡ Raghav || Portfolio
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
          {[
            { name: "About", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
            { name: "Experience", href: "#work" },
            { name: "Contact", href: "#contact" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-white text-lg font-medium tracking-wider transition-colors hover:text-cyan-400 block md:inline"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}