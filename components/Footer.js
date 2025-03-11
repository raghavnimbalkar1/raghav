"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black bg-opacity-90 text-white py-6 text-center border-t border-cyan-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <h3 className="text-xl font-semibold">Connect with Me</h3>
        <div className="flex space-x-6">
          <Link href="https://github.com/yourgithub" className="text-cyan-400 hover:text-cyan-300 transition-all duration-300">GitHub</Link>
          <Link href="https://linkedin.com/in/yourlinkedin" className="text-cyan-400 hover:text-cyan-300 transition-all duration-300">LinkedIn</Link>
          <Link href="mailto:your.email@example.com" className="text-cyan-400 hover:text-cyan-300 transition-all duration-300">Email</Link>
        </div>
        <p className="text-gray-400 text-sm">© 2025 Raghav&apos;s Portfolio. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}