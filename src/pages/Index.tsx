
import { lazy, Suspense, Component, ErrorInfo, ReactNode } from "react";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { ServicesSection } from "@/components/ServicesSection";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import CTASection from "@/components/CTASection";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import DemoSection from "@/components/DemoSection";
import { LazySection } from "@/components/ui/lazy-section";
import { DeferredSpline } from "@/components/ui/deferred-spline";

// Error Boundary for Spline component
class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Spline component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Defer Spline loading with intersection observer and user interaction
const SplineSceneBasic = lazy(() => 
  Promise.race([
    import("@/components/SplineDemo").then(module => ({
      default: module.SplineSceneBasic
    })),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Spline timeout')), 15000)
    )
  ])
);

const Index = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden bg-black">
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-black relative overflow-hidden">
        {/* Background text - positioned differently for mobile and desktop */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-heading font-black text-white/10 select-none pointer-events-none z-0 whitespace-nowrap">
            SIMPLIFYGENAI
          </h1>
        </div>
        
        {/* Mobile background text - at top with better scaling */}
        <div className="absolute top-4 left-0 right-0 md:hidden flex justify-center px-2">
          <h1 className="text-2xl xs:text-3xl font-heading font-bold text-white/15 select-none pointer-events-none z-0 text-center">
            SIMPLIFYGENAI
          </h1>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full pt-16 md:pt-0 pb-20 md:pb-0">
          <DeferredSpline
            enableOnInteraction={true}
            fallback={
              <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
                <div className="text-center">
                  <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    SimplifyGenAI
                  </h2>
                  <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl font-sans">
                    Creative AI Services & Voice AI Solutions
                  </p>
                  <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg px-4 py-2 mb-4">
                    <p className="text-blue-200 text-sm">👆 Click anywhere to load interactive 3D experience</p>
                  </div>
                </div>
              </div>
            }
          >
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[60vh] w-full">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-white/60 text-sm">Loading 3D Experience...</p>
                </div>
              </div>
            }>
              <ErrorBoundary fallback={
                <div className="flex items-center justify-center min-h-[60vh] w-full">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white mb-4">SimplifyGenAI</h2>
                    <p className="text-white/60 text-sm">Creative AI Services & Voice AI Solutions</p>
                  </div>
                </div>
              }>
                <SplineSceneBasic />
              </ErrorBoundary>
            </Suspense>
          </DeferredSpline>
        </div>
        {/* Graceful blur transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
      </div>
      
      {/* Companies Section */}
      <LazySection className="w-full bg-black overflow-x-hidden">
        <LogoCarouselDemo />
      </LazySection>

      {/* Services Section */}
      <LazySection className="w-full overflow-x-hidden">
        <ServicesSection />
      </LazySection>
      
      {/* Demo Section */}
      <LazySection className="w-full overflow-x-hidden">
        <DemoSection />
      </LazySection>
      
      {/* CTA Section */}
      <LazySection className="w-full overflow-x-hidden">
        <CTASection />
      </LazySection>
      
      {/* Footer */}
      <LazySection className="w-full overflow-x-hidden">
        <StackedCircularFooter />
      </LazySection>
    </div>
  );
};

export default Index;
