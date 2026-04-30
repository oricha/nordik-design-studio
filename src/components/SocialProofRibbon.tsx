import { Link } from "react-router-dom";
import { StarRating } from "@/components/StarRating";
import { reviewAggregate } from "@/data/reviewSignals";

/** Cinta compacta en home hacia social proof (F2.2.2). */
export function SocialProofRibbon() {
  return (
    <div className="border-b border-border bg-muted/45">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          <StarRating value={Math.round(reviewAggregate.average)} size="sm" />
          <span className="font-semibold text-foreground">{reviewAggregate.average.toFixed(1)} / 5</span>
          <span>({reviewAggregate.totalRespondents} valoraciones internas)</span>
        </span>
        <Link to="/testimonios" className="font-semibold text-accent underline-offset-4 hover:underline">
          Ver testimonios
        </Link>
        <Link to="/casos" className="font-semibold text-foreground underline-offset-4 hover:underline hover:text-accent">
          Casos de estudio
        </Link>
      </div>
    </div>
  );
}
