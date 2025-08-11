"use client"

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GradientHeading } from '@/components/ui/gradient-heading'
import { GlowCard } from '@/components/ui/spotlight-card'
import { LiquidCard } from '@/components/ui/liquid-glass-card'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { LazySection } from '@/components/ui/lazy-section'

const services = [
  {
    id: 'ai-consulting',
    name: 'AI Consulting',
    description: 'Strategic AI integration guidance for enterprise businesses. We help Fortune 500 companies implement generative AI solutions that drive real ROI.',
    glowColor: 'blue' as const,
    className: 'lg:col-span-2 lg:row-span-1',
    cta: 'Learn More',
    link: '/about'
  },
  {
    id: 'creative-ai',
    name: 'Creative',
    description: 'Cutting-edge creative AI solutions including image generation, content creation, and brand automation.',
    glowColor: 'purple' as const,
    className: 'lg:col-span-1 lg:row-span-2',
    cta: 'Explore',
    link: '/creative-ai'
  },
  {
    id: 'voice-ai',
    name: 'Voice AI',
    description: 'Advanced voice AI technologies including conversational interfaces, voice synthesis, and speech recognition.',
    glowColor: 'green' as const,
    className: 'lg:col-span-1 lg:row-span-2',
    cta: 'Call',
    link: '/voice-ai'
  },
  {
    id: 'ai-automation',
    name: 'Automation',
    description: 'Streamline operations with intelligent automation using Make, GoHighLevel, and n8n.',
    glowColor: 'red' as const,
    className: 'lg:col-span-2 lg:row-span-1',
    cta: 'Automate',
    link: '/projects'
  }
]

export function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  return (
    <section 
      className="py-24 bg-black relative overflow-hidden"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <LazySection fadeIn slideUp className="text-center mb-16">
          <div className="flex justify-center items-center gap-8 mb-8">
            <span className="text-zinc-400 text-sm font-medium tracking-wider">CREATIVE SOLUTIONS</span>
            <GradientHeading 
              size="xl" 
              variant="light" 
              weight="bold"
              className="text-4xl md:text-6xl"
            >
              SERVICES
            </GradientHeading>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
        An AI-first lens, a human-in-the-loop heartbeat. We hunt for the leaking points in your funnel and ops, then build—from tiny automations to full stacks of AI—until the leaks are gone.
          </p>
        </LazySection>

        <LazySection fadeIn slideUp className="max-w-6xl mx-auto">
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 auto-rows-[22rem]">
            {services.map((service) => (
              <div
                key={service.id}
                className={service.className}
              >
                <GlowCard 
                  glowColor={service.glowColor}
                  customSize
                  className="h-full w-full"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.name}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <Link to={service.link}>
                      <LiquidButton 
                        variant="ghost" 
                        size="sm" 
                        className="self-start mt-4 text-white"
                      >
                        {service.cta}
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </LiquidButton>
                    </Link>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>

        </LazySection>

        {/* AI Consultation Section */}
        <LazySection fadeIn slideUp className="text-center mt-16">
          <GradientHeading 
            size="sm" 
            variant="light" 
            weight="semi"
            className="mb-12"
          >
            Why Your Business Needs AI Consultation Now
          </GradientHeading>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="text-center border border-zinc-800 rounded-lg p-6 bg-zinc-950/50">
              <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-white text-lg font-semibold mb-3">Stay Ahead of Competition</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                85% of businesses will integrate AI by 2025. Don't let your competitors get there first and capture your market share.
              </p>
            </div>
            
            <div className="text-center border border-zinc-800 rounded-lg p-6 bg-zinc-950/50">
              <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-white text-lg font-semibold mb-3">Maximize ROI & Efficiency</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Our clients see 40-60% operational efficiency gains and 300% ROI within 6 months of AI implementation.
              </p>
            </div>
            
            <div className="text-center border border-zinc-800 rounded-lg p-6 bg-zinc-950/50">
              <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-white text-lg font-semibold mb-3">Avoid Costly Mistakes</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                SimplifyGenAI's proven framework helps you adopt AI the right way, avoiding the 70% failure rate of DIY AI projects.
              </p>
            </div>
          </div>

          <p className="text-zinc-400 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            SimplifyGenAI's AI phone agents sound human, speak any language, and work 24/7. We make it simple to integrate 
            the latest conversational AI technology into your business. Build the perfect employee to handle sales, 
            scheduling, and all your customer support needs.
          </p>
        </LazySection>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SimplifyGenAI",
            "description": "AI consulting and development services for enterprise businesses",
            "founders": [
              { "@type": "Person", "name": "Gurleen" },
              { "@type": "Person", "name": "Daksh" }
            ],
            "services": services.map(service => ({
              "@type": "Service",
              "name": service.name,
              "description": service.description
            }))
          })
        }}
      />
    </section>
  )
}