import { SplineSceneBasic } from "@/components/SplineDemo";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";

const Index = () => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="min-h-screen bg-black relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-semibold text-white/10 select-none pointer-events-none z-0 font-['Inter'] whitespace-nowrap">
            SIMPLIFYGENAI
          </h1>
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <SplineSceneBasic />
        </div>
        {/* Graceful blur transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
      </div>
      
      {/* Companies Section */}
      <div className="bg-black">
        <LogoCarouselDemo />
      </div>
    </div>
  );
};

export default Index;
