import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-term-border font-mono">
      <div className="container flex flex-col items-center gap-3 m-auto px-4 py-5 md:px-6 md:flex-row md:justify-between">

        {/* Copyright as terminal output */}
        <p className="text-xs text-term-muted">
          <span className="text-term-green">ariel@portfolio</span>
          <span className="text-term-blue">:~$</span>
          <span className="text-term-text ml-1">echo "© 2026 Ariel Pincay. All rights reserved."</span>
        </p>

        {/* Social links */}
        <div className="flex gap-4">
          <Link
            href="https://github.com/arielpincayy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-term-muted transition-colors duration-150 hover:text-term-text"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/ariel-pincay-perez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-term-muted transition-colors duration-150 hover:text-term-text"
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}