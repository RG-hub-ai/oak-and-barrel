# Oak & Barrel Component Specifications

## Component Library

This document defines all UI components for the Oak & Barrel design system, with detailed specifications for implementation.

---

## Table of Contents

1. [Buttons](#buttons)
2. [Cards](#cards)
3. [Navigation](#navigation)
4. [Forms](#forms)
5. [Rating System](#rating-system)
6. [Typography Components](#typography-components)
7. [Media Components](#media-components)
8. [Decorative Elements](#decorative-elements)
9. [Layout Components](#layout-components)
10. [Feedback Components](#feedback-components)

---

## Buttons

### Primary Button

The main call-to-action button with high visual prominence.

```
┌─────────────────────────────┐
│     Make Reservation        │
└─────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Background | `var(--color-honey-gold)` |
| Text Color | `var(--color-charcoal)` |
| Font | DM Sans, 500 weight |
| Font Size | 14px - 16px |
| Padding | 12px 24px (md) / 16px 32px (lg) |
| Border Radius | `var(--radius-full)` (pill shape) |
| Min Width | 120px |
| Height | 44px (md) / 52px (lg) |
| Letter Spacing | 0.02em |
| Text Transform | None |
| Transition | all 150ms ease-out |

**States:**

| State | Changes |
|-------|---------|
| Default | Base styles |
| Hover | Background: `var(--color-honey-gold-light)`, translateY(-1px), shadow-medium |
| Active | Background: `var(--color-honey-gold-dark)`, translateY(0), scale(0.98) |
| Focus | Outline: 2px solid `var(--color-oak-brown)`, outline-offset: 2px |
| Disabled | Opacity: 0.5, cursor: not-allowed |

---

### Secondary Button (Outlined)

Used for secondary actions, maintaining visual hierarchy.

```
┌─────────────────────────────┐
│       Add To Cart           │
└─────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Background | transparent |
| Border | 1.5px solid `var(--color-charcoal)` |
| Text Color | `var(--color-charcoal)` |
| Font | DM Sans, 500 weight |
| Font Size | 14px |
| Padding | 10px 20px |
| Border Radius | `var(--radius-full)` |
| Transition | all 150ms ease-out |

**States:**

| State | Changes |
|-------|---------|
| Hover | Background: `var(--color-charcoal)`, Text: `var(--color-cream-white)` |
| Active | Background: `var(--color-oak-brown)` |
| Focus | Outline: 2px solid `var(--color-honey-gold)` |

---

### Ghost Button

Minimal button for tertiary actions.

**Specifications:**

| Property | Value |
|----------|-------|
| Background | transparent |
| Text Color | `var(--color-oak-brown)` |
| Font | DM Sans, 500 weight |
| Padding | 8px 16px |
| Border Radius | `var(--radius-md)` |

**States:**

| State | Changes |
|-------|---------|
| Hover | Background: `var(--color-honey-gold-subtle)` |
| Active | Background: `var(--color-terracotta-subtle)` |

---

### Icon Button

Circular buttons for icon-only actions.

**Specifications:**

| Property | Value |
|----------|-------|
| Size | 40px x 40px (md) / 48px x 48px (lg) |
| Border Radius | `var(--radius-full)` |
| Background | `var(--color-warm-linen)` |
| Icon Size | 20px (md) / 24px (lg) |
| Icon Color | `var(--color-oak-brown)` |

---

## Cards

### Product Card (Menu Item)

Displays individual menu items with image, details, and actions.

```
┌────────────────────────────────┐
│                                │
│         [Food Image]           │
│                                │
├────────────────────────────────┤
│                                │
│          Pasta                 │  ← H4, Playfair Display
│         ★★★★★                  │  ← Rating stars
│                                │
│  Pasta is a type of food       │  ← Body small, Stone Gray
│  typically made from an        │
│  unleavened dough.             │
│                                │
│  $35.00      [Add To Cart]     │  ← Price + Button
│                                │
└────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Background | `var(--color-cream-white)` |
| Border | 1px solid `var(--border-subtle)` |
| Border Radius | `var(--radius-xl)` |
| Padding | 0 (image) / 20px (content) |
| Shadow | `var(--shadow-low)` |
| Width | 280px (fixed) or fluid in grid |
| Gap (internal) | 12px |

**Image Container:**

| Property | Value |
|----------|-------|
| Aspect Ratio | 4:3 or 1:1 |
| Border Radius | `var(--radius-xl)` `var(--radius-xl)` 0 0 |
| Object Fit | cover |
| Background | `var(--color-warm-linen)` (placeholder) |

**Title:**

| Property | Value |
|----------|-------|
| Font | Playfair Display |
| Size | 20px |
| Weight | 600 |
| Color | `var(--color-charcoal)` |
| Margin Bottom | 8px |

**Description:**

| Property | Value |
|----------|-------|
| Font | DM Sans |
| Size | 14px |
| Weight | 400 |
| Color | `var(--color-stone-gray)` |
| Line Height | 1.5 |
| Max Lines | 3 (with ellipsis) |

**Price:**

| Property | Value |
|----------|-------|
| Font | Playfair Display |
| Size | 24px |
| Weight | 700 |
| Color | `var(--color-charcoal)` |

**Hover State:**
- Card lifts: translateY(-4px)
- Shadow increases: `var(--shadow-medium)`
- Transition: 250ms ease-out-expo

---

### Feature Card

Horizontal card for highlighting services or features.

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Icon]   We Are More Than                         │
│           Multiple Service                          │
│                                                     │
│           Description text goes here explaining     │
│           the feature or service offered.           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Background | `var(--color-warm-linen)` |
| Border Radius | `var(--radius-2xl)` |
| Padding | 32px |
| Display | flex, align-items: start |
| Gap | 24px |

---

### Chef/Team Card

Profile card for team members.

```
┌────────────────────────────────┐
│                                │
│         [Photo]                │
│        (circular)              │
│                                │
│        Chef Name               │
│       Head Chef                │
│                                │
└────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Background | `var(--color-cream-white)` |
| Border Radius | `var(--radius-2xl)` |
| Padding | 24px |
| Text Align | center |
| Image Size | 120px diameter |
| Image Border | 4px solid `var(--color-honey-gold)` |

---

### Testimonial Card

Customer review display.

```
┌────────────────────────────────┐
│  "Testimonial quote text       │
│   goes here with the           │
│   customer's feedback."        │
│                                │
│  ★★★★★                         │
│                                │
│  [Avatar]  Customer Name       │
│            Location            │
└────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Background | `var(--color-cream-white)` |
| Border | 1px solid `var(--border-default)` |
| Border Radius | `var(--radius-xl)` |
| Padding | 32px |
| Quote Font | Playfair Display, italic |
| Quote Size | 18px |

---

## Navigation

### Main Navigation Bar

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo]     Home  About  Menu  Contact          [Make Reservation] │
└────────────────────────────────────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Background | `var(--color-cream-white)` or transparent |
| Height | 80px |
| Padding | 0 48px |
| Position | sticky / fixed |
| Shadow (scrolled) | `var(--shadow-low)` |
| Z-Index | `var(--z-sticky)` |

**Logo:**

| Property | Value |
|----------|-------|
| Font | Playfair Display |
| Size | 24px |
| Weight | 700 |
| Color | `var(--color-charcoal)` |

**Nav Links:**

| Property | Value |
|----------|-------|
| Font | DM Sans |
| Size | 15px |
| Weight | 500 |
| Color | `var(--color-charcoal)` |
| Gap Between | 32px |
| Hover | Color: `var(--color-honey-gold-dark)` |
| Active | Color: `var(--color-honey-gold)`, underline |

---

### Mobile Navigation

Slide-out drawer from right side.

**Specifications:**

| Property | Value |
|----------|-------|
| Width | 280px or 80vw (max) |
| Background | `var(--color-cream-white)` |
| Shadow | `var(--shadow-intense)` |
| Animation | slideInRight 300ms ease-out-expo |

---

## Forms

### Text Input

```
┌────────────────────────────────┐
│  Your Name                     │
└────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Background | `var(--color-cream-white)` |
| Border | 1.5px solid `var(--border-default)` |
| Border Radius | `var(--radius-lg)` |
| Height | 48px |
| Padding | 0 16px |
| Font | DM Sans, 16px |
| Color | `var(--color-charcoal)` |
| Placeholder Color | `var(--color-stone-gray)` |

**States:**

| State | Changes |
|-------|---------|
| Hover | Border: `var(--border-strong)` |
| Focus | Border: `var(--color-honey-gold)`, shadow-gold |
| Error | Border: `var(--color-error)` |
| Disabled | Background: `var(--color-warm-linen)`, opacity: 0.7 |

---

### Select Dropdown

**Specifications:**

| Property | Value |
|----------|-------|
| Appearance | Same as text input |
| Dropdown Icon | Chevron down, 20px |
| Option Hover | Background: `var(--color-warm-linen)` |
| Option Selected | Background: `var(--color-honey-gold-subtle)` |

---

### Textarea

**Specifications:**

| Property | Value |
|----------|-------|
| Min Height | 120px |
| Resize | vertical |
| Other | Same as text input |

---

### Form Label

**Specifications:**

| Property | Value |
|----------|-------|
| Font | DM Sans |
| Size | 14px |
| Weight | 500 |
| Color | `var(--color-charcoal)` |
| Margin Bottom | 8px |

---

### Checkbox & Radio

**Specifications:**

| Property | Value |
|----------|-------|
| Size | 20px x 20px |
| Border | 2px solid `var(--border-strong)` |
| Border Radius | 4px (checkbox) / 50% (radio) |
| Checked Background | `var(--color-honey-gold)` |
| Checkmark Color | `var(--color-charcoal)` |

---

## Rating System

### Star Rating Display

```
★★★★☆  4.0
```

**Specifications:**

| Property | Value |
|----------|-------|
| Star Size | 16px (sm) / 20px (md) / 24px (lg) |
| Filled Color | `var(--color-honey-gold)` |
| Empty Color | `var(--color-stone-gray-light)` |
| Gap | 2px |
| Text (optional) | 14px, `var(--color-stone-gray)` |

### Interactive Star Rating

For user input.

**Specifications:**

| Property | Value |
|----------|-------|
| Star Size | 32px |
| Hover | Scale(1.1), cursor: pointer |
| Transition | 150ms ease-out |

---

## Typography Components

### Section Header

```
                Our Popular Dishes
```

**Specifications:**

| Property | Value |
|----------|-------|
| Font | Playfair Display |
| Size | 40px (desktop) / 32px (mobile) |
| Weight | 700 |
| Color | `var(--color-charcoal)` |
| Letter Spacing | -0.01em |
| Margin Bottom | 48px |

---

### Hero Headline

```
We Serve The Test
You Love 🍽️
```

**Specifications:**

| Property | Value |
|----------|-------|
| Font | Playfair Display |
| Size | 56px (desktop) / 40px (mobile) |
| Weight | 700 |
| Line Height | 1.1 |
| Color | `var(--color-charcoal)` |

---

### Overline / Label

```
POPULAR DISHES
```

**Specifications:**

| Property | Value |
|----------|-------|
| Font | DM Sans |
| Size | 12px |
| Weight | 600 |
| Letter Spacing | 0.1em |
| Text Transform | uppercase |
| Color | `var(--color-honey-gold)` |

---

### Body Text

**Specifications:**

| Property | Value |
|----------|-------|
| Font | DM Sans |
| Size | 16px |
| Weight | 400 |
| Line Height | 1.6 |
| Color | `var(--color-stone-gray)` |

---

## Media Components

### Dish Image (Circular)

```
     ╭──────────╮
    │  [Image]  │
     ╰──────────╯
```

**Specifications:**

| Property | Value |
|----------|-------|
| Shape | Circle |
| Size | 200px - 400px |
| Border | None or 4px solid `var(--color-cream-white)` |
| Shadow | `var(--shadow-medium)` |
| Object Fit | cover |

---

### Hero Image

Large featured image with decorative background.

**Specifications:**

| Property | Value |
|----------|-------|
| Max Width | 600px |
| Aspect Ratio | 1:1 or 4:3 |
| Border Radius | `var(--radius-2xl)` or full circle |
| Background Decoration | Radial burst pattern |

---

### Image Gallery Grid

**Specifications:**

| Property | Value |
|----------|-------|
| Display | Grid |
| Columns | 4 (desktop) / 2 (tablet) / 1 (mobile) |
| Gap | 24px |
| Image Aspect | 1:1 |
| Border Radius | `var(--radius-xl)` |

---

## Decorative Elements

### Radial Burst Background

Soft pink segments radiating from center, used behind featured dishes.

**Specifications:**

| Property | Value |
|----------|-------|
| Colors | `var(--color-blush-pink)` segments on `var(--color-cream-white)` |
| Segments | 8-12 |
| Opacity | 100% (visible) |
| Size | 120% of contained image |
| Position | Centered behind image |

**CSS Implementation:**

```css
.radial-burst {
  background: conic-gradient(
    from 0deg,
    var(--color-blush-pink) 0deg 30deg,
    var(--color-cream-white) 30deg 45deg,
    var(--color-blush-pink) 45deg 75deg,
    var(--color-cream-white) 75deg 90deg,
    /* repeat pattern */
  );
  border-radius: 50%;
}
```

---

### Decorative Blob

Organic background shapes.

**Specifications:**

| Property | Value |
|----------|-------|
| Fill | `var(--color-blush-pink)` or gradient |
| Opacity | 40-60% |
| Position | absolute, z-index: -1 |
| Animation | Subtle floating (optional) |

---

### Section Divider

**Specifications:**

| Property | Value |
|----------|-------|
| Height | 1px |
| Color | `var(--border-subtle)` |
| Max Width | 1120px |
| Margin | 64px auto |

---

## Layout Components

### Container

**Specifications:**

| Property | Value |
|----------|-------|
| Max Width | 1280px |
| Padding | 24px (mobile) / 48px (desktop) |
| Margin | 0 auto |

---

### Grid System

**Specifications:**

| Property | Value |
|----------|-------|
| Columns | 12 |
| Gutter | 24px |
| Breakpoints | Follow responsive breakpoints |

---

### Section

**Specifications:**

| Property | Value |
|----------|-------|
| Padding | 64px 0 (mobile) / 96px 0 (desktop) |
| Background | Alternating cream/linen |

---

## Feedback Components

### Toast Notification

```
┌──────────────────────────────────┐
│  ✓  Item added to cart           │
└──────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Background | `var(--color-charcoal)` |
| Text Color | `var(--color-cream-white)` |
| Border Radius | `var(--radius-lg)` |
| Padding | 16px 24px |
| Shadow | `var(--shadow-high)` |
| Position | fixed, bottom: 24px |
| Animation | slideUp 300ms ease-out-expo |

---

### Loading Spinner

**Specifications:**

| Property | Value |
|----------|-------|
| Size | 24px (sm) / 40px (md) |
| Color | `var(--color-honey-gold)` |
| Animation | spin 1s linear infinite |
| Border | 3px solid, transparent top |

---

### Empty State

**Specifications:**

| Property | Value |
|----------|-------|
| Icon Size | 64px |
| Icon Color | `var(--color-stone-gray-light)` |
| Title Font | Playfair Display, 24px |
| Description | DM Sans, 16px, `var(--color-stone-gray)` |
| Padding | 64px |

---

### Modal / Dialog

**Specifications:**

| Property | Value |
|----------|-------|
| Background | `var(--color-cream-white)` |
| Border Radius | `var(--radius-2xl)` |
| Padding | 32px |
| Max Width | 480px |
| Shadow | `var(--shadow-intense)` |
| Overlay | rgba(45, 42, 38, 0.5) |
| Animation | fadeIn + scaleIn 300ms ease-out-expo |

---

## Component Animation Reference

| Component | Animation |
|-----------|-----------|
| Button hover | translateY(-1px), 150ms |
| Card hover | translateY(-4px), shadow increase, 250ms |
| Modal enter | opacity 0→1, scale 0.95→1, 300ms |
| Toast enter | translateY(100%)→0, 300ms |
| Nav link hover | Color transition, 150ms |
| Star rating hover | scale(1.1), 150ms |
| Page section reveal | opacity 0→1, translateY(20px)→0, stagger 50ms |

---

*This component library ensures consistent implementation across all Oak & Barrel digital touchpoints.*
