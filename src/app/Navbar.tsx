export default function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-cyan-500/10 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-cyan-400 text-2xl font-bold">
          Kshitij BioLab
        </h1>

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

          <a
            href="https://www.linkedin.com/in/kshitij-sharma-2b85b7217"
            target="_blank"
            className="border border-cyan-500 px-4 py-2 rounded-xl text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
          >
            LinkedIn
          </a>

        </ul>

      </div>

    </nav>

  );
}