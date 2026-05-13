"use client";

import { useEffect, useState } from "react";
import TypewriterText from "@/components/typewriterText";
import { AboutSectionAsciiArt } from "./ascii_arts";
import { TerminalCard } from "./consoleText";

const EDUCATION = {
  title: "Bachelor of Science in Computer Engineering",
  subtitle: "9th Semester — Yachay Tech University",
  courses: [
    "Machine and Deep Learning",
    "Numerical Analysis",
    "Parallel Computing",
    "Algorithms & Data Structures",
  ],
};

const EXPERIENCE = [
  {
    role: "Research Assistant – Protein Design Project",
    place: "Yachay Tech University",
    period: "Sep 2025 – Nov 2025",
  },
  {
    role: "Frontend Developer",
    place: "Tuto-U Startup",
    period: "Jun 2024 – Dec 2024",
  },
  {
    role: "Web Developer",
    place: "Compufest YachayTech",
    period: "Feb 2025 – May 2025",
  },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    const el = document.getElementById("about");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="w-full py-6 md:py-16 lg:py-24 font-mono">
      <div className="container m-auto px-4 md:px-6">
        <AboutSectionAsciiArt />

        <TerminalCard fileName="about.txt">
          <>
            Hey! I'm{" "}
            <span className="text-term-red">Ariel Pincay</span>
            , a passionate computer engineering student who loves building things
            that live on the web — from full-stack apps to machine learning pipelines.
            <br /><br />
            I enjoy clean code, creative interfaces, and solving real problems.
          </>
        </TerminalCard>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2">

          {/* Education */}
          <div className="rounded border border-term-border bg-term-card p-4 md:p-5 text-xs md:text-sm">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-term-border">
              <span className="text-term-green">▸</span>
              <span className="font-bold text-term-blue">EDUCATION</span>
            </div>

            <div className="flex gap-2 mb-2">
              <span className="flex-shrink-0 text-term-blue">$</span>
              <span className="text-term-text">
                <TypewriterText text={EDUCATION.title} delay={visible ? 300 : 99999} />
              </span>
            </div>

            <div className="flex gap-2 mb-3">
              <span className="flex-shrink-0 opacity-0">$</span>
              <span className="text-term-muted">{EDUCATION.subtitle}</span>
            </div>

            <div className="flex gap-2 mb-1">
              <span className="flex-shrink-0 text-term-blue">$</span>
              <span className="text-term-text">cat coursework.txt</span>
            </div>

            <div className="pl-4 mt-1 space-y-1">
              {EDUCATION.courses.map((c) => (
                <div key={c} className="flex gap-2">
                  <span className="text-term-green">–</span>
                  <span className="text-term-muted">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="rounded border border-term-border bg-term-card p-4 md:p-5 text-xs md:text-sm">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-term-border">
              <span className="text-term-green">▸</span>
              <span className="font-bold text-term-blue">EXPERIENCE</span>
            </div>

            <div className="flex gap-2 mb-3">
              <span className="text-term-blue">$</span>
              <span className="text-term-text">ls ./jobs</span>
            </div>

            <div className="space-y-4">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="pl-1 border-l border-term-border-subtle">
                  <div className="pl-3">
                    <div className="font-bold mb-0.5 text-term-text">{exp.role}</div>
                    <div className="text-term-red">{exp.place}</div>
                    <div className="mt-0.5 text-term-muted">{exp.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 w-full border-t border-term-border-subtle" />
      </div>
    </section>
  );
}