import React from 'react';
import { useLazyImage } from '@/hooks/useLazyLoad';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  threshold?: number;
  rootMargin?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder,
  threshold,
  rootMargin,
  className,
  ...props
}) => {
  const { ref, src: lazySrc, isLoaded, isVisible } = useLazyImage(src, {
    threshold,
    rootMargin,
  });

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          {placeholder && (
            <img
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          )}
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={lazySrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        loading="lazy"
        {...props}
      />
    </div>
  );
};