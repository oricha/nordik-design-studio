import { Link } from "react-router-dom";
import { StarRating } from "@/components/StarRating";
import { reviewAggregate, starDistributionPct } from "@/data/reviewSignals";

interface ReviewsAggregateProps {
  /** Destino “página reviews completa” (F2.2.2) */
  detailHref?: string;
  detailLabel?: string;
  className?: string;
}

/** Widget resumen valoraciones + desglose (F2.2.2) */
export function ReviewsAggregate({
  detailHref = "/testimonios",
  detailLabel = "Ver testimonios y detalle",
  className = "",
}: ReviewsAggregateProps) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8 ${className}`}>
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Valoración media</p>
          <div className="mt-2 flex flex-wrap items-end gap-3">
            <span className="text-5xl font-bold text-accent tabular-nums">{reviewAggregate.average.toFixed(1)}</span>
            <StarRating value={reviewAggregate.average} size="md" />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {reviewAggregate.totalRespondents} valoraciones procesadas ({reviewAggregate.sourceLabel}).
          </p>
          <p className="mt-4 text-xs text-muted-foreground">{reviewAggregate.lastSyncedLabel}</p>
        </div>
        <Link
          to={detailHref}
          className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
        >
          {detailLabel}
        </Link>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Distribución</p>
        <ul className="space-y-2">
          {starDistributionPct
            .slice()
            .reverse()
            .map((row) => (
              <li key={row.stars} className="flex items-center gap-3 text-sm">
                <span className="w-8 tabular-nums text-muted-foreground">{row.stars}★</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-accent transition-[width] duration-500"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="w-10 text-right tabular-nums text-foreground">{row.pct}%</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
