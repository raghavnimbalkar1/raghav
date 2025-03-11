"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "🚀 ChainTix - Blockchain Ticketing",
    img: "/projects/chaintix.png",
    description: "A blockchain-powered NFT ticketing platform that prevents ticket fraud and reselling.",
    link: "https://github.com/raghavnimbalkar1/ChainTix",
  },
  {
    title: "🎮 Echoes of the Lost - 2D Game",
    img: "/projects/echoes.png",
    description: "An immersive post-apocalyptic survival game built in Godot with pixel art and unique storytelling.",
    link: "https://github.com/raghavnimbalkar1/Echoes-Of-The-Lost",
  },
  {
    title: "📡 UniHaven - Student Networking",
    img: "/projects/unihaven.png",
    description: "A social networking platform helping students find accommodations and connect.",
    link: "https://github.com/raghavnimbalkar1/UniHaven",
  },
];

export default function Projects() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-black">
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500 opacity-20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold neon-text z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Featured Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            className="relative group overflow-hidden rounded-lg border border-gray-700 bg-black bg-opacity-50 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.img}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover transition-opacity duration-500 group-hover:opacity-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 transition-opacity duration-500 p-4">
              <p className="text-lg font-bold neon-text">{project.title}</p>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}