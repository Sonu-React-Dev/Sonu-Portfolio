import { Hero } from "@/components/hero/Hero";
import { ClientStrip } from "@/components/projects/ClientStrip";
import { FeaturedWork } from "@/components/projects/FeaturedWork";
import { MoreWork } from "@/components/projects/MoreWork";
import { About } from "@/components/story/About";
import { Skills } from "@/components/story/Skills";
import { Experience } from "@/components/story/Experience";
import { Education } from "@/components/story/Education";
import { Services } from "@/components/story/Services";
import { Process } from "@/components/story/Process";
import { Contact } from "@/components/conversion/Contact";
import { Footer } from "@/components/conversion/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ClientStrip />
        <FeaturedWork />
        <MoreWork />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
