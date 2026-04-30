import { AboutHero } from "@/components/AboutHero";
import { MissionValuesSection } from "@/components/MissionValuesSection";
import { StatisticsSection } from "@/components/StatisticsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <AboutHero />
        <MissionValuesSection />
        <StatisticsSection />
      </main>
    </div>
  );
};

export default About;
