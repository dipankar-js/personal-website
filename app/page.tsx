import { Education } from "@/components/portfolio/education";
import { Experience } from "@/components/portfolio/experience";
import { Expertise } from "@/components/portfolio/expertise";
import { Footer } from "@/components/portfolio/footer";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Highlights } from "@/components/portfolio/highlights";
import { Projects } from "@/components/portfolio/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Expertise />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
