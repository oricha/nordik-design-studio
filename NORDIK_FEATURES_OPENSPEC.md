# NordiK Features Plan - OpenSpec Framework

## Resumen Ejecutivo
Plan de implementación de features para NordiK (portal B2B/B2C de casas prefabricadas nórdicas). Organizado en 4 prioridades, con 32 features enumeradas y 18 épicas.

---

## 🔴 PRIORIDAD 1: CRÍTICAS (2-3 semanas)

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
- Beneficio: Cada proyecto tiene página única, mejorable y linkeabel
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
  - [ ] Thumbnails abajo (1-2 lineas)
  - [ ] Optimizadas para carga rápida

**F1.2.3 - Especificaciones Técnicas Completas**
- Descripción: Sección con specs: paneles SIP (espesor, R-value), acabados, personalización
- Beneficio: Clientes entienden exactamente qué están comprando
- Criterios de aceptación:
  - [ ] Especificación de panel SIP: espesor (cm), R-value (insulación)
  - [ ] Cantidad: dormitorios, baños, área útil
  - [ ] Acabados incluidos (techo, piso, pintura, puertas)
  - [ ] Opciones de personalización disponibles
  - [ ] Certificaciones/estándares (ISO, energía, etc.)

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
  - [ ] Incluidos/excluidos en cada opción

**F1.2.6 - Proceso Constructivo Explicado**
- Descripción: Sección con descripción de cómo se construye, ventajas de SIP
- Beneficio: Educación sobre método, diferenciación vs. construcción tradicional
- Criterios de aceptación:
  - [ ] 4-6 pasos del proceso con imágenes/íconos
  - [ ] Explicación de por qué SIP es mejor (velocidad, eficiencia, calidad)
  - [ ] Comparativa con construcción tradicional (tiempo/costo)

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

**F1.4.9 - Opción de Subir Documentos/Planos**
- Descripción: Agregar file upload para referencias, planos, imágenes
- Beneficio: Contexto más rico para propuesta, customización posible
- Criterios de aceptación:
  - [ ] Input file: PDF, JPG, PNG, max 10MB
  - [ ] Múltiple archivos (3-5 máximo)
  - [ ] Preview de archivos antes de envío
  - [ ] Almacenaje seguro en backend

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

---

## 🟠 PRIORIDAD 2: IMPORTANTES (3-4 semanas)

### Épica 2.1: Sección "Sobre Nosotros"

**F2.1.1 - Historia de la Empresa**
- Descripción: Página /sobre-nosotros con historia, fundación, misión
- Beneficio: Humaniza marca, genera confianza a través de narrative
- Criterios de aceptación:
  - [ ] Timeline: fundación → hitos principales → presente
  - [ ] 300-500 palabras de storytelling
  - [ ] Foto del founder/equipo fundador

**F2.1.2 - Equipo y Expertos**
- Descripción: Cards de miembros clave: foto, nombre, rol, experiencia
- Beneficio: Social proof, faces behind the brand
- Criterios de aceptación:
  - [ ] 5-8 miembros del equipo
  - [ ] Foto profesional + nombre + rol + bio corta
  - [ ] Link a LinkedIn (opcional)

**F2.1.3 - Certificaciones y Estándares**
- Descripción: Mostrar ISO, estándares energéticos, acreditaciones
- Beneficio: Credibilidad técnica, cumplimiento regulatorio
- Criterios de aceptación:
  - [ ] Logos de certificaciones
  - [ ] Año de obtención
  - [ ] Link a certificado (PDF)

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
- Descripción: Especificar: estructura (10 años), materiales, técnica, servicio post-venta
- Beneficio: Seguridad al cliente, diferenciador clave
- Criterios de aceptación:
  - [ ] Sección "Nuestra Garantía" con breakdown:
    - Estructura: 10 años
    - Materiales: 5 años
    - Técnica: 2 años
  - [ ] PDF descargable: términos completos
  - [ ] Proceso de reclamación explicado

**F2.5.2 - Certificaciones Ambientales**
- Descripción: Mostrar: PEFC, FSC, O sellos de eficiencia energética
- Beneficio: Atrae clientes eco-conscientes
- Criterios de aceptación:
  - [ ] Logos de certificaciones con descripciones
  - [ ] Impacto ambiental: CO2 reducido vs. construcción tradicional
  - [ ] Links a certificados verificables

