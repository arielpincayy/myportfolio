import Link from "next/link";
import { Download } from "lucide-react";

const NAV_LINKS = [
  { href: "#about",    label: "about"    },
  { href: "#projects", label: "projects" },
  { href: "#skills",   label: "skills"   },
  { href: "#contact",  label: "contact"  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-term-border bg-term-bg/95 backdrop-blur font-mono">
      <div className="container flex h-14 m-auto items-center justify-between px-4 md:px-6">

        {/* Logo / prompt */}
        <Link href="/" className="flex items-center gap-1 text-sm">
          <span className="text-term-green">ariel@portfolio</span>
          <span className="text-term-blue">:~$</span>
          <span className="text-term-text ml-1 hidden sm:inline">_</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1 px-3 py-1.5 text-xs rounded border border-transparent text-term-muted transition-colors duration-150 hover:border-term-border hover:text-term-text"
            >
              <span className="text-term-blue">./</span>{label}
            </Link>
          ))}
        </nav>

        {/* Download CV */}
        <a
          href="/Curriculum.pdf"
          download="Curriculum.pdf"
          className="flex items-center gap-2 px-3 py-1.5 text-xs rounded border border-term-green text-term-green bg-transparent transition-colors duration-150 hover:bg-term-green/10"
        >
          <Download className="h-3 w-3" />
          ./download-cv
        </a>

      </div>
    </header>
  );
}