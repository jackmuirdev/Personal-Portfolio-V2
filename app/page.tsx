import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import About from "@/components/home-page/About";
import Contact from "@/components/home-page/Contact";
import Hero from "@/components/home-page/Hero";
import Projects from "@/components/home-page/Projects";

export default function HomePage() {
  
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-800 to-gray-700 animate-gradient bg-[length:400%_400%]">
      {/* Header */}
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
