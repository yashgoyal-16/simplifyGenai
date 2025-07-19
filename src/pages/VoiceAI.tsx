import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Waves } from "lucide-react";
import Footer from "@/components/Footer";

const VoiceAI = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, phoneNumber });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Animated Waves */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Waves */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 20% 80%, rgba(255, 165, 0, 0.8) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, rgba(255, 69, 0, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 40% 40%, rgba(138, 43, 226, 0.7) 0%, transparent 50%),
                radial-gradient(ellipse at 60% 60%, rgba(30, 144, 255, 0.5) 0%, transparent 50%)
              `,
            }}
            animate={{
              background: [
                `radial-gradient(ellipse at 20% 80%, rgba(255, 165, 0, 0.8) 0%, transparent 50%),
                 radial-gradient(ellipse at 80% 20%, rgba(255, 69, 0, 0.6) 0%, transparent 50%),
                 radial-gradient(ellipse at 40% 40%, rgba(138, 43, 226, 0.7) 0%, transparent 50%),
                 radial-gradient(ellipse at 60% 60%, rgba(30, 144, 255, 0.5) 0%, transparent 50%)`,
                `radial-gradient(ellipse at 80% 20%, rgba(255, 165, 0, 0.8) 0%, transparent 50%),
                 radial-gradient(ellipse at 20% 80%, rgba(255, 69, 0, 0.6) 0%, transparent 50%),
                 radial-gradient(ellipse at 60% 60%, rgba(138, 43, 226, 0.7) 0%, transparent 50%),
                 radial-gradient(ellipse at 40% 40%, rgba(30, 144, 255, 0.5) 0%, transparent 50%)`,
                `radial-gradient(ellipse at 20% 80%, rgba(255, 165, 0, 0.8) 0%, transparent 50%),
                 radial-gradient(ellipse at 80% 20%, rgba(255, 69, 0, 0.6) 0%, transparent 50%),
                 radial-gradient(ellipse at 40% 40%, rgba(138, 43, 226, 0.7) 0%, transparent 50%),
                 radial-gradient(ellipse at 60% 60%, rgba(30, 144, 255, 0.5) 0%, transparent 50%)`
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating wave elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                background: `linear-gradient(45deg, 
                  ${i % 3 === 0 ? '#FF6B35' : i % 3 === 1 ? '#8A2BE2' : '#1E90FF'}40, 
                  ${i % 3 === 0 ? '#FFA500' : i % 3 === 1 ? '#9370DB' : '#87CEEB'}40)`,
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                SimplifyGenAI
              </h1>
              <h2 className="text-2xl lg:text-4xl font-semibold mb-4 text-white">
                Voice AI Agents
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Make your customers happy with intelligent voice interactions!
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-lg text-gray-400">
                <Waves className="w-6 h-6" />
                <span>AI-Powered Voice Solutions</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Phone Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
                        <p className="text-sm text-gray-600">Make your customers happy!</p>
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
        </div>
      </section>

      {/* Additional sections can be added here */}
      
      <Footer />
    </div>
  );
};

export default VoiceAI;