import { Star } from "lucide-react";

interface StarRatingProps {
  value: number;
  max?: number;
  size?: "sm" | "md";
}

export function StarRating({ value, max = 5, size = "sm" }: StarRatingProps) {
  const s = size === "md" ? "h-5 w-5" : "h-4 w-4";
  const rounded = Math.min(max, Math.max(1, Math.round(value)));
  const label = `${rounded} sobre ${max} estrellas`;

  return (
    <div className="flex gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`${s} shrink-0 ${i < rounded ? "fill-amber-400 text-amber-400" : "text-muted-foreground/35"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}
