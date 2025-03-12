"use client"; // ✅ Fix hydration issues

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const WorkExperience = dynamic(() => import("@/components/WorkExperience"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function HomePage() {
  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="w-full">
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center"
        ref={(el) => (sections.current[0] = el)}
      >
        <Hero />
      </section>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-black scroll-fade-in-up scroll-delay-1"
        ref={(el) => (sections.current[1] = el)}
      >
        <About />
      </section>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-black scroll-fade-in-up scroll-delay-2"
        ref={(el) => (sections.current[2] = el)}
      >
        <Projects />
      </section>
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center bg-black scroll-fade-in-up scroll-delay-3"
        ref={(el) => (sections.current[3] = el)}
      >
        <Skills />
      </section>
      <section
        id="work"
        className="min-h-screen flex items-center justify-center bg-black scroll-fade-in-up scroll-delay-1"
        ref={(el) => (sections.current[4] = el)}
      >
        <WorkExperience />
      </section>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-black scroll-fade-in-up scroll-delay-2"
        ref={(el) => (sections.current[5] = el)}
      >
        <Contact />
      </section>
    </div>
  );
}

