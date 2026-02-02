import { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'signature' | 'bestseller' | 'chefChoice' | 'vegan' | 'spicy' | 'vegetarian' | 'glutenFree' | 'classic' | 'kids' | 'default';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  signature: 'bg-honey-gold text-charcoal',
  bestseller: 'bg-terracotta text-white',
  chefChoice: 'bg-oak-brown text-cream-white',
  vegan: 'bg-success text-white',
  vegetarian: 'bg-success/80 text-white',
  spicy: 'bg-error text-white',
  glutenFree: 'bg-info text-white',
  classic: 'bg-stone-gray text-white',
  kids: 'bg-blush-pink text-oak-brown',
  default: 'bg-warm-linen text-charcoal',
};

export function Badge({ variant = 'default', className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-1
        text-xs font-medium rounded-full
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

export function getBadgeVariant(badgeText: string): BadgeVariant {
  const text = badgeText.toLowerCase();
  if (text.includes('signature')) return 'signature';
  if (text.includes('bestseller') || text.includes('popular')) return 'bestseller';
  if (text.includes('chef')) return 'chefChoice';
  if (text.includes('vegan')) return 'vegan';
  if (text.includes('vegetarian') || text.includes('vegetarisch')) return 'vegetarian';
  if (text.includes('spicy') || text.includes('scharf')) return 'spicy';
  if (text.includes('gluten')) return 'glutenFree';
  if (text.includes('classic') || text.includes('klassiker')) return 'classic';
  if (text.includes('kids')) return 'kids';
  return 'default';
}
