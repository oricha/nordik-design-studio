import { AboutHero } from "@/components/AboutHero";
import { MissionValuesSection } from "@/components/MissionValuesSection";
import { StatisticsSection } from "@/components/StatisticsSection";
import { TeamSection } from "@/components/TeamSection";
import { CertificationsSection } from "@/components/CertificationsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <AboutHero />
        <MissionValuesSection />
        <StatisticsSection />
        <TeamSection />
        <CertificationsSection />
      </main>
    </div>
  );
};

export default About;
