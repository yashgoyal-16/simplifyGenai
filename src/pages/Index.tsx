
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
      <header className="w-full min-h-screen bg-black relative overflow-hidden" role="banner">
        {/* Decorative background patterns */}
        <div className="absolute inset-0 opacity-3" aria-hidden="true">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 border border-white/8 rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/6 rotate-12"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
          {/* Main Hero Content */}
          <div className="text-center max-w-5xl mx-auto">
            {/* Brand Logo - Using proper heading hierarchy */}
            <div className="mb-8">
              <h1 className="text-brand-md sm:text-brand-lg lg:text-brand-xl font-display font-black text-white mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90">Simplify</span>
                <span className="text-primary">Gen</span>
                <span className="text-accent">AI</span>
              </h1>
              
              {/* AI Symbol - Enhanced accessibility */}
              <div className="flex justify-center mt-3" role="img" aria-label="AI Technology Symbol">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full mx-2 -mt-0.75 animate-pulse"></div>
                <div className="w-12 h-0.5 bg-gradient-to-l from-primary to-accent rounded-full"></div>
              </div>
            </div>
            
            {/* Value Proposition - Better semantic structure */}
            <section className="mb-8" aria-labelledby="hero-subtitle">
              <h2 id="hero-subtitle" className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-white/95 mb-4 max-w-4xl mx-auto leading-relaxed">
                Next-Generation Creative AI Services &<br className="hidden sm:block" /> 
                Advanced Voice AI Solutions
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl font-sans text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transform your business with cutting-edge artificial intelligence.
                <span className="block mt-2 text-white/60 text-sm sm:text-base font-medium">
                  Enterprise-grade AI consulting with proven 300% ROI • 24/7 support
                </span>
              </p>
            </section>
            
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
            
            {/* Trust Indicators with Enhanced Accessibility */}
            <section className="mt-6" aria-labelledby="trust-indicators">
              <h3 id="trust-indicators" className="sr-only">Trust Indicators and Service Features</h3>
              <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm font-sans font-medium">
                <div className="flex items-center" role="group" aria-label="Enterprise Ready Service">
                  <div className="w-2 h-2 bg-success rounded-full mr-2" aria-hidden="true"></div>
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center" role="group" aria-label="24/7 Support Available">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" aria-hidden="true"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center" role="group" aria-label="Custom AI Solutions">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2" aria-hidden="true"></div>
                  <span>Custom Solutions</span>
                </div>
              </div>
            </section>
          </div>
        </div>
        
        {/* Graceful transition to main content */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" aria-hidden="true"></div>
      </header>
      
      {/* Main Content Area */}
      <main role="main" className="w-full">
        {/* Companies Section */}
        <section aria-labelledby="companies-section" className="w-full bg-black overflow-x-hidden">
          <LazySection className="w-full">
            <LogoCarouselDemo />
          </LazySection>
        </section>

        {/* Services Section */}
        <section aria-labelledby="services-section" className="w-full overflow-x-hidden">
          <LazySection className="w-full">
            <ServicesSection />
          </LazySection>
        </section>
        
        {/* Demo Section */}
        <section aria-labelledby="demo-section" className="w-full overflow-x-hidden">
          <LazySection className="w-full">
            <DemoSection />
          </LazySection>
        </section>
        
        {/* CTA Section */}
        <section aria-labelledby="cta-section" className="w-full overflow-x-hidden">
          <LazySection className="w-full">
            <CTASection />
          </LazySection>
        </section>
      </main>
      
      {/* Footer */}
      <footer role="contentinfo" className="w-full overflow-x-hidden">
        <LazySection className="w-full">
          <StackedCircularFooter />
        </LazySection>
      </footer>
    </div>
  );
};

export default Index;
