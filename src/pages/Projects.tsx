
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { motion } from "framer-motion";
import { Bot, Zap, ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const caseStudies = [
    {
      company: "Delivery Hero",
      title: "Automated IT Support",
      description: "Reduced account lockout resolution time from 35 minutes to 2 minutes",
      metrics: "200+ hours saved per month",
      industry: "Food Delivery",
      icon: Clock,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      company: "Lindy AI",
      title: "Development Acceleration",
      description: "Accelerated development timeline from 12 months to 3 weeks using n8n integrations",
      metrics: "1 year of engineering time saved",
      industry: "AI Technology",
      icon: TrendingUp,
      gradient: "from-green-600 to-blue-600"
    },
    {
      company: "GOALFRAME Agency",
      title: "AI Sales Agent",
      description: "Automated lead qualification and follow-up with human-in-the-loop validation",
      metrics: "85% faster lead processing",
      industry: "Creative Agency",
      icon: DollarSign,
      gradient: "from-orange-600 to-red-600"
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
              className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Automation
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
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
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Start Automating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">What We Automate</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                <Card className="h-full bg-white/5 backdrop-blur-lg border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 p-8 hover:from-white/10 hover:to-white/15 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${study.gradient} mr-4`}>
                      <study.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{study.company}</h3>
                      <p className="text-sm text-gray-400">{study.industry}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-3">{study.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{study.description}</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-blue-400 font-semibold">{study.metrics}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Automate?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's build intelligent automation solutions that transform your business operations
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
