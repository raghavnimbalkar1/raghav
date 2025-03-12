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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
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
              className="text-white text-md font-medium tracking-wider transition-colors hover:text-cyan-400"
              whileHover={{ scale: 1 }} // Removed hover scaling
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full right-0 bg-black bg-opacity-90 text-white w-48 shadow-lg transform transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? "opacity-100 scale-100 z-50" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-2 p-4">
            {[
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Skills", href: "#skills" },
              { name: "Experience", href: "#work" },
              { name: "Contact", href: "#contact" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white text-md font-medium tracking-wider transition-colors hover:text-cyan-400"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
