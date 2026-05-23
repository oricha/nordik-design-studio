import { PageHero } from "@/components/PageHero";
import WhySection from "@/components/WhySection";

const Why = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        eyebrow="Por qué NordiK"
        title="Construcción nórdica para reducir incertidumbre en obra"
        description="Industrialización SIP, documentación técnica y una cadena de decisión más clara para particulares, promotores y profesionales que necesitan controlar plazos, aislamiento y alcance."
        actions={[
          { label: "Hablar con el equipo", href: "/contactos" },
          { label: "Ver proceso", href: "/how-it-works", variant: "secondary" },
        ]}
      />
      <WhySection />
    </main>
  );
};

export default Why;
