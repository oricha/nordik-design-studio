import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-warm-gray px-6 py-28">
      <section className="w-full max-w-2xl border-y border-border bg-background/70 px-6 py-12 text-center shadow-[0_24px_70px_-50px_hsl(var(--foreground)/0.55)] md:px-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">Error 404</p>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Página no encontrada</h1>
        <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          La página o el proyecto que buscas no existe, se movió o ya no está disponible en este momento.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-95"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Ver todos los proyectos
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:border-accent/50"
          >
            <Home className="h-4 w-4" aria-hidden />
            Ir a inicio
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
