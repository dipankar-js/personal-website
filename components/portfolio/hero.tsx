import { ButtonLink } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, MailIcon, PenIcon } from "./icons";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dipankar-js/", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/dipankar-js", icon: GitHubIcon },
  { label: "Blog", href: "https://blog.dipankar.dev/", icon: PenIcon },
] as const;

export function Hero() {
  return (
    <section id="top" className="border-b border-border px-5 pt-16 md:px-8 md:pt-[84px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-[30px] font-sans text-[11px] font-medium tracking-[0.16em] text-accent uppercase">
          Bengaluru, India · Remote at Deel · Open to senior &amp; staff roles
        </div>
        <h1 className="balance m-0 max-w-[1000px] font-sans text-[clamp(38px,5.2vw,74px)] leading-[1.06] font-semibold tracking-[-0.028em] text-foreground">
          Senior full-stack engineer building scalable platforms for products used at global scale.
        </h1>
        <div className="pb-[60px]">
          <p className="pretty my-[30px] max-w-[760px] text-xl leading-[34px] text-[#3b3934]">
            Product engineer with 6+ years shipping production-grade applications using React, Next.js, TypeScript, Node.js, and NestJS.<br />
            Currently at <Mark>Deel</Mark>, building scalable global payroll onboarding experiences and the services behind them.<br />
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            <ButtonLink href="mailto:barman498@gmail.com" className="h-12 px-6">
              <MailIcon className="size-[18px]" />
              Get in touch
            </ButtonLink>
            <span aria-hidden="true" className="mx-1.5 h-7 w-px bg-border" />
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <ButtonLink
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                aria-label={label}
                variant="outline"
                className="size-12 p-0"
              >
                <Icon className="size-[19px]" />
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Mark({ children }: { children: React.ReactNode }) {
  return <strong className="border-b-2 border-[#dbb894] font-sans font-semibold text-foreground">{children}</strong>;
}
