# NordiK Features Plan - OpenSpec Framework

## Resumen Ejecutivo

Plan compacto de implementación para NordiK, portal B2B/B2C de casas prefabricadas nórdicas. El documento agrupa features similares en épicas más amplias para facilitar la creación posterior de specs OpenSpec sin perder requisitos clave.

**Ejes de posicionamiento que deben mantenerse en todas las specs:**
- Orientación comercial clara: convertir visitantes en leads para construir su casa propia, no solo explorar un catálogo.
- Mensaje aspiracional: vivienda eficiente, bonita, de diseño nórdico y con precio más accesible que la construcción tradicional.
- Confianza técnica: cumplimiento normativo europeo aplicable, documentación verificable, control de calidad, garantías y acompañamiento.
- Utilidad moderna: páginas de producto completas, proceso explicado, contacto rápido, comparativas, presupuesto orientativo y CTAs contextuales.
- Lenguaje prudente: usar "desde", "estimado", "según proyecto", "sujeto a contrato" o "documentación bajo solicitud" cuando aplique.

---

## 🔴 PRIORIDAD 1: CAPTACIÓN Y CONVERSIÓN (2-3 semanas)

### Épica 1.0: Posicionamiento, CTAs y Contacto Comercial

**Objetivo:** Reorientar la home y los puntos de entrada hacia captación de leads cualificados: personas que quieren construir una casa propia, eficiente y aspiracional a precio asequible.

**Alcance agrupado:**
- Hero aspiracional con H1 claro sobre casa propia, diseño nórdico, eficiencia y precio accesible.
- Propuesta de valor resumida en 4 razones: precio accesible, eficiencia energética, diseño moderno y acompañamiento técnico.
- CTAs consistentes en home, header, catálogo, tarjetas y finales de sección.
- Contacto rápido en header, mobile y barras de confianza: teléfono, email, WhatsApp si aplica y formulario.
- Micro-copy de confianza: normativa europea aplicable, garantías, asesoría técnica y zonas de servicio.

**Criterios de aceptación:**
- [ ] H1 comunica casa propia + diseño nórdico + eficiencia + precio accesible sin promesas absolutas.
- [ ] Subtítulo explica construcción prefabricada/SIP, acompañamiento y presupuesto personalizado.
- [ ] CTA primario: "Solicitar Presupuesto", "Cotizar mi Casa" o "Quiero mi casa NordiK".
- [ ] CTA secundario: "Ver Modelos", "Cómo Funciona" o "Hablar con un asesor".
- [ ] Header muestra contacto clicable (`tel:`, `mailto:` o WhatsApp) y botón de presupuesto visible.
- [ ] En mobile, contacto y CTA quedan accesibles desde menú, botón sticky o CTA flotante.
- [ ] La propuesta de valor incluye 4 cards con iconos, textos de 1-2 líneas y enlaces a catálogo, proceso, garantías o contacto.
- [ ] Los CTAs usan micro-copy persuasivo, no genérico: evitar "Enviar" si puede ser "Solicitar Presupuesto Gratis".

---

### Épica 1.1: Catálogo, Búsqueda, Filtros y Comparación

**Objetivo:** Ayudar al usuario a encontrar modelos relevantes por necesidades reales: precio, tamaño, habitaciones, eficiencia, entrega y tipo de servicio.

**Alcance agrupado:**
- Buscador por texto: nombre, ciudad, ubicación, tipo de proyecto o características.
- Filtros por rango de precios, habitaciones/baños, eficiencia energética, tiempo de entrega y tipo de proyecto.
- Sidebar/drawer de filtros con estado visible, limpiar filtros, contador de resultados y query params.
- Vista grid/lista, ordenamiento extendido y estados de "sin resultados".
- Comparador de 2-3 proyectos con tabla de características y CTA de cotización comparativa.
- Reparación de enlaces rotos del catálogo hacia `/proyecto/{slug}`.

**Criterios de aceptación:**
- [ ] Input de búsqueda visible y filtrado en tiempo real.
- [ ] Rango de precios recalculado según resultados disponibles.
- [ ] Filtros combinables con estado persistente en URL (`type`, `price`, `bedrooms`, etc.).
- [ ] Mobile usa drawer/modal con "Aplicar Filtros" y "Limpiar".
- [ ] Sidebar desktop muestra filtros activos, contador "Mostrando X de Y" y opción de remover individualmente.
- [ ] Ordenamiento por precio, tamaño, eficiencia y tiempo de entrega.
- [ ] Vista grid/lista responsive con preferencia persistente en sesión.
- [ ] Todas las tarjetas de proyecto enlazan a una ruta funcional `/proyecto/{slug}`.
- [ ] Comparador permite seleccionar máximo 3 proyectos y muestra área, habitaciones, baños, precio, R-value, tiempo de entrega y personalización.
- [ ] CTA "Solicitar Presupuesto para Comparación" rellena el formulario con los proyectos seleccionados.

---

### Épica 1.2: Detalle de Producto, Modelos y Contenido Visual

**Objetivo:** Convertir cada modelo/proyecto en una página vendible, visualmente convincente y suficientemente técnica para generar confianza.

**Alcance agrupado:**
- Ruta individual `/proyecto/{slug}` para cada modelo, con 404 y breadcrumbs.
- Galería completa con fotos reales, thumbnails, lightbox, zoom, fullscreen y navegación por teclado.
- Contenido visual por categorías: exterior, interiores, detalles, acabados, proceso, antes/después en reformas y videos/tours si existen.
- Especificaciones técnicas completas del modelo y descarga/solicitud de ficha técnica.
- Proyectos relacionados y alternativas similares por tipo o rango de precio.

**Criterios de aceptación:**
- [ ] Cada proyecto tiene URL amigable y breadcrumbs: Home > Proyectos > [Nombre].
- [ ] Proyectos faltantes tienen página de detalle con contenido mínimo antes de enlazarse desde catálogo.
- [ ] Galería incluye idealmente 8-10 imágenes por proyecto; mínimo 3 fotos reales cuando no exista material completo.
- [ ] Lightbox permite navegación anterior/siguiente, zoom, fullscreen, teclado y contador "3 de 24 fotos".
- [ ] Imágenes optimizadas para carga rápida y con permisos/atribución cuando aplique.
- [ ] Specs incluyen panel SIP, espesor, R-value/aislamiento, dormitorios, baños, área útil, acabados incluidos y personalización.
- [ ] Normativas, certificaciones o estándares se muestran solo si están documentados.
- [ ] Hay CTA contextual en header y final de página con proyecto preseleccionado.
- [ ] Se muestran 3-4 proyectos similares con enlace directo a detalle.

---

### Épica 1.3: Formulario, Contacto y Seguimiento del Lead

**Objetivo:** Reducir fricción de contacto y capturar datos útiles para priorizar y acompañar al cliente desde la primera consulta.

**Alcance agrupado:**
- Formulario de presupuesto con selección múltiple de tipo de proyecto.
- Campos de cualificación: presupuesto aproximado, ubicación, financiación, proyecto de interés y mensaje.
- Cumplimiento legal: aceptación de privacidad/términos y validación frontend/backend.
- Mensajes de error visibles, confirmación post-envío y autorespuesta por email.
- Contacto regional: teléfonos por país, horarios, ubicaciones, mapa y chat/chatbot si aplica.
- Integración futura con CRM para seguimiento comercial.

**Criterios de aceptación:**
- [ ] Tipo de proyecto usa checkboxes, con mínimo 1 selección.
- [ ] Presupuesto aproximado es obligatorio con rangos útiles: `<€50k`, `€50-100k`, `€100-200k`, `€200k+` o equivalentes validados.
- [ ] Ubicación del proyecto permite España, Portugal, Francia y "otros"; puede ser opcional para exploración temprana.
- [ ] Checkbox de financiación identifica interés y puede mostrar opciones de entidades si están disponibles.
- [ ] Aceptación de privacidad/términos es obligatoria y enlaza a `/privacidad` y `/terminos`.
- [ ] Validación visible en tiempo real para email, teléfono y campos obligatorios.
- [ ] Confirmación indica que la solicitud fue enviada, ID/ticket si existe y SLA de contacto 24-48h.
- [ ] Autorespuesta incluye resumen de solicitud, ID/ticket, SLA y enlace a FAQ o recursos útiles.
- [ ] Contacto regional muestra números con código país, WhatsApp si aplica, horarios por zona e indicador "Abierto ahora" si es viable.
- [ ] Mapa de oficinas es responsive e incluye dirección, teléfono, horario y "Cómo llegar".

---

## 🟠 PRIORIDAD 2: CONFIANZA, PRECIO Y ACOMPAÑAMIENTO (3-4 semanas)

### Épica 2.0: Precio, Presupuesto, Pagos y Asequibilidad

**Objetivo:** Resolver la incertidumbre económica y reforzar el posicionamiento de "casa propia aspiracional a precio asequible" sin prometer importes cerrados no verificables.

**Alcance agrupado:**
- Bloque de precio en producto: precio base, incluidos/excluidos, opcionales y pagos.
- Guía de presupuesto y asequibilidad con variables que cambian el coste.
- Esquemas de pagos orientativos sujetos a contrato/proyecto.
- Rango o coste orientativo de opcionales solo con datos validados.
- Preparación para PDF de cotización y cálculo dinámico en fases futuras.

**Criterios de aceptación:**
- [ ] Precio base visible con nota "desde" o "estimado" si depende de configuración, transporte, terreno o permisos.
- [ ] Desglose claro de incluidos/excluidos: transporte, montaje, estudio de terreno, permisos, acabados y documentación.
- [ ] Guía explica variables: tamaño, acabados, transporte, terreno, permisos, montaje, personalización y opcionales.
- [ ] Se incluyen ejemplos o rangos solo con datos validados.
- [ ] Copy aspiracional: vivienda propia eficiente y bonita con inversión controlada.
- [ ] CTA principal: "Recibir presupuesto detallado" o "Pedir orientación de presupuesto".
- [ ] Esquema de pagos se explica como orientativo y sujeto a contrato/proyecto.

