import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Black curved section with large brand text */}
      <div className="bg-black relative">
        {/* Curved container */}
        <div className="mx-4 sm:mx-8 bg-black rounded-t-[2rem] sm:rounded-t-[3rem] pt-16 pb-20 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-bold text-white tracking-tight">
              SimplifyGenAI
            </h1>
          </div>
        </div>
        
        {/* Smooth curved bottom transition */}
        <div className="relative bg-black">
          <svg 
            viewBox="0 0 1200 120" 
            className="w-full h-20 sm:h-24" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </div>
      
      {/* White footer content */}
      <div className="bg-background py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 order-1 sm:order-1">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </a>
            </div>

            {/* Address */}
            <div className="text-gray-800 text-sm sm:text-base order-2 sm:order-2">
              <p>123 Innovation Drive, San Francisco, CA, United States</p>
            </div>

            {/* Copyright */}
            <div className="text-gray-800 text-sm sm:text-base order-3 sm:order-3">
              <p>©2024 - Powered by SimplifyGenAI</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;