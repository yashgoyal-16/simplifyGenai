import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const observeWebVitals = () => {
      // CLS - Cumulative Layout Shift
      let cls = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShift = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (layoutShift.hadRecentInput) continue;
          cls += layoutShift.value || 0;
        }
      });
      observer.observe({ type: 'layout-shift', buffered: true });

      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // FID - First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = entry.processingStart - entry.startTime;
          console.log('FID:', fid);
        }
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
    };

    // Resource loading optimization
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = '/fonts/inter-var.woff2'; // Adjust path as needed
      document.head.appendChild(link);
    };

    // Defer non-critical JavaScript
    const deferNonCriticalScripts = () => {
      // Mark non-critical scripts for later loading
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = script.getAttribute('data-src') || '';
        newScript.async = true;
        document.body.appendChild(newScript);
      });
    };

    // Initialize monitoring
    if ('PerformanceObserver' in window) {
      observeWebVitals();
    }

    preloadCriticalResources();
    
    // Defer non-critical loading
    setTimeout(deferNonCriticalScripts, 2000);

    // Cleanup function
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  // Component doesn't render anything
  return null;
};