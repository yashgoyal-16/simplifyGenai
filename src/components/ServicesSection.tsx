"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { GradientHeading } from '@/components/ui/gradient-heading'
import { GlowCard } from '@/components/ui/spotlight-card'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const services = [
  {
    id: 'ai-consulting',
    name: 'AI Consulting',
    description: 'Strategic AI integration guidance for enterprise businesses. We help Fortune 500 companies implement generative AI solutions that drive real ROI.',
    glowColor: 'blue' as const,
    className: 'lg:col-span-2 lg:row-span-1',
    cta: 'Learn More'
  },
  {
    id: 'creative-ai',
    name: 'Creative AI Services',
    description: 'Cutting-edge creative AI solutions including image generation, content creation, and brand automation.',
    glowColor: 'purple' as const,
    className: 'lg:col-span-1 lg:row-span-2',
    cta: 'Explore'
  },
  {
    id: 'voice-ai',
    name: 'Voice AI Solutions',
    description: 'Advanced voice AI technologies including conversational interfaces, voice synthesis, and speech recognition.',
    glowColor: 'green' as const,
    className: 'lg:col-span-1 lg:row-span-2',
    cta: 'Listen'
  },
  {
    id: 'ai-mvp',
    name: 'AI MVP Development',
    description: 'Rapid AI prototype development using cutting-edge tools like Cursor and Lovable. Get to market faster.',
    glowColor: 'orange' as const,
    className: 'lg:col-span-1 lg:row-span-1',
    cta: 'Build'
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Streamline operations with intelligent automation using Make, GoHighLevel, and n8n.',
    glowColor: 'red' as const,
    className: 'lg:col-span-2 lg:row-span-1',
    cta: 'Automate'
  },
  {
    id: 'llmo-geo',
    name: 'LLMO/GEO Optimization',
    description: 'Large Language Model Optimization and Geographic Expansion Optimization for global reach.',
    glowColor: 'purple' as const,
    className: 'lg:col-span-1 lg:row-span-1',
    cta: 'Optimize'
  }
]

export function ServicesSection() {
  return (
    <section 
      className="py-24 bg-black relative overflow-hidden"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
            Founded by Gurleen and Daksh, SimplifyGenAI delivers enterprise-grade AI consulting 
            and development services. We specialize in generative AI integration, creative solutions, 
            and intelligent automation for Fortune 500 companies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-4 auto-rows-[22rem]">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="self-start mt-4 text-white hover:text-zinc-200"
                    >
                      {service.cta}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <GradientHeading 
            size="sm" 
            variant="light" 
            weight="semi"
            className="mb-4"
          >
            Ready to Transform Your Business with AI?
          </GradientHeading>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Get a free consultation to discover how AI can revolutionize your operations, 
            enhance customer experiences, and drive unprecedented growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Schedule Free Consultation
          </motion.button>
        </motion.div>
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