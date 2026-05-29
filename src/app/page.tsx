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

      {/* Dry Lab Skills */}

<div className="bg-[#111] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition">
  <h3 className="text-2xl font-semibold text-cyan-400">
    Dry Lab (Computational Biology)
  </h3>

  <ul className="mt-4 space-y-2 text-gray-400">
    <li>• Bioinformatics</li>
    <li>• Computational Biology</li>
    <li>• Genomics Analysis</li>
    <li>• CRISPR-Cas Analysis</li>
    <li>• gRNA Design</li>
    <li>• Molecular Docking</li>
    <li>• Protein Structure Prediction</li>
    <li>• Biomarker Discovery</li>
    <li>• AI-Assisted Data Analysis</li>
    <li>• Precision Medicine Research</li>
    <li>• UniProt</li>
    <li>• ExPASy</li>
    <li>• AlphaFold</li>
    <li>• SOPMA</li>
    <li>• Chimera / PyMOL</li>
  </ul>
</div>


{/* Wet Lab Skills */}

<div className="bg-[#111] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition">
  <h3 className="text-2xl font-semibold text-cyan-400">
    Wet Lab (Experimental Biotechnology)
  </h3>

  <ul className="mt-4 space-y-2 text-gray-400">
    <li>• DNA Isolation</li>
    <li>• PCR</li>
    <li>• Agarose Gel Electrophoresis</li>
    <li>• Recombinant DNA Technology</li>
    <li>• Restriction Digestion</li>
    <li>• DNA Ligation</li>
    <li>• Gene Cloning</li>
    <li>• Bacterial Transformation</li>
    <li>• Plasmid Analysis</li>
    <li>• Microbial Culture Techniques</li>
    <li>• Clinical Microbiology</li>
    <li>• Gram Staining</li>
    <li>• Pathogen Isolation</li>
    <li>• Antimicrobial Susceptibility Testing</li>
    <li>• MIC & MBC Analysis</li>
    <li>• Nanoparticle Synthesis</li>
    <li>• Hydrogel Synthesis</li>
    <li>• Nanofabrication</li>
    <li>• Nanomaterial Characterization</li>
    <li>• Molecular Diagnostics</li>
  </ul>
</div>

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
<section id="research" className="research-section">
  <h2>Research Journey</h2>

  <div className="timeline">

    <div className="timeline-item">
      <h3>🔬 Helix Biogenesis Internship</h3>
      <h4>Molecular Biology & Microbiology</h4>
      <p>
        Worked on DNA isolation, PCR, agarose gel electrophoresis,
        microbial culture techniques, molecular diagnostics,
        and laboratory workflow management.
      </p>
    </div>

    <div className="timeline-item">
      <h3>🧬 CRISPR & Gene Editing Research</h3>
      <h4>AIIMS Raipur Collaboration</h4>
      <p>
        Performed computational CRISPR-Cas analysis, gRNA design,
        homology modeling, protein structure prediction,
        and bioinformatics-driven gene editing studies.
      </p>
    </div>

    <div className="timeline-item">
      <h3>🤖 AI-Driven Biomarker Research</h3>
      <h4>Computational Oncology</h4>
      <p>
        Investigated MUC1, MMP-9, and TIMP-1 as potential biomarkers
        for early-stage cancer diagnostics using bioinformatics
        and AI-assisted analytical approaches.
      </p>
    </div>

    <div className="timeline-item">
      <h3>🧪 Recombinant DNA Technology & Gene Cloning Training</h3>
      <h4>Molecular Biotechnology</h4>
      <p>
        Hands-on training in restriction digestion, DNA ligation,
        competent cell preparation, bacterial transformation,
        agarose gel electrophoresis, plasmid analysis,
        and recombinant colony screening.
      </p>
    </div>

    <div className="timeline-item">
      <h3>🦠 Clinical Microbiology Training</h3>
      <h4>Medical & Clinical Microbiology</h4>
      <p>
        Performed media preparation, sterilization techniques,
        pathogen isolation, Gram staining,
        antimicrobial susceptibility testing,
        MIC and MBC determination,
        and laboratory biosafety practices.
      </p>
    </div>

    <div className="timeline-item">
      <h3>⚛️ Nanobiotechnology Training</h3>
      <h4>IIT Roorkee</h4>
      <p>
        Hands-on exposure to nanoparticle synthesis,
        hydrogel fabrication, nanofabrication techniques,
        nanomaterial characterization,
        antimicrobial resistance studies,
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