import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'content' | 'full';
}

export function Container({ children, size = 'content', className = '', ...props }: ContainerProps) {
  return (
    <div
      className={`
        mx-auto px-4 sm:px-6 lg:px-8
        ${size === 'content' ? 'max-w-[1120px]' : 'max-w-full'}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