---

### Épica 2.1: Proceso, Timeline y Acompañamiento

**Objetivo:** Explicar cómo se pasa de una consulta inicial a una vivienda entregada, qué depende de NordiK, del cliente y de terceros.

**Alcance agrupado:**
- Página `/como-funciona` con proceso completo.
- Timeline por proyecto: diseño, presupuesto, documentación, fabricación, transporte, montaje, entrega y postventa.
- Opciones de servicio: solo paneles SIP, llave en mano, reforma u otros paquetes.
- Explicación del sistema SIP, ventajas frente a construcción tradicional y puntos de control de calidad.
- Acompañamiento técnico y comercial durante permisos, decisiones, presupuesto y postventa.

**Criterios de aceptación:**
- [ ] Página `/como-funciona` incluye 6-9 pasos con texto breve, iconos y CTA por etapa.
- [ ] Se indica qué depende del cliente, de NordiK y de terceros: terreno, permisos, financiación, transporte y montaje.
- [ ] Timeline visual en detalle de producto muestra 4-6 hitos con rangos estimados.
- [ ] Cada opción de servicio explica incluidos/excluidos y diferencias de precio o alcance.
- [ ] Proceso constructivo incluye 4-6 pasos con imágenes/iconos.
- [ ] Comparativa con construcción tradicional cubre tiempo, coste, eficiencia, desperdicio, durabilidad y garantía con números reales o estimados marcados.
- [ ] CTA final: "Empezar mi proyecto" o "Hablar con un asesor".

---

### Épica 2.2: Calidad, Normativa, Garantías y Documentación Técnica

**Objetivo:** Centralizar la confianza técnica de NordiK y convertir dudas sobre calidad, normativa o garantías en razones para solicitar presupuesto.

**Alcance agrupado:**
- Página o sección de calidad, normativa y garantías.
- Certificaciones, estándares energéticos, sellos ambientales y documentación técnica verificable.
- Detalle de garantías por estructura, materiales, técnica y servicio postventa.
- Proceso de reclamación y condiciones de garantía.
- Reutilización de contenido técnico en producto, FAQ, formulario y "Por qué NordiK".

**Criterios de aceptación:**
- [ ] Sección de materiales y sistema constructivo con datos verificables.
- [ ] Eficiencia energética y aislamiento se explican con R-value, estándares o datos documentados.
- [ ] Certificaciones/logos solo se muestran si existen y están verificadas.
- [ ] Cada certificado incluye año, versión o enlace a PDF cuando aplique.
- [ ] Si no hay PDF público, usar "documentación disponible bajo solicitud".
- [ ] Garantías muestran plazos validados por contrato/proveedor y condiciones de mantenimiento.
- [ ] PDF o página de términos de garantía disponible.
- [ ] Proceso de reclamación explicado en lenguaje claro.
- [ ] Copy prudente: "cumplimiento aplicable", "según proyecto", "sujeto a condiciones" y "documentación bajo solicitud".

---

### Épica 2.3: Marca, Prueba Social y Casos Reales

**Objetivo:** Humanizar NordiK y añadir evidencia real de capacidad, satisfacción y experiencia.

**Alcance agrupado:**
- Página `/sobre-nosotros` con historia, misión, visión, valores y equipo.
- Testimonios, ratings, reseñas verificadas y referencias de clientes.
- Estadísticas actualizadas: proyectos completados, clientes, años operando, satisfacción.
- Case studies con antes/después, métricas, presupuesto orientativo y aprendizajes.
- Sección "Por qué elegirnos" con micro-testimonios asociados a claims clave.

**Criterios de aceptación:**
- [ ] Sobre nosotros incluye historia de 300-500 palabras, hitos principales y equipo/founder si existe.
- [ ] Valores y visión se presentan con iconografía coherente y lenguaje alineado a sostenibilidad, diseño y confianza.
- [ ] Testimonios incluyen nombre, foto si hay permiso, proyecto/ubicación y texto de 100-150 palabras.
- [ ] Reviews muestran fuente, última actualización y badge "Cliente verificado" cuando aplique.
- [ ] Estadísticas se actualizan al menos trimestralmente y evitan números inflados sin soporte.
- [ ] Case studies incluyen contexto, solución, resultados, fotos antes/después y enlace a detalle o PDF.
- [ ] Logos o nombres de clientes se muestran solo con permiso.

---

## 🟡 PRIORIDAD 3: UX, SOPORTE Y CONTENIDO (2 semanas)

### Épica 3.0: UX Visual, Accesibilidad y Navegación

**Objetivo:** Hacer la experiencia más clara, moderna y escaneable en home, catálogo, producto y contacto.

**Alcance agrupado:**
- Jerarquía visual en H1/H2, contraste, tipografía y espaciado.
- Iconografía coherente para servicios, características y proceso.
- Hover effects en tarjetas y feedback visual.
- Breadcrumbs en detalle y navegación consistente.
- Mejoras específicas de filtros: badge de filtros activos, scroll al top, drawer mobile y query params.

**Criterios de aceptación:**
- [ ] H1 usa 48-56px en desktop cuando el diseño lo permita; H2 usa 32-40px.
- [ ] Body text mínimo 16px, line-height 1.6-1.8 y contraste WCAG AA.
- [ ] Espaciado entre secciones 60-80px y padding de tarjetas 24-32px.
- [ ] Set de 6-8 iconos consistente para servicios, proceso y tarjetas.
- [ ] Tarjetas clicables tienen hover sutil, shadow, transición 200-300ms y cursor correcto.
- [ ] Breadcrumbs funcionales en `/proyecto/{slug}`.
- [ ] Cambiar filtros hace scroll suave hacia resultados cuando mejore la comprensión.
- [ ] Badge muestra número de filtros activos y desaparece si no hay filtros.

---

### Épica 3.1: FAQ, Recursos de Soporte y Educación Comercial

**Objetivo:** Resolver preguntas frecuentes antes del contacto y preparar contenido reusable para ventas, soporte y SEO.

**Alcance agrupado:**
- Página `/faq` con búsqueda, acordeones y categorías.
- Preguntas clave sobre proceso, entrega, garantía, personalización, costes, financiación, cobertura, aislamiento SIP y normativa.
- Enlaces a FAQ desde formulario, producto, contacto y páginas técnicas.
- Recursos educativos que puedan evolucionar hacia blog/guías.

**Criterios de aceptación:**
- [ ] FAQ incluye 12-15 preguntas iniciales con categorías: Proceso, Garantía, Financiamiento, Técnica, Costes y Entrega.
- [ ] Incluye respuestas sobre qué incluye/no incluye el precio base, normativas europeas aplicables y documentación técnica.
- [ ] Accordion accesible con búsqueda interna.
- [ ] Link "Ver FAQ primero" aparece en formulario sin bloquear el envío.
- [ ] Respuestas usan lenguaje claro y prudente, con enlaces a specs/documentación cuando exista.

---

## 🟢 PRIORIDAD 4: FUNCIONALIDADES AVANZADAS (4+ semanas)

### Épica 4.0: Configuración, Cotización Avanzada y Portal de Cliente

**Objetivo:** Evolucionar de captación manual a una experiencia más interactiva, con personalización, cotización y seguimiento.

**Alcance agrupado:**
- Visualizador 3D o planos interactivos.
- Cambio de acabados en tiempo real y cálculo de precio dinámico.
- Carrito/lista de proyectos, favoritos e historial de cotizaciones.
- Generación automática de PDF de presupuesto.
- Sistema de cuentas y portal postventa con documentos, tracking y soporte.

**Criterios de aceptación:**
- [ ] Visualizador permite rotar, zoom y vistas predefinidas si hay modelos 3D disponibles.
- [ ] Selector de acabados actualiza visualización y precio cuando existan datos validados.
- [ ] Planos interactivos muestran dimensiones, zoom y descarga PDF.
- [ ] Carrito permite añadir proyectos/materiales, cantidades, totales y edición de items.
- [ ] PDF de cotización incluye proyectos, cantidades, precios, términos, fecha, logo y número único.
- [ ] Favoritos requieren login y permiten comparar o retomar cotizaciones.
- [ ] Portal cliente permite descargar contrato, planos, especificaciones, garantía y documentos técnicos.
- [ ] Tracking muestra estado de fabricación/entrega y canal de soporte.

---

### Épica 4.1: Contenido SEO, Automatización Comercial e Integraciones

**Objetivo:** Escalar adquisición orgánica y seguimiento comercial cuando el core de conversión ya esté validado.

**Alcance agrupado:**
- Blog/recursos con artículos educativos y case studies.
- Optimización SEO: keyword research, meta descriptions, estructura H2/H3, alt text e internal linking.
- Newsletter para lead nurturing.
- Integración CRM para leads, dashboard de cotizaciones y seguimiento comercial.
- Integración de pago/ecommerce solo si el modelo comercial lo justifica.

**Criterios de aceptación:**
- [ ] Blog incluye listado, búsqueda, filtros por categoría y paginación o "Cargar más".
- [ ] Artículos iniciales cubren paneles SIP, construcción sostenible, diseño escandinavo, proceso de compra y casos reales.
- [ ] Cada artículo tiene autor, fecha, última actualización, tiempo de lectura y 3-5 enlaces internos.
- [ ] Newsletter usa doble opt-in y mensaje de valor claro.
- [ ] CRM sincroniza nombre, email, teléfono, proyecto, presupuesto, ubicación y fuente de lead.
- [ ] Dashboard comercial muestra cotizaciones pendientes, aceptadas, cerradas, vendedor, fecha, monto y próximas acciones.
- [ ] Pagos online contemplan Stripe/Redsys/transferencia solo si hay checkout real y cumplimiento PCI.

