
import { lazy, Suspense } from "react"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

// Lazy load heavy components
const DynamicFrameLayout = lazy(() => import("@/components/ui/dynamic-frame-layout").then(module => ({
  default: module.DynamicFrameLayout
})))
const PortfolioGrid = lazy(() => import("@/components/ui/portfolio-grid").then(module => ({
  default: module.PortfolioGrid
})))

const demoFrames = [
  {
    id: 1,
    video: "https://pbwgakwdrtkvnmewsajp.supabase.co/storage/v1/object/public/simplifygenai-website//AI%20Avatars.mp4",
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
    video: "https://pbwgakwdrtkvnmewsajp.supabase.co/storage/v1/object/public/simplifygenai-website//AI%20brand.mp4",
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
    video: "https://pbwgakwdrtkvnmewsajp.supabase.co/storage/v1/object/public/simplifygenai-website//AI%20Influncer.mp4",
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
    video: "https://pbwgakwdrtkvnmewsajp.supabase.co/storage/v1/object/public/simplifygenai-website//Ai%20Movie%20Trailer.mp4",
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
    video: "https://pbwgakwdrtkvnmewsajp.supabase.co/storage/v1/object/public/simplifygenai-website//B2B%20Concepts.mp4",
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
    video: "https://pbwgakwdrtkvnmewsajp.supabase.co/storage/v1/object/public/simplifygenai-website//B2B.mp4",
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
    video: "https://pbwgakwdrtkvnmewsajp.supabase.co/storage/v1/object/public/simplifygenai-website//Concepts.mp4",
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
    video: "https://pbwgakwdrtkvnmewsajp.supabase.co/storage/v1/object/public/simplifygenai-website//D2C.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
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

  useEffect(() => {
    // Add page-specific structured data for Creative AI services
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Video Generator & Creative AI Services",
      "description": "Professional AI video generator for business, automated video generation, and AI video marketing tools. Enterprise AI video creation services.",
      "provider": {
        "@type": "Organization",
        "name": "SimplifyGenAI",
        "url": "https://simplifygenai.com"
      },
      "serviceType": [
        "AI Video Generator",
        "Automated Video Generation", 
        "AI Video Creation",
        "Professional AI Video Production",
        "AI Video Marketing Tools",
        "Custom AI Video Production"
      ],
      "keywords": "ai video generator, ai video creation, artificial intelligence video, automated video generation, ai video marketing tools, professional ai video production, best ai video generator 2025",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD"
      }
    }

    let script = document.querySelector('#creative-ai-structured-data') as HTMLScriptElement
    if (!script) {
      script = document.createElement('script')
      script.id = 'creative-ai-structured-data'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    // Update page title and meta description for this specific page
    document.title = "Professional AI Video Generator for Business | Creative AI Services - SimplifyGenAI"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Best AI video generator 2025 for professional business videos. Automated video generation, AI video creation, and custom AI video production services. Transform your marketing with AI.')
    }

    return () => {
      const scriptElement = document.querySelector('#creative-ai-structured-data')
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [])

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

  const handleIframeLoad = () => {
    // Force video to play by posting message to Vimeo player
    if (iframeRef.current) {
      try {
        iframeRef.current.contentWindow?.postMessage('{"method":"play"}', '*')
      } catch (error) {
        console.log('Video autoplay handled by iframe parameters')
      }
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

        /* Subtle fallback content that works with video */
        .video-fallback {
          opacity: 0.8;
          transition: opacity 2s ease-in-out;
          pointer-events: none;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5));
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden -mt-20 sm:mt-0">
        {/* Background placeholder while video loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Static content for PageSpeed - subtle overlay */}
          <div className="absolute inset-0 flex items-center justify-center video-fallback" style={{ zIndex: 2 }}>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Professional AI Video Generator
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                Create stunning AI-powered videos for your business with our advanced video generation technology
              </p>
            </div>
          </div>
          
          {/* Load video after initial render */}
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${isMobile ? '1105971548' : '1105362692'}?autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0&transparent=1`}
            className="absolute inset-0 w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            onLoad={handleIframeLoad}
            style={{
              pointerEvents: 'none',
              opacity: '0.9',
              zIndex: 1
            }}
          />
        </div>
        
      {/* Audio Toggle Button */}
        <Button
          onClick={toggleAudio}
          variant="ghost"
          size="icon"
          className="absolute bottom-8 right-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 z-10 rainbow-hover"
        >
          {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
        </Button>
      </div>

      {/* Portfolio Section - moved to top position after hero */}
      <div className="py-20">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white/60 text-sm">Loading Portfolio...</p>
            </div>
          </div>
        }>
          <PortfolioGrid />
        </Suspense>
      </div>

      {/* Content Section with improved spacing */}
      <section className="py-32 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-8 font-['Inter']">
              Professional <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">AI Video Generator</span> for Business
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-['Inter']">
              We're the leading AI video creation agency, delivering best-in-class AI video generator solutions for enterprise clients. 
              Our automated video generation platform creates professional AI videos that drive conversions and maximize ROI for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-white font-['Inter']">AI Video Generator for B2B Marketing</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-['Inter']">
                Transform your B2B marketing with our professional AI video creation platform. Our enterprise 
                AI video generator combines advanced artificial intelligence video technology with business-focused 
                storytelling to deliver campaigns that generate qualified leads and drive enterprise sales.
              </p>
              <ul className="space-y-4 text-gray-400 font-['Inter']">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  Enterprise AI video production software
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                  Automated video generation with data insights
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                  AI-powered video creator with voice synthesis
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-white font-['Inter']">Best AI Video Generator 2025 for D2C</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-['Inter']">
                Create viral content with our cutting-edge AI video maker designed for direct-to-consumer brands. 
                Our text to video AI technology and generative AI video platform leverage psychological triggers 
                to maximize engagement and drive conversions across all social media platforms.
              </p>
              <ul className="space-y-4 text-gray-400 font-['Inter']">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  AI video generator for social media optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                  AI video marketing tools for maximum reach
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                  Custom AI video production for brand storytelling
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-white mb-12 font-['Inter']">
              Why Choose Our Professional AI Video Generator
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-10 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-4 font-['Inter']">Professional AI Video Creation</h3>
                <p className="text-gray-400 font-['Inter']">Our AI video generator delivers cinema-quality results. We maintain the highest standards in artificial intelligence video production for enterprise clients.</p>
              </div>
              
              <div className="p-10 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-4 font-['Inter']">Proven AI Video Marketing Results</h3>
                <p className="text-gray-400 font-['Inter']">Our AI-powered video creator consistently delivers 3-5x higher engagement rates compared to traditional video production methods.</p>
              </div>
              
              <div className="p-10 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-4 font-['Inter']">Automated Video Generation at Scale</h3>
                <p className="text-gray-400 font-['Inter']">From concept to final delivery in days using our automated video generation platform. Scale your video production without compromising quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Dynamic Frame Layout Section with improved spacing */}
      <section className="h-screen bg-black mt-20">
        <Suspense fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white/60 text-sm">Loading Interactive Demo...</p>
            </div>
          </div>
        }>
          <DynamicFrameLayout 
            frames={demoFrames} 
            className="w-full h-full" 
            hoverSize={6}
            gapSize={4}
          />
        </Suspense>
      </section>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
};

export default CreativeAI;