**F2.5.3 - Comparativa vs. Construcción Tradicional**
- Descripción: Tabla: tiempo, costo, eficiencia energética, durabilidad
- Beneficio: Justificación clara de premium vs. competencia
- Criterios de aceptación:
  - [ ] Tabla 2 columnas: SIP Panels | Construcción Tradicional
  - [ ] Filas: Tiempo construcción, Costo total, Eficiencia energética, Desperdicio, Garantía
  - [ ] Números reales/estimados claramente marcados

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
- Beneficio: Mejor readabilidad, menos esfuerzo visual
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
- Beneficio: Evita confusion de "¿por qué no cambia?"
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
- Descripción: 2 botones claros: "Ver Proyectos" (primary) y "Cotizar Ahora" (secondary)
- Beneficio: Dirección clara desde inicio
- Criterios de aceptación:
  - [ ] Botón primario: "Explorar Proyectos" → /catalogo
  - [ ] Botón secundario: "Solicitar Presupuesto" → /contacto
  - [ ] Tamaños grandes, contraste alto

**F3.4.3 - CTA en Tarjetas de Producto**
- Descripción: Agregar botón "Solicitar Cotización" en cada tarjeta
- Beneficio: Conversión directa desde catálogo
- Criterios de aceptación:
  - [ ] Botón secundario en esquina tarjeta o hover
  - [ ] Abre modal con formulario pre-filled (proyecto seleccionado)

**F3.4.4 - CTA al Final de Secciones**
- Descripción: Al fin de cada sección grande (servicios, por qué, etc.), CTA relevante
- Beneficio: Múltiples conversión points
- Criterios de aceptación:
  - [ ] "Por Qué": "Conoce más sobre NordiK" → /sobre-nosotros
  - [ ] "Servicios": "Ver proyectos de [servicio]" → /catalogo?type=casas
  - [ ] "Testimonios": "Solicita tu presupuesto" → /contacto

**F3.4.5 - Micro-copy Persuasivo en CTAs**
- Descripción: Textos en botones más persuasivos (no solo "Enviar")
- Beneficio: Mayor conversión a través de copy
- Criterios de aceptación:
  - [ ] En lugar de "Enviar": "Solicitar Presupuesto Gratis"
  - [ ] En lugar de "Contacto": "Agendar Consulta"
  - [ ] En lugar de "Más": "Ver Todos los Proyectos"

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
- Descripción: Formulario para subscribirse a newsletter de artículos nuevos
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
  - [ ] Dupliplicación detection
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
| 1.1: Filtros y Búsqueda | 8 | P1 | 1-2 sem |
| 1.2: Detalle de Producto | 8 | P1 | 2-3 sem |
| 1.3: Enlaces Rotos | 2 | P1 | 3-5 días |
| 1.4: Formulario | 9 | P1 | 1-2 sem |
| 1.5: Contacto | 5 | P1 | 1 sem |
| 2.1: Sobre Nosotros | 6 | P2 | 1-2 sem |
| 2.2: Social Proof | 6 | P2 | 2 sem |
| 2.3: Galería | 5 | P2 | 1-2 sem |
| 2.4: Comparador | 3 | P2 | 1 sem |
| 2.5: Expandir Por Qué | 3 | P2 | 1 sem |
| 3.1: Visual | 6 | P3 | 3-5 días |
| 3.2: Filtros UX | 4 | P3 | 5-7 días |
| 3.3: FAQ | 3 | P3 | 5 días |
| 3.4: CTAs | 6 | P3 | 5-7 días |
| 4.1: Configurador 3D | 4 | P4 | 3-4 sem |
| 4.2: Carrito/Cotización | 5 | P4 | 3-4 sem |
| 4.3: Blog | 5 | P4 | 2-3 sem |
| 4.4: Ecommerce | 4 | P4 | 3-4 sem |

**Total: 32 Features en 18 Épicas | Duración estimada: 12-16 semanas**

---

## 🚀 ROADMAP RECOMENDADO

**Semanas 1-2:**
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

**3+ Meses:**
- [ ] Leads mensuales: +50% vs. baseline
- [ ] Conversión de leads a cliente: 10-15%
- [ ] Satisfacción cliente (NPS): 50+
- [ ] Retorno en inversión de features: 2-3x

---

**Documento creado: 30 Abril 2026**
