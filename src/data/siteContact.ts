/**
 * Información comercial de contacto (header, footer, formularios).
 * F1.0.2, F1.5.1–F1.5.3, F1.5.5 (coordenadas para mapas embebidos).
 */
export type OfficeLocation = {
  id: string;
  title: string;
  addressLines: readonly string[];
  lat: number;
  lon: number;
  timeZone: string;
  weekdayOpen: string;
  weekdayClose: string;
  hoursLabel: string;
  phoneHref: string;
  phoneDisplay: string;
};

export type RegionalDialIn = {
  region: string;
  phoneHref: string;
  phoneDisplay: string;
};

const helsinkiOffice: OfficeLocation = {
  id: "helsinki",
  title: "Sede · Helsinki",
  addressLines: ["Mannerheimintie 1", "00100 Helsinki", "Finlandia"],
  lat: 60.1699,
  lon: 24.9384,
  timeZone: "Europe/Helsinki",
  weekdayOpen: "09:00",
  weekdayClose: "17:30",
  hoursLabel: "Lun–vie · 9:00–17:30 (EET)",
  phoneHref: "+358401234567",
  phoneDisplay: "+358 40 123 4567",
};

const madridOffice: OfficeLocation = {
  id: "madrid",
  title: "Oficina · Madrid (Iberia)",
  addressLines: ["P.º de la Castellana 95", "28046 Madrid", "España"],
  lat: 40.4686,
  lon: -3.6892,
  timeZone: "Europe/Madrid",
  weekdayOpen: "09:00",
  weekdayClose: "18:00",
  hoursLabel: "Lun–vie · 9:00–18:00 (CET)",
  phoneHref: "+34900123456",
  phoneDisplay: "+34 900 123 456",
};

/** Líneas adicionales por país sin duplicar la oficina de Madrid (F1.5.2) */
const regionalDialInLines: RegionalDialIn[] = [
  { region: "Portugal", phoneHref: "+351210000001", phoneDisplay: "+351 210 000 001" },
  { region: "Francia", phoneHref: "+33170700000", phoneDisplay: "+33 1 70 70 00 00" },
];

export const siteContact = {
  /** Teléfono principal mostrado en UI compacta (HQ Helsinki) */
  phoneHref: helsinkiOffice.phoneHref,
  phoneDisplay: helsinkiOffice.phoneDisplay,
  emailHref: "info@nordik.fi",
  emailDisplay: "info@nordik.fi",
  hoursShort:
    "Helsinki lun–vie 9:00–17:30 (EET) · Madrid lun–vie 9:00–18:00 (CET)",
  hoursLong:
    "Atención comercial lun–viernes. Helsinki 9:00–17:30 (EET), Madrid 9:00–18:00 (CET). Festivos locales cerrado.",
  locationLine: "Helsinki · Madrid",

  offices: [helsinkiOffice, madridOffice] as const,
  regionalDialIn: regionalDialInLines,

  whatsapp: {
    href: "https://wa.me/358401234567",
    label: "WhatsApp",
  } as const,

  /** Recursos tras envío de formulario (F1.4.8) */
  resources: {
    faqHref: "/#why",
    faqLabel: "Preguntas frecuentes (Por qué NordiK)",
  } as const,
} as const;

export type SiteContact = typeof siteContact;
