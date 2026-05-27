# Plan de Renovación - NordiK Studio

**Fecha:** 18 de Mayo 2026  
**Estado:** Revisión post-auditoría  
**Objetivo:** Transformar y mejorar la experiencia web de NordiK Studio  

---

## 📋 Resumen Ejecutivo

La web ya tiene **70% de la estructura base implementada**. La renovación se enfoca en:

✅ **YA EXISTE:**
- HowItWorksTimeline & página /how-it-works completa
- FloatingWhatsApp (pero en posición incorrecta: left en lugar de right)
- WhySection (como componente, debe moverse a página dedicada)
- ContactPage con formulario (sin backend integrado)
- Pages: /about, /servicios, /contactos, /how-it-works

❌ **A IMPLEMENTAR:**
- Integración Supabase: guardar contactos en BD
- Sistema admin: /admin/login + dashboard
- Email notifications automáticas
- Página /why dedicada (mover WhySection del homepage)
- Expandir servicios (ampliaciones, terrazas, campings)
- Ajustes menores en UI/UX

---

## 🎯 Cambios Requeridos (Priorizados)

### 1. **Ajustar FloatingWhatsApp: bottom-right**

**Estado Actual:** ✅ Componente existe pero en posición incorrecta (bottom-left)  
**Cambio Necesario:** Mover de `bottom-6 left-6` a `bottom-6 right-6`

**Especificaciones Técnicas:**
- Archivo: `src/components/FloatingWhatsApp.tsx` (línea 13)
- Cambio: `"fixed bottom-6 left-6"` → `"fixed bottom-6 right-6"`
- El componente ya está integrado en App.tsx ✅

**Archivos a Modificar:**
- `src/components/FloatingWhatsApp.tsx` (1 línea)

**Prioridad:** 🔴 Crítica - muy simple, alto impacto UX

---

### 2. **Rediseño HowItWorksTimeline (Homepage)**

**Estado Actual:** ✅ Componente existe pero muestra todos los 9 pasos  
**Cambio Necesario:** Mostrar hasta paso 8 visualmente, sugerir continuidad

**Especificaciones Técnicas:**
- Componente: `src/components/HowItWorksTimeline.tsx` (línea 5-15)
- Datos: Ya tiene 9 pasos definidos
- Ajuste: Modificar display para mostrar 8 inicialmente + hint de "más"
- Mobile: Asegurar scroll muestre hasta paso 8 visible antes de scroll

**Opciones de Implementación:**
1. **Opción A:** Limitar visibles a 8, agregar "+" al final
2. **Opción B:** Mostrar 7.5 pasos (hint visual del 8vo)
3. **Opción C:** Usar Carousel con índice 0-7 visible (recomendado)

**Archivos a Modificar:**
- `src/components/HowItWorksTimeline.tsx` (reestructurar steps mapping)
- Posible: `src/pages/Index.tsx` (si se cambia componente)

**Prioridad:** 🟡 Alta - visibilidad en homepage

---

### 3. **Crear Nueva Página: /why**

**Estado Actual:** ✅ Componente `<WhySection />` existe en homepage  
**Cambio Necesario:** Crear página /why y mover contenido, remover de homepage

**Especificaciones Técnicas:**
- Nueva página: `src/pages/Why.tsx` (nuevo)
- Reutilizar: Importar `<WhySection />` desde componentes
- Remover de: `src/pages/Index.tsx` (línea 6, 21)
- Agregar ruta: `src/App.tsx` - nueva ruta `/why`
- Footer: Agregar link en `src/components/Footer.tsx`

**Contenido Existente:**
- Título: "¿Por qué los mercados nórdicos apuestan por vivienda SIP?"
- Video thumbnail + 6 valores con testimonios
- Datos: `src/data/whyWithTestimonials.ts` (ya existe)

**Archivos a Crear/Modificar:**
- `src/pages/Why.tsx` (nuevo)
- `src/pages/Index.tsx` (remover WhySection línea 6, 21)
- `src/App.tsx` (agregar ruta /why)
- `src/components/Footer.tsx` (agregar link)

**Prioridad:** 🟡 Alta - limpieza estructura

---

### 4. **Página /how-it-works: Verificar Estado**

**Estado Actual:** ✅ Página existe y funciona correctamente
- Ruta: `/how-it-works` ✅
- Componente: `src/pages/HowItWorksPage.tsx` ✅
- Todos los 9 pasos mostrados con descripciones ✅
- Diseño responsive ✅

**Cambios Necesarios:** Ninguno (aprobar/validar con voceto)

**Archivos a Revisar:**
- `src/pages/HowItWorksPage.tsx` - estado actual

**Prioridad:** 🟢 No requiere cambios (solo QA)

---

### 5. **Verificar Funcionalidad: /about**

**Estado Actual:** ✅ Página existe  
**Cambio Necesario:** Auditoría QA (cargar sin errores, responsive, links)

