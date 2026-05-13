import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ContactSectionAsciiArt } from "./ascii_arts";

const CONTACTS = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "arielpincay812@gmail.com",
    href: "mailto:arielpincay812@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "linkedin.com/in/ariel-pincay-perez",
    href: "https://linkedin.com/in/ariel-pincay-perez",
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "github.com/arielpincayy",
    href: "https://github.com/arielpincayy",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-6 md:py-16 lg:py-24 font-mono">
      <div className="container m-auto px-4 md:px-6">
        <ContactSectionAsciiArt />

        <div className="rounded border border-term-border bg-term-card p-4 md:p-5 text-xs md:text-sm">
          <div className="flex gap-2 mb-4">
            <span className="text-term-blue">$</span>
            <span className="text-term-text">cat contact.txt</span>
          </div>

          <p className="text-term-muted pl-4 mb-6 leading-relaxed">
            Have a project in mind or want to collaborate?{" "}
            <span className="text-term-text">Feel free to reach out!</span>
          </p>

          <div className="flex gap-2 mb-4">
            <span className="text-term-blue">$</span>
            <span className="text-term-text">ls ./links</span>
          </div>

          <div className="space-y-3 pl-4">
            {CONTACTS.map(({ icon: Icon, label, value, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="pl-1 border-l border-term-border-subtle">
                  <div className="pl-3 flex items-center gap-3">
                    <Icon className="h-4 w-4 text-term-blue flex-shrink-0" />
                    <div>
                      <div className="font-bold text-term-blue">{label}</div>
                      <div className="text-term-muted group-hover:text-term-text transition-colors duration-150">
                        {value}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 w-full border-t border-term-border-subtle" />
      </div>
    </section>
  );
}