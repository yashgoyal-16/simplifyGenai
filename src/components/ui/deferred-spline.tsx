import { useState, useEffect, useRef } from 'react';

interface DeferredSplineProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  enableOnInteraction?: boolean;
  delay?: number;
}

export const DeferredSpline = ({ 
  children, 
  fallback, 
  enableOnInteraction = true,
  delay = 3000 
}: DeferredSplineProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableOnInteraction) {
      const timer = setTimeout(() => setShouldLoad(true), delay);
      return () => clearTimeout(timer);
    }

    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setShouldLoad(true);
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !hasInteracted) {
        // Only preload on scroll, but don't fully load until interaction
        document.addEventListener('click', handleInteraction, { once: true });
        document.addEventListener('touchstart', handleInteraction, { once: true });
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '100px'
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [enableOnInteraction, delay, hasInteracted]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {shouldLoad ? children : fallback}
    </div>
  );
};