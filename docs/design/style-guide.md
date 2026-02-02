# Oak & Barrel Design System

## Style Guide

---

## Brand Essence

**Oak & Barrel** evokes warmth, craftsmanship, and culinary excellence. The visual language draws from earthy materials—aged oak wood, terracotta ceramics, golden honey, and sun-baked wheat—creating an atmosphere that feels both refined and approachable.

### Design Philosophy

- **Warm Sophistication**: Elevated dining without pretension
- **Organic Authenticity**: Natural textures and honest materials
- **Culinary Storytelling**: Every element serves the food narrative
- **Inviting Comfort**: Spaces that feel like home, elevated

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Honey Gold** | `#E8A849` | rgb(232, 168, 73) | Primary CTAs, accents, highlights |
| **Terracotta** | `#C47D5E` | rgb(196, 125, 94) | Secondary accent, warmth elements |
| **Oak Brown** | `#5C4033` | rgb(92, 64, 51) | Text, headers, grounding elements |

### Neutral Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Cream White** | `#FDF8F3` | rgb(253, 248, 243) | Primary background |
| **Warm Linen** | `#F5EDE4` | rgb(245, 237, 228) | Secondary background, cards |
| **Blush Pink** | `#FADCD5` | rgb(250, 220, 213) | Decorative elements, subtle accents |
| **Stone Gray** | `#8B8178` | rgb(139, 129, 120) | Secondary text, muted elements |
| **Charcoal** | `#2D2A26` | rgb(45, 42, 38) | Primary text, high contrast |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success** | `#6B9B5A` | Confirmation, available status |
| **Warning** | `#E8A849` | Alerts, attention needed |
| **Error** | `#C45E5E` | Errors, unavailable status |
| **Info** | `#5E8BC4` | Information, links |

### Color Usage Guidelines

1. **Background Hierarchy**
   - Page background: Cream White (`#FDF8F3`)
   - Card/section background: Warm Linen (`#F5EDE4`)
   - Accent shapes: Blush Pink (`#FADCD5`)

2. **Text Hierarchy**
   - Primary text: Charcoal (`#2D2A26`)
   - Secondary text: Stone Gray (`#8B8178`)
   - Interactive/link text: Oak Brown (`#5C4033`)

3. **Accent Application**
   - Primary buttons: Honey Gold (`#E8A849`)
   - Star ratings: Honey Gold (`#E8A849`)
   - Decorative flourishes: Terracotta (`#C47D5E`)

---

## Typography

### Font Stack

#### Display & Headlines
**Playfair Display** — Elegant serif with distinctive character

```css
font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
```

*Used for: Headlines, hero text, section titles, prices*

#### Body & UI
**DM Sans** — Clean, geometric sans-serif with warmth

```css
font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
```

*Used for: Body text, buttons, navigation, descriptions*

### Type Scale

| Level | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| **Display XL** | 64px / 4rem | 700 | 1.1 | -0.02em |
| **Display** | 48px / 3rem | 700 | 1.15 | -0.015em |
| **H1** | 40px / 2.5rem | 700 | 1.2 | -0.01em |
| **H2** | 32px / 2rem | 600 | 1.25 | -0.005em |
| **H3** | 24px / 1.5rem | 600 | 1.3 | 0 |
| **H4** | 20px / 1.25rem | 600 | 1.35 | 0 |
| **Body Large** | 18px / 1.125rem | 400 | 1.6 | 0.01em |
| **Body** | 16px / 1rem | 400 | 1.6 | 0.01em |
| **Body Small** | 14px / 0.875rem | 400 | 1.5 | 0.015em |
| **Caption** | 12px / 0.75rem | 500 | 1.4 | 0.02em |
| **Overline** | 11px / 0.6875rem | 600 | 1.3 | 0.1em |

### Typography Guidelines

1. **Headlines** use Playfair Display in bold/semibold weights
2. **Body copy** uses DM Sans for optimal readability
3. **Prices** use Playfair Display to add refinement
4. **Buttons** use DM Sans with medium weight (500) and slight letter-spacing
5. **Overlines/Labels** use DM Sans uppercase with generous letter-spacing

---

## Spacing System

Based on an 8px grid system with a 4px half-step for fine adjustments.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing, icon gaps |
| `--space-2` | 8px | Compact elements, input padding |
| `--space-3` | 12px | Button padding, small gaps |
| `--space-4` | 16px | Standard element spacing |
| `--space-5` | 24px | Section internal padding |
| `--space-6` | 32px | Card padding, medium gaps |
| `--space-7` | 48px | Section spacing |
| `--space-8` | 64px | Large section gaps |
| `--space-9` | 96px | Page section margins |
| `--space-10` | 128px | Hero/major section spacing |

