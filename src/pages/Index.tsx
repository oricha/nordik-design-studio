import Hero from "@/components/Hero";
import ProjectCatalog from "@/components/ProjectCatalog";
import WhySection from "@/components/WhySection";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
            <main>
        <Hero />
        <ProjectCatalog />
        <WhySection />
        <Services />
        <Gallery />
        <ContactSection />
      </main>
          </div>
  );
};

export default Index;
