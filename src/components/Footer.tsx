import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Main Black Section with Curved Bottom */}
      <div className="bg-black pt-20 pb-40 px-6 relative overflow-hidden">
        {/* Curved bottom using SVG for perfect curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 100" className="w-full h-auto">
            <path d="M0,0 Q600,80 1200,0 L1200,100 L0,100 Z" fill="white"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Massive Brand Text */}
          <div className="flex items-center justify-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-white tracking-tight leading-none text-center">
              SimplifyGenAI
            </h1>
          </div>
        </div>
      </div>
      
      {/* White Footer Content */}
      <div className="bg-white py-8 px-6 relative -mt-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Social Media Icons - Left */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                <Facebook className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                <Instagram className="w-5 h-5 text-gray-600" />
              </a>
            </div>

            {/* Address - Center */}
            <div className="text-gray-800 text-center">
              <p>123 Innovation Drive</p>
              <p>San Francisco, CA</p>
              <p>United States</p>
            </div>

            {/* Copyright - Right */}
            <div className="text-gray-800">
              <p>@2024 - Powered by</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;