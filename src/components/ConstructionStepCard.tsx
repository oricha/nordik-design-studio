import { ConstructionStep } from "@/data/constructionProcess";

interface ConstructionStepCardProps {
  step: ConstructionStep;
}

export function ConstructionStepCard({ step }: ConstructionStepCardProps) {
  return (
    <div className="flex flex-col group">
      {/* Image Container */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col h-full">
        {/* Step Number Circle */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">
              {step.stepNumber}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">
              {step.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
          {step.description}
        </p>

        {/* Duration Badge */}
        <div className="inline-block">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm">
            {step.duration}
          </span>
        </div>
      </div>
    </div>
  );
}
