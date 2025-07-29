import React from "react";
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Simple Setup, Powerful Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get your AI voice agent up and running in minutes, not weeks
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
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most sophisticated voice AI technology available
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
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From healthcare to e-commerce, our AI voice agents transform customer experiences
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our Voice AI technology to deliver exceptional customer experiences
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-6 text-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 text-lg font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Schedule Demo
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
            <h2 className="text-3xl font-bold mb-6 text-white">Why Choose SimplifyGenAI Voice Agents?</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                SimplifyGenAI revolutionizes customer communication with advanced AI voice agents that deliver human-like conversations. 
                Our cutting-edge technology combines natural language processing, machine learning, and voice synthesis to create 
                seamless customer experiences that scale with your business.
              </p>
              <p>
                Whether you're handling customer support, sales inquiries, or appointment scheduling, our voice AI agents work 
                24/7 to ensure no call goes unanswered. With support for 50+ languages and enterprise-grade security, 
                SimplifyGenAI is trusted by thousands of businesses worldwide.
              </p>
              <p>
                Experience the future of customer communication with AI agents that learn, adapt, and improve with every interaction. 
                From small startups to large enterprises, SimplifyGenAI provides scalable solutions that grow with your business needs.
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