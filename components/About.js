"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-500 opacity-20 blur-3xl rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        ></motion.div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold neon-text z-10 relative"
      >
        About Me
      </motion.h2>

      {/* Animated Glitching Divider */}
      <motion.div
        className="w-28 h-1 bg-cyan-400 mt-4 mb-6 relative"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="absolute w-full h-full bg-cyan-400 opacity-50 blur-sm"
          animate={{ x: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>

      {/* Text Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="max-w-3xl text-lg text-gray-300 z-10 relative leading-relaxed tracking-wide"
      >
        I craft **digital experiences** that bridge the gap between **technology, 
        gaming, music, and film.** My work blends **Web3, blockchain, AI, and 
        full-stack development**, driven by a love for futuristic, interactive 
        aesthetics. I&apos;m constantly pushing **boundaries to create immersive 
        projects** with **cinematic visuals and game-like interfaces.**
      </motion.p>

      {/* Glitch Hover Button */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255, 111, 0, 1)" }}
        className="mt-6 px-6 py-3 rounded-lg bg-orange-500 text-black font-bold uppercase tracking-wide shadow-lg hover:shadow-orange-400 transition-transform duration-300 relative z-10"
      >
        View My Work
      </motion.a>
    </section>
  );
}