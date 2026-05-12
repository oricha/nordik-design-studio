import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6">
      <div className="max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Error 404</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">Página no encontrada</h1>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          La página o el proyecto que buscas no existe, se movió o ya no está disponible en este momento.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/#projects"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-95"
          >
            ← Ver todos los proyectos
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:border-accent/50"
          >
            Ir a inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
