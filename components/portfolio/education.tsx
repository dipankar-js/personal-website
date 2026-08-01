import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section id="more" className="border-b border-border bg-white">
      <div className="page-container grid gap-6 py-[60px] md:grid-cols-2 xl:grid-cols-3">
        <InfoCard title="Education">
          <div className="mb-2.5 font-sans text-xs text-muted">2015 — 2019</div>
          <h3 className="m-0 mb-2 font-sans text-xl font-semibold tracking-[-0.015em]">B.Tech, Electrical Engineering</h3>
          <div className="text-[17px] leading-[27px] text-[#4a4740]">National Institute of Technology, Silchar</div>
        </InfoCard>
        <InfoCard title="Certifications">
          <div className="border-b border-border pb-4 text-[17px] leading-[27px] text-[#26282e]">Complete JavaScript Course with ES6 <span className="text-muted">· Udemy</span></div>
          <div className="pt-4 text-[17px] leading-[27px] text-[#26282e]">AWS Lambda &amp; Serverless Architecture Bootcamp <span className="text-muted">· Udemy</span></div>
        </InfoCard>
        <InfoCard title="Beyond the code" className="md:col-span-2 xl:col-span-1">
          <p className="m-0 mb-[18px] text-[17px] leading-[27px] text-[#26282e]">I write at <a href="https://blog.dipankar.dev/" target="_blank" rel="noreferrer" className="text-accent hover:text-accent-dark hover:underline">blog.dipankar.dev</a> and spend my spare curiosity on design and building things end to end. English, Hindi and Assamese — all full professional proficiency.</p>
          <div className="flex flex-wrap gap-2">
            {["UI/UX design", "Digital marketing", "Entrepreneurship"].map((item) => <Badge key={item} className="border-[#ddd8cf] px-3 py-1 text-xs text-[#45423c]">{item}</Badge>)}
          </div>
        </InfoCard>
      </div>
    </section>
  );
}

function InfoCard({ title, className = "", children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <article className={`rounded border border-border bg-[#fdfcfa] p-7 ${className}`}>
      <div className="eyebrow mb-5 text-accent">{title}</div>
      {children}
    </article>
  );
}
