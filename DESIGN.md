# Design System Inspired by ILUMHOUSE

## 1. Visual Theme & Atmosphere

ILUMHOUSE's design system embodies modern Scandinavian minimalism with refined architectural precision. The aesthetic balances organic warmth—achieved through caoba (mahogany) tones and cream accents—with clean, contemporary typography and ample whitespace. The design conveys premium quality, sustainability, and the craftsmanship of wood frame construction through deliberate restraint and high-contrast elements. Dark charcoal foundations anchor the palette while warm earth tones (`#73401F`, `#F6E7DB`) provide human warmth, reflecting the natural materials that define the brand's product philosophy.

**Key Characteristics**
- Minimalist Nordic aesthetic with premium positioning
- High contrast between dark typography and light backgrounds
- Warm accent colors reflecting natural wood materials
- Generous whitespace emphasizing clarity and breathing room
- Geometric precision with subtle rounded corners
- Accessibility-first approach with clear visual hierarchy
- Professional yet approachable tone through balanced typography

## 2. Color Palette & Roles

### Primary
- **Charcoal Black** (`#212529`): Primary text, primary brand statements, core UI elements
- **Pure Black** (`#000000`): Maximum contrast text, critical UI hierarchy, primary navigation
- **Deep Slate** (`#343A40`): Secondary text, supporting UI elements, secondary headers

### Accent Colors
- **Caoba (Mahogany)** (`#73401F`): Premium accent, product highlights, CTA buttons — color principal de acción
- **Caoba Oscura** (`#4D2B14`): Hover y estados presionados sobre caoba
- **Cream Beige** (`#F6E7DB`): Soft background accent, hover states on warm surfaces
- **Baltic Blue** (`#0D6EFD`): Primary interactive, links, call-to-action highlights

### Interactive
- **Primary Blue** (`#0D6EFD`): Primary action buttons, focused states, hyperlinks
- **Cyan Highlight** (`#0DCAF0`): Secondary interactive elements, supplementary actions
- **Success Green** (`#198754`): Confirmation states, positive actions
- **Danger Red** (`#DC3545`): Error states, critical warnings, destructive actions
- **Warning Yellow** (`#FFC107`): Caution alerts, warning states, non-critical notifications

### Neutral Scale
- **White** (`#FFFFFF`): Primary background, card surfaces, form fields
- **Light Gray** (`#F8F9FA`): Secondary background, neutral hover states
- **Pale Gray** (`#ECEAEA`): Tertiary background, divider lines
- **Border Gray** (`#DEE2E6`): Subtle borders, dividers, section separation
- **Medium Gray** (`#D4D4D4`): Disabled states, inactive UI elements
- **Granite** (`#9A9A9A`): Tertiary text, helper text, secondary labels
- **Slate Gray** (`#6C757D`): Secondary text, metadata, timestamp text
- **Steel Gray** (`#ADB5BD`): Placeholder text, disabled text, low-emphasis labels

### Surface & Borders
- **Card Border** (`#EFEFEF`): Default card and panel borders
- **Input Border** (`#7B7A7A`): Form field borders, input outlines
- **Light Border** (`#ECEAEA`): Subtle dividing lines between sections

## 3. Typography Rules

