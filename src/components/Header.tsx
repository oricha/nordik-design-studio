import { FormEvent, useEffect, useState } from "react";
import { Menu, X, Globe, Search, Phone, Mail, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PROJECT_CATALOG_QUERY_KEY } from "@/constants/projectCatalog";
import { siteContact } from "@/data/siteContact";

const navLinks = [
  { label: "Cómo funciona", href: "/how-it-works" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre nosotros", href: "/about" },
  { label: "Preguntas frecuentes", href: "/faq" },
  { label: "Contactos", href: "/contactos" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogQueryDraft, setCatalogQueryDraft] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }
    const fromUrl =
      new URLSearchParams(location.search).get(PROJECT_CATALOG_QUERY_KEY) ?? "";
    setCatalogQueryDraft(fromUrl);
  }, [location.pathname, location.search]);

  const submitCatalogSearch = (e?: FormEvent) => {
    e?.preventDefault();
    const trimmed = catalogQueryDraft.trim();
    navigate({
      pathname: "/",
      search: trimmed ? `${PROJECT_CATALOG_QUERY_KEY}=${encodeURIComponent(trimmed)}` : "",
      hash: "#projects",
    });
    setMobileOpen(false);
  };

  const mobileContactLinks = (
    <div className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm lg:hidden">
      <div className="flex flex-col gap-3 text-muted-foreground">
        <a
          href={`tel:${siteContact.phoneHref}`}
          className="inline-flex items-center gap-2 font-medium text-foreground hover:text-accent"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          {siteContact.phoneDisplay}
        </a>
        <a
          href={`mailto:${siteContact.emailHref}`}
          className="inline-flex items-center gap-2 font-medium text-foreground hover:text-accent"
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden />
          {siteContact.emailDisplay}
        </a>
        <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
          {siteContact.hoursShort}
        </span>
        <a
          href={siteContact.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex font-medium text-foreground hover:text-accent"
        >
          WhatsApp
        </a>
        <a href="/contactos#regional-contact" className="inline-flex font-medium text-foreground hover:text-accent">
          Más teléfonos por país
        </a>
      </div>
    </div>
  );

  const catalogSearchForm = (
    <form onSubmit={submitCatalogSearch} className="relative flex w-full max-w-xl flex-1 items-center gap-2">
      <div className="flex min-h-10 flex-1 items-center gap-2 rounded-xl border border-border bg-white/90 px-3 py-1.5 backdrop-blur-sm">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
        <input
          id="header-catalog-search"
          type="search"
          enterKeyHint="search"
          value={catalogQueryDraft}
          onChange={(ev) => setCatalogQueryDraft(ev.target.value)}
          placeholder="Nombre, ciudad, tipo..."
          aria-label="Buscar proyectos en el catálogo"
          className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-muted px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-border"
      >
        Buscar
      </button>
    </form>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-300/90 bg-[#f7f7fb]/95 shadow-[0_8px_32px_-28px_rgb(15_23_42/0.35)] backdrop-blur-md">
      <div className="mx-auto flex min-h-[58px] items-center px-6 lg:hidden">
        <Link to="/" className="shrink-0 text-[1.95rem] font-bold tracking-[-0.045em] text-foreground">
          Nordi<span className="text-accent">K</span>
        </Link>

        <button
          type="button"
          className="ml-auto text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="mx-auto hidden min-h-[62px] max-w-[1320px] grid-cols-[auto_1fr_auto] items-center gap-10 px-10 lg:grid">
        <Link to="/" className="shrink-0 text-[1.8125rem] font-bold tracking-[-0.05em] leading-none text-foreground">
          Nordi<span className="text-accent">K</span>
        </Link>

        <nav className="flex min-w-0 items-center justify-center gap-7 xl:gap-10" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-foreground/60 underline-offset-8 transition-colors hover:text-foreground hover:underline decoration-foreground/25"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-4">
          <button
            type="button"
            className="flex items-center gap-1.5 text-[15px] font-semibold tracking-tight text-foreground/60 transition-colors hover:text-foreground"
          >
            <Globe className="h-[15px] w-[15px]" />
            ES / €
          </button>
          <a
            href={`tel:${siteContact.phoneHref}`}
            title={siteContact.hoursShort}
            className="hidden xl:inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-foreground/60 transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            {siteContact.phoneDisplay}
          </a>
          <a
            href="/contactos"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-[10px] bg-accent px-4 py-[0.72rem] text-[0.84rem] font-semibold uppercase tracking-[0.01em] text-white transition-opacity hover:opacity-90"
          >
            Presupuesto gratis
          </a>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {mobileContactLinks}
              <button
                type="button"
                className="flex w-fit items-center gap-1.5 text-sm font-medium text-muted-foreground"
              >
                <Globe className="h-4 w-4" />
                ES / €
              </button>
              {catalogSearchForm}
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/contactos"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-accent-foreground"
                >
                  Presupuesto gratis
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
