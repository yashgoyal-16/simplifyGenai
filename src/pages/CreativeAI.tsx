import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"

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
    <div className="min-h-screen bg-black">
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
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              Creative AI
            </h1>
            <p className="text-xl md:text-2xl">
              The Future of Visual Effects
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Bring Your <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Vision to Life</span> with AI
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're one of the world's leading creative AI agencies, crafting premium AI-powered advertisements that drive results. 
              We don't create AI slop – we create cinematic masterpieces that captivate audiences and convert viewers into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">B2B Excellence</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Transform your B2B marketing with AI-generated content that speaks to decision-makers. 
                Our sophisticated approach combines data-driven insights with creative storytelling to 
                deliver campaigns that generate qualified leads and drive enterprise sales.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Enterprise-grade AI video production
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Data-driven creative optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Professional voice synthesis & narration
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">D2C Innovation</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Create scroll-stopping content that converts browsers into buyers. Our AI-powered D2C campaigns 
                leverage psychological triggers and viral marketing principles to maximize engagement and 
                drive direct-to-consumer sales across all platforms.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Viral-optimized creative concepts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Platform-specific optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Conversion-focused storytelling
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-6">
              Why Industry Leaders Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/20">
                <h4 className="text-xl font-semibold text-white mb-3">No AI Slop</h4>
                <p className="text-gray-300">Every frame is crafted with precision. We maintain Hollywood-level quality standards in every project.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900/30 to-black border border-cyan-500/20">
                <h4 className="text-xl font-semibold text-white mb-3">Proven Results</h4>
                <p className="text-gray-300">Our AI-powered ads consistently outperform traditional creative by 3-5x in engagement and conversion rates.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-900/30 to-black border border-pink-500/20">
                <h4 className="text-xl font-semibold text-white mb-3">Rapid Delivery</h4>
                <p className="text-gray-300">From concept to final delivery in days, not weeks. Scale your creative output without compromising quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Frame Layout Section */}
      <section className="h-screen bg-zinc-900">
        <DynamicFrameLayout 
          frames={demoFrames} 
          className="w-full h-full" 
          hoverSize={6}
          gapSize={4}
        />
      </section>
    </div>
  );
};

export default CreativeAI;