
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Zap, ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import React from "react";

const Projects = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const caseStudies = [
    {
      company: "Delivery Hero",
      title: "Automated IT Support Revolution",
      description: "Reduced account lockout resolution time from 35 minutes to 2 minutes",
      metrics: "200+ hours saved per month",
      industry: "Food Delivery",
      icon: Clock,
      gradient: "from-blue-600 to-purple-600",
      fullDescription: "Delivery Hero, operating in over 70 countries with 53,000+ employees, faced a massive challenge with account lockouts. Employees getting locked out would contact IT, requiring identity verification and manual restoration in Okta and Google Workspace. The company received around 800 such requests monthly, each taking 35 minutes on average. By implementing an intelligent automation workflow with n8n, they reduced resolution time to just 2 minutes, saving over 200 hours of IT support time monthly and dramatically improving employee experience.",
      technologies: ["n8n", "Okta API", "Google Workspace API", "Identity Verification AI"],
      results: ["97% reduction in resolution time", "200+ hours saved monthly", "800+ automated cases", "99.9% accuracy rate"]
    },
    {
      company: "Lindy AI",
      title: "Development Timeline Acceleration",
      description: "Accelerated development timeline from 12 months to 3 weeks using n8n integrations",
      metrics: "1 year of engineering time saved",
      industry: "AI Technology",
      icon: TrendingUp,
      gradient: "from-green-600 to-blue-600",
      fullDescription: "Lindy AI's engineering team was facing a 12-month development timeline for building custom integrations with various third-party services. By leveraging n8n's pre-built integrations and visual workflow builder, they compressed this timeline to just 3 weeks. The solution included automated data synchronization, real-time webhook processing, and intelligent error handling across multiple platforms, enabling Lindy AI to focus on their core AI development instead of integration complexities.",
      technologies: ["n8n Embed", "REST APIs", "Webhooks", "Real-time Data Sync"],
      results: ["97% faster development", "1 year of engineering saved", "50+ integrations built", "Zero integration maintenance overhead"]
    },
    {
      company: "GOALFRAME Agency",
      title: "AI-Powered Sales Automation",
      description: "Automated lead qualification and follow-up with human-in-the-loop validation",
      metrics: "85% faster lead processing",
      industry: "Creative Agency",
      icon: DollarSign,
      gradient: "from-orange-600 to-red-600",
      fullDescription: "GOALFRAME, a creative agency specializing in football-focused video content, was struggling with manual lead processing and follow-ups. They implemented an AI sales agent with human-in-the-loop validation using n8n workflows. The system automatically qualifies leads, sends personalized follow-ups, schedules meetings, and updates CRM records. The AI agent analyzes lead behavior, scores prospects, and only escalates high-quality leads to human sales reps, resulting in 85% faster processing and 40% higher conversion rates.",
      technologies: ["n8n", "OpenAI GPT-4", "CRM Integration", "Email Automation", "Lead Scoring AI"],
      results: ["85% faster lead processing", "40% higher conversion rate", "90% reduction in manual tasks", "300% ROI improvement"]
    }
  ];

  const automationFeatures = [
    {
      title: "AI Agent Development",
      description: "Create intelligent agents that can understand context, make decisions, and learn from interactions",
      icon: Bot,
      color: "text-blue-400"
    },
    {
      title: "n8n Workflow Automation",
      description: "Build sophisticated automation workflows that connect hundreds of apps and services",
      icon: Zap,
      color: "text-purple-400"
    },
    {
      title: "Process Optimization",
      description: "Streamline business processes and eliminate manual tasks with intelligent automation",
      icon: CheckCircle,
      color: "text-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Case Study Popup */}
      <AnimatePresence>
        {selectedCase !== null && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
          >
            <motion.div 
              className="bg-background/95 backdrop-blur-lg border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${caseStudies[selectedCase].gradient}`}>
                      {React.createElement(caseStudies[selectedCase].icon, { className: "h-8 w-8 text-white" })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{caseStudies[selectedCase].company}</h2>
                      <p className="text-muted-foreground">{caseStudies[selectedCase].industry}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setSelectedCase(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">{caseStudies[selectedCase].title}</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{caseStudies[selectedCase].fullDescription}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Technologies Used</h4>
                    <div className="space-y-2">
                      {caseStudies[selectedCase].technologies.map((tech, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-muted-foreground">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Key Results</h4>
                    <div className="space-y-2">
                      {caseStudies[selectedCase].results.map((result, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-blue-500" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary mb-2">{caseStudies[selectedCase].metrics}</p>
                    <p className="text-muted-foreground">Primary Impact Metric</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
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
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Automation
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Transform your business with intelligent automation. Build AI agents, streamline workflows, 
              and unlock unprecedented efficiency with cutting-edge automation solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Button className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Start Automating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">What We Automate</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From AI agents to complex workflows, we build automation that thinks and adapts
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-lg border border-border p-8 hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real businesses achieving extraordinary results through intelligent automation
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCase(index)}
              >
                <Card className="h-full bg-card/30 backdrop-blur-lg border border-border hover:bg-card/50 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${study.gradient} shadow-lg`}>
                        {React.createElement(study.icon, { className: "h-8 w-8 text-white" })}
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{study.company}</h3>
                      <p className="text-sm text-muted-foreground/80 mb-3">{study.industry}</p>
                      <h4 className="text-lg font-semibold text-foreground mb-3">{study.title}</h4>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">{study.description}</p>
                    
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-primary font-bold text-lg">{study.metrics}</p>
                        <span className="text-xs text-muted-foreground/60 uppercase tracking-wide">View Details</span>
                      </div>
                    </div>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${study.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">Ready to Automate?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's build intelligent automation solutions that transform your business operations
          </p>
          <Button className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
