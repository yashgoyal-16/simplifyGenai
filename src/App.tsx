
import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarDemo } from "./components/NavBarDemo";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";
import Index from "./pages/Index";

// Lazy load pages for better performance
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const CreativeAI = lazy(() => import("./pages/CreativeAI"));
const VoiceAI = lazy(() => import("./pages/VoiceAI"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set SEO meta tags with target keywords
    document.title = "AI Video Generator & Voice AI Solutions | SimplifyGenAI - Best AI Video Creator 2025";
    
    // Mobile viewport optimization
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    
    // Create or update meta description with target keywords
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Creative AI services for business & custom voice AI solutions. Enterprise AI consulting services for content creation, conversational AI, and automated content generation. Transform your business with cutting-edge AI technology.');

    // Add keywords meta tag with comprehensive keyword list
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'ai video generator, ai voice generator, ai consulting services, artificial intelligence video, voice ai development, ai consultant, ai video creation, conversational ai, ai video maker, voice ai solutions, ai consulting, generative ai video, custom voice ai, ai video marketing tools, enterprise ai consulting, automated video generation, ai-powered video creator, text to video ai, professional ai video creation, custom ai video production, voice ai assistant, speech ai, voice ai software, ai implementation consulting, best ai video generator 2025, ai video generator for social media, enterprise voice ai, ai voice assistant development, ai digital transformation, custom ai solutions');

    // Add Open Graph tags with target keywords
    const ogTags = [
      { property: 'og:title', content: 'AI Video Generator & Voice AI Solutions | SimplifyGenAI' },
      { property: 'og:description', content: 'Creative AI services for business & custom voice AI solutions. Enterprise AI consulting for automated content generation & conversational AI development.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'SimplifyGenAI' },
      { property: 'og:locale', content: 'en_US' }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Add structured data for organization
    let structuredData = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SimplifyGenAI",
      "description": "Leading creative AI services and voice AI solutions provider. Professional AI consulting for automated content creation, conversational AI, and custom voice AI development.",
      "url": window.location.origin,
      "founder": [
        { "@type": "Person", "name": "Gurleen" },
        { "@type": "Person", "name": "Daksh" }
      ],
      "serviceType": [
        "Creative AI Services",
        "Voice AI Solutions",
        "AI Consulting Services", 
        "Conversational AI",
        "Custom Voice AI Development",
        "Enterprise AI Consulting",
        "Automated Content Generation",
        "AI Content Creation",
        "Professional AI Content Production",
        "AI Content Marketing Tools",
        "Voice AI Assistant Development",
        "AI Implementation Consulting"
      ],
      "keywords": "creative ai services, ai voice generator, ai consulting services, artificial intelligence content, voice ai development, conversational ai, ai content creation, automated content generation, best ai services 2025"
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PerformanceMonitor />
        <div className="w-full max-w-full overflow-x-hidden min-h-screen">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <NavBarDemo />
            <main className="w-full max-w-full overflow-x-hidden">
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen bg-black">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white/60 text-sm">Loading...</p>
                  </div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/creative-ai" element={<CreativeAI />} />
                  <Route path="/voice-ai" element={<VoiceAI />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
