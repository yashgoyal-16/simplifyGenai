
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"
import VideoPlayer from "@/components/ui/video-player"
import { PortfolioGrid } from "@/components/ui/portfolio-grid"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"
import { useState, useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const demoFrames = [
  {
    id: 1,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
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
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
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
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
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
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
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
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
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
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
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
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
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
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
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
  const [isMuted, setIsMuted] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const isMobile = useIsMobile()

  const toggleAudio = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current
      const currentSrc = iframe.src
      
      if (isMuted) {
        iframe.src = currentSrc.replace('muted=1', 'muted=0')
      } else {
        iframe.src = currentSrc.replace('muted=0', 'muted=1')
      }
      
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="bg-black">
      {/* Hide all Vimeo branding with comprehensive CSS */}
      <style>{`
        /* Hide all Vimeo branding and logos */
        .vimeo-logo,
        .vp-logo,
        .vp-title,
        .vp-byline,
        .vp-portrait,
        .vp-share,
        .vp-badge,
        .vp-watermark,
        .vp-controls,
        .vp-overlay,
        .vp-overlay-cell,
        .vp-title-overlay,
        .vp-logo-overlay,
        .vp-share-overlay,
        .vp-badge-overlay,
        .vp-watermark-overlay,
        [class*="vimeo"],
        [class*="logo"],
        [class*="badge"],
        [class*="watermark"],
        [class*="overlay"],
        [class*="share"],
        [class*="title"],
        [class*="byline"],
        [class*="portrait"],
        [data-vimeo-logo],
        [data-vimeo-badge],
        [data-vimeo-watermark] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          position: absolute !important;
          left: -9999px !important;
          top: -9999px !important;
          width: 0 !important;
          height: 0 !important;
        }
        
        /* Ensure iframe has no border or padding */
        iframe {
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          background: transparent !important;
        }
        
        /* Hide any potential overlays */
        iframe::before,
        iframe::after {
          display: none !important;
        }
        
        /* Force hide all potential Vimeo elements */
        iframe[src*="vimeo"] * {
          background-image: none !important;
        }
        
        /* Additional safety to hide any logo elements */
        div[class*="logo"],
        div[class*="badge"],
        div[class*="watermark"],
        div[class*="overlay"],
        a[class*="logo"],
        a[class*="badge"],
        a[class*="watermark"],
        a[class*="overlay"] {
          display: none !important;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden -mt-20 sm:mt-0">
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${isMobile ? '1105971548' : '1105362692'}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&loop=1&muted=1&controls=0&background=1&transparent=0&logo=0&fun=0&dnt=1`}
          className="absolute inset-0 w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            pointerEvents: 'none',
            filter: 'none'
          }}
        />
        
        {/* Audio Toggle Button */}
        <Button
          onClick={toggleAudio}
          variant="ghost"
          size="icon"
          className="absolute bottom-8 right-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 z-10"
        >
          {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
        </Button>
      </div>

      {/* Content Section with improved spacing */}
      <section className="py-32 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-semibold text-white mb-8 font-['Inter']">
              Bring Your <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Vision to Life</span> with AI
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-['Inter']">
              We're one of the world's leading creative AI agencies, crafting premium AI-powered advertisements that drive results. 
              We don't create AI slop – we create cinematic masterpieces that captivate audiences and convert viewers into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-white font-['Inter']">B2B Excellence</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-['Inter']">
                Transform your B2B marketing with AI-generated content that speaks to decision-makers. 
                Our sophisticated approach combines data-driven insights with creative storytelling to 
                deliver campaigns that generate qualified leads and drive enterprise sales.
              </p>
              <ul className="space-y-4 text-gray-400 font-['Inter']">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  Enterprise-grade AI video production
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                  Data-driven creative optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                  Professional voice synthesis & narration
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-white font-['Inter']">D2C Innovation</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-['Inter']">
                Create scroll-stopping content that converts browsers into buyers. Our AI-powered D2C campaigns 
                leverage psychological triggers and viral marketing principles to maximize engagement and 
                drive direct-to-consumer sales across all platforms.
              </p>
              <ul className="space-y-4 text-gray-400 font-['Inter']">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  Viral-optimized creative concepts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                  Platform-specific optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                  Conversion-focused storytelling
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-semibold text-white mb-12 font-['Inter']">
              Why Industry Leaders Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-10 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
                <h4 className="text-xl font-semibold text-white mb-4 font-['Inter']">No AI Slop</h4>
                <p className="text-gray-400 font-['Inter']">Every frame is crafted with precision. We maintain Hollywood-level quality standards in every project.</p>
              </div>
              
              <div className="p-10 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:transform hover:scale-105">
                <h4 className="text-xl font-semibold text-white mb-4 font-['Inter']">Proven Results</h4>
                <p className="text-gray-400 font-['Inter']">Our AI-powered ads consistently outperform traditional creative by 3-5x in engagement and conversion rates.</p>
              </div>
              
              <div className="p-10 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
                <h4 className="text-xl font-semibold text-white mb-4 font-['Inter']">Rapid Delivery</h4>
                <p className="text-gray-400 font-['Inter']">From concept to final delivery in days, not weeks. Scale your creative output without compromising quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section with improved spacing */}
      <div className="py-20">
        <PortfolioGrid />
      </div>

      {/* Dynamic Frame Layout Section with improved spacing */}
      <section className="h-screen bg-black mt-20">
        <DynamicFrameLayout 
          frames={demoFrames} 
          className="w-full h-full" 
          hoverSize={6}
          gapSize={4}
        />
      </section>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
};

export default CreativeAI;
