
import { SplineSceneBasic } from "@/components/SplineDemo";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { ServicesSection } from "@/components/ServicesSection";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import CTASection from "@/components/CTASection";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import DemoSection from "@/components/DemoSection";
import { LazySection } from "@/components/ui/lazy-section";

const Index = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden bg-black">
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-black relative overflow-hidden">
        {/* Background text - positioned differently for mobile and desktop */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center">
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-semibold text-white/10 select-none pointer-events-none z-0 font-['Inter'] whitespace-nowrap">
            SIMPLIFYGENAI
          </h1>
        </div>
        
        {/* Mobile background text - at top */}
        <div className="absolute top-8 left-0 right-0 md:hidden flex justify-center px-4">
          <h1 className="text-[3rem] font-semibold text-white/20 select-none pointer-events-none z-0 font-['Inter'] whitespace-nowrap">
            SIMPLIFYGENAI
          </h1>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4">
          {/* Hero Text Content */}
          <div className="text-center mb-8 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Creative taste × Engineering rigour—shipped by <span className="text-blue-400">Gurleen & Daksh</span>.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              An AI-first lens, a human-in-the-loop heartbeat. We hunt for the leaking points in your funnel and ops, then build—from tiny automations to full stacks of AI—until the leaks are gone.
            </p>
          </div>
          
          <SplineSceneBasic />
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
