import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mic, MessageCircle, Clock, Globe, Zap, Shield, Users } from "lucide-react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const VoiceAI = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, phoneNumber });
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  AI Voice{" "}
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Agents
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
                  AI phone agents that sound human, speak any language, and work 24/7. 
                  Transform your customer interactions with intelligent voice technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-6 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md bg-card border rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Call SimplifyGenAI</h3>
                    <p className="text-sm text-muted-foreground">AI will call you!</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 text-base"
                  />
                  <Input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="h-12 text-base"
                  />
                  <Button type="submit" className="w-full h-12 text-base font-medium">
                    Let's Talk
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Voice AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of customer interaction with our advanced AI voice technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Human-Like Conversations",
                description: "Natural speech patterns and emotional intelligence that makes interactions feel genuine and engaging."
              },
              {
                icon: Globe,
                title: "Multilingual Support",
                description: "Communicate in 50+ languages with perfect accent and cultural understanding for global reach."
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Never miss a call with round-the-clock service that ensures your customers always get assistance."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Instant responses with zero wait time. Your customers get immediate assistance every time."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security and compliance with industry standards to protect your data."
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Seamless integration with your existing team workflows and CRM systems."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Voice AI Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From inbound customer service to outbound sales, we've got you covered
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Inbound Solutions</h3>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "24/7 customer support and inquiries",
                  "Appointment booking and scheduling",
                  "Order processing and tracking",
                  "Technical support and troubleshooting"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-600">Outbound Solutions</h3>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "Lead generation and qualification",
                  "Sales outreach and follow-ups",
                  "Customer surveys and feedback",
                  "Appointment reminders and confirmations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join thousands of businesses already using our Voice AI technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to Sales
            </Button>
          </div>
        </motion.div>
      </section>

      <StackedCircularFooter />
    </div>
  );
};

export default VoiceAI;