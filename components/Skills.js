"use client";
import { motion } from "framer-motion";

const skills = [
  "C", "C++", "C#", "Java", "Python", "JavaScript", "TypeScript", 
  "Next.js", "React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", 
  "CSS", "OpenGL", "GLSL", ".NET", "Ethereum", "Git", "Hyper", 
  "Visual Studio", "Visual Studio Code", "Vim", "Godot", "Unreal Engine", 
  "Blender", "Krita", "Aseprite", "FL Studio", "DaVinci Resolve"
];

export default function Skills() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </div>

      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold neon-text z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      {/* Animated Glitchy Divider */}
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
        />
      </motion.div>

      {/* Skill Badges */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="px-6 py-3 border border-gray-700 rounded-lg bg-black bg-opacity-75 text-white text-lg font-medium shadow-md neon-text transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(0, 230, 255, 1)" }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}