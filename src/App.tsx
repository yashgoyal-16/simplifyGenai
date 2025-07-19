
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarDemo } from "./components/NavBarDemo";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set SEO meta tags
    document.title = "SimplifyGenAI - Enterprise AI Consulting & Development Services";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'SimplifyGenAI provides enterprise AI consulting, creative AI services, voice AI solutions, and AI automation. Founded by Gurleen and Daksh, we help businesses integrate generative AI for competitive advantage.');

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'AI consulting, generative AI, enterprise AI, creative AI, voice AI, AI automation, LLMO, GEO optimization, AI MVP development');

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'SimplifyGenAI - Enterprise AI Consulting Services' },
      { property: 'og:description', content: 'Transform your business with cutting-edge AI solutions. Expert consulting, development, and automation services.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'SimplifyGenAI' }
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
      "description": "Enterprise AI consulting and development services",
      "url": window.location.origin,
      "founder": [
        { "@type": "Person", "name": "Gurleen" },
        { "@type": "Person", "name": "Daksh" }
      ],
      "serviceType": [
        "AI Consulting",
        "Creative AI Services", 
        "Voice AI Solutions",
        "AI MVP Development",
        "AI Automation",
        "LLMO/GEO Optimization"
      ]
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <NavBarDemo />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
