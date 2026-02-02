'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-honey-gold text-charcoal
    hover:bg-honey-gold-light hover:-translate-y-0.5 hover:shadow-medium
    active:bg-honey-gold-dark active:translate-y-0 active:scale-[0.98]
  `,
  secondary: `
    bg-transparent border-[1.5px] border-charcoal text-charcoal
    hover:bg-charcoal hover:text-cream-white
    active:bg-oak-brown
  `,
  ghost: `
    bg-transparent text-oak-brown rounded-lg
    hover:bg-honey-gold-subtle
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs min-h-8',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base min-h-[52px]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center
          font-[family-name:var(--font-body)] font-medium
          rounded-full
          transition-all duration-150 ease-out
          cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