### Font Family
**Primary:** Inter (`font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
**Secondary:** system-ui (`font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display 1 | Inter | 48px | 700 | 58px | 0px | Major page headlines, hero sections |
| Heading 2 | Inter | 24px | 700 | 29.5px | 0px | Section headers, card titles |
| Heading 3 | system-ui | 20px | 700 | 30px | 0px | Subsection headers, modal titles |
| Body | Inter | 18px | 500 | 22px | 0px | Long-form content, descriptions |
| Body Small | system-ui | 16px | 400 | 24px | 0px | Default paragraph text, navigation items |
| Label | system-ui | 14px | 500 | 21px | 0px | Form labels, button text, small UI text |
| Caption | Inter | 12px | 700 | 14.5px | 0px | Badge labels, metadata tags, product codes |
| Link | system-ui | 16px | 400 | 24px | 0px | Hyperlinks, navigation links |

### Principles
- **Hierarchy through weight and size:** Bold weights (700, 500) establish visual dominance
- **Line height reflects scale:** Larger text receives proportional line height for readability
- **System-ui for UI elements:** Lighter, more neutral system fonts for buttons and labels
- **Inter for content:** Premium serif-adjacent humanist sans-serif for body and headlines
- **Consistent 14px base:** Smallest readable text maintains accessibility standards
- **No letter spacing variation:** Crisp, aligned typography without decorative spacing

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#0D6EFD`
- Text Color: `#FFFFFF`
- Font Family: system-ui
- Font Size: 14px
- Font Weight: 500
- Padding: `12px 16px`
- Border Radius: `5px`
- Border: `1px solid #0D6EFD`
- Height: 44px
- Line Height: 21px
- Hover: Background `#0B5ED7`, Border `#0B5ED7`
- Active: Background `#0A58CA`, Border `#0A58CA`
- Disabled: Background `#D4D4D4`, Text `#9A9A9A`, Border `#D4D4D4`

**Secondary Button**
- Background: `#FFFFFF`
- Text Color: `#212529`
- Font Family: system-ui
- Font Size: 14px
- Font Weight: 500
- Padding: `12px 16px`
- Border Radius: `5px`
- Border: `1px solid #ECEAEA`
- Height: 44px
- Line Height: 21px
- Hover: Background `#F8F9FA`, Border `#DEE2E6`
- Active: Background `#DEE2E6`, Border `#ADB5BD`
- Disabled: Background `#F8F9FA`, Text `#9A9A9A`, Border `#DEE2E6`

**Ghost Button**
- Background: `transparent`
- Text Color: `#212529`
- Font Family: system-ui
- Font Size: 14px
- Font Weight: 500
- Padding: `8px 10px`
- Border Radius: `5px`
- Border: `1px solid transparent`
- Height: 44px
- Line Height: 21px
- Hover: Background `#F8F9FA`, Border `#DEE2E6`
- Active: Background `#DEE2E6`, Border `#ADB5BD`, Text `#000000`
- Disabled: Text `#9A9A9A`

**Icon Button (Small)**
- Background: `transparent`
- Text Color: `#212529`
- Font Family: system-ui
- Font Size: 16px–20px
- Font Weight: 400–700
- Padding: `8px`
- Border Radius: `6px`
- Border: `none`
- Height: 16px–20px
- Width: 16px–20px
- Hover: Background `#F8F9FA`
- Active: Background `#DEE2E6`

**Warm Accent Button (Caoba)**
- Background: `#73401F`
- Text Color: `#FFFFFF`
- Font Family: Inter
- Font Size: 12px
- Font Weight: 700
- Padding: `6px 12px`
- Border Radius: `4px`
- Border: `none`
- Height: auto
- Line Height: 14.5px
- Hover: Background `#4D2B14`
- Active: Background `#3A1F0E`

### Cards & Containers

**Product Card**
- Background: `#FFFFFF`
- Text Color: `#212529`
- Font Family: system-ui
- Font Size: 16px
- Font Weight: 400
- Padding: `20px`
- Border Radius: `0px`
- Border: `1px solid #EFEFEF`
- Line Height: 24px
- Hover: Border `#DEE2E6`, Shadow `0px 2px 8px rgba(0, 0, 0, 0.04)`
- Image Container: Width 100%, Aspect Ratio 16/10, Border Radius `8px 8px 0px 0px` if top, or `0px`

**Info Card (Feature/Stat)**
- Background: `rgba(255, 255, 255, 0.95)`
- Text Color: `#212529`
- Font Family: system-ui
- Font Size: 16px
- Font Weight: 400
- Padding: `24px`
- Border Radius: `0px`
- Border: `1px solid #EFEFEF`
- Line Height: 24px
- Accent Left Border: `4px solid #73401F` (optional)

**Modal Container**
- Background: `#FFFFFF`
- Text Color: `#212529`
- Padding: `24px`
- Border Radius: `7px 7px 0px 0px`
- Border: `1px solid #DEE2E6`
- Box Shadow: `0px 8px 24px rgba(0, 0, 0, 0.12)`
- Header: Font Inter 20px 700, Border Bottom `1px solid #DEE2E6`

### Inputs & Forms

**Text Input**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Font Family: Inter
- Font Size: 20px
- Font Weight: 300
- Padding: `6px 12px`
- Border Radius: `8px`
- Border: `1px solid #7B7A7A`
- Height: 60px
- Line Height: 24px
- Placeholder Color: `#ADB5BD`
- Focus: Border `#0D6EFD`, Box Shadow `0px 0px 0px 3px rgba(13, 110, 253, 0.1)`
- Disabled: Background `#F8F9FA`, Text `#9A9A9A`, Border `#D4D4D4`
- Error: Border `#DC3545`, Text `#DC3545`

**Textarea**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Font Family: Inter
- Font Size: 16px
- Font Weight: 400
- Padding: `12px`
- Border Radius: `8px`
- Border: `1px solid #7B7A7A`
- Min Height: 120px
- Line Height: 24px
- Focus: Border `#0D6EFD`, Box Shadow `0px 0px 0px 3px rgba(13, 110, 253, 0.1)`

**Select Dropdown**
- Background: `#FFFFFF`
- Text Color: `#212529`
- Font Family: system-ui
- Font Size: 16px
- Font Weight: 400
- Padding: `8px 12px`
- Border Radius: `8px`
- Border: `1px solid #7B7A7A`
- Height: 44px
- Line Height: 24px
- Focus: Border `#0D6EFD`

**Form Group**
- Margin Bottom: `24px`
- Label Font: system-ui 14px 500 `#212529`
- Label Margin Bottom: `8px`
- Helper Text: system-ui 12px 400 `#6C757D` Margin Top `4px`
- Error Message: system-ui 12px 400 `#DC3545` Margin Top `4px`

**Range Slider**
- Track Background: `#DEE2E6`
- Track Height: `4px`
- Thumb Background: `#000000`
- Thumb Size: 18px
- Thumb Border Radius: `50%`
- Focus: Thumb Box Shadow `0px 0px 0px 4px rgba(0, 0, 0, 0.15)`

### Navigation

**Header Navigation**
- Background: `#FFFFFF`
- Text Color: `#212529`
- Font Family: system-ui
- Font Size: 16px
- Font Weight: 400
- Padding: `16px 24px` (top/bottom: 12px for compact header)
- Border Bottom: `1px solid #F8F9FA`
- Height: auto
- Line Height: 24px
- Active Link: Font Weight 600, Color `#000000`, Border Bottom `2px solid #73401F`
- Hover: Color `#6C757D`, Background `#F8F9FA`

**Navigation Links**
- Default: Color `#212529`, Font Weight 400
- Active: Color `#000000`, Font Weight 600, Border Bottom `2px solid #73401F`
- Hover: Color `#6C757D`

**Breadcrumb**
- Separator: ` / ` Character `#9A9A9A`
- Item Font: system-ui 14px 400 `#212529`
- Active Item: Font Weight 600
- Link Color: `#0D6EFD`

### Badges & Tags

**Primary Badge**
- Background: `#0D6EFD`
- Text Color: `#FFFFFF`
- Font Family: Inter
- Font Size: 12px
- Font Weight: 700
- Padding: `4px 8px`
- Border Radius: `4px`
- Line Height: 14.5px
- Height: auto

**Warm Tag (Product Code / Caoba)**
- Background: `#EDE5DA`
- Text Color: `#73401F`
- Font Family: Inter
- Font Size: 12px
- Font Weight: 700
- Padding: `4px 8px`
- Border Radius: `4px`
- Line Height: 14.5px

**Neutral Badge**
- Background: `#F8F9FA`
- Text Color: `#212529`
- Font Family: system-ui
- Font Size: 12px
- Font Weight: 500
- Padding: `4px 8px`
- Border Radius: `4px`
- Border: `1px solid #DEE2E6`

### Filter Controls

**Filter Button (Active)**
- Background: `#000000`
- Text Color: `#FFFFFF`
- Font Family: system-ui
- Font Size: 14px
- Font Weight: 600
- Padding: `8px 16px`
- Border Radius: `4px`
- Border: `1px solid #000000`
- Height: 44px
- Hover: Background `#212529`

**Filter Button (Inactive)**
- Background: `#FFFFFF`
- Text Color: `#212529`
- Font Family: system-ui
- Font Size: 14px
- Font Weight: 400
- Padding: `8px 16px`
- Border Radius: `4px`
- Border: `1px solid #DEE2E6`
- Height: 44px
- Hover: Background `#F8F9FA`, Border `#ADB5BD`

**Range Slider Container**
- Display: flex
- Align Items: center
- Gap: `12px`
- Min Width: 200px

## 5. Layout Principles

### Spacing System
- **Base Unit:** 4px
- **Scale:** 4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 40px, 44px, 48px, 60px
- **Usage Contexts:**
  - **Micro spacing (4px–8px):** Element internal padding, badge spacing, inline elements
  - **Small spacing (12px–16px):** Component padding, section separators
  - **Medium spacing (20px–24px):** Card padding, form groups, navigation gaps
  - **Large spacing (32px–48px):** Section gaps, component group separation
  - **Extra-large spacing (60px+):** Page section breaks, hero margins

### Grid & Container
- **Max Width:** 1200px (main container), 100% (full-width sections)
- **Column Strategy:** CSS Grid with 12-column responsive system
  - Desktop (1200px+): 12 columns, 24px gutter
  - Tablet (768px–1199px): 8 columns, 20px gutter
  - Mobile (320px–767px): 4 columns, 16px gutter
- **Product Grid:** 4 columns on desktop (24px gap), 2 columns on tablet, 1 column on mobile
- **Section Padding:** Horizontal `24px` (mobile), `40px` (tablet), `60px` (desktop); Vertical `40px` (mobile), `60px` (desktop)
- **Card Container:** Width 100%, max-width 380px per card (product grid context)

### Whitespace Philosophy
- **Breathing room around text:** Minimum 20px margin around major text blocks
- **Section separation:** 60px vertical gap between major sections
- **Internal card breathing:** 20px padding minimum within cards
- **Edge margins:** Never less than 16px from viewport edge (mobile) or 24px (desktop)
- **Component grouping:** 24px gap between logically related components, 40px between distinct groups

### Border Radius Scale
- **Sharp (0px):** Product cards, modal content areas, form group containers
- **Minimal (4px):** Buttons, small badges, icon buttons
- **Subtle (5px):** Secondary buttons, small tags
- **Rounded (6px):** Close buttons, small icon buttons, chip buttons
- **Generous (8px):** Text inputs, textareas, select dropdowns, larger UI elements
- **Full circle (50%):** Avatar placeholders, circular icons, toggle switches

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | No shadow; `box-shadow: none` | Base backgrounds, cards, sections |
| 1 (Subtle) | `box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04)` | Hovered cards, slightly raised elements |
| 2 (Low) | `box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04)` | Dropdown menus, light elevated cards |
| 3 (Medium) | `box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08)` | Focused modals, elevated panels |
| 4 (High) | `box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12)` | Full-screen modals, top-level overlays |
| 5 (Maximum) | `box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.16)` | Modal dialogs, critical overlays |

**Shadow Philosophy:**
ILUMHOUSE employs a restrained shadow system favoring subtle depth over dramatic elevation. Shadows use low-opacity black (`rgba(0, 0, 0, 0.04–0.16)`) to suggest layering without visual heaviness. Most UI remains flat (level 0), reserving shadows for interactive states (hover, focus) and modal surfaces. This approach maintains the minimalist Nordic aesthetic while providing necessary visual feedback and hierarchy.

## 7. Do's and Don'ts

### Do
- Use `#000000` or `#212529` for primary text and critical UI; ensures maximum readability
- Apply `#73401F` warm accents to highlight premium products, primary CTAs, or brand moments
- Maintain 16px minimum line height for body text to ensure accessibility and scan readability
- Use system-ui fonts for all interactive UI elements (buttons, labels, inputs) for consistency
- Reserve modal box shadows (`0px 8px 24px rgba(0, 0, 0, 0.12)`) for full-screen dialogs only
- Pair `#0D6EFD` links with hover underlines to meet WCAG 2.1 AA standards
- Space form groups vertically by 24px; stack labels above inputs with 8px gap
- Apply `8px` border radius to text inputs and selects for modern feel
- Use `#F8F9FA` background for secondary containers or hover states to add depth subtly
- Include validation states: error (`#DC3545`), warning (`#FFC107`), success (`#198754`)

### Don't
- Avoid using low-contrast text (e.g., `#6C757D` on `#F8F9FA`); test WCAG AA compliance
- Never mix accent colors in a single button; choose one primary and secondary pair
- Don't apply shadows to elements below level 2; keeps hierarchy clear
- Avoid font sizes below 14px except in badges, captions, or metadata
- Don't overuse `#73401F`; reserve it for premium moments, not secondary UI
- Never apply border-radius > 8px to form inputs; breaks cohesion with design system
- Avoid gray text (`#9A9A9A`) on light backgrounds for more than helper text
- Don't stack more than 3 rows of product cards without page sectioning
- Avoid modal border-radius on bottom edges; keep flat (`border-radius: 7px 7px 0px 0px`)
- Never use color alone to communicate state; always pair with text labels or icons

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|------------|
| Mobile | 320px–767px | Single column layouts, 16px section padding, 4-column grid, 14px type, stacked navigation |
| Tablet | 768px–1199px | 2–4 column grids, 20px gutter, 40px section padding, 8-column layout grid, compact header |
| Desktop | 1200px–1920px | 4-column product grids, 24px gutter, 60px section padding, full header, 12-column layout |
| Large Desktop | 1921px+ | Max-width container, centered layout, side margins applied |

### Touch Targets
- **Minimum touch size:** 44px height × 44px width (buttons, interactive elements)
- **Recommended touch size:** 48px × 48px for primary actions, navigation items
- **Spacing between targets:** Minimum 8px clearance to prevent accidental taps
- **Small icon buttons:** Minimum 32px × 32px with 4px padding around 24px icons
- **Slider handles:** 18px diameter circles with 4px focus ring

### Collapsing Strategy
- **Desktop navigation (1200px+):** Horizontal flex layout, items spaced evenly, full text labels
- **Tablet navigation (768px–1199px):** Horizontal flex with reduced padding, abbreviated labels if needed
- **Mobile navigation (< 768px):** Hamburger menu icon (3-line), slide-out drawer or dropdown, full-width items
- **Product grid:** 4 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- **Form layouts:** Side-by-side fields (desktop/tablet: 2 columns) → stacked (mobile: 1 column)
- **Section padding:** 60px (desktop) → 40px (tablet) → 16px (mobile)
- **Hero title size:** 48px (desktop) → 36px (tablet) → 28px (mobile)
- **Filter bar:** Horizontal overflow with scroll (mobile) → flex wrap (tablet) → grid (desktop)
- **Cards:** 380px max-width (desktop/tablet) → 100% width (mobile)

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Primary Blue (`#0D6EFD`)
- **Background:** White (`#FFFFFF`)
- **Heading Text:** Charcoal Black (`#212529`) or Pure Black (`#000000`)
- **Body Text:** Charcoal Black (`#212529`)
- **Secondary Text:** Slate Gray (`#6C757D`)
- **Disabled Text:** Granite (`#9A9A9A`)
- **Premium Accent:** Warm Wood Tan (`#73401F`)
- **Success/Confirmation:** Success Green (`#198754`)
- **Error/Danger:** Danger Red (`#DC3545`)
- **Warning:** Warning Yellow (`#FFC107`)
- **Placeholder/Helper:** Steel Gray (`#ADB5BD`)
- **Border (Primary):** Card Border (`#EFEFEF`)
- **Border (Form):** Input Border (`#7B7A7A`)
- **Secondary Background:** Light Gray (`#F8F9FA`)

### Iteration Guide

1. **Establish hierarchy with weight, not color:** Use bold (700, 600) for headings, medium (500) for labels, normal (400) for body. Reserve accent colors for interactive elements only.

2. **Buttons require three variants minimum:** Primary (`#0D6EFD` bg, white text), Secondary (white bg, charcoal text, light border), Ghost (transparent, charcoal text). Always include disabled state (gray bg, gray text).

3. **Form inputs must be 60px tall on desktop, 44px on mobile:** Use `8px` border radius, `#7B7A7A` border, `20px` font on desktop. Focus state: `#0D6EFD` border + subtle blue shadow.

4. **Cards are flat (no shadow) by default:** Apply 1px light border (`#EFEFEF`), 20px padding. On hover, add subtle shadow (`0px 2px 8px rgba(0, 0, 0, 0.04)`) and darker border.

5. **Product grids scale to 4 columns (desktop) → 2 (tablet) → 1 (mobile):** Always use 24px gap on desktop, 20px on tablet, 16px on mobile. Each card must be responsive (100% width within grid).

6. **Navigation text is 16px, weight 400:** Active links have weight 600 and bottom border `2px solid #73401F`. Hover adds light gray background (`#F8F9FA`). Mobile uses hamburger menu < 768px.

7. **Section padding is 60px vertical (desktop), 40px (tablet), 16px (mobile):** Horizontal padding follows same ratio. All major sections must respect these gaps for breathing room.

8. **Modals require rounded top only:** `border-radius: 7px 7px 0px 0px`, medium shadow (`0px 8px 24px rgba(0, 0, 0, 0.12)`), white background, 24px padding. Close button in top-right corner.

9. **Warm accent (`#73401F`) is reserved for premium moments:** Use in badges, product highlights, or primary brand CTAs. Never use as default button color; pair with primary blue for hierarchy.

10. **All text inputs, textareas, and selects must have focus ring:** `border: 1px solid #0D6EFD` + `box-shadow: 0px 0px 0px 3px rgba(13, 110, 253, 0.1)` on focus state. Disabled inputs: gray background (`#F8F9FA`), gray border, gray text.

---

## 10. NordiK — Sistema de Color (CSS Variables)

> Tokens activos del proyecto, implementados en `src/index.css` vía variables CSS HSL.  
> Última actualización de acento: **2026-05-27** — migración de ámbar `#EBAF7D` → caoba `#73401F`.

### Paleta caoba (acento principal)

| Token CSS           | HSL                | HEX approx. | Descripción                              |
|---------------------|--------------------|-------------|------------------------------------------|
| `--accent`          | `hsl(18 50% 30%)`  | `#73401F`   | Color de botones CTA, foco, acción       |
| `--wood`            | `hsl(18 50% 30%)`  | `#73401F`   | Alias del acento para contextos de madera |
| `--wood-dark`       | `hsl(18 45% 20%)`  | `#4D2B14`   | Hover, presionado, gradiente oscuro      |
| `--wood-light`      | `hsl(30 30% 92%)`  | `#EDE5DA`   | Fondos suaves, chips, badges, tarjetas   |
| `--ring`            | `hsl(18 50% 30%)`  | `#73401F`   | Anillo de foco accesible (`:focus-visible`) |

### Paleta base nórdica

| Token CSS              | HSL                | HEX approx. | Descripción                        |
|------------------------|--------------------|-------------|------------------------------------|
| `--background`         | `hsl(0 0% 100%)`   | `#FFFFFF`   | Fondo general                      |
| `--foreground`         | `hsl(0 0% 10%)`    | `#1A1A1A`   | Texto principal (charcoal)         |
| `--card`               | `hsl(30 20% 97%)`  | `#F9F6F3`   | Fondo de tarjetas                  |
| `--warm-gray`          | `hsl(30 10% 97%)`  | `#F7F5F3`   | Secciones alternativas             |
| `--secondary`          | `hsl(30 15% 95%)`  | `#F2EDE8`   | Botones secundarios, inputs        |
| `--muted`              | `hsl(30 10% 96%)`  | `#F5F3F1`   | Contenido desactivado              |
| `--muted-foreground`   | `hsl(0 0% 36%)`    | `#5C5C5C`   | Texto de apoyo, labels             |
| `--border` / `--input` | `hsl(30 15% 90%)`  | `#E8DDD4`   | Bordes de tarjetas e inputs        |

### Gradientes

```css
/* Texto caoba en degradado */
.text-gradient-wood {
  background-image: linear-gradient(135deg, hsl(18 50% 30%), hsl(18 45% 20%));
  /* de #73401F a #4D2B14 */
}
```

### Compatibilidad cromática — por qué caoba funciona con la paleta nórdica

| Criterio                   | Ámbar anterior `#EBAF7D`       | Caoba nueva `#73401F`            |
|----------------------------|---------------------------------|----------------------------------|
| Contraste sobre blanco     | ~2.8:1 ❌ (falla WCAG AA)       | ~9:1 ✅ (pasa WCAG AAA)          |
| Temperatura de color       | Cálido-anaranjado (27°)         | Cálido-rojizo oscuro (18°)       |
| Convivencia con beige      | Luminosidad similar → poca jerarquía | Alto contraste → jerarquía clara |
| Percepción de marca        | Decorativo / veraniego          | Material / artesanal / lujo      |
| Texto sobre el color       | Necesitaba texto oscuro         | Texto blanco perfecto            |
| Coherencia con `--wood-light` `#EDE5DA` | Poca diferenciación  | Escala tonal coherente: claro → oscuro |
