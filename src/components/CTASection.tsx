import React from 'react'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import { GradientHeading } from '@/components/ui/gradient-heading'

const CTASection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <GradientHeading 
            size="xl" 
            variant="light" 
            weight="bold"
            className="text-4xl md:text-6xl mb-6"
          >
            Ready to Transform Your Business with AI?
          </GradientHeading>
          
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Join Fortune 500 companies who trust SimplifyGenAI to implement cutting-edge AI solutions. 
            Get your free consultation today and discover how AI can revolutionize your operations.
          </p>
          
          <LiquidButton 
            size="lg" 
            className="text-white font-semibold text-lg px-8 py-4"
          >
            Book Your Free AI Consultation
          </LiquidButton>
          
          <p className="text-zinc-500 text-sm mt-4">
            No commitment • 30-minute strategy session • Custom AI roadmap included
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTASection