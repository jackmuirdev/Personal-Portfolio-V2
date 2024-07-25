import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import About from "@/components/home-page/About";
import Contact from "@/components/home-page/Contact";
import Hero from "@/components/home-page/Hero";
import Projects from "@/components/home-page/Projects";

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        background: "linear-gradient(135deg, #a3c2e2, #ffffff, #a3c2e2)",
      }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