**Checklist:**
- [ ] Página carga sin errores en http://localhost:8082/about
- [ ] Layout responsive (mobile, tablet, desktop)
- [ ] Todos los links funcionan
- [ ] Imágenes se cargan correctamente
- [ ] CTA buttons redirigen correctamente
- [ ] No hay broken assets en console

**Archivos a Revisar:**
- `src/pages/About.tsx`

**Prioridad:** 🟢 Baja - solo verificación

---

### 6. **Integración Supabase: Formulario de Contacto**

**Estado Actual:** ✅ Formulario existe en `ContactSection.tsx` pero SIN backend  
**Cambio Necesario:** Integrar guardia de datos en Supabase

**Especificaciones Técnicas:**

**Base de Datos (Supabase):**
```sql
-- Tabla: contact_submissions
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  project_types TEXT[] DEFAULT '{}',
  budget VARCHAR(50),
  location VARCHAR(255),
  financing BOOLEAN DEFAULT false,
  message TEXT NOT NULL,
  attachments JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'new'
);
```

**Backend (Vite + Node):**
- Crear API endpoint: `src/api/contact.ts` (o route handler)
- Validación con Zod
- Conexión Supabase client
- Manejo de errores y respuestas

**Frontend:**
- Modificar: `src/components/ContactSection.tsx` (línea ~70+ donde está submit)
- Integrar fetch a API
- Loading state, success/error toasts
- Limpiar formulario post-envío

