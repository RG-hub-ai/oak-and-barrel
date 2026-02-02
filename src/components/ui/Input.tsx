'use client';

import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const baseInputStyles = `
  w-full px-4 py-3
  bg-cream-white border border-oak-brown/20
  rounded-xl
  font-[family-name:var(--font-body)] text-charcoal
  placeholder:text-stone-gray/60
  transition-all duration-150
  hover:border-oak-brown/40
  focus:outline-none focus:border-honey-gold focus:ring-2 focus:ring-honey-gold/20
`;

const labelStyles = `
  block mb-2 text-sm font-medium text-charcoal
`;

const errorStyles = `
  mt-1 text-xs text-error
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div>
        {label && <label className={labelStyles}>{label}</label>}
        <input
          ref={ref}
          className={`${baseInputStyles} ${error ? 'border-error' : ''} ${className}`}
          {...props}
        />
        {error && <p className={errorStyles}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div>
        {label && <label className={labelStyles}>{label}</label>}
        <select
          ref={ref}
          className={`${baseInputStyles} cursor-pointer ${error ? 'border-error' : ''} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className={errorStyles}>{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div>
        {label && <label className={labelStyles}>{label}</label>}
        <textarea
          ref={ref}
          className={`${baseInputStyles} resize-none ${error ? 'border-error' : ''} ${className}`}
          rows={4}
          {...props}
        />
        {error && <p className={errorStyles}>{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