### Layout Measurements

- **Container Max Width**: 1280px
- **Content Max Width**: 1120px
- **Card Grid Gap**: 24px
- **Section Vertical Padding**: 64px - 96px
- **Page Horizontal Padding**: 24px (mobile) / 48px (desktop)

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Tags, small badges |
| `--radius-md` | 8px | Inputs, small cards |
| `--radius-lg` | 12px | Buttons, medium cards |
| `--radius-xl` | 16px | Large cards, modals |
| `--radius-2xl` | 24px | Feature cards, images |
| `--radius-full` | 9999px | Pills, avatars, circular elements |

---

## Shadows & Elevation

| Level | Value | Usage |
|-------|-------|-------|
| **Subtle** | `0 1px 2px rgba(92, 64, 51, 0.04)` | Slight lift, inputs |
| **Low** | `0 2px 8px rgba(92, 64, 51, 0.06)` | Cards at rest |
| **Medium** | `0 4px 16px rgba(92, 64, 51, 0.08)` | Hover states, dropdowns |
| **High** | `0 8px 32px rgba(92, 64, 51, 0.12)` | Modals, popovers |
| **Intense** | `0 16px 48px rgba(92, 64, 51, 0.16)` | Hero elements, focused items |

*Note: Shadows use Oak Brown as base for warmth consistency*

---

## Motion & Animation

### Timing Functions

```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Micro-interactions, hovers |
| `--duration-normal` | 250ms | Standard transitions |
| `--duration-slow` | 400ms | Complex animations |
| `--duration-slower` | 600ms | Page transitions |

### Animation Guidelines

1. **Hover states**: 150ms ease-out-quad
2. **Button press**: 100ms ease-out with slight scale (0.98)
3. **Card hover lift**: 250ms ease-out-expo with translateY(-4px)
4. **Page reveals**: Stagger children by 50ms, 400ms ease-out-expo
5. **Modal/overlay**: 300ms ease-out-expo for entry, 200ms for exit

---

## Iconography

### Style Guidelines

- **Stroke weight**: 1.5px - 2px
- **Size scale**: 16px, 20px, 24px, 32px
- **Corner radius**: Rounded caps and joins
- **Color**: Inherit from parent or use Oak Brown

### Recommended Icon Sets

1. **Lucide Icons** (primary) — Clean, consistent strokes
2. **Phosphor Icons** (alternative) — More character options
3. **Custom illustrations** — For brand-specific moments

### Common Icons Needed

- Navigation: Menu, Search, User, Cart, Heart
- Actions: Plus, Minus, Check, X, Arrow, External Link
- Food: Utensils, Clock, Fire, Leaf, Star
- Social: Instagram, Facebook, Twitter

---

## Photography Style

### Food Photography

- **Lighting**: Natural, warm daylight or golden hour
- **Angles**: 45-degree or flat-lay for plated dishes
- **Backgrounds**: Neutral surfaces—wood, marble, linen
- **Props**: Minimal, authentic materials (ceramic, copper, wood)
- **Color grading**: Warm whites, enhanced earth tones

### Environment Photography

- **Focus**: Intimate dining moments, chef craftsmanship
- **Mood**: Inviting warmth, authentic hospitality
- **Depth**: Shallow depth of field for intimacy

---

## Decorative Elements

### Signature Shapes

1. **Radial Burst**: Soft pink/blush segments radiating from center
   - Used behind featured dishes
   - Creates visual focal points
   - Subtle, never overpowering

2. **Organic Blobs**: Soft, amorphous shapes
   - Background texture elements
   - Cream to pink gradient
   - 10-20% opacity

3. **Circular Frames**: Perfect circles for food presentation
   - White or cream backgrounds
   - Subtle shadow lift
   - Centers the eye on food

### Texture Overlays

- Subtle grain/noise at 2-4% opacity for warmth
- Soft gradient meshes for depth
- Paper texture for organic feel

---

## Responsive Breakpoints

| Name | Value | Description |
|------|-------|-------------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## Accessibility

### Color Contrast

- All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- Interactive elements have visible focus states
- Never rely on color alone for information

### Focus States

```css
/* Standard focus ring */
outline: 2px solid var(--color-honey-gold);
outline-offset: 2px;

/* For dark backgrounds */
outline: 2px solid var(--color-cream-white);
```

### Motion

- Respect `prefers-reduced-motion`
- Provide pause controls for auto-playing content
- Keep essential animations subtle

---

*This style guide is the foundation for all Oak & Barrel digital experiences. Consistency in these elements creates brand recognition and trust.*
