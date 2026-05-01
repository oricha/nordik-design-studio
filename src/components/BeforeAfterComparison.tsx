import { useMemo, useState } from "react";
import beforeImg from "@/assets/project-2.jpg";
import afterImg from "@/assets/project-5.jpg";

interface BeforeAfterComparisonProps {
  title?: string;
  caption?: string;
}

/** F2.3.3 — antes a la izquierda */
export default function BeforeAfterComparison({
  title = "Reforma Oulu · referencia comunicación marca",
  caption = "Comparativo ilustrativo: revisar permiso imagen obra real antes uso campaña pública proyecto.",
}: BeforeAfterComparisonProps) {
  const [pos, setPos] = useState(50);

  const clipPercent = useMemo(() => `${100 - pos}%`, [pos]);

  return (
    <div className="mx-auto mt-14 max-w-4xl px-6">
      <h3 className="text-center text-lg font-semibold text-foreground md:text-xl">{title}</h3>
      <p className="mx-auto mb-8 mt-2 max-w-2xl text-center text-sm text-muted-foreground">{caption}</p>

      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-md">
        <img src={beforeImg} alt="Estado previo proyecto reforma modelo archivo" className="absolute inset-0 size-full object-cover" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${clipPercent} 0 0)` }}
          aria-hidden={false}
        >
          <img src={afterImg} alt="Resultado tras trabajo envolvente SIP archivo marca" className="size-full object-cover" />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 cursor-ew-resize bg-accent shadow-lg md:w-1.5"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md">
            <span className="text-xs font-bold text-foreground">↔</span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-4 rounded-md bg-black/65 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
          Antes
        </div>
        <div className="pointer-events-none absolute bottom-4 right-4 rounded-md bg-black/65 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
          Después
        </div>
      </div>

      <label className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
        <span className="w-24 shrink-0 tabular-nums">Deslizar: {Math.round(pos)}%</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="h-3 w-full cursor-pointer accent-accent"
          aria-label="Comparar antes y después arrastrando"
        />
      </label>
    </div>
  );
}