---

## 📊 RESUMEN POR ÉPICA

| Épica | Grupo Principal | Prioridad | Duración |
|-------|-----------------|-----------|----------|
| 1.0 | Posicionamiento, CTAs y Contacto Comercial | P1 | 3-5 días |
| 1.1 | Catálogo, Búsqueda, Filtros y Comparación | P1 | 1-2 sem |
| 1.2 | Detalle de Producto, Modelos y Contenido Visual | P1 | 2-3 sem |
| 1.3 | Formulario, Contacto y Seguimiento del Lead | P1 | 1-2 sem |
| 2.0 | Precio, Presupuesto, Pagos y Asequibilidad | P2 | 1 sem |
| 2.1 | Proceso, Timeline y Acompañamiento | P2 | 1 sem |
| 2.2 | Calidad, Normativa, Garantías y Documentación Técnica | P2 | 1 sem |
| 2.3 | Marca, Prueba Social y Casos Reales | P2 | 1-2 sem |
| 3.0 | UX Visual, Accesibilidad y Navegación | P3 | 3-5 días |
| 3.1 | FAQ, Recursos de Soporte y Educación Comercial | P3 | 5 días |
| 4.0 | Configuración, Cotización Avanzada y Portal de Cliente | P4 | 3-4 sem |
| 4.1 | Contenido SEO, Automatización Comercial e Integraciones | P4 | 2-4 sem |

**Total compacto: 12 grupos principales | Duración estimada: 10-14 semanas**

---

## 🚀 ROADMAP RECOMENDADO

**Semanas 1-2:**
- [ ] P1.0: Posicionamiento, hero, propuesta de valor, CTAs y contacto rápido.
- [ ] P1.1: Búsqueda, filtros principales, estado en URL y reparación de enlaces a proyectos.
- [ ] P1.3: Formulario mínimo de presupuesto con campos de cualificación y privacidad.

**Semanas 3-4:**
- [ ] P1.2: Páginas de detalle para modelos prioritarios con galería, specs, precio orientativo y CTA.
- [ ] P2.0: Bloques de precio, incluidos/excluidos, pagos y guía de presupuesto.
- [ ] P2.1: Página `/como-funciona`, timeline y opciones de servicio.

**Semanas 5-6:**
- [ ] P2.2: Calidad, normativa, garantías y documentación técnica reusable.
- [ ] P2.3: Sobre nosotros, testimonios, estadísticas y primeros case studies.
- [ ] P3.0: Ajustes UX críticos de legibilidad, filtros mobile, breadcrumbs y tarjetas.

**Semanas 7-8:**
- [ ] P3.1: FAQ y recursos educativos enlazados desde contacto/producto.
- [ ] P1.1: Comparador de proyectos y cotización comparativa.
- [ ] P1.2: Galería avanzada, videos/tours o antes/después si hay material.

**Semanas 9-14:**
- [ ] P4.0: Configurador, PDF de cotización, favoritos, portal o tracking según prioridad comercial.
- [ ] P4.1: Blog, SEO, newsletter, CRM, dashboard comercial e integraciones de pago si aplica.

---

## ✅ MÉTRICAS DE ÉXITO

**Post-lanzamiento (2-4 semanas):**
- [ ] CTR de "Solicitar Presupuesto": 3-5%.
- [ ] Conversión de contacto: 1-2%.
- [ ] Bounce rate: <50%.
- [ ] Tiempo en sitio: 2-3 minutos.
- [ ] Clicks en teléfono/WhatsApp/email desde header y contacto rápido.
- [ ] Visitas a `/como-funciona`, páginas de producto y contenido de calidad/garantías.
- [ ] Porcentaje de leads con proyecto, ubicación y presupuesto informado.

**3+ meses:**
- [ ] Leads mensuales: +50% vs. baseline.
- [ ] Conversión de leads a cliente: 10-15%.
- [ ] Satisfacción cliente (NPS): 50+.
- [ ] Retorno de inversión de features: 2-3x.
- [ ] Reducción de preguntas repetidas gracias a FAQ y páginas de proceso/calidad.

---

**Documento creado: 30 Abril 2026**
**Última compactación: 12 Mayo 2026**
# NordiK Features Plan - OpenSpec Framework

## Resumen Ejecutivo
Plan de implementación de features para NordiK (portal B2B/B2C de casas prefabricadas nórdicas). Organizado en 4 prioridades, con features enumeradas y épicas accionables para convertir después a specs OpenSpec.

**Ejes de posicionamiento incorporados desde el nuevo análisis:**
- Orientación comercial clara: convertir visitantes en leads para construir su casa propia, no solo explorar un catálogo.
- Mensaje aspiracional: casa eficiente, bonita, de diseño nórdico y con precio más accesible que la construcción tradicional.
- Confianza técnica: cumplimiento normativo europeo aplicable, documentación técnica verificable, control de calidad, garantías y acompañamiento.
- Utilidad moderna: páginas de producto completas, proceso explicado, contacto rápido, comparativas, financiación/orientación de presupuesto y CTAs contextuales.

---

## 🔴 PRIORIDAD 1: CRÍTICAS (2-3 semanas)

### Épica 1.0: Posicionamiento Comercial y Mensaje Principal

**F1.0.1 - Hero Aspiracional Orientado a Construir**
- Descripción: Reescribir el hero de la home para comunicar "tu casa propia, eficiente y de diseño nórdico, a un precio más accesible" con foco en solicitud de presupuesto.
- Beneficio: El usuario entiende en segundos qué vende NordiK, por qué es relevante y cuál es el siguiente paso.
- Criterios de aceptación:
  - [ ] H1 comunica casa propia + diseño nórdico + eficiencia + precio accesible sin promesas absolutas.
  - [ ] Subtítulo explica construcción prefabricada/SIP, acompañamiento y presupuesto personalizado.
  - [ ] CTA primario: "Solicitar Presupuesto" o "Cotizar mi Casa".
  - [ ] CTA secundario: "Ver Modelos" o "Cómo Funciona".
  - [ ] Incluir micro-copy de confianza: normativa europea aplicable, garantías y asesoría técnica.

**F1.0.2 - Bloque de Propuesta de Valor**
- Descripción: Crear una sección breve con 4 razones para elegir NordiK: precio accesible, eficiencia energética, diseño moderno y acompañamiento técnico.
- Beneficio: Refuerza diferenciadores frente a competidores y construcción tradicional.
- Criterios de aceptación:
  - [ ] 4 cards con iconos y texto de 1-2 líneas.
  - [ ] Evitar claims no verificables; usar "desde", "estimado", "según proyecto" cuando aplique.
  - [ ] Enlazar cada razón a contenido ampliado: catálogo, proceso, garantías o contacto.
  - [ ] Incluir CTA final: "Hablar con un asesor".

**F1.0.3 - Contacto Rápido en Header**
- Descripción: Mostrar teléfono/email o WhatsApp en header para reducir fricción en leads calientes.
- Beneficio: Mejora confianza y permite contacto inmediato sin buscar la página de contacto.
- Criterios de aceptación:
  - [ ] Teléfono clicable con `tel:` en desktop y mobile.
  - [ ] Email clicable con `mailto:` o enlace a formulario.
  - [ ] Botón destacado "Solicitar Presupuesto" siempre visible.
  - [ ] En mobile, contacto accesible desde menú o botón sticky.

### Épica 1.1: Funcionalidad de Filtros y Búsqueda

**F1.1.1 - Búsqueda por Texto de Proyecto**
- Descripción: Implementar buscador que filtre proyectos por nombre, ubicación o características
- Beneficio: Usuarios encuentran proyectos específicos sin navegar manualmente
- Criterios de aceptación:
  - [ ] Input de búsqueda visible en header
  - [ ] Filtra proyectos en tiempo real
  - [ ] Muestra "No hay resultados" cuando aplica
  - [ ] Busca en: nombre, ciudad, tipo de proyecto

**F1.1.2 - Filtros Dinámicos con Rango de Precios**
- Descripción: Rango de precios (€0-€400,000) debe actualizarse según productos filtrados
- Beneficio: Rango refleja realidad de datos disponibles, evita búsquedas vacías
- Criterios de aceptación:
  - [ ] Rango de precios actualiza al filtrar por tipo
  - [ ] Valores min/max recalculan dinámicamente
  - [ ] Input numéricos funcionan con valores actuales

**F1.1.3 - Filtro por Número de Habitaciones**
- Descripción: Agregar filtro para seleccionar cantidad de dormitorios/baños
- Beneficio: Búsqueda más precisa según necesidades familiares
- Criterios de aceptación:
  - [ ] Checkboxes/select para 1, 2, 3, 4+ habitaciones
  - [ ] Filtros combinables (múltiple selección)
  - [ ] Actualiza resultados en tiempo real

**F1.1.4 - Filtro por Eficiencia Energética**
- Descripción: Filtro por categoría energética (A, B, C, D, etc.)
- Beneficio: Usuarios sostenibilidad-conscientes encuentran opciones verdes
- Criterios de aceptación:
  - [ ] Mostrar etiqueta energética (A-F) en tarjetas
  - [ ] Filtro por categoría seleccionada
  - [ ] Ordenable: mejor a peor eficiencia

**F1.1.5 - Filtro por Tiempo de Entrega**
- Descripción: Filtrar por velocidad de entrega (0-3 meses, 3-6 meses, 6+ meses)
- Beneficio: Usuarios con urgencia encuentran opciones rápidas
- Criterios de aceptación:
  - [ ] 3 rangos de tiempo seleccionables
  - [ ] Valor de entregas mostrado en tarjetas
  - [ ] Actualiza resultados dinámicamente

