import Navbar from "./Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
    <section
  id="home"
  className="relative flex flex-col items-center justify-start text-center px-4 pt-28 pb-6">

  {/* Glow Background */}
  <div className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-cyan-500 opacity-10 blur-3xl rounded-full"></div>

  {/* LEFT Circle */}
<div className="hidden xl:flex absolute left-12 top-1/2 -translate-y-1/2 opacity-70">
  <div className="relative">

    {/* Main Circle */}
    <div className="w-32 h-32 rounded-full border border-cyan-400 shadow-[0_0_35px_cyan] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <span className="text-5xl">🔬</span>
    </div>

    {/* Lines */}
    <div className="absolute -top-8 left-10 w-20 h-[2px] bg-cyan-400/30"></div>
    <div className="absolute top-4 left-20 w-36 h-[2px] bg-cyan-400/50"></div>
    <div className="absolute top-10 left-24 w-48 h-[2px] bg-cyan-400/60"></div>
    <div className="absolute top-16 left-20 w-36 h-[2px] bg-cyan-400/50"></div>
    <div className="absolute top-24 left-14 w-24 h-[2px] bg-cyan-400/40"></div>

    {/* Bottom Small Lines */}
    <div className="absolute top-40 left-16 w-12 h-[2px] bg-cyan-400/30"></div>
    <div className="absolute top-52 left-12 w-10 h-[2px] bg-cyan-400/20"></div>

  </div>
</div>



{/* RIGHT Circle */}
<div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 opacity-70">
  <div className="relative">

    {/* Main Circle */}
    <div className="w-32 h-32 rounded-full border border-cyan-400 shadow-[0_0_35px_cyan] flex items-center justify-center bg-black/40 backdrop-blur-sm text-cyan-300 text-xs leading-5 p-4 text-center">
      const bio = true;
      <br />
      AI.genomics();
      <br />
      run.CRISPR();
    </div>

    {/* Lines */}
    <div className="absolute -top-8 right-10 w-20 h-[2px] bg-cyan-400/30"></div>
    <div className="absolute top-4 right-20 w-36 h-[2px] bg-cyan-400/50"></div>
    <div className="absolute top-10 right-24 w-48 h-[2px] bg-cyan-400/60"></div>
    <div className="absolute top-16 right-20 w-36 h-[2px] bg-cyan-400/50"></div>
    <div className="absolute top-24 right-14 w-24 h-[2px] bg-cyan-400/40"></div>

    {/* Bottom Small Lines */}
    <div className="absolute top-40 right-16 w-12 h-[2px] bg-cyan-400/30"></div>
    <div className="absolute top-52 right-12 w-10 h-[2px] bg-cyan-400/20"></div>

  </div>
</div>

  {/* Profile Image */}
  <div className="relative z-10 mb-8 flex justify-center">
    <div className="w-56 h-56 mt-16 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_#00ffff]">

      <Image
        src="/profile.jpg"
        alt="Kshitij Sharma"
        width={300}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-4xl">

    <h1 className="text-5xl md:text-7xl font-extrabold text-white">
      Kshitij Sharma
    </h1>

    <p className="mt-4 text-cyan-400 text-xl md:text-3xl font-medium">
      Bioinformatics Researcher | Computational Biology
    </p>

    <p className="mt-6 text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
      Exploring CRISPR systems, computational genomics, AI-powered biomarker discovery, 
      molecular diagnostics, and translational bioinformatics to build 
      innovative solutions for next-generation healthcare and precision medicine.
    </p>

  </div>

</section>
      {/* Floating Particles */}
<div className="absolute inset-0 overflow-hidden">

  <div className="particle w-3 h-3 left-[10%] top-[20%]"></div>
  <div className="particle w-4 h-4 left-[30%] top-[70%]"></div>
  <div className="particle w-2 h-2 left-[50%] top-[40%]"></div>
  <div className="particle w-5 h-5 left-[70%] top-[30%]"></div>
  <div className="particle w-3 h-3 left-[85%] top-[60%]"></div>

</div>
{/* Left DNA */}
<div className="absolute left-10 top-1/3 opacity-20">
  <div className="dna">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>

{/* Right DNA */}
<div className="absolute right-10 top-1/3 opacity-20">
  <div className="dna">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
      <section id= "home" className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">

        {/* Glow Background */}
        <div className="absolute w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>
        {/* Buttons */}
        <div className="mt-10 flex gap-4 z-10">

          <button className="bg-cyan-500 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300">
            View Projects
          </button>

          <button className="border border-cyan-500 px-6 py-3 rounded-2xl hover:bg-cyan-500 hover:text-black transition duration-300">
            Contact Me
          </button>
          <a
  href="/resume.pdf"
  download
  className="border border-cyan-500 px-8 py-4 rounded-2xl text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
