"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaCode, FaCamera } from "react-icons/fa"; // Import icons

export default function Footer() {
  return (
    <motion.footer
      className="bg-black bg-opacity-90 text-white py-6 text-center border-t border-cyan-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <h3 className="text-xl font-semibold">Other Links you might like</h3>
        <div className="flex space-x-6">
          {/* Photo & Video Showcase */}
          <Link
            href="https://raghavnimbalkarshowcase.vercel.app"
            className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCamera className="w-5 h-5" /> {/* Camera icon */}
            <span>Photo & Video Showcase</span>
          </Link>

          {/* LeetCode */}
          <Link
            href="https://leetcode.com/u/RaghavNimbalkar/"
            className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode className="w-5 h-5" /> {/* Code icon */}
            <span>LeetCode</span>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/raghavnimbalkar1/"
            className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5" /> {/* GitHub icon */}
            <span>GitHub</span>
          </Link>
        </div>
        <p className="text-gray-400 text-sm">© 2025 Raghav&apos;s Portfolio. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
