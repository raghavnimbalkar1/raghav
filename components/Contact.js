"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold neon-text z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Links */}
      <div className="mt-10 flex gap-6">
        {["GitHub", "LinkedIn", "Email"].map((platform, index) => (
          <motion.a
            key={index}
            href="#"
            className="px-6 py-3 bg-orange-500 text-black rounded-lg shadow-lg hover:shadow-orange-400 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {platform}
          </motion.a>
        ))}
      </div>
    </section>
  );
}