**F1.1.6 - Vista Grid vs. Lista**
- Descripción: Alternar entre visualización en grid (3 cols) o lista (1 fila)
- Beneficio: Preferencia visual del usuario, mejor en mobile con vista lista
- Criterios de aceptación:
  - [ ] 2 botones togglables: Grid/Lista
  - [ ] Estado persiste en sesión
  - [ ] Responsive en ambas vistas

**F1.1.7 - Sidebar Persistente de Filtros**
- Descripción: Panel lateral con todos los filtros activos visibles, opción "Limpiar todo"
- Beneficio: Claridad sobre qué filtros están aplicados, fácil reset
- Criterios de aceptación:
  - [ ] Sidebar visible desktop (mobile: collapsible)
  - [ ] Muestra filtros activos con X para remover
  - [ ] Botón "Limpiar Filtros" resetea todo
  - [ ] Resultado contador: "Mostrando 12 de 240"

**F1.1.8 - Ordenamiento Extendido**
- Descripción: Agregar opciones: precio (menor/mayor), tamaño, eficiencia, tiempo entrega
- Beneficio: Usuarios ordenan por lo que importa (precio, sostenibilidad, velocidad)
- Criterios de aceptación:
  - [ ] Dropdown con 5+ opciones de ordenamiento
  - [ ] Ascendente/Descendente seleccionable
  - [ ] Estado refleja en URL

---

### Épica 1.2: Páginas de Detalle de Producto

**F1.2.1 - Crear Ruta /proyecto/{slug}**
- Descripción: Crear página individual para cada proyecto con URL amigable
- Beneficio: Cada proyecto tiene página única, mejorable y enlazable
- Criterios de aceptación:
  - [ ] URLs: /proyecto/kuusamo, /proyecto/tampere, etc.
  - [ ] 404 si proyecto no existe
  - [ ] Breadcrumb: Home > Proyectos > [Nombre]

**F1.2.2 - Galería de Imágenes (8-10+ fotos)**
- Descripción: Lightbox interactivo con mínimo 8 imágenes por proyecto
- Beneficio: Usuarios ven proyecto desde múltiples ángulos, genera confianza
- Criterios de aceptación:
  - [ ] Lightbox con navegación (prev/next)
  - [ ] Zoom en imagen
  - [ ] Thumbnails abajo (1-2 líneas)
  - [ ] Optimizadas para carga rápida

**F1.2.3 - Especificaciones Técnicas Completas**
- Descripción: Sección con specs: paneles SIP (espesor, R-value), acabados, personalización, documentación técnica y normativa aplicable
- Beneficio: Clientes entienden exactamente qué están comprando y ganan confianza técnica antes de pedir presupuesto
- Criterios de aceptación:
  - [ ] Especificación de panel SIP: espesor (cm), R-value (insulación)
  - [ ] Cantidad: dormitorios, baños, área útil
  - [ ] Acabados incluidos (techo, piso, pintura, puertas)
  - [ ] Opciones de personalización disponibles
  - [ ] Normativas, certificaciones o estándares aplicables mostrados solo si están documentados
  - [ ] Descarga de ficha técnica o solicitud de documentación técnica

**F1.2.4 - Timeline de Construcción y Entrega**
- Descripción: Mostrar fases constructivas (diseño → fabricación → entrega) con duraciones
- Beneficio: Claridad en cronograma, gestiona expectativas
- Criterios de aceptación:
  - [ ] Línea de tiempo visual (4-6 hitos)
  - [ ] Fechas estimadas o rangos (ej: "6-8 semanas")
  - [ ] Descripción de cada fase
  - [ ] Opción para customización (agrega tiempo)

**F1.2.5 - Descripción de Opciones de Servicio**
- Descripción: Diferenciar: solo paneles SIP vs. llave en mano vs. reforma
- Beneficio: Usuarios entienden modelo de servicio, pueden elegir nivel involucramiento
- Criterios de aceptación:
  - [ ] 3 cards o tabs: Opciones de Servicio
  - [ ] Descripción clara de cada una
  - [ ] Diferencia de precio explícita
  - [ ] Incluidos/excluidos en cada opción: transporte, montaje, estudio de terreno, permisos y acabados
  - [ ] Garantía, documentación técnica y cumplimiento normativo europeo aplicable

**F1.2.6 - Proceso Constructivo Explicado**
- Descripción: Sección con descripción de cómo se construye, ventajas de SIP
- Beneficio: Educación sobre método, diferenciación vs. construcción tradicional
- Criterios de aceptación:
  - [ ] 4-6 pasos del proceso con imágenes/íconos
  - [ ] Explicación de por qué SIP es mejor (velocidad, eficiencia, calidad)
  - [ ] Comparativa con construcción tradicional (tiempo/costo)
  - [ ] Explicar eficiencia y normativa europea aplicable con lenguaje verificable

**F1.2.7 - CTA Contextual: "Solicitar Cotización"**
- Descripción: Botón prominente en detalle de proyecto que abre formulario pre-filled
- Beneficio: Conversión directa, menos fricción
- Criterios de aceptación:
  - [ ] Botón grande (primary color) en header + final de página
  - [ ] Click abre modal/página con formulario
  - [ ] Campo "Proyecto" pre-filled con nombre
  - [ ] CTAs flotante en mobile

**F1.2.8 - Proyectos Relacionados**
- Descripción: Al final, mostrar 3-4 proyectos similares (mismo tipo, rango precio)
- Beneficio: Cross-selling, usuario puede explorar alternativas
- Criterios de aceptación:
  - [ ] 4 cards de proyectos similares
  - [ ] Enlace directo a detalle de cada uno
  - [ ] "Más como este" o "También te puede interesar"

**F1.2.9 - Bloque de Precio, Opcionales y Pagos**
- Descripción: Mostrar precio base, qué incluye, opcionales principales y esquema de pagos orientativo por proyecto.
- Beneficio: Reduce incertidumbre económica y refuerza el posicionamiento de precio accesible.
- Criterios de aceptación:
  - [ ] Precio base visible con nota "desde" o "estimado" si depende de configuración, transporte o permisos.
  - [ ] Desglose de incluidos/excluidos para evitar expectativas falsas.
  - [ ] Opcionales frecuentes con rango o coste orientativo cuando exista dato validado.
  - [ ] Esquema de pagos orientativo explicado como sujeto a contrato/proyecto.
  - [ ] CTA: "Recibir presupuesto detallado".

---

### Épica 1.3: Reparar Enlaces Rotos

**F1.3.1 - Validar Todos los Enlaces a Proyectos**
- Descripción: Auditar todos los links en catalog que deberían ir a detalle
- Beneficio: Usuarios no llegan a 404, confianza en sitio
- Criterios de aceptación:
  - [ ] Todos los proyectos (Saariselkä, Rovaniemi, Inari, etc.) tienen link funcional
  - [ ] Enlaces en tarjetas van a /proyecto/{slug}
  - [ ] Verificación: 0 enlaces rotos

**F1.3.2 - Crear Detalle para Proyectos Sin Página**
- Descripción: Crear página /proyecto/{slug} para los 3-5 proyectos faltantes
- Beneficio: Cobertura completa de producto
- Criterios de aceptación:
  - [ ] Mínimo 8 imágenes por proyecto
  - [ ] Especificaciones completas
  - [ ] CTA de cotización

---

### Épica 1.4: Mejorar Formulario de Contacto

**F1.4.1 - Tipo de Proyecto: Múltiple Selección**
- Descripción: Cambiar "Tipo de Proyecto" a checkboxes (permite >1 selección)
- Beneficio: Usuarios interesados en múltiples opciones pueden indicarlo
- Criterios de aceptación:
  - [ ] Checkboxes en lugar de radio buttons
  - [ ] Mínimo 1, máximo ilimitado
  - [ ] Validación: debe seleccionar al menos 1

**F1.4.2 - Campo: Presupuesto Aproximado**
- Descripción: Agregar select con rangos: <€50k, €50-100k, €100-200k, €200k+
- Beneficio: Filtro de leads temprano, personalización de respuesta
- Criterios de aceptación:
  - [ ] Dropdown con 4 rangos
  - [ ] Campo obligatorio
  - [ ] Incluido en confirmación de envío

**F1.4.3 - Campo: Ubicación del Proyecto**
- Descripción: Agregar select/input para país/región donde se construirá
- Beneficio: Datos de territorio, capacidad de entrega
- Criterios de aceptación:
  - [ ] Dropdown: España, Portugal, Francia, otros
  - [ ] Opcional (en caso de exploración temprana)
  - [ ] Incluido en email de lead

**F1.4.4 - Campo: ¿Busca Financiamiento?**
- Descripción: Checkbox "Interesado en opciones de financiamiento"
- Beneficio: Identifica leads con necesidad de crédito
- Criterios de aceptación:
  - [ ] Checkbox simple sí/no
  - [ ] Condicional: si sí, muestra opciones de entidades
  - [ ] Datos enviados al CRM
  - [ ] Contactamos con Bancos Especializados

**F1.4.5 - Casilla de Términos y Privacidad**
- Descripción: Agregar checkbox obligatorio: "Acepto términos y privacidad"
- Beneficio: Cumplimiento GDPR, consentimiento explícito
- Criterios de aceptación:
  - [ ] Checkbox con link a /privacidad y /terminos
  - [ ] Obligatorio para envío
  - [ ] Validación visible en frontend + backend

