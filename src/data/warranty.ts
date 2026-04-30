/** F2.5.1 Garantías comerciales — cifras orientativas; PDF legal definitivo debe sustituir al .txt público */

export const warrantyPdfPath = "/downloads/garantia-nordik-terminos.txt";

export const warrantyCoverageItems = [
  {
    scope: "Estructura portante SIP y uniones proyectadas conforme Memoria CSC",
    years: "10 años",
    detail: "Fisuras estructurales por defecto de proyecto o de ejecución realizada por red NordiK autorizada.",
  },
  {
    scope: "Aislamientos, barreras al viento-vapor cerradas fabricación",
    years: "5 años",
    detail: "Lana mineral, aislamientos de fábrica y envolvente certificada cuando la instalación la realiza red NordiK.",
  },
  {
    scope: "Instalaciones técnicas básicas (canalizado en contrato obra)",
    years: "2 años",
    detail: "Fugas declaradas en entrega técnica, puntería provisional y documentación marca.",
  },
] as const;

export const warrantyClaimSteps = [
  "Registrar la incidencia en comercial dentro del plazo, con número de proyecto y fotos georreferenciadas.",
  "NordiK abre parte interno máx. 72 h laborales y programa visita técnico o llamada diagnosticada.",
  "Si procede garantía dictaminada por el técnico, se propone corrección sin coste dentro de la cobertura; si no cubre mantenimiento, se entrega propuesta económica desglosada.",
  "Cierre con acta firmada por cliente y alta en historial SIP para mejoras continuas.",
] as const;
