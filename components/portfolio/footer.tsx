const links = [
  ["LinkedIn", "https://www.linkedin.com/in/dipankar-js/"],
  ["GitHub", "https://github.com/dipankar-js"],
  ["Blog", "https://blog.dipankar.dev/"],
  ["Email", "mailto:barman498@gmail.com"],
] as const;

export function Footer() {
  return (
    <footer className="page-container flex flex-wrap items-center justify-between gap-5 py-8 font-sans text-xs">
      <div className="text-muted">Dipankar Barman · Bengaluru, India · +91 70022 88627</div>
      <div className="flex flex-wrap gap-x-[22px] gap-y-2">
        {links.map(([label, href]) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="text-accent transition-colors hover:text-accent-dark hover:underline">{label}</a>
        ))}
      </div>
    </footer>
  );
}