**F1.4.6 - Validación Visible y Mensajes de Error**
- Descripción: Mostrar errores en tiempo real (email inválido, teléfono, etc.)
- Beneficio: Mejor UX, menos resubmisiones
- Criterios de aceptación:
  - [ ] Validación onBlur/onChange
  - [ ] Mensajes de error rojo debajo de campo
  - [ ] Submit deshabilitado si hay errores
  - [ ] Indicador visual de campos obligatorios

**F1.4.7 - Mensaje de Éxito Post-Envío**
- Descripción: Modal o página de confirmación tras envío exitoso
- Beneficio: Usuario confirma que llegó, reduce ansiedad
- Criterios de aceptación:
  - [ ] Modal con "Gracias, tu solicitud fue enviada"
  - [ ] Número de seguimiento o ID generado
  - [ ] Información: "Te contactaremos en 24-48h"
  - [ ] Botón: "Volver a inicio" o "Explorar más proyectos"

**F1.4.8 - Autorespuesta por Email**
- Descripción: Email automático enviado al cliente confirmando recepción
- Beneficio: Seguridad para usuario, trazabilidad
- Criterios de aceptación:
  - [ ] Email con resumen de solicitud
  - [ ] Número/ID de ticket único
  - [ ] SLA: contacto en 24-48 horas
  - [ ] Link a FAQ o recursos útiles

<!-- **F1.4.9 - Opción de Subir Documentos/Planos**
- Descripción: Agregar file upload para referencias, planos, imágenes
- Beneficio: Contexto más rico para propuesta, customización posible
- Criterios de aceptación:
  - [ ] Input file: PDF, JPG, PNG, max 10MB
  - [ ] Múltiple archivos (3-5 máximo)
  - [ ] Preview de archivos antes de envío
  - [ ] Almacenaje seguro en backend -->

---

### Épica 1.5: Actualizar Contacto y Ubicación

**F1.5.1 - Mostrar Múltiples Ubicaciones**
- Descripción: Si NordiK tiene varias oficinas, mostrar todas (Helsinki, Madrid, etc.)
- Beneficio: Clientes ven presencia local/regional
- Criterios de aceptación:
  - [ ] Card por cada oficina con dirección
  - [ ] Mapa interactivo mostrando ubicaciones
  - [ ] Horarios de atención
  - [ ] Número de teléfono específico por región

**F1.5.2 - Números Telefónicos por País/Región**
- Descripción: Teléfono específico para España, Portugal, Francia, etc.
- Beneficio: Llamadas locales, mejor soporte regional
- Criterios de aceptación:
  - [ ] Números con código país (+34, +33, +351, etc.)
  - [ ] WhatsApp disponible (si aplica)
  - [ ] Link tel: activo en móviles

**F1.5.3 - Horarios de Atención Claros**
- Descripción: Mostrar horarios por zona (ej: 09:00-18:00 Madrid, 10:00-19:00 Helsinki)
- Beneficio: Claridad, usuario sabe cuándo llamar
- Criterios de aceptación:
  - [ ] Horarios por ubicación
  - [ ] Indicador: "Abierto ahora" (real-time)
  - [ ] Zona horaria visible

**F1.5.4 - Chat en Vivo o Chatbot**
- Descripción: Integrar chat en tiempo real o bot inicial para lead qualification
- Beneficio: Captura leads fuera de horario, respuesta 24/7
- Criterios de aceptación:
  - [ ] Widget en esquina bottom-right
  - [ ] Bot para FAQ iniciales o escalation a agente
  - [ ] Disponibilidad de agentes en horario laboral
  - [ ] Historial de chat guardado

**F1.5.5 - Mapa Interactivo de Oficinas**
- Descripción: Mapa (Google Maps) con pinpoints de cada ubicación
- Beneficio: Visualización, directions directo desde sitio
- Criterios de aceptación:
  - [ ] Mapa responsive
  - [ ] Pinpoint clickeable → detalles de oficina
  - [ ] Link "Cómo llegar" directo a Google Maps
  - [ ] Información: dirección, teléfono, horario en popup

**F1.5.6 - Barra de Confianza y Contacto**
- Descripción: Añadir una franja visible en home/contacto con teléfono, email, zonas de servicio y mensaje de asesoría para construir.
- Beneficio: Hace la web más útil para clientes listos para consultar y refuerza la cercanía comercial.
- Criterios de aceptación:
  - [ ] Mostrar canales de contacto principales en una sola fila o card compacta.
  - [ ] Indicar zonas de servicio de forma prudente: "consultar disponibilidad por región".
  - [ ] CTA de llamada y CTA de formulario claramente diferenciados.
  - [ ] Texto orientado a lead: "Cuéntanos dónde quieres construir y te orientamos".

---

## 🟠 PRIORIDAD 2: IMPORTANTES (3-4 semanas)

### Épica 2.1: Sección "Sobre Nosotros"

**F2.1.1 - Historia de la Empresa**
- Descripción: Página /sobre-nosotros con historia, fundación, misión
- Beneficio: Humaniza marca, genera confianza a través de narrativa
- Criterios de aceptación:
  - [ ] Timeline: fundación → hitos principales → presente
  - [ ] 300-500 palabras de storytelling
  - [ ] Foto del founder/equipo fundador

**F2.1.2 - Equipo y Expertos**
- Descripción: Cards de miembros clave: foto, nombre, rol, experiencia
- Beneficio: Prueba social, personas reales detrás de la marca
- Criterios de aceptación:
  - [ ] 5-8 miembros del equipo
  - [ ] Foto profesional + nombre + rol + bio corta
  - [ ] Link a LinkedIn (opcional)

**F2.1.3 - Certificaciones y Estándares**
- Descripción: Mostrar certificaciones, estándares energéticos, documentación técnica y normativa europea aplicable cuando estén verificados
- Beneficio: Credibilidad técnica, cumplimiento regulatorio
- Criterios de aceptación:
  - [ ] Logos o menciones solo de certificaciones realmente disponibles
  - [ ] Año de obtención o versión del documento cuando aplique
  - [ ] Link a certificado/ficha técnica (PDF) o mensaje "documentación disponible bajo solicitud"
  - [ ] Evitar afirmaciones absolutas de cumplimiento si no hay soporte documental

**F2.1.4 - Proceso Constructivo Detallado**
- Descripción: Explicar paso a paso cómo se construye (fases, control calidad)
- Beneficio: Transparencia, diferenciación vs. competencia
- Criterios de aceptación:
  - [ ] 6-8 pasos con imágenes
  - [ ] Duración estimada por fase
  - [ ] QA checkpoints detallados

**F2.1.5 - Visión y Valores**
- Descripción: Declaración de visión y 3-4 valores core de empresa
- Beneficio: Alineación con clientes sustainability-minded
- Criterios de aceptación:
  - [ ] Sección con visión (2-3 párrafos)
  - [ ] 4 valores con descripción de cada uno
  - [ ] Iconografía coherente

**F2.1.6 - Referencias de Clientes Destacados**
- Descripción: Logo/nombre de clientes notables (con permiso)
- Beneficio: Social proof inmediato
- Criterios de aceptación:
  - [ ] 6-10 logos de clientes
  - [ ] Nombre y descripción corta si permitido
  - [ ] Link opcional a proyecto específico

---

### Épica 2.2: Social Proof y Testimonios

**F2.2.1 - Página de Testimonios**
- Descripción: Página /testimonios con mínimo 5-6 testimonios de clientes reales
- Beneficio: Social proof fuerte, reduce fricción de compra
- Criterios de aceptación:
  - [ ] 5-6 testimonios: nombre, foto, rol, texto (100-150 palabras)
  - [ ] Video testimonios (si disponible)
  - [ ] Proyecto/ubicación del cliente
  - [ ] Ratings 4.5-5 stars

**F2.2.2 - Ratings y Reviews**
- Descripción: Integrar sistema de ratings (Google Reviews, Trustpilot, custom)
- Beneficio: Confianza inmediata, feedback públicamente visible
- Criterios de aceptación:
  - [ ] Widget mostrando rating promedio (4.5+)
  - [ ] Desglose: 5★, 4★, 3★, etc.
  - [ ] Link a página completa de reviews
  - [ ] Última actualización visible

**F2.2.3 - Sistema de Reseñas Verificadas**
- Descripción: Mostrar reviews solo de clientes verificados (compra confirmada)
- Beneficio: Evita fake reviews, aumenta credibilidad
- Criterios de aceptación:
  - [ ] Badge "Cliente Verificado" en cada review
  - [ ] Mostrar proyecto o tipo de compra
  - [ ] Email ofuscado (usuario@***)

**F2.2.4 - Estadísticas Actualizadas**
- Descripción: Números: clientes totales, proyectos completados, % satisfacción
- Beneficio: Credibilidad a escala
- Criterios de aceptación:
  - [ ] Actualizado cada trimestre
  - [ ] Desglose: clientes, proyectos, años operando
  - [ ] Comparativa año vs. año si es relevante

**F2.2.5 - Estudios de Caso (Case Studies)**
- Descripción: 2-3 proyectos showcased con antes/después, métricas, aprendizajes
- Beneficio: Demuestra capacidad, inspira confianza
- Criterios de aceptación:
  - [ ] 3 case studies: introducción, contexto, solución, resultados
  - [ ] Fotos antes/después
  - [ ] Números: tamaño proyecto, duración, budget, ROI cliente
  - [ ] Link a detalle o descargar PDF

**F2.2.6 - Sección "Por qué Elegirnos" con Testimonios**
- Descripción: Cada razón (velocidad, eficiencia, etc.) incluye micro-testimonios
- Beneficio: Validación social de claims clave
- Criterios de aceptación:
  - [ ] 6 razones de valor
  - [ ] Cada una con quote corto de cliente
  - [ ] Foto pequeña del cliente

---

