/**
 * Centro FAQ (Épica 3.3) — proceso, garantía, financiamiento y técnica SIP.
 */

export type FaqCategorySlug = "proceso" | "garantia" | "financiamiento" | "tecnica";

export type FaqCategoryMeta = {
  slug: FaqCategorySlug;
  label: string;
  description: string;
};

export const faqCategories: FaqCategoryMeta[] = [
  {
    slug: "proceso",
    label: "Proceso",
    description: "Compra, obra, instalación y plazos",
  },
  {
    slug: "garantia",
    label: "Garantía",
    description: "Coberturas, soporte y posventa",
  },
  {
    slug: "financiamiento",
    label: "Financiación",
    description: "Costes y opciones de pago",
  },
  {
    slug: "tecnica",
    label: "Técnica",
    description: "SIP, normativa UE y obra",
  },
];

export interface FaqItem {
  id: string;
  category: FaqCategorySlug;
  question: string;
  /** Bloques separados por doble salto de línea se renderizan como párrafos. */
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "proceso-compra",
    category: "proceso",
    question: "¿Cómo funciona el proceso de compra?",
    answer: `El proceso arranca con un briefing de 30–45 minutos: ubicación objetivo (o proyecto exportable), tamaño objetivo de vivienda, nivel de terminación esperado y calendario. A partir del briefing emitimos una propuesta comercial ordenada por fases: ingeniería básica, fabricación SIP, montaje de envolvente y opciones llave según país y contrata disponible.\n\nUsted revisa alcance y hitos antes de cualquier firma de fabricación. Los hitos industriales están alineados a planos ejecutivos y BOM: una vez cerrado el proyecto base, taller y obra planifican listas CNC y llegada de cargas agrupadas. La documentación BIM o PDF se entrega donde el cliente o el banco obligatoriamente la requieran dentro del contrato. El contrato habitual separa obra civil del kit SIP para que cada contrata registre garantías donde corresponda. Si viene de obra tradicional SIP, esperamos menos semanas cerradas hasta estanqueidad que con muros húmedos clásicos.`,
  },
  {
    id: "proceso-plazos",
    category: "proceso",
    question: "¿Cuál es el tiempo de entrega?",
    answer: `Para diseños modelo en catálogo, el equipo planifica taller y montaje con hitos muy por debajo que los de obra húmeda tradicional cuando el proyecto no introduce cambios volumétricos profundos. El plazo efectivo incluye ingeniería, slot de taller, transporte multimodal dentro de UE y equipo de montaje certificado donde contrate la línea instalada.\n\nFactores externos: permisos municipales en el país objetivo (no están bajo nuestra línea ejecutiva hasta que cliente designe técnico de dirección compatible), temporada de grúas, clima sobre plataforma antes de cerrar volumen SIP y cualquier obra civil que deba ejecutarse antes de recibir cargas voluminosas.\n\nComunicamos un calendario con holguras publicadas antes de iniciar cargas grandes; esa holgura no es tiempo muerto — es seguridad ante inspecciones y disponibilidad de personal local. Solicite fecha orientativa después de tener parcela aclarada; la estimación se refina cuando planos ejecutivos están sellados.`,
  },
  {
    id: "proceso-instalacion",
    category: "proceso",
    question: "¿Ofrecen instalación?",
    answer: `Sí donde el proyecto y la jurisdicción lo permitan. NordiK coordina equipo de montaje certificado cuando el cliente contrata la línea “llaves de envolvente” frente sólo kits en origen taller. Opcionalmente combinamos ingeniería y suministro mientras cliente despliegue cuadrillas propias o locales en destino.\n\nEn reformas SIP parciales, instalar piezas preensambladas requiere a veces menor grúa y más trabajo interior; igualmente despachamos un responsable QA en hitos marcados donde el mandato BIM lo establezca. Si prefiere B2B, entregamos listas CNC y cargas pero no ejecutamos obra — en ese modelo el instalador debe certificar nivelación previa antes de llegada de cargas.`,
  },
  {
    id: "garantia-alcance",
    category: "garantia",
    question: "¿Qué incluye la garantía?",
    answer: `La garantía declarada especifica períodos escritos contra defectos fabricación de paneles estructuralmente aislados — ver detalle público enlazado desde Sobre Nosotros y dossier BIM — y extiende a componentes marcados dentro del BOM firmado donde exista garantía específica de fabricante europeo aliado:\n\n1) Paneles SIP: defectos laminado, adhesivo o geometrías fuera tolerancia ejecutiva antes de llegada a obra, según revisión foto + bitácora de descarga autorizada;\n\n2) Maderas certificadas: cadena declarada PEFC/FSC cuando así lo exija contrato, con traza controlada;\n\n3) Soporte QA remoto dentro de SLA publicado ante incidencias de montaje relacionadas con errores declarados en BIM frente realidad ejecutada cuando la ejecución respetó plan;\n\n4) Instalaciones básicas en paquete llaves parcial — según proyecto — con proveedores con garantía transferible donde la jurisdicción lo permita.\n\nFuera de garantía están daños tras recepción no documentada, modificaciones ejecutadas fuera BIM aceptado sin registro QA, inundaciones naturales extraordinarias cuando no aplique cobertura de seguros de obra, y pérdidas por retrasos ajenos a taller (aduana no prevista cuando cliente declara clase arancel equivocada).\n\nCada proyecto entrega página de garantía específica y contacto soporte.`,
  },
  {
    id: "proceso-personalizado",
    category: "proceso",
    question: "¿Se puede personalizar?",
    answer: `Sí. El catálogo público muestra volúmenes repetibles optimizados en taller SIP; partiendo de ellos modificamos distribución interior, número de cerramientos, acabados y paquete energético siempre dentro de cargas térmicas y viento calculadas para ese emplazamiento. Personalizar profundamente (nueva planta volumétrica) implica nueva ingeniería, iteraciones BOM y nueva ventana de taller: es el ciclo habitual de proyecto a medida frente al modelo estándar.\n\nLimitaciones vienen más de ordenanza local y disponibilidad de grúas que de la filosofía SIP. Si el proyecto exige combinación con estructuras existentes, analizamos hibridaciones con BIM en dos fases.`,
  },
  {
    id: "financiacion-extra",
    category: "financiamiento",
    question: "¿Cuáles son los costes adicionales?",
    answer: `Aparte línea cotizada NordiK, presupuesto final suele incorporar obra civil específica (según ingeniería de geotecnia cliente), saneamiento provisional, redes servicios externos, tasas locales, ITV estructuras cuando jurisdicción aplique antes de ocupación — y cualquier proyecto interior fuera BOM firmado cuando no contrate paquete completo llave NordiK. Transport multimodal dentro UE está modelado dentro de BOM; fuera UE requiere aranceles cliente.\n\nMencionamos explícitamente en propuesta cargas extraordinarias cuando parcela tiene acceso crane limitado necesitando equipo extra. No ocultamos partidas “soft” necesarias antes de llegada primer camión.`,
  },
  {
    id: "financiacion-financiamiento",
    category: "financiamiento",
    question: "¿Hay financiación disponible?",
    answer: `NordiK no actúa como entidad financiera regulada en la UE: no concedemos préstamos directos desde balance propio. Coordinamos dossier BIM y facturas proforma para instituciones nórdicas o ibéricas con las que el cliente ya tenga relación, y algunos desarrolladores B2B con contratos repetitivos negocian aplazamiento de pagos conforme a derecho cuando el crédito comercial interno está aprobado tras due diligence.\n\nLos particulares suelen recurrir a hipotecas obra y liberación contra hitos: los hitos de pago en las fichas de proyecto ilustran un esquema orientativo.`,
  },
  {
    id: "proceso-zonas",
    category: "proceso",
    question: "¿Dónde entregan?",
    answer: `Operamos cargas multimodales con foco en la Unión Europea y rutas mediante partners logísticos certificados. En el dossier figuran ejemplo países bálticos y la península ibérica porque la combinación soporte España y equipo en Finlandia facilita idioma cercano al cliente y documentación BIM comprensible para la banca local sin traducciones excesivas. Entregamos también en Laponia, Benelux, Alemania o Portugal cuando el acceso físico permite las grúas necesarias y los permisos de paso están reservados a tiempo.\n\nNo garantizamos plazos aduaneros si el cliente no aporta arancel/clasificación arancelaria correctos.`,
  },
  {
    id: "tecnica-sip-aislamiento",
    category: "tecnica",
    question: "¿Cómo es el aislamiento SIP?",
    answer: `Un panel SIP estructural típico combina cara OSB dimensionada ingeniería (o laminado cuando proyecto lo exija) adhesivada contra núcleo aislante continuo cerrado taller bajo vacío controlado, reduciendo puentes térmicos repetidos típicos de capas obra húmeda ensambladas in situ día a día. El espesor de núcleo se dimensiona tras simulaciones térmicas y exigencias U-value según zonificación climática y normativa nacional.\n\nComparativa honesta SIP vs obra tradicional: SIP entrega mejor predictibilidad de consumo porque tolerancias adhesivo+cama plana mejoran uniformidad encuentros — siempre cuando montaje ejecute bitácora de tornillería QA y sellado encuentros transpirables donde diseño BIM lo marque.`,
  },
  {
    id: "tecnica-normativa",
    category: "tecnica",
    question: "¿Cómo garantizáis cumplimiento en la UE?",
    answer: `Documentación ejecutiva revisa marcado CE donde aplique a componentes dentro del kit, fichas declaración conformidad donde fabricante debe proveer número de identificación UE, fichas adhesivos y clase reacción fuego comunicada ante cliente.\n\nIngeniería estructural se afina con acciones viento+nieve proyecto + combinaciones cargas residencia según eurocódigo adoptado país. Cliente debe involucrar colegio local / técnico acreditación final sobre el expediente.`,
  },
  {
    id: "garantia-postventa",
    category: "garantia",
    question: "¿Qué pasa después de la entrega?",
    answer: `Mantenemos soporte ticketing con tiempos de respuesta SLA publicados: incidencias estructuras SIP documentadas mediante fotografía + BIM referencia tienen primera respuesta en horario comercial dentro plazo dossier proyecto. Sugerimos inspección anual cliente de lamas y encuentros cara ventilada fachadas según recomendaciones fabricantes revestimiento final elegido.`,
  },
  {
    id: "proceso-presupuesto",
    category: "proceso",
    question: "¿Qué incluye solicitar presupuesto desde la web?",
    answer: `Al enviar el formulario (o usar WhatsApp) recibe código de solicitud provisional y guía rápida. No es proyecto BIM sellado hasta pasar revisiones internas ingeniería, pero permite agendar siguiente llamada y validar volumen económico aproximado sin viajar a taller.`,
  },
  {
    id: "tecnica-sip-vs-humedo",
    category: "tecnica",
    question: "SIP versus bloque hueco ¿cuándo compensa?",
    answer: `SIP suele destacar donde ventanas climáticas de obra corta importan monetariamente — alquiler temporal, servicio de financiación con hitos rápidos, o ubicaciones donde mano obra especializada cara demora proyecto húmedo. Bloque puede seguir teniendo ventaja puramente local donde mano obra barata disponible continuamente.`,
  },
  {
    id: "financiacion-antici",
    category: "financiamiento",
    question: "¿Hay anticipo de fabricación?",
    answer: `Sí cuando pedido confirma slot taller: habitualmente combinación inicial + contra planos ejecutivos firmados + hito previo expediciones — esquema se detalla línea proyecto comercial.`,
  },
];
