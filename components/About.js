"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden bg-black">
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
        className="text-6xl font-extrabold neon-text z-10 relative scroll-fade-in-up"
      >
        About Me
      </motion.h2>

      {/* Animated Glitching Divider */}
      <motion.div
        className="w-28 h-1 bg-cyan-400 mt-4 mb-6 relative scroll-fade-in-up scroll-delay-1"
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
        className="max-w-3xl text-lg text-gray-300 z-10 relative leading-relaxed tracking-wide scroll-fade-in-up scroll-delay-2"
      >
        "I specialize in creating digital experiences that connect technology, gaming, music, and film. My work integrates Web3, blockchain, AI, and full-stack development, with a focus on innovative, interactive aesthetics. I’m passionate about exploring new possibilities to craft immersive projects, incorporating cinematic visuals and engaging interfaces, while constantly learning and evolving in the process."
      </motion.p>

      {/* Glitch Hover Button */}
    </section>
  );
}
