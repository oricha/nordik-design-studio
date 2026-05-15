import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ValueProposition from "@/components/ValueProposition";
import { SocialProofRibbon } from "@/components/SocialProofRibbon";
import ProjectCatalog from "@/components/ProjectCatalog";
import WhySection from "@/components/WhySection";
import Services from "@/components/Services";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";
import { LocationsSection } from "@/components/LocationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <ProjectCatalog />
        <HowItWorksTimeline />
        <TrustBar />
        <SocialProofRibbon />
        <ValueProposition />
        <WhySection />
        <Services />
        <LocationsSection />
      </main>
    </div>
  );
};

export default Index;
