
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Waves, Mic, MessageCircle, Clock, Globe } from "lucide-react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const VoiceAI = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, phoneNumber });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                AI Voice
                <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Agents
                </span>
              </h1>
              <p className="text-xl text-gray-300 mt-6 max-w-2xl">
                AI phone agents that sound human, speak any language, and work 24/7. 
                Transform your customer interactions with intelligent voice technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400">Languages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Available</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
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

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Voice AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of customer interaction with our advanced AI voice technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Human-Like Conversations</h3>
              <p className="text-gray-300">
                Natural speech patterns and emotional intelligence that makes interactions feel genuine and engaging.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multilingual Support</h3>
              <p className="text-gray-300">
                Communicate in 50+ languages with perfect accent and cultural understanding for global reach.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
              <p className="text-gray-300">
                Never miss a call with round-the-clock service that ensures your customers always get assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Voice AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From inbound customer service to outbound sales, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Inbound Solutions</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>24/7 customer support and inquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Appointment booking and scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Order processing and tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technical support and troubleshooting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur-sm border border-purple-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Outbound Solutions</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lead generation and qualification</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sales outreach and follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Customer surveys and feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Appointment reminders and confirmations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of businesses already using our Voice AI technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <StackedCircularFooter />
    </div>
  );
};

export default VoiceAI;
