import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ProjectsSectionAsciiArt } from "./ascii_arts";

const WEB_PROJECTS = [
  {
    title: "Tuto-U",
    description: "A full-stack e-learning solution for managing tutoring services within universities.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.tutou.app/",
    state: true,
  },
  {
    title: "Carrera de Educación Básica en Línea",
    description: "A full-stack informative page for a university online degree program.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "https://ei-unemi-dvv9evzlv-arielpincays-projects.vercel.app/",
    state: true,
  },
  {
    title: "Compufest",
    description: "A full-stack informative page for Compufest YachayTech.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "NGINX"],
    link: "https://compufest.yachaytech.edu.ec/",
    state: true,
  },
];

const AI_PROJECTS = [
  {
    title: "Galápagos Invasive Species Detection",
    description: "Three-stage pipeline for real-time detection of invasive vertebrate species on Raspberry Pi 4. Combines YOLOv11n detection, NSGA-II pre-processing optimization, and neural architecture search.",
    tags: ["Python", "YOLOv11", "NSGA-II", "PyTorch", "OpenCV", "Raspberry Pi"],
    link: "https://github.com/arielpincayy/galapagos_iwild",
    state: true,
  },
  {
    title: "CUDA Symbolic Regression (symreg_ga)",
    description: "GPU-accelerated genetic programming system for symbolic regression using NVIDIA CUDA. Evolves mathematical expression trees with a scikit-learn style Python API.",
    tags: ["CUDA", "C++", "Python", "Genetic Algorithms", "GPU"],
    link: "https://github.com/arielpincayy/symreg_ga",
    state: true,
  },
  {
    title: "AntiFakeAgent",
    description: "Autonomous multi-source fact-checking agent built with LangGraph and NER-powered query generation. Produces structured verdict reports and a RAG-based chat interface.",
    tags: ["LangGraph", "LangChain", "OpenAI", "RAG", "NER", "Streamlit"],
    link: "https://github.com/arielpincayy/antiFakeAgent",
    state: true,
  },
  {
    title: "Federated Learning — Semi-Decentralized & Centralized",
    description: "Python implementation of Semi-Decentralized and Centralized Federated Learning for diabetes prediction using MLP. Nodes communicate via raw TCP sockets; leader selection is probabilistic and hardware-weighted via Docker Compose.",
    tags: ["Python", "Federated Learning", "Docker", "TCP Sockets", "TensorFlow", "MLP"],
    link: "https://github.com/arielpincayy/fl_semicentralized",
    state: true,
  },
  {
    title: "LINOS SysAdmin Bot",
    description: "LLM-powered Linux sysadmin agent that generates bash scripts and answers technical questions. Uses LangGraph multi-agent orchestration, Ollama as local LLM, and Chroma vector stores for RAG.",
    tags: ["Python", "LangGraph", "LangChain", "Ollama", "Chroma", "RAG"],
    link: "https://github.com/arielpincayy/linosBotSysAdmin",
    state: true,
  },
];

function ProjectCard({ title, description, tags, link, state }: {
  title: string;
  description: string;
  tags: string[];
  link: string;
  state: boolean;
}) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="rounded border border-term-border bg-term-card p-4 text-xs md:text-sm h-full transition-colors duration-150 hover:border-term-border-subtle">

        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-term-border">
          <span className="text-term-green">▸</span>
          <span className="font-bold text-term-text flex-1 leading-tight">{title}</span>
          <ExternalLink className="h-3 w-3 text-term-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </div>

        <div className="flex gap-2 mb-3">
          <span className="text-term-blue flex-shrink-0">$</span>
          <span className="text-term-text">cat README.md</span>
        </div>

        <p className="text-term-muted mb-3 pl-4 leading-relaxed">{description}</p>

        <div className="flex gap-2 mb-3">
          <span className="text-term-blue flex-shrink-0">$</span>
          <span className="text-term-text">
            status:{" "}
            <span className={state ? "text-term-green" : "text-term-yellow"}>
              {state ? "finished" : "in_progress"}
            </span>
          </span>
        </div>

        <div className="flex gap-2 mb-2">
          <span className="text-term-blue flex-shrink-0">$</span>
          <span className="text-term-text">cat stack.txt</span>
        </div>
        <div className="flex flex-wrap gap-1.5 pl-4">
          {tags.map((tag) => (
            <span key={tag} className="text-term-muted border border-term-border px-2 py-0.5 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-term-blue text-xs">$</span>
      <span className="text-term-text text-xs">ls ./{children}</span>
      <div className="flex-1 border-t border-term-border" />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-6 md:py-16 lg:py-24 font-mono">
      <div className="container m-auto px-4 md:px-6">
        <ProjectsSectionAsciiArt />

        {/* Web projects */}
        <SectionLabel>web</SectionLabel>
        <div className="grid w-full grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {WEB_PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        {/* AI / Data Science projects */}
        <SectionLabel>ai-and-data-science</SectionLabel>
        <div className="grid w-full grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-2 mb-4">
          {AI_PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-8 w-full border-t border-term-border-subtle" />
      </div>
    </section>
  );
}