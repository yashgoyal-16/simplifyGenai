import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-r-transparent rounded-full transform rotate-45"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-wide">SimplifyGenAI</h2>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 order-first lg:order-none">
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          {/* Address */}
          <div className="text-gray-300 text-center lg:text-left">
            <p>123 Innovation Drive</p>
            <p>San Francisco, CA</p>
            <p>United States</p>
          </div>

          {/* Copyright */}
          <div className="text-gray-300 text-center lg:text-right">
            <p>@2024 - Powered by SimplifyGenAI</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;