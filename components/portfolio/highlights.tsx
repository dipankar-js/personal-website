import { Badge } from "@/components/ui/badge";

const coreStack = ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "MongoDB"];

const highlights = [
  {
    label: "Current role",
    content: <><strong>Deel</strong> — Senior Software Engineer shipping enterprise-grade payroll software.</>,
  },
  {
    label: "Previously",
    content: <>Owned analytics and eSign at <strong>Tekion</strong>; at <strong>Better Software</strong>, modernized a residential solar platform with React, Node.js integrations, and automated CRM sync.</>,
  },
  {
    label: "0 → 1",
    content: <>A product engineer with an <strong>extreme ownership mindset</strong> — I take products from empty repo to shipped, and stay accountable after launch.</>,
  },
] as const;

export function Highlights() {
  return (
    <section className="overflow-hidden bg-ink">
      <div className="page-container">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="border-[#2b2e36] py-10 lg:border-r lg:py-[50px] lg:pr-10">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="shrink-0 font-sans text-[clamp(88px,11vw,148px)] leading-[0.82] font-semibold tracking-[-0.05em] text-transparent [-webkit-text-stroke:2px_#c88a54]">6+</div>
              <div>
                <div className="font-sans text-[21px] leading-[1.25] font-semibold tracking-[-0.015em] text-background">years shipping<br />full-stack JavaScript</div>
                <div className="mt-3 font-sans text-xs tracking-[0.12em] text-[#8e8a82] uppercase">Frontend-led · owns the backend</div>
              </div>
            </div>
            <div className="mt-[34px] border-t border-[#2b2e36] pt-[26px]">
              <div className="eyebrow mb-3.5 text-[#8e8a82]">Core stack</div>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((item) => <Badge key={item} className="border-[#3c3f48] px-3.5 py-2 text-[13px] text-[#dad6ce]">{item}</Badge>)}
              </div>
              <Badge className="mt-[22px] border-0 bg-[#c88a54] px-[15px] py-2 text-xs font-semibold tracking-[0.1em] text-ink uppercase">Open to senior &amp; staff roles</Badge>
            </div>
          </div>
          <div className="border-t border-[#2b2e36] py-7 lg:border-0 lg:py-[28px] lg:pl-12">
            {highlights.map(({ label, content }, index) => (
              <div key={label} className={`grid gap-2 py-[22px] sm:grid-cols-[128px_minmax(0,1fr)] sm:gap-[22px] ${index ? "border-t border-[#2b2e36]" : ""}`}>
                <div className="eyebrow pt-1 text-[#c88a54]">{label}</div>
                <div className="pretty font-sans text-[19px] leading-[30px] font-normal text-[#e8e5de] [&_strong]:font-semibold [&_strong]:text-white">{content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
