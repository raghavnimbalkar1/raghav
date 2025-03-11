"use client"; // ✅ Fix hydration issues

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const WorkExperience = dynamic(() => import("@/components/WorkExperience"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function HomePage() {
  return (
    <div className="w-full">
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <Hero />
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center bg-black">
        <About />
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center bg-black">
        <Projects />
      </section>
      <section id="skills" className="min-h-screen flex items-center justify-center bg-black">
        <Skills />
      </section>
      <section id="work" className="min-h-screen flex items-center justify-center bg-black">
        <WorkExperience />
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
        <Contact />
      </section>
    </div>
  );
}