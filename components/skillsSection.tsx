import { SkillsSectionAsciiArt } from "./ascii_arts";

const SKILLS = [
  {
    title: "LANGUAGES & FRAMEWORKS",
    cmd: "cat languages.txt",
    skills: [
      "Python", "C/C++", "JavaScript", "TypeScript",
      "React.js", "Next.js", "Node.js", "Flask",
      "LangChain", "LangGraph", "Ollama",
      "PyTorch", "TensorFlow", "deap",
    ],
  },
  {
    title: "WEB & DEVOPS",
    cmd: "cat devops.txt",
    skills: ["HTML5 / CSS3", "Git", "Docker", "CUDA"],
  },
  {
    title: "RESEARCH INTERESTS",
    cmd: "cat research.txt",
    skills: [
      "Machine Learning",
      "Evolutionary Algorithms",
      "High Performance Computing",
      "Scientific Computing",
      "Numerical Analysis",
      "Natural Language Processing",
    ],
  },
];

function SkillCard({ title, cmd, skills }: { title: string; cmd: string; skills: string[] }) {
  return (
    <div className="rounded border border-term-border bg-term-card p-4 md:p-5 text-xs md:text-sm">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-term-border">
        <span className="text-term-green">▸</span>
        <span className="font-bold text-term-blue">{title}</span>
      </div>

      <div className="flex gap-2 mb-3">
        <span className="text-term-blue">$</span>
        <span className="text-term-text">{cmd}</span>
      </div>

      <div className="flex flex-wrap gap-1.5 pl-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-term-muted border border-term-border px-2 py-0.5 rounded text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-6 md:py-16 lg:py-24 font-mono">
      <div className="container m-auto px-4 md:px-6">
        <SkillsSectionAsciiArt />

        <div className="grid w-full grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <SkillCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-12 w-full border-t border-term-border-subtle" />
      </div>
    </section>
  );
}