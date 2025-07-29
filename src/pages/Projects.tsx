import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Zap, ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign, X, Cpu, Workflow, Brain, BarChart3, Users, Shield, Code, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import React from "react";

const Projects = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      company: "Delivery Hero",
      title: "Zero-Touch IT Support",
      tagline: "From 35 minutes to 2 minutes",
      description: "Automated account lockout resolution for 53,000+ employees worldwide",
      metrics: { primary: "97%", secondary: "Time Reduction", tertiary: "200+ hours saved monthly" },
      industry: "Global Food Delivery",
      icon: Clock,
      color: "blue",
      image: "/api/placeholder/600/400",
      challenge: "Delivery Hero faced 800+ monthly account lockout requests, each requiring 35 minutes of manual IT intervention across Okta and Google Workspace systems.",
      solution: "Implemented intelligent automation workflow with n8n, featuring automated identity verification, multi-system integration, and real-time processing capabilities.",
      technologies: ["n8n Workflow Engine", "Okta Identity API", "Google Workspace API", "ML Identity Verification", "Real-time Monitoring"],
      results: [
        { metric: "97%", label: "Faster Resolution" },
        { metric: "200+", label: "Hours Saved Monthly" },
        { metric: "800+", label: "Cases Automated" },
        { metric: "99.9%", label: "Accuracy Rate" }
      ],
      impact: "Transformed IT operations from reactive support to proactive automation, enabling the team to focus on strategic initiatives while improving employee experience."
    },
    {
      id: 2,
      company: "Lindy AI",
      title: "Development Velocity",
      tagline: "12 months to 3 weeks",
      description: "Accelerated integration development using n8n's pre-built connectors",
      metrics: { primary: "16x", secondary: "Faster Development", tertiary: "1 year engineering saved" },
      industry: "AI Technology",
      icon: TrendingUp,
      color: "green",
      image: "/api/placeholder/600/400",
      challenge: "Lindy AI's engineering team faced a 12-month timeline for building custom integrations with various third-party services, threatening product launch schedules.",
      solution: "Leveraged n8n's visual workflow builder and pre-built integrations to create a comprehensive automation platform with real-time data synchronization.",
      technologies: ["n8n Embed Platform", "REST API Integration", "Webhook Processing", "Real-time Data Sync", "Error Handling Systems"],
      results: [
        { metric: "1600%", label: "Development Speed" },
        { metric: "50+", label: "Integrations Built" },
        { metric: "0", label: "Maintenance Overhead" },
        { metric: "100%", label: "Reliability Score" }
      ],
      impact: "Enabled rapid market entry and allowed engineering team to focus on core AI development instead of integration complexities."
    },
    {
      id: 3,
      company: "GOALFRAME",
      title: "AI Sales Engine",
      tagline: "85% faster lead processing",
      description: "Human-in-the-loop AI agent for lead qualification and conversion",
      metrics: { primary: "300%", secondary: "ROI Improvement", tertiary: "40% higher conversion" },
      industry: "Creative Agency",
      icon: DollarSign,
      color: "orange",
      image: "/api/placeholder/600/400",
      challenge: "GOALFRAME struggled with manual lead processing, inconsistent follow-ups, and low conversion rates in their football-focused video content business.",
      solution: "Deployed AI sales agent with intelligent lead scoring, automated personalization, and human validation checkpoints using advanced workflow automation.",
      technologies: ["OpenAI GPT-4 Integration", "n8n Workflow Engine", "CRM Synchronization", "Email Automation", "Lead Scoring ML"],
      results: [
        { metric: "85%", label: "Faster Processing" },
        { metric: "40%", label: "Higher Conversion" },
        { metric: "90%", label: "Task Automation" },
        { metric: "300%", label: "ROI Increase" }
      ],
      impact: "Transformed sales operations from manual processes to intelligent automation, dramatically improving both efficiency and revenue generation."
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "AI Agent Development",
      description: "Custom intelligent agents that understand context and make autonomous decisions",
      features: ["Natural Language Processing", "Decision Trees", "Learning Algorithms", "Context Awareness"]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "End-to-end workflow automation connecting systems and eliminating manual tasks",
      features: ["Multi-system Integration", "Real-time Processing", "Error Handling", "Scalable Architecture"]
    },
    {
      icon: Cpu,
      title: "System Integration",
      description: "Seamless connection between disparate systems and data sources",
      features: ["API Integrations", "Database Synchronization", "Cloud Connectivity", "Legacy System Support"]
    }
  ];

  const technologies = [
    { name: "n8n", category: "Automation Platform", icon: Zap },
    { name: "OpenAI GPT-4", category: "AI Engine", icon: Brain },
    { name: "REST APIs", category: "Integration", icon: Code },
    { name: "Webhooks", category: "Real-time", icon: Workflow },
    { name: "Cloud Infrastructure", category: "Scalability", icon: Database },
    { name: "ML Algorithms", category: "Intelligence", icon: BarChart3 }
  ];

  const stats = [
    { number: "500+", label: "Hours Saved Weekly", icon: Clock },
    { number: "99.9%", label: "Automation Reliability", icon: Shield },
    { number: "50+", label: "Systems Integrated", icon: Cpu },
    { number: "24/7", label: "Continuous Operation", icon: Bot }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase !== null && (
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
          >
            <motion.div 
              className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(caseStudies[selectedCase].color)} shadow-lg`}>
                      {React.createElement(caseStudies[selectedCase].icon, { className: "h-10 w-10 text-white" })}
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-foreground mb-2">{caseStudies[selectedCase].company}</h2>
                      <p className="text-muted-foreground text-lg">{caseStudies[selectedCase].industry}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setSelectedCase(null)}
                    className="text-muted-foreground hover:text-foreground rounded-full w-12 h-12"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Metrics Banner */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {caseStudies[selectedCase].results.map((result, index) => (
                    <Card key={index} className="p-4 text-center bg-muted/30 border-border">
                      <div className="text-2xl font-bold text-foreground mb-1">{result.metric}</div>
                      <div className="text-sm text-muted-foreground">{result.label}</div>
                    </Card>
                  ))}
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{caseStudies[selectedCase].challenge}</p>
                    
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{caseStudies[selectedCase].solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Technologies</h3>
                    <div className="space-y-3 mb-6">
                      {caseStudies[selectedCase].technologies.map((tech, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Impact */}
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Business Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">{caseStudies[selectedCase].impact}</p>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
          <motion.div 
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5] 
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We build intelligent automation that thinks, learns, and evolves—transforming 
              <span className="text-foreground font-medium"> complex business processes </span>
              into seamless digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                Start Your Automation Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted/50 px-8 py-4 text-lg rounded-full">
                View Case Studies
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-foreground">What We Automate</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From intelligent AI agents to complex system integrations, we create automation solutions that adapt and scale with your business needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full p-8 bg-card/30 backdrop-blur-sm border-border hover:bg-card/50 transition-all duration-500 hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <capability.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{capability.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">{capability.description}</p>
                  
                  <div className="space-y-3">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-foreground">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real transformations, measurable results. See how intelligent automation has revolutionized operations for industry leaders.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCase(index)}
              >
                <Card className="h-full overflow-hidden bg-card/20 backdrop-blur-sm border-border hover:bg-card/40 transition-all duration-500 hover:shadow-2xl">
                  {/* Card Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getColorClasses(study.color)} shadow-lg`}>
                        {React.createElement(study.icon, { className: "h-6 w-6 text-white" })}
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{study.company}</h3>
                      <p className="text-sm text-muted-foreground/80 mb-3">{study.industry}</p>
                      <h4 className="text-lg font-semibold text-foreground mb-3">{study.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.description}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="px-8 pb-6">
                    <div className="bg-muted/30 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{study.metrics.primary}</div>
                      <div className="text-sm text-muted-foreground mb-1">{study.metrics.secondary}</div>
                      <div className="text-xs text-muted-foreground/60">{study.metrics.tertiary}</div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className={`h-1 bg-gradient-to-r ${getColorClasses(study.color)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-foreground">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Powered by cutting-edge technologies and platforms that ensure reliability, scalability, and intelligent automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="p-6 text-center bg-card/20 backdrop-blur-sm border-border hover:bg-card/40 transition-all duration-300">
                  <tech.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-r from-muted/30 to-muted/10">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-foreground">Ready to Automate?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Transform your business operations with intelligent automation. Let's build solutions that think, learn, and scale with your ambitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted/50 px-8 py-4 text-lg rounded-full">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <StackedCircularFooter variant="light" />
    </div>
  );
};

export default Projects;