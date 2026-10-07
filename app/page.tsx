import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <div className="noise" />
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Skills />
        <Projects />
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
