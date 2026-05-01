import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { siteContact, whatsappConversationHref } from "@/data/siteContact";

/** Asistente ligero hasta integrar widget/LLM (F1.5.4). */
const LiveChatAssist = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-28 right-6 z-[45] md:bottom-36 md:right-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-[transform,box-shadow] hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Abrir asistente de ayuda"
        >
          <MessageCircle className="h-7 w-7" aria-hidden />
        </button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="z-[70] w-full max-w-md border-l sm:p-8">
          <SheetHeader className="space-y-1 pr-8 text-left">
            <SheetTitle>¿Te ayudamos?</SheetTitle>
            <SheetDescription>
              Fuera del horario comercial responderemos por email en 24–48 h laborables.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-6 text-sm text-foreground">
            <section>
              <h3 className="mb-3 font-semibold text-foreground">Respuestas rápidas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  ·{" "}
                  <Link
                    to="/faq"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Preguntas frecuentes (FAQ NordiK)
                  </Link>
                </li>
                <li>
                  ·{" "}
                  <Link to="/contactos" className="font-medium text-accent underline-offset-4 hover:underline">
                    Cotización por zona / envíos
                  </Link>
                </li>
                <li className="text-xs leading-relaxed">
                  Próximo paso: conectar este panel a widget en vivo o a un bot; de momento sólo enlaces útiles y email.
                </li>
              </ul>
            </section>

            <section className="rounded-xl border border-border bg-muted/40 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Preferencia rápida
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={`mailto:${siteContact.emailHref}`}
                  className="rounded-lg bg-background px-3 py-2 text-center font-semibold hover:bg-accent/10"
                >
                  Escribir a {siteContact.emailDisplay}
                </a>
                <a
                  href={whatsappConversationHref()}
                  className="rounded-lg bg-emerald-500/15 py-2 text-center font-semibold text-emerald-800 hover:bg-emerald-500/20"
                >
                  {siteContact.whatsapp.label}
                </a>
              </div>
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default LiveChatAssist;
