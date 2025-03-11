"use client";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden w-full">
        <Header />
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
          <div
            className="h-full bg-cyan-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}