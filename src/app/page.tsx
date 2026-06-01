import Navbar from "./Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

  <div className="absolute top-[15%] left-[5%] text-cyan-400/10 text-7xl animate-bounce">
    🧬
  </div>

  <div className="absolute top-[60%] right-[8%] text-cyan-400/10 text-7xl animate-bounce">
    🔬
  </div>

  <div className="absolute bottom-[10%] left-[20%] text-cyan-400/10 text-6xl animate-bounce">
    ⚛️
  </div>

</div>


      {/* Hero Section */}
    <section
  id="home"
  className="relative flex flex-col items-center justify-start text-center px-4 pt-28 pb-6">

  {/* Glow Background */}
  <div className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-cyan-500 opacity-10 blur-3xl rounded-full"></div>

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
      Bioinformatics Researcher | Molecular Biology | Nanobiotechnology
    </p>

    <p className="mt-6 text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
      Integrating computational biology, genomics,
gene cloning, clinical microbiology,
nanoparticle engineering, biosensors,
and AI-driven diagnostics to advance
precision medicine, cancer detection,
and next-generation healthcare technologies.
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
        {/* Floating Glow Effects */}

<div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full animate-pulse"></div>

<div className="absolute top-1/2 right-10 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full animate-pulse"></div>

<div className="absolute bottom-20 left-1/3 w-24 h-24 bg-cyan-400/10 blur-2xl rounded-full animate-pulse"></div>
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
          I am an MSc Biotechnology student with interdisciplinary expertise
in bioinformatics, computational biology, molecular biology,
clinical microbiology, and nanobiotechnology.

My work integrates in-silico analysis with hands-on laboratory
techniques including recombinant DNA technology, gene cloning,
microbial culture techniques, nanoparticle synthesis,
hydrogel engineering, and molecular diagnostics.

I am particularly interested in biosensors, precision medicine,
cancer diagnostics, antimicrobial resistance,
and AI-driven healthcare innovations.
</p>

        </div>

      </section>

      {/* Skills Section */}

<section id="skills" className="py-20">
  <h2 className="text-5xl font-bold text-center text-cyan-400 mb-12">
    Technical Skills
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Bioinformatics */}
    <div className="bg-[#111] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-semibold text-cyan-400">
        🖥️ Bioinformatics
      </h3>

      <ul className="mt-4 space-y-2 text-gray-400">
        <li>Bioinformatics</li>
        <li>Computational Biology</li>
        <li>Genomics Analysis</li>
        <li>CRISPR-Cas Analysis</li>
        <li>gRNA Design</li>
        <li>Molecular Docking</li>
        <li>Protein Structure Prediction</li>
        <li>Biomarker Discovery</li>
      </ul>
    </div>

    {/* Tools */}
    <div className="bg-[#111] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-semibold text-cyan-400">
        ⚙️ Bioinformatics Tools
      </h3>

      <ul className="mt-4 space-y-2 text-gray-400">
        <li>UniProt</li>
        <li>ExPASy</li>
        <li>AlphaFold</li>
        <li>SOPMA</li>
        <li>PyMOL</li>
        <li>Chimera</li>
        <li>NCBI Tools</li>
      </ul>
    </div>

    {/* Molecular Biology */}
    <div className="bg-[#111] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-semibold text-cyan-400">
        🧬 Molecular Biology
      </h3>

      <ul className="mt-4 space-y-2 text-gray-400">
        <li>PCR</li>
        <li>DNA Isolation</li>
        <li>Agarose Gel Electrophoresis</li>
        <li>Restriction Digestion</li>
        <li>DNA Ligation</li>
        <li>Gene Cloning</li>
        <li>Bacterial Transformation</li>
        <li>Plasmid Analysis</li>
      </ul>
    </div>

    {/* Microbiology & Nanobiotech */}
    <div className="bg-[#111] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-semibold text-cyan-400">
        🦠 Microbiology & Nanobiotechnology
      </h3>

      <ul className="mt-4 space-y-2 text-gray-400">
        <li>Clinical Microbiology</li>
        <li>Gram Staining</li>
        <li>Pathogen Isolation</li>
        <li>MIC & MBC Analysis</li>
        <li>Nanoparticle Synthesis</li>
        <li>Hydrogel Synthesis</li>
        <li>Nanofabrication</li>
        <li>Nanomaterial Characterization</li>
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

