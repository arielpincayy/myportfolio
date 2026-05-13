const GREETINGS_ASCII = `
██╗  ██╗██╗       ██╗███╗   ███╗
██║  ██║██║       ██║████╗ ████║
███████║██║       ██║██╔████╔██║
██╔══██║██║       ██║██║╚██╔╝██║
██║  ██║██║▄█╗    ██║██║ ╚═╝ ██║
╚═╝  ╚═╝╚═╝╚═╝    ╚═╝╚═╝     ╚═╝
`;

const NAME_ASCII = `
 █████╗ ██████╗ ██╗███████╗██╗     
██╔══██╗██╔══██╗██║██╔════╝██║     
███████║██████╔╝██║█████╗  ██║     
██╔══██║██╔══██╗██║██╔══╝  ██║     
██║  ██║██║  ██║██║███████╗███████╗
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
`;

const ABOUT_ASCII = `
 █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗
██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝
███████║██████╔╝██║   ██║██║   ██║   ██║   
██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   
██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   
╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   
`;

const PROJECTS_ASCII = `
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
`;

const PROJECTS_ASCII_SM = `
██████╗ ██████╗  ██████╗      ██╗
██╔══██╗██╔══██╗██╔═══██╗     ██║
██████╔╝██████╔╝██║   ██║     ██║
██╔═══╝ ██╔══██╗██║   ██║██   ██║
██║     ██║  ██║╚██████╔╝╚█████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ 

███████╗ ██████╗████████╗███████╗
██╔════╝██╔════╝╚══██╔══╝██╔════╝
█████╗  ██║        ██║   ███████╗
██╔══╝  ██║        ██║   ╚════██║
███████╗╚██████╗   ██║   ███████║
╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
`;

const CONTACT_ASCII = `
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   
`;

const CONTACT_ASCII_SM = `
 ██████╗ ██████╗ ███╗   ██╗
██╔════╝██╔═══██╗████╗  ██║
██║     ██║   ██║██╔██╗ ██║
██║     ██║   ██║██║╚██╗██║
╚██████╗╚██████╔╝██║ ╚████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝

████████╗ █████╗  ██████╗████████╗
╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
   ██║   ███████║██║        ██║
   ██║   ██╔══██║██║        ██║
   ██║   ██║  ██║╚██████╗   ██║
   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝
`;

const SKILLS_ASCII = `
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝
`;

const gradientStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontFamily: "monospace",
  whiteSpace: "pre",
};

export function MyNameAsciiArt() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row sm:gap-6 sm:items-end overflow-x-auto">
        <pre className="text-xs sm:text-sm leading-tight select-none" style={gradientStyle}>
          {GREETINGS_ASCII}
        </pre>
        <pre className="text-xs sm:text-sm leading-tight select-none" style={gradientStyle}>
          {NAME_ASCII}
        </pre>
      </div>
      <div className="mt-4 w-full border-t border-term-border-subtle" />
    </div>
  );
}

export function AboutSectionAsciiArt() {
  return (
    <div className="mb-6 overflow-x-auto">
      <pre className="text-xs sm:text-sm leading-tight select-none" style={gradientStyle}>
        {ABOUT_ASCII}
      </pre>
      <div className="mt-4 w-full border-t border-term-border-subtle" />
    </div>
  );
}

export function ProjectsSectionAsciiArt() {
  return (
    <div className="mb-6 overflow-x-auto">
      {/* Mobile: versión partida en dos líneas */}
      <pre className="sm:hidden text-xs leading-tight select-none" style={gradientStyle}>
        {PROJECTS_ASCII_SM}
      </pre>
      {/* Desktop: versión completa en una línea */}
      <pre className="hidden sm:block text-xs sm:text-sm leading-tight select-none" style={gradientStyle}>
        {PROJECTS_ASCII}
      </pre>
      <div className="mt-4 w-full border-t border-term-border-subtle" />
    </div>
  );
}

export function ContactSectionAsciiArt() {
  return (
    <div className="mb-6 overflow-x-auto">
      {/* Mobile: versión partida en dos líneas */}
      <pre className="sm:hidden text-xs leading-tight select-none" style={gradientStyle}>
        {CONTACT_ASCII_SM}
      </pre>
      {/* Desktop: versión completa en una línea */}
      <pre className="hidden sm:block text-xs sm:text-sm leading-tight select-none" style={gradientStyle}>
        {CONTACT_ASCII}
      </pre>
      <div className="mt-4 w-full border-t border-term-border-subtle" />
    </div>
  );
}

export function SkillsSectionAsciiArt() {
  return (
    <div className="mb-6 overflow-x-auto">
      <pre className="text-xs sm:text-sm leading-tight select-none" style={gradientStyle}>
        {SKILLS_ASCII}
      </pre>
      <div className="mt-4 w-full border-t border-term-border-subtle" />
    </div>
  );
}