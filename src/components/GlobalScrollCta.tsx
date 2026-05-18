import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "nordik-scroll-cta-dismissed";

/** F3.4.1: CTA «Obtener presupuesto» fijo tras scroll; se oculta en detalle proyecto (hay botón específico). */
const GlobalScrollCta = () => {
  const { pathname } = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem(STORAGE_KEY) === "1");

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (dismissed) sessionStorage.setItem(STORAGE_KEY, "1");
  }, [dismissed]);

  const hiddenRoute = pathname.startsWith("/proyecto/");
  const visible = !dismissed && !hiddenRoute && scrollY > 1000;

  if (!visible) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-24 z-[44] flex max-w-[min(100vw-7.5rem,20rem)] items-stretch rounded-full shadow-xl",
        "ring-2 ring-black/10",
      )}
      role="complementary"
      aria-label="Acceso rápido a solicitar presupuesto"
    >
      <Link
        to="/contactos"
        className={cn(
          "flex flex-1 items-center justify-center rounded-l-full rounded-r-none bg-accent px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-accent-foreground",
          "transition-[filter] hover:brightness-105 md:min-w-[12rem]",
        )}
      >
        Obtener presupuesto
      </Link>
      <button
        type="button"
        className={cn(
          "flex shrink-0 items-center justify-center rounded-r-full border-l border-white/35 bg-accent px-3 text-accent-foreground",
          "hover:bg-accent/90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring",
        )}
        aria-label="Cerrar aviso flotante de presupuesto"
        onClick={() => setDismissed(true)}
      >
        <X className="size-5" />
      </button>
    </div>
  );
};

export default GlobalScrollCta;