>
  Download Resume
</a>

        </div>

      </section>

      {/* About Section */}
      <section id= "about" className="py-24 px-6 bg-[#050505]">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-cyan-400">
            About Me
          </h2>

          <p className="mt-10 text-gray-400 leading-8 text-center max-w-4xl mx-auto">
            I am an MSc Biotechnology student passionate about
            bioinformatics, computational biology, molecular diagnostics,
            and AI-driven biomarker discovery. My work combines molecular
            biology techniques with in-silico analysis for applications
            in CRISPR gene editing, cancer diagnostics, and translational research.
          </p>

        </div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-400">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">

          <div className="bg-[#111] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500 transition">
            <h3 className="text-2xl font-semibold text-cyan-400">
              Bioinformatics
            </h3>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• UniProt</li>
              <li>• ExPASy</li>
              <li>• AlphaFold</li>
              <li>• SOPMA</li>
              <li>• CHOPCHOP</li>
            </ul>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500 transition">
            <h3 className="text-2xl font-semibold text-cyan-400">
              Molecular Biology
            </h3>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• PCR</li>
              <li>• DNA Isolation</li>
              <li>• Gel Electrophoresis</li>
              <li>• Primer Designing</li>
              <li>• CRISPR Systems</li>
            </ul>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500 transition">
            <h3 className="text-2xl font-semibold text-cyan-400">
              AI & Programming
            </h3>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Python</li>
              <li>• Machine Learning</li>
              <li>• Biomarker Analysis</li>
              <li>• Data Analysis</li>
              <li>• Computational Genomics</li>
            </ul>
          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#050505]">

        <h2 className="text-4xl font-bold text-center text-cyan-400">
          Research Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">

          {/* Project 1 */}
          <div className="bg-[#111] p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-500 transition">

            <h3 className="text-2xl font-bold text-white">
              CRISPR-Cas12a TP53 Analysis
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Integrated in-silico structural bioinformatics analysis
              of CRISPR-Cas12a mediated TP53 gene targeting using
              computational biology tools and molecular modeling.
            </p>

          </div>

          {/* Project 2 */}
          <div className="bg-[#111] p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-500 transition">

            <h3 className="text-2xl font-bold text-white">
              Cancer Biomarker Discovery
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Comparative computational evaluation of MUC1, MMP-9,
              and TIMP-1 as potential early diagnostic biomarkers
              in pancreatic cancer using AI-assisted analysis.
            </p>

          </div>

        </div>

      </section>
      {/* Research Timeline */}
<section className="py-24 px-6">

  <h2 className="text-4xl font-bold text-center text-cyan-400">
    Research Journey
  </h2>

  <div className="max-w-4xl mx-auto mt-16 border-l border-cyan-500/30 pl-8 space-y-12">

    <div className="relative">
      <div className="absolute -left-[41px] top-2 w-4 h-4 bg-cyan-400 rounded-full"></div>

      <h3 className="text-2xl font-semibold">
        Helix Biogenesis Internship
      </h3>

      <p className="text-cyan-400 mt-2">
        Molecular Biology & Microbiology
      </p>

      <p className="text-gray-400 mt-4 leading-7">
        Worked on DNA isolation, PCR,
        agarose gel electrophoresis,
        microbial techniques, and
        molecular diagnostics.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-[41px] top-2 w-4 h-4 bg-cyan-400 rounded-full"></div>

      <h3 className="text-2xl font-semibold">
        CRISPR & Gene Editing Research
      </h3>

      <p className="text-cyan-400 mt-2">
        AIIMS Raipur Collaboration
      </p>

      <p className="text-gray-400 mt-4 leading-7">
        Performed computational CRISPR-Cas
        analysis, gRNA designing,
        homology modeling, and
        structural bioinformatics workflows.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-[41px] top-2 w-4 h-4 bg-cyan-400 rounded-full"></div>

      <h3 className="text-2xl font-semibold">
        AI-Driven Biomarker Research
      </h3>

      <p className="text-cyan-400 mt-2">
        Computational Oncology
      </p>

      <p className="text-gray-400 mt-4 leading-7">
        Investigated MUC1, MMP-9,
        and TIMP-1 proteins for
        early pancreatic cancer
        diagnostics using AI-assisted
        bioinformatics analysis.
      </p>
    </div>

  </div>

</section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-center">

        <h2 className="text-4xl font-bold text-cyan-400">
          Contact
        </h2>

        <p className="mt-8 text-gray-400">
          kshitijcreativebiology@gmail.com
        </p>

        <p className="mt-2 text-gray-400">
          Mirzapur, Uttar Pradesh, India
        </p>

      </section>

    </main>
  );
}