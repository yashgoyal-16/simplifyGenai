import { SplineSceneBasic } from "@/components/SplineDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-semibold text-white/10 select-none pointer-events-none z-0 font-['Inter'] whitespace-nowrap">
          SIMPLIFYGENAI
        </h1>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <SplineSceneBasic />
      </div>
    </div>
  );
};

export default Index;
