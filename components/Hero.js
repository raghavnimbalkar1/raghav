"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full text-center bg-black overflow-hidden">
      {/* Glowing Rotating Globe */}
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 opacity-30 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      ></motion.div>

      {/* Background Light Leaks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-orange-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold neon-text relative z-10"
      >
        WELCOME TO MY UNIVERSE
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-lg text-gray-300 mt-4 relative z-10"
      >
        A fusion of gaming, music, filmmaking, and football—turning ideas into interactive experiences.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="mt-6 px-6 py-3 rounded-lg neon-button font-bold uppercase tracking-wide relative z-10"
      >
        Explore My Work
      </motion.a>
    </div>
  );
}