### Épica 2.3: Galería Mejorada

**F2.3.1 - Fotos Reales de Proyectos Entregados**
- Descripción: Reemplazar imágenes genéricas con fotos de proyectos reales
- Beneficio: Autenticidad, inspiración visual
- Criterios de aceptación:
  - [ ] Mínimo 3 fotos reales por proyecto
  - [ ] Categorización: exterior, interior, detalles
  - [ ] Atribución/permiso del propietario (si aplica)

**F2.3.2 - Galería Categorizada por Fase**
- Descripción: Organizar fotos: proceso, interiores, detalles, acabados
- Beneficio: Narrativa clara del proyecto de inicio a fin
- Criterios de aceptación:
  - [ ] Tabs: Exterior | Interiores | Detalles | Acabados
  - [ ] Min 3 fotos por categoría
  - [ ] Transiciones smooth entre tabs

**F2.3.3 - Antes/Después en Reformas**
- Descripción: Para proyectos de reforma, mostrar estado inicial vs. final
- Beneficio: Impacto visual de transformación
- Criterios de aceptación:
  - [ ] Slider antes/después (antes a la izquierda)
  - [ ] Múltiples puntos antes/después por reforma
  - [ ] Duración de reforma visible

**F2.3.4 - Videos de Construcción o Tours 3D**
- Descripción: Agregar video timelapse o tour virtual de proyectos
- Beneficio: Engagement alto, comprensión del proceso
- Criterios de aceptación:
  - [ ] 1-2 videos de timelapse (30-90 segundos)
  - [ ] Tours 360 (si presupuesto permite)
  - [ ] Embed YouTube o video propio

**F2.3.5 - Lightbox/Zoom Mejorado en Galerías**
- Descripción: Funcionalidad: zoom, fullscreen, navegación con teclado
- Beneficio: UX premium en galería
- Criterios de aceptación:
  - [ ] Doble click para zoom
  - [ ] Fullscreen mode
  - [ ] Teclado: ← → para navegar, ESC para cerrar
  - [ ] Contador: "3 de 24 fotos"

---

### Épica 2.4: Comparador de Productos

**F2.4.1 - Selector de Proyectos para Comparar**
- Descripción: Permitir seleccionar 2-3 proyectos y ver tabla comparativa
- Beneficio: Decisión más rápida entre opciones
- Criterios de aceptación:
  - [ ] Checkboxes en tarjetas de catálogo
  - [ ] Botón flotante: "Comparar (2 seleccionados)"
  - [ ] Máximo 3 proyectos simultáneamente

**F2.4.2 - Tabla de Comparación**
- Descripción: Side-by-side table: área, precio, specs, tiempo entrega, etc.
- Beneficio: Decisión data-driven
- Criterios de aceptación:
  - [ ] Columnas: Proyecto 1 | Proyecto 2 | Proyecto 3
  - [ ] Filas: Área m², Habitaciones, Baños, Precio, R-value, Tiempo entrega, Personalizable
  - [ ] Diferencias destacadas (green/red si aplica)
  - [ ] Exportar a PDF

**F2.4.3 - CTA: Solicitar Cotización Comparativa**
- Descripción: Botón "Solicitar Presupuesto para Comparación" pre-fills los 3 proyectos
- Beneficio: Conversión directa con múltiples opciones
- Criterios de aceptación:
  - [ ] Botón prominente al final de tabla
  - [ ] Formulario pre-filled con 3 proyectos
  - [ ] Campo extra: "¿Cuál te interesa más?"

---

### Épica 2.5: Expandir Sección "Por Qué NordiK"

**F2.5.1 - Detalles de Garantía Completa**
- Descripción: Especificar garantías disponibles por categoría: estructura, materiales, técnica y servicio post-venta
- Beneficio: Seguridad al cliente, diferenciador clave
- Criterios de aceptación:
  - [ ] Sección "Nuestra Garantía" con breakdown:
    - Estructura: plazo validado por NordiK/contrato
    - Materiales: plazo validado por proveedor/contrato
    - Técnica: plazo validado por NordiK/contrato
  - [ ] PDF descargable: términos completos
  - [ ] Proceso de reclamación explicado
  - [ ] Lenguaje claro: garantías sujetas a condiciones, mantenimiento y contrato

**F2.5.2 - Certificaciones Ambientales**
- Descripción: Mostrar PEFC, FSC u otros sellos de eficiencia/ambientales solo si existen y están documentados
- Beneficio: Atrae clientes eco-conscientes
- Criterios de aceptación:
  - [ ] Logos de certificaciones con descripciones verificables
  - [ ] Impacto ambiental explicado con datos reales o marcado como estimación
  - [ ] Links a certificados verificables

**F2.5.3 - Comparativa vs. Construcción Tradicional**
- Descripción: Tabla: tiempo, costo, eficiencia energética, durabilidad
- Beneficio: Justificación clara de premium vs. competencia
- Criterios de aceptación:
  - [ ] Tabla 2 columnas: SIP Panels | Construcción Tradicional
  - [ ] Filas: Tiempo construcción, Costo total, Eficiencia energética, Desperdicio, Garantía
  - [ ] Números reales/estimados claramente marcados

---

### Épica 2.6: Página "Cómo Funciona" y Compra Guiada

**F2.6.1 - Crear Página /como-funciona**
- Descripción: Explicar el proceso completo desde la consulta inicial hasta la entrega de la vivienda.
- Beneficio: Da claridad a clientes que quieren construir pero no conocen pasos, permisos, tiempos o decisiones.
- Criterios de aceptación:
  - [ ] 6-9 pasos con texto breve, iconos y CTA por etapa.
  - [ ] Incluir consulta inicial, diseño, presupuesto, documentación, fabricación, montaje, entrega y postventa.
  - [ ] Indicar qué depende del cliente, de NordiK y de terceros (terreno, permisos, financiación).
  - [ ] CTA final: "Empezar mi proyecto".

**F2.6.2 - Guía de Presupuesto y Asequibilidad**
- Descripción: Crear contenido que explique precio base, factores que cambian el coste y alternativas para ajustar presupuesto.
- Beneficio: Refuerza el mensaje de mejores precios/precio accesible sin prometer importes cerrados no verificables.
- Criterios de aceptación:
  - [ ] Explicar variables: tamaño, acabados, transporte, terreno, permisos, montaje y opcionales.
  - [ ] Mostrar ejemplos "desde" o rangos solo con datos validados.
  - [ ] Incluir mensaje aspiracional: vivienda propia eficiente y bonita con inversión controlada.
  - [ ] CTA: "Pedir orientación de presupuesto".

**F2.6.3 - Página de Calidad, Normativa y Garantías**
- Descripción: Centralizar la información de calidad constructiva, documentación técnica, cumplimiento normativo europeo aplicable y garantías.
- Beneficio: Convierte dudas técnicas en confianza comercial y prepara contenido reusable para producto, FAQ y contacto.
- Criterios de aceptación:
  - [ ] Sección de materiales y sistema constructivo.
  - [ ] Sección de eficiencia energética y aislamiento con datos verificables.
  - [ ] Sección de garantías con condiciones y enlaces a documentos.
  - [ ] Sección de documentación técnica disponible.
  - [ ] Copy prudente: "cumplimiento aplicable", "según proyecto", "documentación bajo solicitud".

---

## 🟡 PRIORIDAD 3: MEJORAS UX (2 semanas)

### Épica 3.1: Optimizaciones Visuales

**F3.1.1 - Jerarquía Visual Mejorada en Headers**
- Descripción: Aumentar tamaño de H1/H2, peso de fuente, contraste
- Beneficio: Navegación intuitiva, mejor escanabilidad
- Criterios de aceptación:
  - [ ] H1: 48-56px (era menor)
  - [ ] H2: 32-40px
  - [ ] Peso: 600-700 para headings
  - [ ] Line height: 1.2-1.3

**F3.1.2 - Iconografía Coherente para Servicios**
- Descripción: Asignar iconos únicos a cada servicio (llave, paneles, reformas)
- Beneficio: Identificación visual rápida
- Criterios de aceptación:
  - [ ] Set de 6-8 iconos consistentes
  - [ ] Usados en sección de servicios
  - [ ] Usados en tarjetas de producto (si aplica)

**F3.1.3 - Espaciado Mejorado (Padding/Margin)**
- Descripción: Aumentar gaps entre secciones principales (40px → 60px)
- Beneficio: Respiración visual, menos amontonado
- Criterios de aceptación:
  - [ ] Margin entre secciones: 60-80px
  - [ ] Padding dentro tarjetas: 24-32px
  - [ ] Consistencia en todos los breakpoints

**F3.1.4 - Breadcrumbs en Páginas de Detalle**
- Descripción: Agregar navegación migajas: Home > Proyectos > [Nombre]
- Beneficio: Claridad de ubicación, SEO, navegación fácil
- Criterios de aceptación:
  - [ ] Breadcrumbs en header de /proyecto/{slug}
  - [ ] Links funcionales a secciones padre
  - [ ] Último item no clickeable

**F3.1.5 - Hover Effects en Tarjetas**
- Descripción: Agregar zoom sutil (1.02x), shadow deepened, transition smooth
- Beneficio: Feedback visual interactivo, más polido
- Criterios de aceptación:
  - [ ] Tarjetas: transform: scale(1.02) on hover
  - [ ] Shadow aumenta 4px on hover
  - [ ] Transition: 200-300ms ease
  - [ ] Cursor: pointer en clickeable

**F3.1.6 - Tipografía: Body Text Legible**
- Descripción: Aumentar tamaño body (14px → 16px), mejorar contraste
- Beneficio: Mejor legibilidad, menos esfuerzo visual
- Criterios de aceptación:
  - [ ] Body text: 16px mínimo
  - [ ] Line height: 1.6-1.8
  - [ ] Contraste: WCAG AA mínimo (4.5:1)

