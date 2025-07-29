import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Play, CheckCircle, Users, Clock, Globe } from 'lucide-react';
import Orb from './orb';

export default function VoiceAIHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, phoneNumber });
    // Here you would typically send the data to your backend
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let time = 0;
    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01
    }));

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function updateWaveData() {
      waveData.forEach(data => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const nx = (x / canvas.width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
          const y = (py + 1) * canvas.height / 2;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const intensity = Math.min(1, freq * 0.3);
        const r = 79 + intensity * 100;
        const g = 70 + intensity * 130;
        const b = 229;
        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
        ctx.shadowBlur = 5;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    }

    function animate() {
      time += 0.02;
      updateWaveData();
      draw();
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Fixed Canvas Background */}
      <div className="fixed inset-0 w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full" />
        {/* SIMPLIFYGENAI Background Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-semibold text-white/5 select-none pointer-events-none z-0 font-['Inter'] whitespace-nowrap">
            SIMPLIFYGENAI
          </h1>
        </div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Side - Copy Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm">AI Agent is Live</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                  AI Voice Agents That Sound Human
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform your business with AI phone agents that handle calls 24/7, 
                  speak 50+ languages, and deliver exceptional customer experiences that 
                  feel completely natural.
                </p>
              </div>


              {/* Feature List */}
              <div className="space-y-3">
                {[
                  "Natural conversation flow with emotional intelligence",
                  "Seamless integration with your existing systems",
                  "Real-time analytics and conversation insights",
                  "Enterprise-grade security and compliance"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Side - Form Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <div className="card-border overflow-hidden rounded-2xl flex flex-col animate-float">
                  <div className="p-6 flex justify-center relative">
                    <div className="w-full h-48 rounded-xl gradient-border inner-glow overflow-hidden relative bg-black/50 backdrop-blur-sm border border-white/20">
                      {/* Animated grid background */}
                      <div className="absolute inset-0 opacity-10">
                        <div 
                          className="w-full h-full animate-pulse" 
                          style={{ 
                            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', 
                            backgroundSize: '15px 15px' 
                          }} 
                        />
                      </div>
                      
                      {/* Voice AI Visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 bg-gradient-to-t from-blue-400 to-purple-500 rounded-full animate-pulse"
                              style={{
                                height: `${20 + Math.random() * 40}px`,
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: `${0.5 + Math.random() * 0.5}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  
                  <div className="p-6 bg-black/50 backdrop-blur-sm">
                    <div className="text-center mb-6">
                      <span className="inline-block px-3 py-1 glass text-blue-400 rounded-full text-xs font-medium mb-3 border border-blue-400/30">Get a Demo Call</span>
                      <h3 className="text-xl font-semibold text-white mb-2">Experience AI Voice Agent</h3>
                      <p className="text-white/70 text-sm">
                        Get a personalized demo call from our AI agent in under 30 seconds
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        type="text"
                        placeholder="Your Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                        required
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number (with country code)"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                        required
                      />
                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base font-medium"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Get AI Demo Call Now
                      </Button>
                    </form>
                    
                    <p className="text-center text-white/50 text-xs mt-4">
                      No spam. AI will call you within 30 seconds.
                    </p>
                  </div>
                </div>

                {/* Voice AI Orb - Test Section */}
                <div className="mt-8 text-center">
                  <p className="text-white/70 text-sm mb-4">Or test the Voice AI agent on web</p>
                  <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center">
                    <div className="w-full h-full">
                      <Orb />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}