import { AboutHero } from "@/components/AboutHero";
import { MissionValuesSection } from "@/components/MissionValuesSection";
import { FeaturedClientReferences } from "@/components/FeaturedClientReferences";
import { StatisticsSection } from "@/components/StatisticsSection";
import { TeamSection } from "@/components/TeamSection";
import { WarrantySection } from "@/components/WarrantySection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { TraditionalVsSipSection } from "@/components/TraditionalVsSipSection";
import { ConstructionProcessSection } from "@/components/ConstructionProcessSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <AboutHero />
        <MissionValuesSection />
        <FeaturedClientReferences />
        <StatisticsSection />
        <TeamSection />
        <WarrantySection />
        <CertificationsSection />
        <TraditionalVsSipSection />
        <ConstructionProcessSection />
      </main>
    </div>
  );
};

export default About;
