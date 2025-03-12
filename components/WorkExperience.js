"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "🛠 Extensile Pvt Ltd - Software Developer Intern",
    date: "2024-Present",
    icon: "💻", // Icon for the experience
  },
  {
    title: "🌐 Freelance Web3 Development",
    date: "2023-2024",
    icon: "🌍", // Icon for the experience
  },
  {
    title: "🎮 Game Development & UI Design",
    date: "2022-Present",
    icon: "🎨", // Icon for the experience
  },
];

export default function WorkExperience() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"
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
        Work Experience
      </motion.h2>

      {/* Timeline */}
      <div className="mt-10 flex flex-col gap-8 relative w-full max-w-2xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-6 w-1 h-full bg-cyan-400 opacity-30"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex items-center w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-cyan-400 rounded-full z-10">
              <span className="text-2xl">{exp.icon}</span>
            </div>

            {/* Experience Card */}
            <motion.div
              className="flex-1 ml-6 p-6 border-l-4 border-cyan-400 bg-black bg-opacity-75 shadow-md relative text-left"
              whileHover={{ scale: 1 }}
            >
              {/* Glitch Effect */}
              <motion.div
                className="absolute -left-1 top-1 w-3 h-3 bg-cyan-400 opacity-50 animate-pulse"
                animate={{ x: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <h3 className="text-lg font-bold neon-text">{exp.title}</h3>
              <p className="text-gray-400">{exp.date}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
