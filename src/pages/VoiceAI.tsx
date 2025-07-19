import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Waves } from "lucide-react";
import Footer from "@/components/Footer";
import SchemaCard from "@/components/ui/schema-card-with-animated-wave-visualizer";

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
      {/* Hero Section with Animated Wave Component */}
      <section className="relative min-h-screen">
        <SchemaCard />
        
        {/* Phone Mockup overlay */}
        <div className="absolute bottom-8 right-8 z-20">
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
      
      <Footer />
    </div>
  );
};

export default VoiceAI;