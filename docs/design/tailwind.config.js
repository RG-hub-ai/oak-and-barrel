/**
 * Oak & Barrel Design System
 * Tailwind CSS Configuration
 *
 * This configuration extends Tailwind with our custom design tokens.
 * Import this in your project's tailwind.config.js
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}",
  ],

  theme: {
    /* ═══════════════════════════════════════════════════════════════
       COLORS
       ═══════════════════════════════════════════════════════════════ */
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      // Primary Palette
      'honey-gold': {
        DEFAULT: '#E8A849',
        light: '#F0C175',
        dark: '#C88A2E',
        subtle: 'rgba(232, 168, 73, 0.12)',
      },
      'terracotta': {
        DEFAULT: '#C47D5E',
        light: '#D9A088',
        dark: '#A55F42',
        subtle: 'rgba(196, 125, 94, 0.12)',
      },
      'oak-brown': {
        DEFAULT: '#5C4033',
        light: '#7A5A48',
        dark: '#3D2A22',
      },

      // Neutral Palette
      'cream-white': '#FDF8F3',
      'warm-linen': '#F5EDE4',
      'blush-pink': {
        DEFAULT: '#FADCD5',
        light: '#FDF0ED',
      },
      'stone-gray': {
        DEFAULT: '#8B8178',
        light: '#A9A299',
      },
      'charcoal': {
        DEFAULT: '#2D2A26',
        light: '#4A4640',
      },

      // Semantic Colors
      'success': {
        DEFAULT: '#6B9B5A',
        light: '#8BB87C',
        subtle: 'rgba(107, 155, 90, 0.12)',
      },
      'warning': {
        DEFAULT: '#E8A849',
        light: '#F0C175',
        subtle: 'rgba(232, 168, 73, 0.12)',
      },
      'error': {
        DEFAULT: '#C45E5E',
        light: '#D88080',
        subtle: 'rgba(196, 94, 94, 0.12)',
      },
      'info': {
        DEFAULT: '#5E8BC4',
        light: '#82A8D6',
        subtle: 'rgba(94, 139, 196, 0.12)',
      },

      // Utility
      white: '#FFFFFF',
      black: '#000000',
    },

    /* ═══════════════════════════════════════════════════════════════
       TYPOGRAPHY
       ═══════════════════════════════════════════════════════════════ */
    fontFamily: {
      display: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
      body: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
    },

    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1.4' }],      // 12px
      'sm': ['0.875rem', { lineHeight: '1.5' }],    // 14px
      'base': ['1rem', { lineHeight: '1.6' }],      // 16px
      'lg': ['1.125rem', { lineHeight: '1.6' }],    // 18px
      'xl': ['1.25rem', { lineHeight: '1.35' }],    // 20px
      '2xl': ['1.5rem', { lineHeight: '1.3' }],     // 24px
      '3xl': ['2rem', { lineHeight: '1.25' }],      // 32px
      '4xl': ['2.5rem', { lineHeight: '1.2' }],     // 40px
      '5xl': ['3rem', { lineHeight: '1.15' }],      // 48px
      '6xl': ['4rem', { lineHeight: '1.1' }],       // 64px
    },

    letterSpacing: {
      'tighter': '-0.02em',
      'tight': '-0.01em',
      'normal': '0',
      'wide': '0.01em',
      'wider': '0.02em',
      'widest': '0.1em',
    },

    /* ═══════════════════════════════════════════════════════════════
       SPACING
       ═══════════════════════════════════════════════════════════════ */
    spacing: {
      'px': '1px',
      '0': '0',
      '0.5': '0.125rem',   // 2px
      '1': '0.25rem',      // 4px
      '2': '0.5rem',       // 8px
      '3': '0.75rem',      // 12px
      '4': '1rem',         // 16px
      '5': '1.25rem',      // 20px
      '6': '1.5rem',       // 24px
      '7': '1.75rem',      // 28px
      '8': '2rem',         // 32px
      '9': '2.25rem',      // 36px
      '10': '2.5rem',      // 40px
      '11': '2.75rem',     // 44px
      '12': '3rem',        // 48px
      '14': '3.5rem',      // 56px
      '16': '4rem',        // 64px
      '20': '5rem',        // 80px
      '24': '6rem',        // 96px
      '28': '7rem',        // 112px
      '32': '8rem',        // 128px
      '36': '9rem',        // 144px
      '40': '10rem',       // 160px
    },

    /* ═══════════════════════════════════════════════════════════════
       BORDER RADIUS
       ═══════════════════════════════════════════════════════════════ */
    borderRadius: {
      'none': '0',
      'sm': '0.25rem',     // 4px
      'DEFAULT': '0.5rem', // 8px
      'md': '0.5rem',      // 8px
      'lg': '0.75rem',     // 12px
      'xl': '1rem',        // 16px
      '2xl': '1.5rem',     // 24px
      '3xl': '2rem',       // 32px
      'full': '9999px',
    },

    /* ═══════════════════════════════════════════════════════════════
       BOX SHADOW
       ═══════════════════════════════════════════════════════════════ */
    boxShadow: {
      'none': 'none',
      'subtle': '0 1px 2px rgba(92, 64, 51, 0.04)',
      'low': '0 2px 8px rgba(92, 64, 51, 0.06)',
      'DEFAULT': '0 2px 8px rgba(92, 64, 51, 0.06)',
      'medium': '0 4px 16px rgba(92, 64, 51, 0.08)',
      'high': '0 8px 32px rgba(92, 64, 51, 0.12)',
      'intense': '0 16px 48px rgba(92, 64, 51, 0.16)',
      'gold': '0 4px 24px rgba(232, 168, 73, 0.24)',
      'gold-intense': '0 8px 32px rgba(232, 168, 73, 0.32)',
    },

    /* ═══════════════════════════════════════════════════════════════
       TRANSITIONS
       ═══════════════════════════════════════════════════════════════ */
    transitionDuration: {
      'instant': '50ms',
      'fast': '150ms',
      'DEFAULT': '250ms',
      'normal': '250ms',
      'slow': '400ms',
      'slower': '600ms',
      'slowest': '1000ms',
    },

    transitionTimingFunction: {
      'linear': 'linear',
      'in': 'cubic-bezier(0.4, 0, 1, 1)',
      'out': 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      'in-out-quad': 'cubic-bezier(0.45, 0, 0.55, 1)',
      'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },

    /* ═══════════════════════════════════════════════════════════════
       Z-INDEX
       ═══════════════════════════════════════════════════════════════ */
    zIndex: {
      'below': '-1',
      '0': '0',
      '10': '10',
      'elevated': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      'dropdown': '100',
      'sticky': '200',
      'fixed': '300',
      'overlay': '400',
      'modal': '500',
      'popover': '600',
      'tooltip': '700',
      'toast': '800',
      'max': '9999',
    },

    /* ═══════════════════════════════════════════════════════════════
       EXTEND
       ═══════════════════════════════════════════════════════════════ */
    extend: {
      maxWidth: {
        'content': '1120px',
        'container': '1280px',
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-out': 'fadeOut 0.2s ease-in',
        'slide-up': 'slideUp 0.3s ease-out-expo',
        'slide-down': 'slideDown 0.3s ease-out-expo',
        'slide-in-right': 'slideInRight 0.3s ease-out-expo',
        'scale-in': 'scaleIn 0.3s ease-out-expo',
        'spin-slow': 'spin 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      backgroundImage: {
        'radial-burst': `conic-gradient(
          from 0deg,
          #FADCD5 0deg 30deg,
          #FDF8F3 30deg 45deg,
          #FADCD5 45deg 75deg,
          #FDF8F3 75deg 90deg,
          #FADCD5 90deg 120deg,
          #FDF8F3 120deg 135deg,
          #FADCD5 135deg 165deg,
          #FDF8F3 165deg 180deg,
          #FADCD5 180deg 210deg,
          #FDF8F3 210deg 225deg,
          #FADCD5 225deg 255deg,
          #FDF8F3 255deg 270deg,
          #FADCD5 270deg 300deg,
          #FDF8F3 300deg 315deg,
          #FADCD5 315deg 345deg,
          #FDF8F3 345deg 360deg
        )`,
        'gradient-warm': 'linear-gradient(135deg, #FDF8F3 0%, #F5EDE4 50%, #FADCD5 100%)',
        'gradient-gold': 'linear-gradient(135deg, #E8A849 0%, #F0C175 100%)',
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════════
     PLUGINS
     ═══════════════════════════════════════════════════════════════ */
  plugins: [
    // Custom plugin for text styles
    function({ addComponents, theme }) {
      addComponents({
        '.text-display-xl': {
          fontFamily: theme('fontFamily.display'),
          fontSize: theme('fontSize.6xl')[0],
          lineHeight: theme('fontSize.6xl')[1].lineHeight,
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: theme('letterSpacing.tighter'),
        },
        '.text-display': {
          fontFamily: theme('fontFamily.display'),
          fontSize: theme('fontSize.5xl')[0],
          lineHeight: theme('fontSize.5xl')[1].lineHeight,
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: theme('letterSpacing.tight'),
        },
        '.text-heading-1': {
          fontFamily: theme('fontFamily.display'),
          fontSize: theme('fontSize.4xl')[0],
          lineHeight: theme('fontSize.4xl')[1].lineHeight,
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: theme('letterSpacing.tight'),
        },
        '.text-heading-2': {
          fontFamily: theme('fontFamily.display'),
          fontSize: theme('fontSize.3xl')[0],
          lineHeight: theme('fontSize.3xl')[1].lineHeight,
          fontWeight: theme('fontWeight.semibold'),
        },
        '.text-heading-3': {
          fontFamily: theme('fontFamily.display'),
          fontSize: theme('fontSize.2xl')[0],
          lineHeight: theme('fontSize.2xl')[1].lineHeight,
          fontWeight: theme('fontWeight.semibold'),
        },
        '.text-heading-4': {
          fontFamily: theme('fontFamily.display'),
          fontSize: theme('fontSize.xl')[0],
          lineHeight: theme('fontSize.xl')[1].lineHeight,
          fontWeight: theme('fontWeight.semibold'),
        },
        '.text-body-lg': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.lg')[0],
          lineHeight: theme('fontSize.lg')[1].lineHeight,
        },
        '.text-body': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.base')[0],
          lineHeight: theme('fontSize.base')[1].lineHeight,
        },
        '.text-body-sm': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.sm')[0],
          lineHeight: theme('fontSize.sm')[1].lineHeight,
        },
        '.text-caption': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.xs')[0],
          lineHeight: theme('fontSize.xs')[1].lineHeight,
          fontWeight: theme('fontWeight.medium'),
        },
        '.text-overline': {
          fontFamily: theme('fontFamily.body'),
          fontSize: '0.6875rem',
          lineHeight: '1.3',
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: theme('letterSpacing.widest'),
          textTransform: 'uppercase',
        },
      });
    },

    // Custom plugin for buttons
    function({ addComponents, theme }) {
      addComponents({
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: theme('fontFamily.body'),
          fontWeight: theme('fontWeight.medium'),
          borderRadius: theme('borderRadius.full'),
          transitionProperty: 'all',
          transitionDuration: theme('transitionDuration.fast'),
          transitionTimingFunction: theme('transitionTimingFunction.out'),
          cursor: 'pointer',
          '&:focus': {
            outline: `2px solid ${theme('colors.honey-gold.DEFAULT')}`,
            outlineOffset: '2px',
          },
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed',
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.honey-gold.DEFAULT'),
          color: theme('colors.charcoal.DEFAULT'),
          padding: '12px 24px',
          fontSize: theme('fontSize.sm')[0],
          letterSpacing: theme('letterSpacing.wide'),
          '&:hover': {
            backgroundColor: theme('colors.honey-gold.light'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.medium'),
          },
          '&:active': {
            backgroundColor: theme('colors.honey-gold.dark'),
            transform: 'translateY(0) scale(0.98)',
          },
        },
        '.btn-secondary': {
          backgroundColor: 'transparent',
          border: `1.5px solid ${theme('colors.charcoal.DEFAULT')}`,
          color: theme('colors.charcoal.DEFAULT'),
          padding: '10px 20px',
          fontSize: theme('fontSize.sm')[0],
          '&:hover': {
            backgroundColor: theme('colors.charcoal.DEFAULT'),
            color: theme('colors.cream-white'),
          },
          '&:active': {
            backgroundColor: theme('colors.oak-brown.DEFAULT'),
          },
        },
        '.btn-ghost': {
          backgroundColor: 'transparent',
          color: theme('colors.oak-brown.DEFAULT'),
          padding: '8px 16px',
          borderRadius: theme('borderRadius.md'),
          '&:hover': {
            backgroundColor: theme('colors.honey-gold.subtle'),
          },
        },
        '.btn-lg': {
          padding: '16px 32px',
          fontSize: theme('fontSize.base')[0],
          minHeight: '52px',
        },
        '.btn-sm': {
          padding: '8px 16px',
          fontSize: theme('fontSize.xs')[0],
          minHeight: '32px',
        },
      });
    },

    // Custom plugin for cards
    function({ addComponents, theme }) {
      addComponents({
        '.card': {
          backgroundColor: theme('colors.cream-white'),
          borderRadius: theme('borderRadius.xl'),
          boxShadow: theme('boxShadow.low'),
          border: `1px solid rgba(92, 64, 51, 0.06)`,
          transitionProperty: 'transform, box-shadow',
          transitionDuration: theme('transitionDuration.normal'),
          transitionTimingFunction: theme('transitionTimingFunction.out-expo'),
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme('boxShadow.medium'),
          },
        },
        '.card-elevated': {
          backgroundColor: theme('colors.cream-white'),
          borderRadius: theme('borderRadius.2xl'),
          boxShadow: theme('boxShadow.medium'),
        },
      });
    },
  ],
};
