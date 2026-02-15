import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCatalog from "@/components/ProjectCatalog";
import WhySection from "@/components/WhySection";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProjectCatalog />
        <WhySection />
        <Services />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
