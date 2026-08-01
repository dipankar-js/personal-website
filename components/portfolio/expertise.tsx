import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const groups: Array<{ label: string; items: string[]; featured: string[] }> = [
  { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "Angular 8", "React Native", "Tailwind"], featured: ["TypeScript", "React", "Next.js"] },
  { label: "Backend & data", items: ["Node.js", "NestJS microservices", "Express", "GraphQL", "PostgreSQL", "MongoDB", "Firebase"], featured: ["NestJS microservices"] },
  { label: "Platform & delivery", items: ["Nx monorepos", "CI/CD · CircleCI", "AWS", "Serverless", "Lambda + API Gateway", "Playwright"], featured: ["Nx monorepos"] },
];

export function Expertise() {
  return (
    <section id="stack" className="border-b border-border">
      <div className="page-container py-[60px]">
        <div className="mb-[34px]"><SectionHeading title="Expertise" subtitle="Tools I work in daily" /></div>
        {groups.map((group, index) => (
          <div key={group.label} className={`grid items-start gap-4 border-t border-border py-[26px] md:grid-cols-[220px_minmax(0,1fr)] md:gap-7 ${index === groups.length - 1 ? "border-b" : ""}`}>
            <div className="eyebrow pt-1 text-accent">{group.label}</div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const featured = group.featured.includes(item);
                return <Badge key={item} className={`rounded-[3px] px-3.5 py-2 text-sm ${featured ? "border-ink bg-ink font-medium text-background" : "border-border bg-white text-foreground"}`}>{item}</Badge>;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
