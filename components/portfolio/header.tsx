const navigation = [
  ["Experience", "#work"],
  ["Projects", "#projects"],
  ["Expertise", "#stack"],
  ["Education", "#more"],
] as const;

export function Header() {
  return (
    <header className="page-load-header sticky top-0 z-30 flex h-[68px] items-center gap-5 border-b border-border bg-[rgba(247,245,241,0.92)] px-5 backdrop-blur-[10px] md:px-8">
      <a href="#top" className="min-w-0 flex-1 overflow-hidden font-sans no-underline">
        <span className="whitespace-nowrap text-base font-semibold tracking-[-0.01em]">Dipankar Barman</span>
        <span className="ml-3 hidden border-l border-[#ddd8cf] pl-3 text-[10px] font-medium tracking-[0.14em] text-muted uppercase xl:inline">
          Senior Full-Stack Engineer · 6+ years · Platform &amp; DX
        </span>
      </a>
      <nav aria-label="Primary navigation" className="hidden shrink-0 gap-[26px] md:flex">
        {navigation.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="font-sans text-[13px] font-medium text-[#45423c] transition-colors hover:text-foreground"
          >
            {label}
          </a>
        ))}
      </nav>
      <span className="rounded-full border border-[#ddd8cf] bg-white px-4 py-2 font-sans text-xs font-semibold">
        Résumé
      </span>
    </header>
  );
}
