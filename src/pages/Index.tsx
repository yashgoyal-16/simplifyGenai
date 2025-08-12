
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
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 border border-white/10 rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/15 rotate-12"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
          {/* Main Hero Content */}
          <div className="text-center max-w-5xl mx-auto">
            {/* Brand Logo */}
            <div className="mb-6">
              <h1 className="text-brand-md sm:text-brand-lg lg:text-brand-xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200">
                Simplify<span className="text-blue-400">Gen</span><span className="text-cyan-400">AI</span>
              </h1>
              {/* AI Symbol */}
              <div className="flex justify-center mt-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full mx-2 -mt-0.75 animate-pulse"></div>
                <div className="w-12 h-0.5 bg-gradient-to-l from-blue-400 to-cyan-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Value Proposition */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Next-Generation Creative AI Services &<br className="hidden sm:block" /> 
              Advanced Voice AI Solutions
            </h2>
            
            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence.
              <span className="block mt-1 text-white/50 text-sm sm:text-base">
                Enterprise-grade AI consulting and custom solutions.
              </span>
            </p>
            
            {/* 3D Scene Container */}
            <div className="mt-8 mb-8">
              <DeferredSpline
                enableOnInteraction={true}
                fallback={
                  <div className="flex flex-col items-center justify-center min-h-[50vh] w-full bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-3">
                        Interactive AI Experience
                      </h3>
                      <p className="text-white/60 text-base mb-4 max-w-md mx-auto">
                        Click to explore our 3D AI assistant
                      </p>
                      <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-200 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                        Ready to interact
                      </div>
                    </div>
                  </div>
                }
              >
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-[50vh] w-full bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-white/5">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-white/60 text-sm font-sans">Loading AI Experience...</p>
                    </div>
                  </div>
                }>
                  <ErrorBoundary fallback={
                    <div className="flex items-center justify-center min-h-[50vh] w-full bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-white/5">
                      <div className="text-center p-8">
                        <h3 className="text-xl font-heading font-semibold text-white mb-2">SimplifyGenAI</h3>
                        <p className="text-white/60 text-sm font-sans">Creative AI Services & Voice AI Solutions</p>
                      </div>
                    </div>
                  }>
                    <SplineSceneBasic />
                  </ErrorBoundary>
                </Suspense>
              </DeferredSpline>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/40 text-sm font-sans">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Enterprise Ready
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                24/7 Support
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                Custom Solutions
              </div>
            </div>
          </div>
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
