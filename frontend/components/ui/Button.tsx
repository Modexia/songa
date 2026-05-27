'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base
          'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-xl cursor-pointer select-none',
          // Variants
          variant === 'primary' && 'bg-[#FF6B35] text-white hover:bg-[#e85d2a] active:scale-[0.97] shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5',
          variant === 'gradient' && 'bg-gradient-to-r from-[#FF6B35] to-[#ff8f5e] text-white hover:from-[#e85d2a] hover:to-[#FF6B35] active:scale-[0.97] shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 hover:-translate-y-0.5',
          variant === 'secondary' && 'bg-[#0A0F1E] text-white hover:bg-[#1a2035] active:scale-[0.97] shadow-lg shadow-black/20',
          variant === 'outline' && 'border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white active:scale-[0.97]',
          variant === 'ghost' && 'text-white border border-white/30 hover:bg-white/10 hover:border-white/50 active:scale-[0.97]',
          // Sizes
          size === 'sm' && 'h-9 px-4 text-sm',
          size === 'md' && 'h-11 px-6 text-sm',
          size === 'lg' && 'h-13 px-8 text-base',
          size === 'xl' && 'h-15 px-10 text-lg',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export { Button };
