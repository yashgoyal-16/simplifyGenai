import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mic, 
  MessageCircle, 
  Clock, 
  Globe, 
  Zap, 
  Shield, 
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Play
} from "lucide-react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const VoiceAI = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4">
                🚀 Revolutionary AI Technology
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                AI Voice Agents That
                <span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Sound Human
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transform your business with AI phone agents that handle calls 24/7, 
                speak 50+ languages, and deliver exceptional customer experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Try For Free
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Always Available</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Experience the Future of Customer Service
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our AI agents handle real conversations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Live Demo Call</h3>
                      <p className="text-sm text-muted-foreground">Try our AI agent now</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Natural conversation flow</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Instant responses</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Multilingual support</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now: +1 (555) DEMO-AI
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">What Makes Us Different?</h3>
                <ul className="space-y-4">
                  {[
                    "Advanced emotional intelligence",
                    "Context-aware conversations",
                    "Real-time learning capabilities",
                    "Seamless human handoff"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Powerful Features for Every Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to revolutionize your customer communications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Natural Speech",
                description: "Advanced AI that understands context, emotion, and intent for truly human-like conversations.",
                color: "text-blue-500"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Support for 50+ languages with native accents and cultural understanding.",
                color: "text-green-500"
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Never miss a call. Your AI agent works around the clock without breaks.",
                color: "text-purple-500"
              },
              {
                icon: Zap,
                title: "Instant Setup",
                description: "Get started in minutes with our simple setup process and ready-to-use templates.",
                color: "text-yellow-500"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade encryption and compliance with GDPR, HIPAA, and SOC 2 standards.",
                color: "text-red-500"
              },
              {
                icon: Users,
                title: "Team Integration",
                description: "Seamlessly integrates with your existing CRM, helpdesk, and communication tools.",
                color: "text-indigo-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary/10 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground">
              See how businesses across industries are transforming with AI voice agents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-blue-50/50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Inbound Support</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Customer service & inquiries",
                    "Technical support & troubleshooting", 
                    "Order tracking & status updates",
                    "Appointment booking & scheduling"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-purple-50/50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300">Outbound Sales</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Lead qualification & nurturing",
                    "Sales follow-ups & demos",
                    "Customer surveys & feedback",
                    "Appointment reminders & confirmations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 border-2 border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have revolutionized their customer communications with AI voice agents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold">
                <MessageCircle className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Setup in 5 minutes
            </p>
          </div>
        </motion.div>
      </section>

      <StackedCircularFooter />
    </div>
  );
};

export default VoiceAI;