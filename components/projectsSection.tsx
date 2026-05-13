import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ProjectsSectionAsciiArt } from "./ascii_arts";

const PROJECTS = [
  {
    title: "Tuto-U",
    description: "A full-stack e-learning solution for managing tutoring services within universities.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.tutou.app/",
    state: true,
  },
  {
    title: "'Carrera de Educación Básica en Línea' University Page",
    description: "A full-stack informative page.",
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

        {/* Card header */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-term-border">
          <span className="text-term-green">▸</span>
          <span className="font-bold text-term-text flex-1 leading-tight">{title}</span>
          <ExternalLink className="h-3 w-3 text-term-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </div>

        {/* Simulated prompt */}
        <div className="flex gap-2 mb-3">
          <span className="text-term-blue flex-shrink-0">$</span>
          <span className="text-term-text">cat README.md</span>
        </div>

        <p className="text-term-muted mb-3 pl-4 leading-relaxed">{description}</p>

        {/* State */}
        <div className="flex gap-2 mb-3">
          <span className="text-term-blue flex-shrink-0">$</span>
          <span className="text-term-text">
            status:{" "}
            <span className={state ? "text-term-green" : "text-term-yellow"}>
              {state ? "finished" : "in_progress"}
            </span>
          </span>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-2">
          <span className="text-term-blue flex-shrink-0">$</span>
          <span className="text-term-text">cat stack.txt</span>
        </div>
        <div className="flex flex-wrap gap-1.5 pl-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-term-muted border border-term-border px-2 py-0.5 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-6 md:py-16 lg:py-24 font-mono">
      <div className="container m-auto px-4 md:px-6">
        <ProjectsSectionAsciiArt />

        <div className="grid w-full grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-12 w-full border-t border-term-border-subtle" />
      </div>
    </section>
  );
}