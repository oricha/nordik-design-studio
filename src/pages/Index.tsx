import Hero from "@/components/Hero";
import { SocialProofRibbon } from "@/components/SocialProofRibbon";
import ProjectCatalog from "@/components/ProjectCatalog";
import WhySection from "@/components/WhySection";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import { LocationsSection } from "@/components/LocationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
            <main>
        <Hero />
        <SocialProofRibbon />
        <ProjectCatalog />
        <WhySection />
        <Services />
        <Gallery />
        <ContactSection />
        <LocationsSection />
      </main>
          </div>
  );
};

export default Index;
