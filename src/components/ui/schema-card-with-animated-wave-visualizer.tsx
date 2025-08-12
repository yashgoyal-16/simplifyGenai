import React, { useEffect, useRef } from 'react';
import Orb from './orb';

export default function SchemaCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    <>
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />
      <div className="fixed inset-0 flex items-center justify-center p-4 z-10">
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 border border-white/10 rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/15 rotate-12"></div>
        </div>
        
        <div className="w-full max-w-xs">
          <div className="relative card-border overflow-hidden rounded-2xl flex flex-col animate-float">
            <div className="p-4 flex justify-center relative">
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
                        className="w-2 bg-gradient-to-t from-gray-400 to-gray-600 rounded-full animate-pulse"
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
            <div className="p-4 bg-black/50 backdrop-blur-sm">
              <span className="inline-block px-3 py-1 glass text-gray-400 rounded-full text-xs font-medium mb-3 border border-gray-500/30">Voice AI</span>
              <h3 className="text-lg font-medium text-white mb-2">Call AI Agent</h3>
              <p className="text-white/70 mb-4 leading-relaxed text-xs">
                Experience intelligent voice interactions powered by advanced AI technology.
              </p>
              <div className="flex justify-between items-center">
                <a href="#" className="text-gray-400 hover:text-gray-300 transition flex items-center text-xs font-medium glass px-3 py-1.5 rounded-lg border border-gray-500/30">
                  Call Now
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <span className="text-white/50 text-xs glass px-2 py-1 rounded-full border border-white/10">Live</span>
              </div>
            </div>
          </div>

          {/* Voice AI Orb - Test Section */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm mb-4">Test the Voice AI agent on web - click the orb and talk to it</p>
            <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center">
              <div className="w-full h-full">
                <Orb />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}