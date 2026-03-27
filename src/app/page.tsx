import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative w-full bg-[#121212]">
      <ScrollProgress />
      {/* Cinematic Scrollytelling Hero */}
      <ScrollyCanvas />

      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Awards />
      <Leadership />

      <ScrollToTop />

      <Footer />
    </main>
  );
}
