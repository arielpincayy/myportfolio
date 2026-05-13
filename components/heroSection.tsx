"use client";

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MyNameAsciiArt } from "@/components/ascii_arts";
import TerminalButton from "@/components/terminalButton";
import TypewriterText from "@/components/typewriterText";
import { TerminalCard } from "./consoleText";

const LINES = [
  { label: "SYSTEM", value: "next.js | TypeScript" },
  { label: "ROLE",   value: "Full-Stack & ML Developer" },
  { label: "STUDY",  value: "Computer Engineering Student" },
  { label: "USER",   value: "ariel" },
  { label: "STATUS", value: "open to work & collaboration" },
];

export default function HeroSection() {
  return (
    <section className="w-full py-8 md:py-20 lg:py-28 font-mono">
      <div className="container m-auto px-4 md:px-6">

        {/* Header: ASCII name + photo */}
        <div className="mb-8 flex flex-col md:flex-row justify-end md:justify-between md:items-end items-center gap-6">
          <MyNameAsciiArt />
          <div className="flex-shrink-0">
            <div className="rounded-3xl border-2 border-term-border-subtle p-2">
              <Image
                src="/imgs/yo.png"
                alt="Profile"
                width={220}
                height={220}
                className="rounded aspect-square object-cover"
                style={{ filter: "grayscale(15%) contrast(1.05)" }}
              />
            </div>
          </div>
        </div>

        {/* Info panels */}
        <div className="flex flex-col gap-6">

          {/* Neofetch lines */}
          <div className="rounded border border-term-border bg-term-card p-5 text-sm">
            {LINES.map((line, i) => (
              <div key={line.label} className="flex gap-3 mb-1 last:mb-0">
                <span className="w-16 flex-shrink-0 font-bold text-term-blue">
                  {line.label}:
                </span>
                <span className="text-term-text">
                  <TypewriterText text={line.value} delay={i * 220 + 400} />
                </span>
              </div>
            ))}
          </div>

          {/* Bio */}
          <TerminalCard fileName="bio.txt">
            <>
              Computer Engineering student at{" "}
              <span className="text-term-red">Yachay Tech University</span>{" "}
              (9th semester), with hands-on experience in machine learning, evolutionary
              algorithms, numerical analysis, and full-stack web development. Passionate
              about bridging theoretical computation with real-world scientific and
              engineering applications.
            </>
          </TerminalCard>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <TerminalButton href="https://github.com/arielpincayy" color="green" external icon>
              ./view-my-work
            </TerminalButton>
            <TerminalButton href="mailto:arielpincay812@gmail.com" color="blue">
              ./contact-me
            </TerminalButton>
          </div>

          {/* Social links */}
          <div className="flex gap-6 text-sm">
            <Link
              href="https://github.com/arielpincayy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-term-muted transition-colors duration-150 hover:text-term-text"
            >
              <Github className="h-4 w-4" />
              github
            </Link>
            <Link
              href="https://linkedin.com/in/ariel-pincay-perez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-term-muted transition-colors duration-150 hover:text-term-text"
            >
              <Linkedin className="h-4 w-4" />
              linkedin
            </Link>
          </div>
        </div>

        <div className="mt-10 w-full border-t border-term-border-subtle" />
      </div>
    </section>
  );
}