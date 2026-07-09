import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import { SocialProofRibbon } from "@/components/SocialProofRibbon";
import ProjectCatalog from "@/components/ProjectCatalog";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <ProjectCatalog />
        <HowItWorksTimeline />
        <TrustBar />
        <SocialProofRibbon />
      </main>
    </div>
  );
};

export default Index;