---

### Épica 3.2: Mejoras en Filtros UX

**F3.2.1 - Indicador Visual de Filtros Activos**
- Descripción: Badge sobre icono de filtro mostrando cantidad (ej: "3")
- Beneficio: Claridad instant sobre qué está filtrado
- Criterios de aceptación:
  - [ ] Badge rojo con número sobre icono de filtro
  - [ ] Desaparece si no hay filtros
  - [ ] Anima al aplicar/remover filtro

**F3.2.2 - Cambio de Filtro = Scroll al Top Automático**
- Descripción: Al aplicar filtro, page scrollea a top para ver resultados
- Beneficio: Evita confusión de "¿por qué no cambia?"
- Criterios de aceptación:
  - [ ] Smooth scroll al cambiar filtro
  - [ ] Opcional: deshabilitar si desplazamiento > 500px
  - [ ] Animation: 300-500ms

**F3.2.3 - Estado de URL: Filtros en Query Params**
- Descripción: URL refleja estado actual de filtros (?type=casas&price=50-200)
- Beneficio: Shareable, bookmarkable, navegación back/forward funciona
- Criterios de aceptación:
  - [ ] ?type=casas,cabanas (múltiple)
  - [ ] ?price=50-200
  - [ ] ?bedrooms=3
  - [ ] Back button restaura estado

**F3.2.4 - Mobile: Filtros en Modal/Drawer**
- Descripción: En mobile, filtros en drawer deslizable o modal
- Beneficio: No consume espacio en mobile
- Criterios de aceptación:
  - [ ] Botón "Filtros" en header mobile
  - [ ] Drawer/modal con todos los filtros
  - [ ] Botón "Aplicar Filtros" al final
  - [ ] Botón "Limpiar" visible

---

### Épica 3.3: Página FAQ

**F3.3.1 - Crear Página /FAQ**
- Descripción: Página con 12-15 preguntas frecuentes resueltas
- Beneficio: Self-service, reduce tickets de soporte
- Criterios de aceptación:
  - [ ] Accordion: pregunta expandible
  - [ ] Búsqueda dentro de FAQ
  - [ ] Categorías: Proceso, Garantía, Financiamiento, Técnica

**F3.3.2 - Responder Preguntas Clave**
- Descripción: Cubrir: proceso, entrega, garantía, personalización, costos, financiamiento, cobertura, aislamiento
- Beneficio: Claridad, reduce fricción pre-compra
- Criterios de aceptación:
  - [ ] ¿Cómo funciona el proceso de compra? (200 palabras)
  - [ ] ¿Cuál es el tiempo de entrega? (200 palabras)
  - [ ] ¿Ofrece servicios de instalación? (200 palabras)
  - [ ] ¿Qué incluye la garantía? (300 palabras)
  - [ ] ¿Se puede personalizar? (200 palabras)
  - [ ] ¿Cuáles son los costos adicionales? (250 palabras)
  - [ ] ¿Financiamiento disponible? (200 palabras)
  - [ ] ¿Dónde entregan? (200 palabras)
  - [ ] ¿Cómo es el aislamiento SIP? (250 palabras)
  - [ ] ¿Qué normativas europeas o documentación técnica aplican? (250 palabras)
  - [ ] ¿Qué incluye y qué no incluye el precio base? (250 palabras)
  - [ ] Otros 5-6 según soporte actual

**F3.3.3 - Link a FAQ desde Formulario**
- Descripción: En formulario de contacto, link "Ver FAQ primero" antes de envío
- Beneficio: Reduce leads que ya tienen respuesta, ahorra tiempo
- Criterios de aceptación:
  - [ ] Link visible en formulario
  - [ ] Abre FAQ en tab/modal
  - [ ] No impide envío si user decide continuar

---

### Épica 3.4: Mejorar Call-to-Actions

**F3.4.1 - Botón CTA Flotante en Scroll**
- Descripción: Botón flotante bottom-right: "Obtener Presupuesto" al scrollear
- Beneficio: CTA siempre accesible, aumenta conversión
- Criterios de aceptación:
  - [ ] Aparece después de scroll > 1000px
  - [ ] Posición: bottom-right con padding 24px
  - [ ] Color: highlight color (madera/castaño)
  - [ ] Click: abre formulario o link a /contacto
  - [ ] Cierre: X button o click fuera

**F3.4.2 - CTA Contextual en Hero**
- Descripción: 2 botones claros: "Solicitar Presupuesto" (primary) y "Ver Modelos" o "Cómo Funciona" (secondary)
- Beneficio: Dirección clara desde inicio
- Criterios de aceptación:
  - [ ] Botón primario: "Solicitar Presupuesto" → /contacto
  - [ ] Botón secundario: "Ver Modelos" → /catalogo o "Cómo Funciona" → /como-funciona
  - [ ] Tamaños grandes, contraste alto

**F3.4.3 - CTA en Tarjetas de Producto**
- Descripción: Agregar botón "Solicitar Cotización" en cada tarjeta
- Beneficio: Conversión directa desde catálogo
- Criterios de aceptación:
  - [ ] Botón secundario en esquina tarjeta o hover
  - [ ] Abre modal con formulario pre-filled (proyecto seleccionado)

**F3.4.4 - CTA al Final de Secciones**
- Descripción: Al fin de cada sección grande (servicios, por qué, etc.), CTA relevante
- Beneficio: Múltiples puntos de conversión
- Criterios de aceptación:
  - [ ] "Por Qué": "Conoce más sobre NordiK" → /sobre-nosotros
  - [ ] "Servicios": "Ver proyectos de [servicio]" → /catalogo?type=casas
  - [ ] "Testimonios": "Solicita tu presupuesto" → /contacto

**F3.4.5 - Micro-copy Persuasivo en CTAs**
- Descripción: Textos en botones más persuasivos (no solo "Enviar")
- Beneficio: Mayor conversión a través de copy
- Criterios de aceptación:
  - [ ] En lugar de "Enviar": "Solicitar Presupuesto Gratis"
  - [ ] En lugar de "Contacto": "Hablar con un Asesor"
  - [ ] En lugar de "Más": "Ver Todos los Proyectos"
  - [ ] Alternativas aspiracionales: "Quiero mi casa NordiK", "Calcular mi proyecto", "Diseñar mi casa"

**F3.4.6 - Botón WhatsApp Flotante (Opcional)**
- Descripción: Icono de WhatsApp flotante bottom-left para contacto directo
- Beneficio: Conversión inmediata vía WhatsApp
- Criterios de aceptación:
  - [ ] Icono flotante WhatsApp
  - [ ] Click abre: https://wa.me/34XXXXX
  - [ ] Números por país/región
  - [ ] Mensaje pre-filled: "Hola, quiero info sobre..."

---

## 🟢 PRIORIDAD 4: FUNCIONALIDADES AVANZADAS (4+ semanas)

### Épica 4.1: Configurador 3D/Visualizador

**F4.1.1 - Visualizador 3D Interactivo**
- Descripción: Permitir rotar, zoomear casa en 3D, view desde ángulos múltiples
- Beneficio: Engagement alto, diferenciador tecnológico
- Criterios de aceptación:
  - [ ] Modelo 3D de proyecto
  - [ ] Rotación con mouse/touch
  - [ ] Zoom in/out
  - [ ] Vistas predefinidas (frente, lateral, aéreo)

**F4.1.2 - Cambio de Acabados en Tiempo Real**
- Descripción: Selector de colores/materiales que actualiza visualización 3D
- Beneficio: Personalización visual, decisión más informada
- Criterios de aceptación:
  - [ ] Selector: color de fachada (3-4 opciones)
  - [ ] Selector: color de techo (3-4 opciones)
  - [ ] Selector: tipo de ventanas (2-3 opciones)
  - [ ] Actualización instant del modelo 3D

**F4.1.3 - Planos Interactivos**
- Descripción: Mostrar planta baja, alta, sección con dimensiones
- Beneficio: Comprensión clara de layout
- Criterios de aceptación:
  - [ ] Tabs: Planta Baja | Planta Alta | Sección
  - [ ] Dimensiones visibles (m²)
  - [ ] Zoom en planos
  - [ ] Descargable como PDF

**F4.1.4 - Cálculo de Precio Dinámico**
- Descripción: Precio se actualiza según personalizaciones seleccionadas
- Beneficio: Transparencia, menos sorpresas
- Criterios de aceptación:
  - [ ] Precio base visible
  - [ ] Upcharges por cada opción de personalización
  - [ ] Total actualiza en tiempo real
  - [ ] Breakdown de costos

---

### Épica 4.2: Sistema de Carrito y Cotización

**F4.2.1 - Carrito de Proyectos/Materiales**
- Descripción: Agregar múltiples proyectos al carrito antes de cotizar
- Beneficio: Compra de múltiples unidades, bulk orders
- Criterios de aceptación:
  - [ ] Icono carrito en header
  - [ ] Botón "Agregar al Carrito" en detalle de proyecto
  - [ ] Modal carrito con items, cantidades, totales
  - [ ] Editar cantidades o remover items

**F4.2.2 - Generación Automática de PDF de Cotización**
- Descripción: Descargar PDF con detalle de carrito + términos
- Beneficio: Cliente tiene documento formal, facilita compra
- Criterios de aceptación:
  - [ ] Botón "Descargar Presupuesto PDF"
  - [ ] PDF incluye: Proyectos, cantidades, precios, subtotal, términos
  - [ ] Logo y branding de NordiK
  - [ ] Fecha y número de cotización único

