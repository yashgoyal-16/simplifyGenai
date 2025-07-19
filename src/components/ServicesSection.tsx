"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Mic, Rocket, Zap, Search, Palette } from 'lucide-react'
import { GradientHeading } from '@/components/ui/gradient-heading'

const services = [
  {
    id: 'ai-consulting',
    name: 'AI CONSULTING',
    description: 'Strategic AI integration guidance for enterprise businesses. We help Fortune 500 companies implement generative AI solutions that drive real ROI.',
    Icon: Brain,
    iconBg: 'bg-blue-500',
    href: '#ai-consulting',
  },
  {
    id: 'creative-ai',
    name: 'CREATIVE AI SERVICES',
    description: 'Cutting-edge creative AI solutions including image generation, content creation, and brand automation for modern businesses.',
    Icon: Palette,
    iconBg: 'bg-pink-500',
    href: '#creative-ai',
  },
  {
    id: 'voice-ai',
    name: 'VOICE AI SOLUTIONS',
    description: 'Advanced voice AI technologies including conversational interfaces, voice synthesis, and speech recognition systems.',
    Icon: Mic,
    iconBg: 'bg-teal-500',
    href: '#voice-ai',
  },
  {
    id: 'ai-mvp',
    name: 'AI MVP DEVELOPMENT',
    description: 'Rapid AI prototype development using cutting-edge tools like Cursor and Lovable. Get to market faster with proven frameworks.',
    Icon: Rocket,
    iconBg: 'bg-emerald-500',
    href: '#ai-mvp',
  },
  {
    id: 'ai-automation',
    name: 'AI AUTOMATION',
    description: 'Streamline operations with intelligent automation using Make, GoHighLevel, and n8n. Transform workflows and boost efficiency.',
    Icon: Zap,
    iconBg: 'bg-amber-500',
    href: '#ai-automation',
  },
  {
    id: 'llmo-geo',
    name: 'LLMO/GEO OPTIMIZATION',
    description: 'Large Language Model Optimization and Geographic Expansion Optimization for global reach and enhanced performance.',
    Icon: Search,
    iconBg: 'bg-violet-500',
    href: '#llmo-geo',
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
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zinc-200 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
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