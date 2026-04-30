import { AboutHero } from "@/components/AboutHero";
import { MissionValuesSection } from "@/components/MissionValuesSection";
import { StatisticsSection } from "@/components/StatisticsSection";
import { TeamSection } from "@/components/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <AboutHero />
        <MissionValuesSection />
        <StatisticsSection />
        <TeamSection />
      </main>
    </div>
  );
};

export default About;