**F4.2.3 - Guardar Proyectos Favoritos**
- Descripción: Funcionalidad de wishlist/favoritos (requiere login)
- Beneficio: Usuarios vuelven, retargeting de favoritos
- Criterios de aceptación:
  - [ ] Icono corazón en tarjetas
  - [ ] Click guarda a lista de favoritos
  - [ ] Página /favoritos con todos guardados
  - [ ] Comparación entre favoritos
  - [ ] Email notification si favorito baja de precio

**F4.2.4 - Sistema de Cuentas de Usuario**
- Descripción: Registro/login para historial y preferencias
- Beneficio: Personalization, historial de búsquedas/cotizaciones
- Criterios de aceptación:
  - [ ] Sign up: email, password, nombre
  - [ ] Login: email + password + opciones OAuth (Google, LinkedIn)
  - [ ] Perfil: nombre, teléfono, ubicación, preferencias
  - [ ] Email verificación requerida

**F4.2.5 - Historial de Cotizaciones**
- Descripción: Usuario ve todas sus cotizaciones pasadas, puede re-solicitar
- Beneficio: Fácil recompra, historial de búsqueda
- Criterios de aceptación:
  - [ ] Página /historial accesible desde perfil
  - [ ] Tabla: fecha, proyectos, total, estado
  - [ ] Botones: Ver detalle, Re-solicitar, Compartir
  - [ ] Filtros: fecha, estado, total

---

### Épica 4.3: Blog y Recursos SEO

**F4.3.1 - Crear Sección Blog**
- Descripción: Blog con artículos de educación y case studies
- Beneficio: SEO, autoridad en tema, lead nurturing
- Criterios de aceptación:
  - [ ] Página /blog con lista de artículos
  - [ ] Búsqueda y filtros por categoría
  - [ ] Paginación o "Cargar más"

**F4.3.2 - Artículos Temáticos**
- Descripción: Mínimo 8-10 artículos: construcción sostenible, SIP, diseño escandinavo, cases
- Beneficio: Posicionamiento en keywords, educación del cliente
- Criterios de aceptación:
  - [ ] Artículo 1: "Guía Completa a Paneles SIP: Instalación y Beneficios" (2000+ palabras)
  - [ ] Artículo 2: "Construcción Sostenible: Por qué Paneles SIP son la Solución" (1500+ palabras)
  - [ ] Artículo 3: "Diseño Escandinavo Moderno: 5 Elementos Clave" (1200+ palabras)
  - [ ] 5+ case studies en formato artículo

**F4.3.3 - Optimización SEO de Artículos**
- Descripción: Keywords, meta descriptions, internal linking, imágenes optimizadas
- Beneficio: Posicionamiento en Google, tráfico orgánico
- Criterios de aceptación:
  - [ ] Keyword research para cada artículo
  - [ ] Meta description (150 caracteres)
  - [ ] Headers H2/H3 con keywords
  - [ ] 3-5 links internos por artículo
  - [ ] Imágenes con alt text

**F4.3.4 - Autor y Fecha Visible**
- Descripción: Mostrar autor, fecha de publicación, fecha de actualización
- Beneficio: Credibilidad, frescura de contenido
- Criterios de aceptación:
  - [ ] Autor del artículo (foto + bio)
  - [ ] Fecha publicación: formato legible
  - [ ] Actualización: "Última actualización: Abril 2026"
  - [ ] Tiempo de lectura estimado

**F4.3.5 - Newsletter Signup en Blog**
- Descripción: Formulario para suscribirse a newsletter de artículos nuevos
- Beneficio: Email list building, lead nurturing
- Criterios de aceptación:
  - [ ] Popup o form en sidebar
  - [ ] "Recibe artículos sobre [tema]"
  - [ ] Email obligatorio
  - [ ] Confirmación doble-opt-in

---

### Épica 4.4: Integración de Ecommerce

**F4.4.1 - Integración Pasarela de Pago**
- Descripción: Integrar Stripe, Redsys o similar para pagos online
- Beneficio: Compra directa sin cotización manual
- Criterios de aceptación:
  - [ ] Pasarela integrada en checkout
  - [ ] Métodos: tarjeta crédito, transferencia, PayPal
  - [ ] Manejo seguro de PCI compliance
  - [ ] Confirmación post-pago

**F4.4.2 - Integración CRM para Leads**
- Descripción: Conectar formularios/contactos a CRM (HubSpot, Pipedrive, Salesforce)
- Beneficio: Seguimiento automático de leads, integración ventas
- Criterios de aceptación:
  - [ ] Lead data sync automático
  - [ ] Campos mapeados: nombre, email, teléfono, proyecto, presupuesto
  - [ ] Detección de duplicados
  - [ ] Log de actividades: formulario, cotización, llamada

**F4.4.3 - Seguimiento de Cotizaciones**
- Descripción: Dashboard para vendedores: estado de cada cotización, follow-up
- Beneficio: Gestión de sales pipeline
- Criterios de aceptación:
  - [ ] Dashboard admin: cotizaciones pendientes, aceptadas, cerradas
  - [ ] Filtros: vendedor, fecha, monto, estado
  - [ ] Notificaciones: cotización nueva, vencimiento próximo
  - [ ] Historial de comunicaciones por cotización

**F4.4.4 - Portal de Cliente Post-Venta**
- Descripción: Acceso a documentos de proyecto, tracking de entrega, soporte
- Beneficio: Satisfacción post-compra, retención
- Criterios de aceptación:
  - [ ] Login de cliente
  - [ ] Descarga de: contrato, planos, especificaciones
  - [ ] Tracking: estado de fabricación y entrega
  - [ ] Ticket de soporte integrado
  - [ ] Documentos técnicos y garantía

---

## 📊 RESUMEN POR ÉPICA

| Épica | Features | Prioridad | Duración |
|-------|----------|-----------|----------|
| 1.0: Posicionamiento Comercial | 3 | P1 | 3-5 días |
| 1.1: Filtros y Búsqueda | 8 | P1 | 1-2 sem |
| 1.2: Detalle de Producto | 9 | P1 | 2-3 sem |
| 1.3: Enlaces Rotos | 2 | P1 | 3-5 días |
| 1.4: Formulario | 9 | P1 | 1-2 sem |
| 1.5: Contacto | 6 | P1 | 1 sem |
| 2.1: Sobre Nosotros | 6 | P2 | 1-2 sem |
| 2.2: Social Proof | 6 | P2 | 2 sem |
| 2.3: Galería | 5 | P2 | 1-2 sem |
| 2.4: Comparador | 3 | P2 | 1 sem |
| 2.5: Expandir Por Qué | 3 | P2 | 1 sem |
| 2.6: Cómo Funciona y Compra Guiada | 3 | P2 | 1-2 sem |
| 3.1: Visual | 6 | P3 | 3-5 días |
| 3.2: Filtros UX | 4 | P3 | 5-7 días |
| 3.3: FAQ | 3 | P3 | 5 días |
| 3.4: CTAs | 6 | P3 | 5-7 días |
| 4.1: Configurador 3D | 4 | P4 | 3-4 sem |
| 4.2: Carrito/Cotización | 5 | P4 | 3-4 sem |
| 4.3: Blog | 5 | P4 | 2-3 sem |
| 4.4: Ecommerce | 4 | P4 | 3-4 sem |

**Total: features accionables en 20 épicas | Duración estimada: 12-16 semanas**

---

## 🚀 ROADMAP RECOMENDADO

**Semanas 1-2:**
- [ ] P1.0: Posicionamiento, hero, contacto rápido (F1.0.1 - F1.0.3)
- [ ] P1.1: Búsqueda + filtros dinámicos (F1.1.1 - F1.1.3)
- [ ] P1.3: Reparar enlaces (F1.3.1 - F1.3.2)

**Semanas 3-4:**
- [ ] P1.2: Crear página detalle (F1.2.1 - F1.2.8)
- [ ] P1.4: Mejorar formulario (F1.4.1 - F1.4.9)

**Semanas 5-6:**
- [ ] P1.5: Actualizar contacto (F1.5.1 - F1.5.5)
- [ ] P1.1: Filtros restantes (F1.1.4 - F1.1.8)

**Semanas 7-8:**
- [ ] P2.2: Testimonios y social proof (F2.2.1 - F2.2.6)
- [ ] P2.1: Sobre nosotros (F2.1.1 - F2.1.6)
- [ ] P2.6: Cómo funciona, presupuesto y garantías (F2.6.1 - F2.6.3)

**Semanas 9-10:**
- [ ] P2.3: Galería mejorada (F2.3.1 - F2.3.5)
- [ ] P2.4: Comparador (F2.4.1 - F2.4.3)

**Semanas 11-12:**
- [ ] P3: Todas las mejoras UX (F3.1 - F3.4)
- [ ] P2.5: Expandir Por Qué (F2.5.1 - F2.5.3)

**Semanas 13-16:**
- [ ] P4: Configurador, Carrito, Blog, Ecommerce (en paralelo)

---

## ✅ MÉTRICAS DE ÉXITO

**Post-Lanzamiento (2-4 semanas):**
- [ ] CTR de "Solicitar Presupuesto": 3-5%
- [ ] Conversión de contacto: 1-2%
- [ ] Bounce rate: <50%
- [ ] Tiempo en sitio: 2-3 minutos
- [ ] Clicks en teléfono/WhatsApp/email desde header y contacto rápido
- [ ] Visitas a /como-funciona y páginas de garantía/calidad

**3+ Meses:**
- [ ] Leads mensuales: +50% vs. baseline
- [ ] Conversión de leads a cliente: 10-15%
- [ ] Satisfacción cliente (NPS): 50+
- [ ] Retorno en inversión de features: 2-3x
- [ ] Porcentaje de leads con proyecto/ubicación/presupuesto informado

---

**Documento creado: 30 Abril 2026**
