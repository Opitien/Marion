import { ChevronRight } from 'lucide-react';

interface ShopButtonProps {
  variant?: 'light' | 'dark';
  children?: string;
  className?: string;
}

export function ShopButton({ 
  variant = 'light', 
  children = 'Shop Now',
  className = '' 
}: ShopButtonProps) {
  const isLight = variant === 'light';

  return (
    <button
      className={`
        group inline-flex items-center gap-2 px-6 py-4 text-sm font-medium
        transition-all duration-200 hover:scale-[1.02]
        ${isLight 
          ? 'bg-white text-marion-primary hover:bg-white/90' 
          : 'bg-transparent text-white border border-white hover:bg-white/10'
        }
        ${className}
      `}
    >
      {children}
      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
}
