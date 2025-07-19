import { CreativeHeroSection } from "@/components/ui/hero-section-creative"

const CreativeAI = () => {
  return (
    <div className="bg-black min-h-screen">
      <CreativeHeroSection />
      
      {/* Additional sections can be added here for the full VFX/CGI experience */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Unleash Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Creative Vision</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-black border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered VFX</h3>
              <p className="text-gray-300">Transform your footage with intelligent visual effects that adapt to your creative vision.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900/50 to-black border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Rendering</h3>
              <p className="text-gray-300">Experience lightning-fast rendering with our advanced AI optimization algorithms.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Hollywood Quality</h3>
              <p className="text-gray-300">Achieve professional-grade results with tools used by industry leaders.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeAI;