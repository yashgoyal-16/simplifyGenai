
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Waves } from "lucide-react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import SchemaCard from "@/components/ui/schema-card-with-animated-wave-visualizer";

const Resume = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, phoneNumber });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        {/* Background gradient similar to other pages */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black/20"></div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-8 tracking-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Resume Builder
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Create professional resumes with AI-powered assistance
            </motion.p>

            {/* Form */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-md mx-auto space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black/30 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-black/30 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Phone className="mr-2 h-4 w-4" />
                Generate Resume
              </Button>
            </motion.form>
          </div>
        </div>
        
        {/* Additional content that was moved */}
        <div className="absolute bottom-8 right-8 z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
              
              {/* Screen */}
              <div className="absolute inset-4 bg-gray-100 rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center p-4 text-black text-sm font-medium">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="w-6 h-3 border border-black rounded-sm">
                      <div className="w-4 h-1 bg-black rounded-sm m-0.5"></div>
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="px-6 py-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Call SimplifyGenAI</h3>
                      <p className="text-sm text-gray-600">AI will call you!</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 text-base border-gray-300 focus:border-blue-500"
                    />
                    <Input
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="h-12 text-base border-gray-300 focus:border-blue-500"
                    />
                    <Button
                      type="submit"
                      className="w-full h-12 bg-black text-white text-base font-medium hover:bg-gray-800"
                    >
                      Let's Talk
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="bg-black text-white">
        {/* Main Description */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              AI phone agents that sound human, speak any language, and work 24/7
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              SimplifyGenAI makes it simple to integrate the latest conversational AI technology into your business. 
              Build the perfect employee to handle sales, scheduling, and all your customer support needs. 
              SimplifyGenAI's AI phone agents sound human, can speak any language, and work 24/7.
            </p>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 px-6 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book an appointment. Update a CRM. Send a text. All in one workflow.
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Pathways are the brain of your business. We integrate into your existing systems, whether it's a scheduler, 
                ERP, or CRM, so your agents don't just talk, they take action. You map out the conversation and define the 
                decisions your AI makes. SimplifyGenAI does the rest.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Every month SimplifyGenAI is handling millions of calls across various industries
            </h2>
            <p className="text-xl text-gray-300 mb-16">
              Empower your Business with Next-Generation AI Voice Assistant
            </p>
            <p className="text-lg text-gray-400">
              Transform customer interactions and streamline communications with our adaptable and intelligent AI voice 
              assistant that fits right into your business flow. Experience the future of business communication today.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Setup and Train */}
              <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <Waves className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Setup and Train on Your Knowledge Base</h3>
                <p className="text-gray-300 leading-relaxed">
                  We'll integrate the voice bot with your systems and thoroughly train it on your specific knowledge base 
                  to ensure it understands your business context and delivers accurate, relevant information across various channels.
                </p>
              </div>

              {/* Customize */}
              <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Customize Interaction Flows, Personality, and Role</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tailor the bot's interaction flows, personality, and roles to perfectly align with your business needs and brand voice. 
                  Whether you need the bot to act as a customer service agent, sales representative, or support staff, we customize its behavior.
                </p>
              </div>

              {/* Test and Deploy */}
              <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Test and Deploy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Before going live, we'll conduct rigorous testing to ensure the bot performs flawlessly across all designated 
                  platforms and in various scenarios. This includes testing its capabilities on handling both inbound and outbound calls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inbound & Outbound Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Inbound & Outbound Voice AI Solutions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Inbound Calls</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Handle customer support inquiries 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Book appointments and manage scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Answer frequently asked questions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Route calls to appropriate departments</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-400">Outbound Calls</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lead generation and qualification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Appointment reminders and confirmations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Follow-up calls and surveys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sales outreach and product demos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Resume;
