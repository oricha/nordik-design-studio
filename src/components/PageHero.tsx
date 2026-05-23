import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PageHeroStat = {
  label: string;
  value: string;
};

type PageHeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  backHref?: string;
  backLabel?: string;
  actions?: PageHeroAction[];
  stats?: PageHeroStat[];
  media?: ReactNode;
  compact?: boolean;
  className?: string;
};

export const PageHero = ({
  eyebrow,
  title,
  description,
  backHref,
  backLabel = "Volver al inicio",
  actions = [],
  stats = [],
  media,
  compact = false,
  className,
}: PageHeroProps) => {
  return (
    <section className={cn("relative overflow-hidden border-b border-border bg-warm-gray", className)}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 pt-28 md:px-12 md:py-18 md:pt-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.72fr)] lg:items-end lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className={cn("max-w-4xl", compact && "max-w-3xl")}
        >
          {backHref ? (
            <Link
              to={backHref}
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {backLabel}
            </Link>
          ) : null}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.03]">
            {title}
          </h1>
          <div className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </div>

          {actions.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {actions.map((action) => {
                const isPrimary = action.variant !== "secondary";
                return (
                  <Link
                    key={`${action.href}-${action.label}`}
                    to={action.href}
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition",
                      isPrimary
                        ? "bg-accent text-accent-foreground shadow-[0_16px_40px_-24px_hsl(var(--foreground)/0.6)] hover:brightness-105"
                        : "border border-border bg-background/70 text-foreground hover:border-accent/50",
                    )}
                  >
                    {action.label}
                    {isPrimary ? <ArrowRight className="h-4 w-4" aria-hidden /> : null}
                  </Link>
                );
              })}
            </div>
          ) : null}

          {stats.length > 0 ? (
            <dl className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-border bg-background/55 px-4 py-3">
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-lg font-semibold text-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </motion.div>

        {media ? (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="lg:justify-self-end"
          >
            {media}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};
