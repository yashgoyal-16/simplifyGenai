import React from 'react';
import { useLazyLoad } from '@/hooks/useLazyLoad';
import { cn } from '@/lib/utils';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fadeIn?: boolean;
  slideUp?: boolean;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  className,
  threshold = 0.1,
  rootMargin = '50px',
  fadeIn = true,
  slideUp = false,
}) => {
  const { ref, isVisible } = useLazyLoad({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        fadeIn && (isVisible ? "opacity-100" : "opacity-0"),
        slideUp && (isVisible ? "translate-y-0" : "translate-y-8"),
        className
      )}
    >
      {children}
    </div>
  );
};