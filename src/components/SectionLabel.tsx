import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <span 
      className={`
        text-sm font-normal
        ${light ? 'text-white/70' : 'text-marion-text-secondary'}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
