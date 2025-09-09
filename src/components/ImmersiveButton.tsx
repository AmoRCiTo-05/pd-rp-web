import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImmersiveButtonProps extends ButtonProps {
  glow?: boolean;
  pulse?: boolean;
  floating?: boolean;
}

export function ImmersiveButton({ 
  className, 
  glow = false, 
  pulse = false, 
  floating = false,
  children,
  ...props 
}: ImmersiveButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-200",
        glow && "shadow-lg hover:shadow-xl hover:shadow-primary/25",
        pulse && "pulse-gentle",
        floating && "hover-lift",
        "focus-ring",
        className
      )}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10">
        {children}
      </span>
    </Button>
  );
}