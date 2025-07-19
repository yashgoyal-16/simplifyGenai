"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Mic, Rocket, Zap, Search, Users, Palette, Code, Sparkles } from 'lucide-react'
import { GradientHeading } from '@/components/ui/gradient-heading'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'

const services = [
  {
    id: 'ai-consulting',
    name: 'AI Consulting',
    description: 'Strategic AI integration guidance for enterprise businesses. We help Fortune 500 companies implement generative AI solutions that drive real ROI.',
    Icon: Brain,
    href: '#ai-consulting',
    cta: 'Learn More',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/20 to-purple-900/40">
        <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-indigo-500/30 rounded-full blur-xl" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    keywords: 'AI consulting, enterprise AI, generative AI strategy'
  },
  {
    id: 'creative-ai',
    name: 'Creative AI Services',
    description: 'Cutting-edge creative AI solutions including image generation, content creation, and brand automation.',
    Icon: Palette,
    href: '#creative-ai',
    cta: 'Explore',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 via-rose-900/20 to-orange-900/40">
        <div className="absolute top-8 left-8 w-20 h-20 bg-pink-500/30 rounded-lg rotate-12 blur-xl" />
        <div className="absolute bottom-4 right-4 w-28 h-28 bg-orange-500/20 rounded-full blur-2xl" />
        <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-300/30 w-16 h-16" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    keywords: 'creative AI, AI content creation, AI image generation'
  },
  {
    id: 'voice-ai',
    name: 'Voice AI Solutions',
    description: 'Advanced voice AI technologies including conversational interfaces, voice synthesis, and speech recognition.',
    Icon: Mic,
    href: '#voice-ai',
    cta: 'Listen',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-cyan-900/20 to-blue-900/40">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 bg-cyan-500/30 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-24 h-24 bg-teal-500/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4",
    keywords: 'voice AI, conversational AI, speech recognition'
  },
  {
    id: 'ai-mvp',
    name: 'AI MVP Development',
    description: 'Rapid AI prototype development using cutting-edge tools like Cursor and Lovable. Get to market faster.',
    Icon: Rocket,
    href: '#ai-mvp',
    cta: 'Build',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-green-900/20 to-lime-900/40">
        <div className="absolute bottom-4 left-4 w-6 h-24 bg-emerald-500/30 rounded-full blur-sm" />
        <div className="absolute top-8 right-8 w-4 h-16 bg-lime-500/40 rounded-full blur-sm" />
        <Code className="absolute top-1/4 right-1/4 text-emerald-300/20 w-12 h-12 rotate-12" />
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    keywords: 'AI MVP, AI prototype development, Cursor, Lovable'
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Streamline operations with intelligent automation using Make, GoHighLevel, and n8n.',
    Icon: Zap,
    href: '#ai-automation',
    cta: 'Automate',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-yellow-900/20 to-orange-900/40">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-yellow-500/40 rounded rotate-45" />
          <div className="absolute w-12 h-1 bg-amber-500/30 blur-sm" />
          <div className="absolute w-1 h-12 bg-orange-500/30 blur-sm" />
        </div>
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    keywords: 'AI automation, Make automation, GoHighLevel, n8n'
  },
  {
    id: 'llmo-geo',
    name: 'LLMO/GEO Optimization',
    description: 'Large Language Model Optimization and Geographic Expansion Optimization for global reach.',
    Icon: Search,
    href: '#llmo-geo',
    cta: 'Optimize',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-purple-900/20 to-fuchsia-900/40">
        <div className="absolute top-4 left-4 w-16 h-2 bg-violet-500/30 rounded-full blur-sm" />
        <div className="absolute bottom-8 right-8 w-12 h-2 bg-fuchsia-500/30 rounded-full blur-sm" />
        <div className="absolute top-1/2 right-1/4 w-8 h-8 border border-purple-400/30 rounded-full" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5",
    keywords: 'LLMO, GEO optimization, LLM optimization'
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
          <GradientHeading 
            size="lg" 
            variant="light" 
            weight="bold"
            className="mb-6"
          >
            Our AI Services
          </GradientHeading>
          <div className="max-w-3xl mx-auto">
            <GradientHeading 
              size="md" 
              variant="secondary" 
              weight="semi"
              className="mb-4"
            >
              Transforming Businesses with Cutting-Edge AI Solutions
            </GradientHeading>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Founded by Gurleen and Daksh, SimplifyGenAI delivers enterprise-grade AI consulting 
              and development services. We specialize in generative AI integration, creative solutions, 
              and intelligent automation for Fortune 500 companies.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BentoGrid className="lg:grid-rows-4 max-w-6xl mx-auto">
            {services.map((service) => (
              <BentoCard key={service.id} {...service} />
            ))}
          </BentoGrid>
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
              "description": service.description,
              "keywords": service.keywords
            }))
          })
        }}
      />
    </section>
  )
}