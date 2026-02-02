# Oak & Barrel Design System

Welcome to the Oak & Barrel design system documentation. This comprehensive guide provides everything needed to build consistent, beautiful interfaces for the Oak & Barrel brand.

---

## Overview

Oak & Barrel is a restaurant brand that embodies **warm sophistication** and **culinary excellence**. The design system draws inspiration from earthy materials—aged oak wood, terracotta ceramics, golden honey, and sun-baked wheat—creating an atmosphere that feels both refined and approachable.

### Design Principles

1. **Warm Sophistication** — Elevated dining without pretension
2. **Organic Authenticity** — Natural textures and honest materials
3. **Culinary Storytelling** — Every element serves the food narrative
4. **Inviting Comfort** — Spaces that feel like home, elevated

---

## Documentation Structure

### 📖 [Style Guide](./style-guide.md)
The foundational document covering:
- Brand essence and design philosophy
- Complete color palette with usage guidelines
- Typography system (Playfair Display + DM Sans)
- Spacing, shadows, and motion specifications
- Photography and iconography standards
- Accessibility requirements

### 🎨 [Design Tokens](./design-tokens.css)
CSS custom properties ready for implementation:
- All color tokens (primary, neutral, semantic)
- Typography tokens (families, sizes, weights)
- Spacing scale (8px grid system)
- Border radius and shadow values
- Animation timing and easing functions
- Z-index layering system

Also available as JSON: [design-tokens.json](./design-tokens.json)

### 🧩 [Component Specifications](./components.md)
Detailed specs for all UI components:
- Buttons (primary, secondary, ghost, icon)
- Cards (product, feature, testimonial)
- Navigation (desktop, mobile)
- Form inputs (text, select, textarea)
- Star rating system
- Typography components
- Decorative elements (radial burst, blobs)
- Feedback components (toast, modal, loading)

### ⚙️ [Tailwind Configuration](./tailwind.config.js)
Ready-to-use Tailwind CSS config with:
- Custom color palette
- Typography classes
- Button and card component plugins
- Animation utilities
- All design tokens integrated

### 🖼️ [Component Examples](./component-examples.html)
Interactive HTML reference showing:
- Live component demos
- Color swatches
- Typography specimens
- Button states
- Card variations
- Form elements
- All implemented with production CSS

---

## Quick Start

### Using CSS Custom Properties

```html
<link rel="stylesheet" href="design-tokens.css">
```

```css
.my-component {
  background: var(--color-cream-white);
  color: var(--color-charcoal);
  font-family: var(--font-body);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-low);
  transition: all var(--transition-normal);
}
```

### Using Tailwind CSS

```javascript
// tailwind.config.js
import oakBarrelConfig from './docs/design/tailwind.config.js';

export default {
  ...oakBarrelConfig,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
};
```

```html
<button class="btn btn-primary">Make Reservation</button>
<div class="card">Card content</div>
```

---

## Color Palette Summary

| Color | Hex | Usage |
|-------|-----|-------|
| Honey Gold | `#E8A849` | Primary CTAs, accents |
| Terracotta | `#C47D5E` | Secondary accent, warmth |
| Oak Brown | `#5C4033` | Text, grounding elements |
| Cream White | `#FDF8F3` | Primary background |
| Warm Linen | `#F5EDE4` | Cards, secondary surfaces |
| Blush Pink | `#FADCD5` | Decorative elements |
| Stone Gray | `#8B8178` | Secondary text |
| Charcoal | `#2D2A26` | Primary text |

---

## Typography Summary

| Role | Font | Weight | Size Range |
|------|------|--------|------------|
| Display/Headlines | Playfair Display | 600-700 | 24px - 64px |
| Body/UI | DM Sans | 400-500 | 12px - 18px |
| Prices | Playfair Display | 700 | 20px - 32px |
| Buttons | DM Sans | 500 | 12px - 16px |

---

## Key Components

### Buttons
- **Primary**: Honey gold background, pill shape, charcoal text
- **Secondary**: Outlined, charcoal border, fills on hover
- **Ghost**: Transparent, subtle hover state

### Cards
- **Product Card**: 280px width, image + content + price/action
- **Feature Card**: Horizontal layout with icon, warm linen background
- **Testimonial Card**: Quote-focused with avatar

### Decorative
- **Radial Burst**: Pink/cream conic gradient behind hero images
- **Organic Blobs**: Soft background shapes for depth

---

## Reference Images

The original design references are located in:
```
docs/design/references/
├── original-40ad278f0f4648eeb879314ed7da2790.webp (Homepage)
├── original-e90036e6873d85c6a10737b0a2597293.webp (Reservation)
├── original-e9ce715fcee3b3e9e4efa4e69eac73b3.webp (Menu Grid)
└── menu-items.csv (Menu data)
```

---

## Implementation Notes

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Recommended Icon Set
- **Lucide Icons** — Clean, consistent strokes
- Stroke weight: 1.5px - 2px

### Accessibility
- All text meets WCAG AA contrast (4.5:1 body, 3:1 large)
- Focus states use 2px honey gold outline
- Respect `prefers-reduced-motion`

---

## Version

**Design System Version:** 1.0.0
**Last Updated:** February 2026

---

*This design system ensures consistent, beautiful experiences across all Oak & Barrel digital touchpoints.*
