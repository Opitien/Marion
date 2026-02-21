import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionTitle({ children, className = '', light = false }: SectionTitleProps) {
  return (
    <h2 
      className={`
        text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight
        ${light ? 'text-white' : 'text-marion-primary'}
        ${className}
      `}
    >
      {children}
    </h2>
  );
}
