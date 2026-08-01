export function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
      <h2 className="m-0 font-sans text-[30px] font-semibold tracking-[-0.022em] text-foreground">{title}</h2>
      <span className="font-sans text-[11px] font-medium tracking-[0.14em] text-muted uppercase">{subtitle}</span>
    </div>
  );
}
