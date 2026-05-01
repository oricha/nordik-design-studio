import { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const IconComponent = certification.icon;

  return (
    <a
      href={certification.certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex cursor-pointer flex-col items-center rounded-lg border border-border p-6 transition-all duration-300 hover:border-accent hover:shadow-lg"
    >
      <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 mb-3">
        <IconComponent className="w-8 h-8 text-accent" />
      </div>

      <h3 className="text-lg font-semibold text-foreground text-center mb-1">
        {certification.name}
      </h3>

      <p className="text-sm text-muted-foreground text-center mb-2">
        {certification.category}
      </p>

      <p className="text-xs font-medium text-accent">
        {certification.yearObtained}
      </p>

      <p className="text-xs text-muted-foreground text-center mt-2 leading-relaxed">
        {certification.description}
      </p>
    </a>
  );
}
