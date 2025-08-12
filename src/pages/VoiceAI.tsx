import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Brain,
  Headphones,
  BarChart3,
  Settings
} from "lucide-react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import VoiceAIHero from "@/components/ui/voice-ai-hero";

// Types for better type safety
interface WorkflowStep {
  step: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Industry {
  industry: string;
  description: string;
  features: string[];
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

const VoiceAI: React.FC = () => {
  useEffect(() => {
    // Add page-specific structured data for Voice AI services
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service", 
      "name": "Voice AI Solutions & Custom Voice AI Development",
      "description": "Professional voice AI generator, conversational AI, and custom voice AI solutions. Enterprise voice AI development services and voice recognition AI technology.",
      "provider": {
        "@type": "Organization",
        "name": "SimplifyGenAI",
        "url": "https://simplifygenai.com"
      },
      "serviceType": [
        "Voice AI Generator",
        "Conversational AI",
        "Custom Voice AI Solutions",
        "Voice AI Development", 
        "Enterprise Voice AI",
        "Voice Recognition AI",
        "Voice AI Assistant Development",
        "Speech AI Technology"
      ],
      "keywords": "voice ai generator, conversational ai, custom voice ai solutions, voice ai development, enterprise voice ai, voice recognition ai, voice ai assistant development, speech ai",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD"
      }
    }

    let script = document.querySelector('#voice-ai-structured-data') as HTMLScriptElement
    if (!script) {
      script = document.createElement('script')
      script.id = 'voice-ai-structured-data'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    // Update page title and meta description for Voice AI page
    document.title = "Voice AI Generator & Custom Voice AI Solutions | Enterprise Voice AI Development - SimplifyGenAI"
    
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional voice AI generator and custom voice AI solutions. Enterprise conversational AI development, voice recognition AI, and voice AI assistant development services.')
    }

    return () => {
      const scriptElement = document.querySelector('#voice-ai-structured-data')
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [])
  // Workflow steps data
  const workflowSteps: WorkflowStep[] = [
    {
      step: "01",
      icon: Settings,
      title: "Configure Your Agent",
      description: "Set up your AI agent's personality, knowledge base, and conversation flows through our intuitive dashboard."
    },
    {
      step: "02", 
      icon: Phone,
      title: "Connect Your Systems",
      description: "Integrate with your existing phone systems, CRM, and business tools with just a few clicks."
    },
    {
      step: "03",
      icon: Zap,
      title: "Go Live Instantly",
      description: "Your AI agent starts handling calls immediately, learning and improving with every interaction."
    }
  ];

  // Features data
  const features: Feature[] = [
    {
      icon: Brain,
      title: "Smart AI Learning",
      description: "Continuously learns from every conversation to improve responses and accuracy."
    },
    {
      icon: Headphones,
      title: "Crystal Clear Audio",
      description: "Advanced noise cancellation and audio processing for perfect call quality."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track performance metrics and conversation insights in real-time dashboards."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with industry standards and regulations."
    }
  ];

  // Industries data
  const industries: Industry[] = [
    {
      industry: "Healthcare",
      description: "Appointment scheduling, patient support, and medical inquiries",
      features: ["HIPAA Compliant", "24/7 Patient Support", "Multilingual Care"]
    },
    {
      industry: "E-commerce",
      description: "Order tracking, customer support, and product recommendations",
      features: ["Order Management", "Product Support", "Return Processing"]
    },
    {
      industry: "Real Estate",
      description: "Property inquiries, showing schedules, and lead qualification",
      features: ["Lead Qualification", "Appointment Booking", "Property Info"]
    },
    {
      industry: "Financial Services",
      description: "Account inquiries, transaction support, and financial guidance",
      features: ["Secure Transactions", "Account Management", "Compliance Ready"]
    },
    {
      industry: "Travel & Hospitality",
      description: "Booking assistance, customer service, and travel support",
      features: ["Reservation Management", "Travel Support", "Concierge Services"]
    },
    {
      industry: "Education",
      description: "Student support, enrollment assistance, and course information",
      features: ["Student Services", "Enrollment Help", "Course Guidance"]
    }
  ];

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 500 calls/month",
        "Basic AI personality",
        "Email support",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month", 
      description: "Most popular for growing teams",
      features: [
        "Up to 2,000 calls/month",
        "Advanced AI capabilities",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited calls",
        "Custom AI training",
        "Dedicated support",
        "White-label options",
        "Custom analytics",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  console.log("VoiceAI component is rendering, button should be visible");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <VoiceAIHero />

      {/* How It Works Section */}
      <section className="relative py-20 px-6 bg-gray-900/20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              How It Works
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Voice AI Solutions - Simple Setup, Powerful Results
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get your custom voice AI assistant and conversational AI system up and running in minutes with our enterprise voice AI development platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowSteps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={`workflow-${index}`} className="relative">
                  <Card className="p-8 bg-black/50 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl font-bold text-white">{item.step}</div>
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </Card>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/30 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Advanced Voice AI Technology & Speech AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most sophisticated voice AI software and conversational AI technology for enterprise voice AI development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={`feature-${index}`}
                  className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases & Industries */}
      <section className="relative py-20 px-6 bg-gray-900/20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Enterprise Voice AI Solutions Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From healthcare to e-commerce, our custom voice AI solutions and voice recognition AI technology transform customer experiences globally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, index) => (
              <div key={`industry-${index}`}>
                <Card className="p-6 bg-black/50 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.industry}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={`feature-${index}-${featureIndex}`} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gray-900/20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business with Voice AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our voice AI generator and conversational AI technology to deliver exceptional customer experiences through custom voice AI solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book an Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Leading Voice AI Generator & Custom Voice AI Solutions</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                SimplifyGenAI revolutionizes business communication with our advanced voice AI generator and conversational AI platform. 
                Our enterprise voice AI development services combine cutting-edge speech AI technology, natural language processing, 
                and voice synthesis to create custom voice AI solutions that deliver human-like conversations at scale.
              </p>
              <p>
                Whether you need voice AI assistant development for customer support, voice recognition AI for sales inquiries, 
                or voice AI software for appointment scheduling, our conversational AI technology works 24/7 to ensure seamless 
                customer experiences. With support for 50+ languages and enterprise-grade security, our voice AI solutions 
                are trusted by thousands of businesses worldwide for voice ai development and implementation.
              </p>
              <p>
                Experience the future of business communication with our voice AI technology that learns, adapts, and improves 
                with every interaction. From small startups to large enterprises, SimplifyGenAI provides scalable voice ai solutions 
                and enterprise voice AI consulting services that grow with your business needs. Our custom voice AI development 
                platform enables businesses to implement sophisticated voice AI assistants that transform customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10">
        <StackedCircularFooter />
      </div>
    </div>
  );
};

export default VoiceAI;