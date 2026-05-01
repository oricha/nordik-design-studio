import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export interface PageTestimonial {
  id: string;
  clientName: string;
  role: string;
  city: string;
  projectLabel: string;
  projectSlug?: string;
  body: string;
  rating: 4 | 5;
  obscuredContact: string;
  verifiedPurchase: string;
  portrait: string;
}

export const pageTestimonials: PageTestimonial[] = [
  {
    id: "t1",
    clientName: "Irene V.",
    role: "Arquitecta técnica y propietaria",
    city: "Soria, España",
    projectLabel: "Reforma envolvente casa unifamiliar",
    projectSlug: "oulu",
    body: "Veníamos de un proyecto con albaeñilería tradicional donde cada lluvia aparecían filtraciones nuevas en los encuentros vigas-muro. Con NordiK rehicieron la línea SIP de cerramiento manteniendo el interior casi intacto durante la obra seca mayor. El equipo dejó bitácora foto diaria que contrastamos con BIM y así validamos aislamientos: el confort térmico en invierno se notó en la primera Factura después de cerrar huecos mal ejecutados antes. Negociamos un calendario ajustado a guardería cercana — cumplieron fecha de impermeabilización. El comportamiento ante viento norte fue la prueba decisiva.",
    rating: 5,
    obscuredContact: "iren***@consultora.estudio",
    verifiedPurchase: "Contrato obra llave técnica volumen medio",
    portrait: project1,
  },
  {
    id: "t2",
    clientName: "Martti L.",
    role: "Socio desarrollador Lapland Hospitality",
    city: "Inari · FI",
    projectLabel: "Lodge tres unidades modelo Tunturi",
    projectSlug: "tunturi",
    body: "Operamos alquiler corto temporada y no podemos parar temporada larga obra húmeda. Lo que más nos convenció NordiK fue taller industrial que reduce incertidumbre en sitio: paneles llegaron numerados por capa BIM y taller subió vídeos QA empalmes. Dos unidades fueron ocupables en fecha prometida; la tercera retrasada solo por nevada extraordinaria donde la seguridad obra lo impidió incluso equipo local. Soporte ingenierías respondió noches CET por videollamada con mi socio en Madrid financiero. Ratio residuos in situ menor que lodges bloque año anterior según foto comparativa obra.",
    rating: 5,
    obscuredContact: "m.l***@fjordretreat.net",
    verifiedPurchase: "Suministro + montaje volumen alto",
    portrait: project2,
  },
  {
    id: "t3",
    clientName: "Carolina M.",
    role: "Constructora SME",
    city: "Madrid, España",
    projectLabel: "Kit SIP bloque bifamiliar",
    projectSlug: "helsinki",
    body: "Nos movemos mejor en albañilería cara vista pero cliente final nos pidió marca nórdica para envolvente y ventanas integradas mismo fabricante. Contratamos soporte BIM NordiK 12 semanas: hubo tensión inicial entre capataz habitual y método industrializado porque tabiques no eran primera capa proyecto. Mediación ingeniería resolvió con taller visita obra remota drones. Precio cerrado sufrió sólo porque cliente añadió lucernarios no previstos fase inicial. El sellado de blower door quedó bajo valores reglamento local que pedía promotor inversión ESG declarada informe inversionistas.",
    rating: 4,
    obscuredContact: "obra***@mcmadrid.tech",
    verifiedPurchase: "Kit ampliado soporte ejecutivo",
    portrait: project3,
  },
  {
    id: "t4",
    clientName: "Helena R.",
    role: "Compradora residencial",
    city: "Oulu metropolitan",
    projectLabel: "Vivienda unifamiliar nieve moderada",
    projectSlug: "oulu",
    body: "Buscamos una vivienda pequeña pero robusta junto al mar donde nuestra hija cursa estudios y teletrabaja. Las casas de bloque cercanas sufren salitre capilar cuando golpean los temporales largos del invierno. Optamos por planta nueva con posibilidad de ampliar en fases posteriores. NordiK detallaron el coste-logística de llevar cerramiento taller Finlandia hasta el emplazamiento y cuántos días efectivos se recuperaban cerrando ocupación antes. El ritmo montaje con equipo autorizado marca y un canal de trabajo bilingüe español-finés funcionó mejor de lo esperado. Un elemento acristalado llegó con marcas de transporte: taller lo cambió sobre seguro materiales.",
    rating: 5,
    obscuredContact: "h.r***@mailbox.fi",
    verifiedPurchase: "Obra nueva llave obra seca modelo catálogo",
    portrait: project1,
  },
  {
    id: "t5",
    clientName: "João F.",
    role: "Socio empresa forestal gestión bosque",
    city: "Norte Centro PT",
    projectLabel: "Casa piloto muestra PEFC trazabilidad",
    projectSlug: "kuusamo",
    body: "Nuestro equipo forestal lleva años mostrando a ayuntamientos y empresas madereras cómo trazar la huella desde el bosque al edificio. Pedimos una casa piloto visitable donde explicáramos PEFC/FSC sobre un volumen creíble, no sólo carteles feria. NordiK aportaron memoria BIM, datos EPD sintetizados para divulgadores y rutas foto comparativa obra seca contra un proyecto albañilería paralelo cercano mismo barrio temporada lluviosa. Diseñamos captación de agua sobre cubierta aprovechando declive y normativa agrario-turística reciente municipio. Firmamos contrato con hitos porque había agendas políticas públicas cuya visita institucional no podía retrasarse otra temporada.",
    rating: 5,
    obscuredContact: "j.f***@forestcoop.eu",
    verifiedPurchase: "Contrato proyecto demostración instituciones + marca conjunta",
    portrait: project2,
  },
  {
    id: "t6",
    clientName: "Sara und Thomas K.",
    role: "Pareja trabajo remoto naturaleza",
    city: "Levi cercanías · FI",
    projectLabel: "Refugio cabaña compacto invierno polar",
    projectSlug: "torku",
    body: "Vivimos seis años de alquiler en capital combinando trabajo remoto con Berlín, hasta que buscamos segunda residencia cerca de Levi para esquiar fuera temporada urbana alta. Dudamos entre cabaña piedra siglo pasado porque la entrada inicial parecía baja frente modelo SIP nuevo: la piedra perdía rápido ante cargas nevadas combinadas aislamiento pobre zona ventenas ventana costera norte. NordiK modelaron la envolvente por encima de plantilla serie catálogo justificadas hipoteca documentación inglés segundo domicilio. Obra cerró casi dentro ventana temporada baja turística porque escrituramos fecha calendario entrega día en mismo contrato hitos marca evitamos sorpresa liquidez banco proyecto.",
    rating: 5,
    obscuredContact: "k.s***@mountain-remote.de",
    verifiedPurchase: "Vivienda llave obra seca paquete invierno",
    portrait: project3,
  },
];
