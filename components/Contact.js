"use client";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md"; // Import Gmail icon
import Image from "next/image"; // Import Next.js Image component

export default function Contact() {
  const contactLinks = [
    {
      platform: "LinkedIn",
      logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn logo URL
      link: "https://www.linkedin.com/in/raghavnimbalkar",
    },
    {
      platform: "Instagram",
      logo: "https://cdn-icons-png.flaticon.com/512/174/174855.png", // Instagram logo URL
      link: "https://www.instagram.com/raghavvnimbalkar",
    },
    {
      platform: "Twitter",
      logo: "https://cdn-icons-png.flaticon.com/512/124/124021.png", // Twitter logo URL
      link: "https://x.com/raghavnimbalkar",
    },
    {
      platform: "Email",
      logo: <MdEmail className="w-12 h-12 text-white" />, // Gmail icon
      link: "mailto:raghav.nimbalkar@gmail.com",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden bg-black">
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

      {/* Contact Cards */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-32 bg-black bg-opacity-75 border border-cyan-500 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg hover:shadow-cyan-400 transition-all duration-300"
            style={{ position: "relative", zIndex: 10 }} // Ensure cards are clickable
          >
            {/* Render the icon */}
            {typeof contact.logo === "string" ? (
              <Image
                src={contact.logo}
                alt={contact.platform}
                width={48}
                height={48}
                className="mb-2"
              />
            ) : (
              contact.logo // Render the React icon directly
            )}
            <p className="text-white text-sm font-medium">{contact.platform}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
