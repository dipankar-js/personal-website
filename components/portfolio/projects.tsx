import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const projects = [
  {
    number: "01",
    name: "Skizaa",
    category: "Educational data management",
    role: "Tech Consultant",
    dates: "2022 — 2023",
    description: "Skizaa turns scattered field data collection into one place to see insights. I helped build their CRM product on TanStack Table and Next.js — row and column manipulation, grouping, sorting, search, pagination, infinite scroll, bulk CSV upload, and the analytics dashboard on top.",
    stack: ["Next.js", "TanStack Table", "Data grids", "CSV import"],
  },
  {
    number: "02",
    name: "Ownerstown",
    category: "Real estate & property management",
    role: "Full-stack Engineer",
    dates: "2019 — 2020",
    description: "A platform for property management services. I built property listing, tenant management and multi-user access with React and Node.js, working across the whole stack while the product was still finding its shape.",
    stack: ["React", "Node.js", "Multi-tenant access"],
  },
] as const;

export function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-white">
      <div className="page-container py-[60px]">
        <div className="mb-[34px]"><SectionHeading title="Selected projects" subtitle="Consulting & independent work" /></div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} data-reveal className="overflow-hidden rounded-[5px] border border-border bg-white transition duration-200 hover:-translate-y-[3px] hover:border-accent hover:shadow-[0_10px_30px_-18px_rgba(22,24,29,0.45)]">
              <div className="h-1 bg-accent" />
              <div className="p-6 md:px-8 md:pt-7 md:pb-[30px]">
                <div className="mb-[22px] flex items-start gap-5">
                  <div className="shrink-0 font-sans text-[52px] leading-[0.8] font-semibold tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.5px_#dbb894]">{project.number}</div>
                  <div className="min-w-0 flex-1">
                    <h3 className="m-0 mb-1.5 font-sans text-[28px] leading-[1.1] font-semibold tracking-[-0.028em]">{project.name}</h3>
                    <div className="font-sans text-sm leading-[21px] text-muted">{project.category}</div>
                    <div className="mt-2.5 flex flex-wrap items-baseline gap-2 font-sans">
                      <span className="text-[11px] font-semibold tracking-[0.12em] text-accent uppercase">{project.role}</span>
                      <span className="text-[#c9c4bb]">·</span>
                      <span className="text-xs text-muted">{project.dates}</span>
                    </div>
                  </div>
                </div>
                <p className="m-0 mb-6 text-[17px] leading-7 text-[#26282e]">{project.description}</p>
                <div className="flex flex-wrap gap-2 border-t border-[#efebe4] pt-5">
                  {project.stack.map((item) => <Badge key={item} className="border-border bg-background px-3 py-1.5 text-xs text-[#45423c]">{item}</Badge>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
