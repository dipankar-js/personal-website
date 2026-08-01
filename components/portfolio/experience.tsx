import type { ReactNode } from "react";
import { SectionHeading } from "./section-heading";

type Role = {
  dates: string;
  location: string;
  current?: boolean;
  company: ReactNode;
  title: string;
  summary: string;
  bullets?: ReactNode[];
};

const roles: Role[] = [
  {
    dates: "Jun 2024 — Present",
    location: "Remote",
    current: true,
    company: "Deel",
    title: "Senior Frontend Engineer",
    summary: "Global Payroll team — technical owner of the client onboarding surface.",
    bullets: [
      <>Architected and delivered a <strong>self-serve onboarding flow</strong> that lets clients activate payroll without an implementation manager, removing a standing operational cost from the team.</>,
      <>Led the <strong>migration of the codebase to an Nx monorepo</strong> — shared libraries, enforced module boundaries, affected-only pipelines — cutting CI times substantially and giving the team faster, more predictable feedback.</>,
      <>Built and maintained <strong>NestJS microservices</strong> behind the onboarding surface, and helped move code out of the legacy monolith into independently deployable services.</>,
      <>Drove <strong>developer-experience work</strong> across the surface: shared tooling and conventions, tighter type coverage, Playwright coverage on the critical onboarding paths.</>,
      <>Designed an <strong>onboarding status tracker</strong> integrated with external task-management platforms, giving every stakeholder a single reliable view of where an account stands.</>,
      <>Engineered a <strong>CSV parsing and validation system</strong> for G2N tracking, automating reconciliation that was previously manual and error-prone.</>,
    ],
  },
  {
    dates: "Apr 2022 — May 2024",
    location: "Bengaluru, India",
    company: "Tekion Corp",
    title: "Software Engineer 2",
    summary: "Frontend team on Tekion's DRS product — owner of analytics and eSign.",
    bullets: [
      <>Owned analytics end-to-end and <strong>decoupled it entirely from the UI layer</strong>, so product teams could instrument features without touching tracking code.</>,
      <>Designed and published an internal <strong>analytics npm package</strong> with pluggable provider adapters — injected into consumer apps with zero manual configuration. It became the product standard.</>,
      <>Drove the <strong>Next.js SSR strategy</strong>, materially improving load performance and Core Web Vitals on the highest-traffic surfaces.</>,
      <>Built the eSign module from the ground up: <strong>live document casting</strong> to customers over WebSockets, plus an integrated in-house virtual video calling experience.</>,
    ],
  },
  {
    dates: "Sep 2020 — Apr 2022",
    location: "Bengaluru, India",
    company: "Better Software",
    title: "Senior Software Engineer",
    summary: "An end-to-end platform for a US residential rooftop-solar business — covering the full customer lifecycle from lead capture through financing to installation. Lead across four products (sales portal, lead-generation tool, customer interaction tool, admin/CMS), owning both frontend and backend.",
    bullets: [
      <>Owned <strong>technical and architectural decisions</strong> across all four products, planned sprints for the dev team, broke large features into actionable tickets, and joined client roadmap discussions alongside the PM.</>,
      <>Led the migration of the legacy JavaScript/jQuery site to <strong>React, Redux and TypeScript</strong> — set the architecture, conventions and migration sequencing.</>,
      <>Built <strong>APIs in Node.js, MongoDB and TypeScript</strong> to integrate third-party finance companies into the sales portal, plus workers that keep the portal and the CRM in sync.</>,
      <>Delivered <strong>two new products end to end</strong> on Next.js, Express and MongoDB, and set up CI/CD with CircleCI.</>,
      <>The platform automated work that used to be manual, letting sales representatives operate far more independently.</>,
    ],
  },
  {
    dates: "Aug 2019 — Aug 2020",
    location: "Bengaluru, India",
    company: "DXC Technology",
    title: "Software Engineer",
    summary: "First role out of university — enterprise application development.",
  },
];

export function Experience() {
  return (
    <section id="work" className="border-b border-border">
      <div className="page-container">
        <div className="py-[34px] pt-[60px]"><SectionHeading title="Experience" subtitle="2019 — Present" /></div>
        {roles.map((role, index) => <ExperienceItem key={role.dates} role={role} last={index === roles.length - 1} />)}
      </div>
    </section>
  );
}

function ExperienceItem({ role, last }: { role: Role; last: boolean }) {
  return (
    <article className={`grid grid-cols-[22px_minmax(0,1fr)] py-5 sm:grid-cols-[140px_30px_minmax(0,1fr)] md:grid-cols-[170px_30px_minmax(0,1fr)] md:py-1 ${last ? "pb-[60px]" : "pb-[30px]"}`}>
      <div className="col-start-2 mb-4 font-sans sm:col-start-1 sm:mb-0 sm:pr-5 sm:pt-1.5 sm:text-right md:pr-7">
        <div className="text-[13px] font-semibold text-foreground">{role.dates}</div>
        <div className="mt-1.5 text-xs text-muted">{role.location}</div>
        {role.current && <span className="mt-3.5 inline-block rounded-full bg-[#f1e4d4] px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-accent-dark uppercase">Current</span>}
      </div>
      <div className="relative row-span-2 row-start-1 flex justify-center sm:col-start-2 sm:row-span-1">
        <div className={`absolute top-[-4px] left-1/2 w-px bg-border ${last ? "h-[23px]" : "bottom-[-30px]"}`} />
        <div className={`absolute top-3 size-[13px] rounded-full border-2 border-accent shadow-[0_0_0_5px_#f7f5f1] ${role.current ? "bg-accent" : "bg-background"}`} />
      </div>
      <div className="col-start-2 min-w-0 pb-1.5 sm:col-start-3 sm:pl-7">
        <h3 className="m-0 mb-1 font-sans text-[30px] leading-tight font-semibold tracking-[-0.025em] text-foreground">{role.company}</h3>
        <div className="mb-3.5 font-sans text-base font-medium text-accent">{role.title}</div>
        <p className="m-0 mb-5 max-w-[800px] text-[17px] leading-[27px] text-[#4a4740]">{role.summary}</p>
        {role.bullets && (
          <div className="flex max-w-[820px] flex-col gap-[13px]">
            {role.bullets.map((bullet, index) => (
              <div key={index} className="grid grid-cols-[22px_minmax(0,1fr)] items-start gap-2.5">
                <span className="text-[17px] leading-7 text-accent">—</span>
                <span className="text-[17px] leading-7 text-[#26282e] [&_strong]:font-semibold">{bullet}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