**Archivos a Crear/Modificar:**
- `src/api/contact.ts` (nuevo)
- `src/components/ContactSection.tsx` (integración fetch)
- `.env.local` (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
- Posible: Actualizar `src/lib/supabase.ts` (crear si no existe)

**Prioridad:** 🔴 Crítica - bloquea admin system

---

### 7. **Sistema de Admin: /admin/login**

**Estado Actual:** ❌ No existe  
**Cambio Necesario:** Crear sistema completo de autenticación + dashboard

**Especificaciones Técnicas:**

**Rutas:**
- `GET /admin/login` - Formulario de login (público)
- `POST /api/admin/login` - Validar credenciales
- `GET /admin/dashboard` - Panel contactos (protegido)
- `POST /api/admin/logout` - Cierre de sesión

**Autenticación:**
- Opción A: Supabase Auth (recomendado)
- Opción B: JWT + localStorage simple
- Credenciales: Usuario/contraseña en BD (Supabase users table)

**Dashboard:**
```
┌─────────────────────────────────────┐
│ Admin Panel - NordiK Contactos      │
├─────────────────────────────────────┤
│ Tabla:                              │
│ ID | Nombre | Email | Fecha | Ver  │
│ ... (filtro, búsqueda, paginación) │
└─────────────────────────────────────┘
```

**Funcionalidades:**
- Tabla de contactos (todos los registros)
- Filtro por estado (new/viewed/responded)
- Búsqueda por nombre/email
- Ver detalles completos + attachments
- Marcar como visto
- Exportar CSV (opcional fase 2)

**Archivos a Crear:**
- `src/pages/Admin.tsx` (página padre)
- `src/pages/AdminLogin.tsx` (formulario login)
- `src/pages/AdminDashboard.tsx` (tabla contactos)
- `src/components/Admin/ContactsTable.tsx` (tabla reutilizable)
- `src/api/admin/login.ts` (endpoint)
- `src/api/admin/logout.ts` (endpoint)
- `src/lib/supabaseAuth.ts` (helper auth)
- `src/hooks/useAdminAuth.ts` (hook custom)

**Modificar:**
- `src/App.tsx` (agregar rutas /admin/login, /admin/dashboard)

**Prioridad:** 🔴 Crítica - dependencia de #6

---

### 8. **Email Notifications Automáticas**

**Estado Actual:** ❌ No existe  
**Cambio Necesario:** Enviar emails al contactar

**Especificaciones Técnicas:**

**Service de Email:** 
- Resend (recomendado para Vite) ✅
- SendGrid (alternativa)
- Nodemailer + servidor SMTP

**Flujo:**
1. Usuario envía contacto
2. Datos guardados en Supabase (#6)
3. Trigger automático envía emails:
   - Email al usuario (confirmación)
   - Email a admin (nueva solicitud)

**Emails:**
```
TO USER: "Gracias por contactar"
- Número de ticket
- Esperado de respuesta
- CTA: "Ver estado"

TO ADMIN: "Nuevo contacto"
- Resumen datos
- Link directo a dashboard
```

**Archivos a Modificar:**
- `src/api/contact.ts` (agregar envío email post-save)
- Crear: `src/lib/emailTemplates.ts` (templates HTML)
- `.env.local` (RESEND_API_KEY o similar)

**Prioridad:** 🟡 Alta - mejora UX

---

### 9. **Expansión de Servicios**

**Estado Actual:** ✅ Componente `Services.tsx` existe con 2 servicios (B2C, B2B)  
**Cambio Necesario:** Expandir con nuevas categorías

**Servicios Actuales:**
1. Casas completamente terminadas
2. Materiales, kits y grandes volúmenes

**Servicios a Agregar:**
3. Ampliaciones de casas (espacios traseros, cocinas)
4. Construcción en terrazas (techos, áticos)
5. Diseño de campings y cabañas

**Especificaciones Técnicas:**
- Ubicación: `src/components/Services.tsx` (array `services` línea 36+)
- Agregar 3 nuevos objetos ServiceItem
- Posible: Crear `/servicios` submenu o cards adicionales
- Imágenes: Agregar a `src/assets/` (serveis-ampliacion-*, servicios-terrazas-*, etc.)

**Contenido Sugerido:**
```
🏠 Ampliaciones de Casas
  - Extensiones (cocinas, salones)
  - Espacios traseros acabados
  - Diseño moderno integrado

🏗️ Construcción en Terrazas
  - Soluciones para techos y áticos
  - Espacios adicionales funcionales
  - SIP de bajo peso

🏕️ Campings & Cabañas
  - Soluciones pequeñas (glamping)
  - Diseño turístico SIP
  - Modulares y rápidas
```

**Archivos a Modificar:**
- `src/components/Services.tsx` (agregar servicios)
- Posible: `src/data/services.ts` (si se externaliza data)
- `src/assets/` (agregar imágenes nuevas)

**Prioridad:** 🟡 Media - contenido/marketing

---

## 📅 Cronograma Optimizado (basado en estado actual)

| Fase | Tareas | Duración | Inicio |
|------|--------|----------|--------|
| **Fase 0** | 1 (FloatingWhatsApp position) | **5 min** | 🔴 INMEDIATO |
| **Fase 1** | 3 (Crear /why), 2 (HowItWorks display) | 2-3 días | Inmediato |
| **Fase 2** | 5 (About audit), 9 (Expandir servicios) | 2-3 días | Día 1-3 |
| **Fase 3** | 6 (Supabase + ContactForm) | 3-5 días | Día 3-4 |
| **Fase 4** | 7 (Admin login + dashboard) | 4-6 días | Día 7 |
| **Fase 5** | 8 (Email automáticos) | 2-3 días | Día 12 |
| **Testing** | QA integral + Deploy | 2-3 días | Día 15 |

**Duración Total:** ~3-4 semanas

---

## 🔧 Stack Técnico Requerido

✅ **YA EXISTE:**
- React 18.3.1
- Vite 5.4.19
- Tailwind CSS 3.4.17
- Framer Motion 12.34.0
- React Router DOM 6.30.1
- Shadcn/ui components

❌ **A INSTALAR:**
- `@supabase/supabase-js` - BD + Auth
- `zod` - Validación (ya existe ✅)
- `resend` - Email notifications
- `react-hook-form` - Form management (ya existe ✅)

---

## ✅ Checklist Pre-implementación

**Configuración:**
- [ ] Crear cuenta Supabase (free tier suficiente)
- [ ] Crear tabla `contact_submissions` en Supabase
- [ ] Crear usuario admin en Supabase Auth
- [ ] Configurar API key Resend (free: 100 emails/día)
- [ ] Actualizar `.env.local` con credenciales

**Validación:**
- [ ] Revisar vocetos compartidos (IMG_5972.heic, voceto2.heic)
- [ ] Confirmar email de contacto (para notificaciones)
- [ ] Confirmar número WhatsApp (para FloatingButton)
- [ ] Confirmar credenciales admin (usuario/password)
- [ ] Revisar contenido nuevos servicios

**Code:**
- [ ] Instalar dependencias nuevas (`pnpm add @supabase/supabase-js resend`)
- [ ] Crear `.env.local` con variables
- [ ] Git commit inicial: "Setup: Renovación web - env"

---

## 🔴 Críticos Bloqueadores

1. **Supabase Project ID + Anon Key** - Sin esto no se puede avanzar en fase 3+
2. **Resend API Key** - Necesario para fase 5
3. **Email de contacto** - Para enviar notificaciones
4. **Credenciales admin** - Para sistema auth

---

## 📝 Notas Importantes

1. **Vocetos:** Revisar IMG_5972.heic (timeline design) y voceto2.heic (layout completo)
2. **Estructura:** 70% del trabajo de arquitectura YA EXISTE - esto es más refinamiento
3. **Performance:** Proyecto actual es ligero y rápido (Vite dev = 174ms)
4. **Mobile First:** Framework y componentes existentes son responsive-first
5. **Database:** Supabase free tier permite:
   - 500 MB storage
   - 2 GB bandwidth/mes
   - PostgreSQL full

---

## 🚀 Próximos Pasos

1. ✅ **Ahora:** Revisar y aprobar plan ajustado
2. **Hoy:** Implementar Fase 0 (FloatingWhatsApp)
3. **Mañana:** Comenzar Fase 1 (páginas /why)
4. **Luego:** Configurar Supabase y proceder por fases
5. **Paralelo:** Preparar contenido nuevos servicios y emails templates
