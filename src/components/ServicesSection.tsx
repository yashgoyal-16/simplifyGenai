
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Mic, Rocket, Zap, Search, Users } from 'lucide-react'
import { GradientHeading } from '@/components/ui/gradient-heading'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    description: 'Strategic AI integration guidance for enterprise businesses. We help Fortune 500 companies implement generative AI solutions that drive real ROI and competitive advantage.',
    icon: Brain,
    keywords: 'AI consulting, enterprise AI, generative AI strategy, AI transformation'
  },
  {
    id: 'creative-ai',
    title: 'Creative AI Services',
    description: 'Cutting-edge creative AI solutions including image generation, content creation, and brand automation. Transform your creative workflows with AI-powered tools.',
    icon: Users,
    keywords: 'creative AI, AI content creation, AI image generation, brand automation'
  },
  {
    id: 'voice-ai',
    title: 'Voice AI Solutions',
    description: 'Advanced voice AI technologies including conversational interfaces, voice synthesis, and speech recognition systems for enhanced customer experiences.',
    icon: Mic,
    keywords: 'voice AI, conversational AI, speech recognition, voice synthesis'
  },
  {
    id: 'ai-mvp',
    title: 'AI MVP Development',
    description: 'Rapid AI prototype development using cutting-edge tools like Cursor and Lovable. Get your AI product to market faster with our proven development methodology.',
    icon: Rocket,
    keywords: 'AI MVP, AI prototype development, Cursor, Lovable, rapid AI development'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Streamline operations with intelligent automation using Make, GoHighLevel, and n8n. Reduce costs and increase efficiency through smart process automation.',
    icon: Zap,
    keywords: 'AI automation, Make automation, GoHighLevel, n8n, process automation'
  },
  {
    id: 'llmo-geo',
    title: 'LLMO/GEO Optimization',
    description: 'Large Language Model Optimization and Geographic Expansion Optimization. Enhance your AI models performance and expand your reach globally.',
    icon: Search,
    keywords: 'LLMO, GEO optimization, LLM optimization, AI model performance, geographic expansion'
  }
]

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

interface ServiceCardProps {
  service: typeof services[0]
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon

  return (
    <motion.div
      variants={cardVariants}
      className="group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="h-full bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
              <Icon className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-xl">
            <GradientHeading 
              size="sm" 
              variant="light" 
              weight="semi"
              className="text-left"
            >
              {service.title}
            </GradientHeading>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-zinc-400 text-base leading-relaxed mb-6">
            {service.description}
          </CardDescription>
          <Button 
            variant="outline" 
            className="w-full bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all duration-300"
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 text-lg font-semibold"
          >
            Schedule Free Consultation
          </Button>
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
              "name": service.title,
              "description": service.description,
              "keywords": service.keywords
            }))
          })
        }}
      />
    </section>
  )
}
