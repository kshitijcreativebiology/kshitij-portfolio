export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-cyan-500/20">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-cyan-400 text-2xl font-bold">
          Kshitij BioLab
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 items-center">

          <a href="#home">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              Home
            </li>
          </a>

          <a href="#about">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              About
            </li>
          </a>

          <a href="#skills">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              Skills
            </li>
          </a>

          <a href="#projects">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              Projects
            </li>
          </a>

          <a href="#contact">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              Contact
            </li>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/kshitij-sharma-2b85b7217"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              LinkedIn
            </li>
          </a>

        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-cyan-400 text-3xl">
          ☰
        </div>

      </div>
    </nav>
  );
}