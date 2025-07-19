import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Curved Black Header with Brand */}
      <div className="bg-black rounded-t-[3rem] px-6 py-16">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-r-transparent rounded-full transform rotate-45"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-wide">SimplifyGenAI</h2>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="py-8 px-6">
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