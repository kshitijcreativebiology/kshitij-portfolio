"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-cyan-500/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-cyan-400 text-2xl font-bold">
          Kshitij BioLab
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 items-center">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>

          <li>
            <a
              href="https://www.linkedin.com/in/kshitij-sharma-2b85b7217"
              target="_blank"
              className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-cyan-400 text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-cyan-500/20 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-300">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>

            <li>
              <a
                href="https://www.linkedin.com/in/kshitij-sharma-2b85b7217"
                target="_blank"
                className="text-cyan-400"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}