{/* Research Journey */}
<section
  id="research"
  className="py-20 px-6 md:px-20 bg-[#0a0a0a]"
>
  <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
    Research Journey
  </h2>

  <div className="max-w-4xl mx-auto">

    {/* Helix Biogenesis */}
    <div className="relative pl-10 pb-12 border-l border-cyan-500/30">

      <div className="absolute left-[-8px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"></div>

      <h3 className="text-3xl font-bold text-white">
        Molecular Biology & Microbiology
      </h3>

      <h4 className="text-cyan-400 text-lg mt-1">
        Helix Biogenesis, Noida
      </h4>

      <p className="text-gray-400 mt-4 leading-relaxed">
        Worked on DNA isolation, Plasmid isolation, PCR, agarose gel electrophoresis,
        microbial culture techniques,gram staining, Biochemical Test, MIC & AST, molecular diagnostics,
        and laboratory workflow management.
      </p>

    </div>

    {/* CRISPR Research */}
    <div className="relative pl-10 pb-12 border-l border-cyan-500/30">

      <div className="absolute left-[-8px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"></div>

      <h3 className="text-3xl font-bold text-white">
        CRISPR & Gene Editing Research
      </h3>

      <h4 className="text-cyan-400 text-lg mt-1">
        Ethical Edufabrica (via AIIMS Raipur)
      </h4>

      <p className="text-gray-400 mt-4 leading-relaxed">
        Performed computational CRISPR-Cas analysis, gRNA design,
        homology modeling, protein structure prediction,
        structural bioinformatics workflows,
        and bioinformatics-driven gene editing studies.
      </p>

    </div>

    {/* AI Biomarker */}
    <div className="relative pl-10 pb-12 border-l border-cyan-500/30">

      <div className="absolute left-[-8px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"></div>

      <h3 className="text-3xl font-bold text-white">
        AI-Driven Biomarker Research
      </h3>

      <h4 className="text-cyan-400 text-lg mt-1">
        Computational Oncology
      </h4>

      <p className="text-gray-400 mt-4 leading-relaxed">
        Investigated MUC1, MMP-9, and TIMP-1 proteins as potential
        biomarkers for early-stage cancer diagnostics using
        bioinformatics and AI-assisted analytical approaches.
      </p>

    </div>

    {/* IIT Roorkee */}
    <div className="relative pl-10">

      <div className="absolute left-[-8px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"></div>

      <h3 className="text-3xl font-bold text-white">
        Nanobiotechnology Training
      </h3>

      <h4 className="text-cyan-400 text-lg mt-1">
        IIT Roorkee
      </h4>

      <p className="text-gray-400 mt-4 leading-relaxed">
        Gained hands-on experience in nanoparticle synthesis,
        hydrogel fabrication, nanofabrication techniques,
        nanomaterial characterization, antimicrobial resistance studies,
        and biomedical nanotechnology applications.
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
      {/* WhatsApp Floating Chat */}
<a
  href="https://wa.me/918882955476?text=Hello%20Kshitij,%20I%20want%20to%20discuss%20a%20bioinformatics%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50"
>
  <div className="flex items-center gap-2 bg-green-500 hover:bg-green-400 px-4 py-3 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.7)] transition-all duration-300">
    
    <span className="text-2xl">💬</span>

    <span className="text-white font-semibold hidden md:block">
      Chat with Me
    </span>

  </div>
</a>

    </main>
  );
}