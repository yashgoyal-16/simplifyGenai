import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"
import VideoPlayer from "@/components/ui/video-player"
import { PortfolioGrid } from "@/components/ui/portfolio-grid"
import Footer from "@/components/Footer"

const demoFrames = [
  {
    id: 1,
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 2,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 3,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 4,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 5,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 6,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 7,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 8,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 9,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
    isHovered: false,
  },
]

const CreativeAI = () => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl md:text-8xl font-semibold mb-4 font-['Inter']">
              Creative AI
            </h1>
            <p className="text-xl md:text-2xl font-['Inter']">
              The Future of Visual Effects
            </p>
          </div>
        </div>
        {/* Enhanced blur transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20"></div>
      </div>

      {/* Content Section */}
      <section className="py-20 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-semibold text-white mb-8 font-['Inter']">
              Bring Your <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Vision to Life</span> with AI
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-['Inter']">
              We're one of the world's leading creative AI agencies, crafting premium AI-powered advertisements that drive results. 
              We don't create AI slop – we create cinematic masterpieces that captivate audiences and convert viewers into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white font-['Inter']">B2B Excellence</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-['Inter']">
                Transform your B2B marketing with AI-generated content that speaks to decision-makers. 
                Our sophisticated approach combines data-driven insights with creative storytelling to 
                deliver campaigns that generate qualified leads and drive enterprise sales.
              </p>
              <ul className="space-y-3 text-gray-400 font-['Inter']">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Enterprise-grade AI video production
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Data-driven creative optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Professional voice synthesis & narration
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white font-['Inter']">D2C Innovation</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-['Inter']">
                Create scroll-stopping content that converts browsers into buyers. Our AI-powered D2C campaigns 
                leverage psychological triggers and viral marketing principles to maximize engagement and 
                drive direct-to-consumer sales across all platforms.
              </p>
              <ul className="space-y-3 text-gray-400 font-['Inter']">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Viral-optimized creative concepts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Platform-specific optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Conversion-focused storytelling
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-semibold text-white mb-6 font-['Inter']">
              Why Industry Leaders Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-primary/50 transition-colors">
                <h4 className="text-xl font-semibold text-white mb-3 font-['Inter']">No AI Slop</h4>
                <p className="text-gray-400 font-['Inter']">Every frame is crafted with precision. We maintain Hollywood-level quality standards in every project.</p>
              </div>
              
              <div className="p-8 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-secondary/50 transition-colors">
                <h4 className="text-xl font-semibold text-white mb-3 font-['Inter']">Proven Results</h4>
                <p className="text-gray-400 font-['Inter']">Our AI-powered ads consistently outperform traditional creative by 3-5x in engagement and conversion rates.</p>
              </div>
              
              <div className="p-8 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-accent/50 transition-colors">
                <h4 className="text-xl font-semibold text-white mb-3 font-['Inter']">Rapid Delivery</h4>
                <p className="text-gray-400 font-['Inter']">From concept to final delivery in days, not weeks. Scale your creative output without compromising quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioGrid />

      {/* Dynamic Frame Layout Section */}
      <section className="h-screen bg-black">
        <DynamicFrameLayout 
          frames={demoFrames} 
          className="w-full h-full" 
          hoverSize={6}
          gapSize={4}
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CreativeAI;