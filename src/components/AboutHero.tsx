import { PageHero } from "@/components/PageHero";

export function AboutHero() {
  return (
    <PageHero
      eyebrow="Sobre NordiK"
      title="Arquitectura escandinava adaptada a proyectos en España"
      description="Combinamos experiencia nórdica, documentación técnica y ejecución industrializada para llevar viviendas modernas, sostenibles y de alta calidad a clientes particulares y profesionales."
      actions={[
        { label: "Conocer el proceso", href: "/how-it-works" },
        { label: "Ver casos", href: "/casos", variant: "secondary" },
      ]}
      stats={[
        { label: "Experiencia", value: "5+ años" },
        { label: "Proyectos", value: "240+" },
        { label: "Sistema", value: "SIP + madera" },
      ]}
    />
  );
}
