import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export function LoadingSpinner({ size = 'md', className, text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-2", className)}>
      <div className={cn(
        "animate-spin rounded-full border-2 border-muted border-t-primary",
        sizeClasses[size]
      )} />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}

export function LoadingCard({ className }: { className?: string }) {
  return (
    <div className={cn("immersive-card p-6 space-y-4", className)}>
      <div className="loading-shimmer h-6 rounded w-3/4" />
      <div className="loading-shimmer h-4 rounded w-1/2" />
      <div className="space-y-2">
        <div className="loading-shimmer h-3 rounded w-full" />
        <div className="loading-shimmer h-3 rounded w-5/6" />
        <div className="loading-shimmer h-3 rounded w-4/6" />
      </div>
    </div>
  );
}

export function LoadingGrid({ count = 6, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
}