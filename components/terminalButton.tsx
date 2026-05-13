import Link from "next/link";
import { ArrowRight } from "lucide-react";

type TerminalButtonProps = {
  href: string;
  children: React.ReactNode;
  color?: "green" | "blue";
  external?: boolean;
  icon?: boolean;
};

export default function TerminalButton({ href, children, color = "green", external = false, icon = false,}: TerminalButtonProps) {
  const colors = {
    green: {
      border: "border-green-500",
      text: "text-green-500",
      hover: "hover:bg-green-500/10",
    },
    blue: {
      border: "border-blue-400",
      text: "text-blue-400",
      hover: "hover:bg-blue-400/10",
    },
  };

  const selected = colors[color];

  const className = `flex items-center gap-2 px-4 py-2 text-sm rounded border bg-transparent transition-all duration-200 ${selected.border} ${selected.text} ${selected.hover}`;

  const content = (
    <button className={className}>
      <span className="text-gray-400">$</span>
      {children}
      {icon && <ArrowRight className="h-3.5 w-3.5" />}
    </button>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}