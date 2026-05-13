type TerminalCardProps = {
  fileName: string;
  children: React.ReactNode;
};

export function TerminalCard({fileName, children}: TerminalCardProps) {
  return (
    <div className="rounded border border-[#21262d] bg-[#161b22] p-4 md:p-5 text-xs md:text-sm leading-relaxed text-[#8b949e] font-mono mb-4 md:mb-6">
      <span className="text-green-500">ariel@portfolio</span>
      <span className="text-blue-400">:~$</span>
      <span className="text-gray-100"> cat {fileName}</span>

      <br />
      <br />

      <div className="text-gray-100">
        {children}
      </div>

      <br />
      <br />

      <span className="text-green-500">ariel@portfolio</span>
      <span className="text-blue-400">:~$</span>
      <span className="animate-blink text-gray-100">▌</span>
    </div>
  );
}