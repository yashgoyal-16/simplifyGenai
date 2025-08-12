import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

interface StackedCircularFooterProps {
  variant?: "default" | "light"
}

function StackedCircularFooter({ variant = "default" }: StackedCircularFooterProps) {
  return (
    <footer className={variant === "light" ? "bg-white py-12" : "bg-black py-12"}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="/" className={`transition-colors ${
              variant === "light" 
                ? "text-black hover:text-black/80" 
                : "text-white hover:text-white/80"
            }`}>Home</a>
            <a href="/about" className={`transition-colors ${
              variant === "light" 
                ? "text-black hover:text-black/80" 
                : "text-white hover:text-white/80"
            }`}>About</a>
            <a href="/projects" className={`transition-colors ${
              variant === "light" 
                ? "text-black hover:text-black/80" 
                : "text-white hover:text-white/80"
            }`}>Automation</a>
            <a href="/creative-ai" className={`transition-colors ${
              variant === "light" 
                ? "text-black hover:text-black/80" 
                : "text-white hover:text-white/80"
            }`}>Creative AI</a>
            <a href="/voice-ai" className={`transition-colors ${
              variant === "light" 
                ? "text-black hover:text-black/80" 
                : "text-white hover:text-white/80"
            }`}>Voice AI</a>
          </nav>
          <div className="mb-12 flex gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className={`rounded-full ${
                variant === "light"
                  ? "text-black hover:bg-black/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`rounded-full ${
                variant === "light"
                  ? "text-black hover:bg-black/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`rounded-full ${
                variant === "light"
                  ? "text-black hover:bg-black/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`rounded-full ${
                variant === "light"
                  ? "text-black hover:bg-black/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <div>
            <h2 className={`text-4xl sm:text-6xl md:text-8xl font-display font-black text-center ${
              variant === "light" 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-600"
                : "text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200"
            }`}>
              Simplify<span className={variant === "light" ? "text-blue-600" : "text-blue-400"}>Gen</span><span className={variant === "light" ? "text-cyan-600" : "text-cyan-400"}>AI</span>
            </h2>
            {/* AI Symbol */}
            <div className="flex justify-center mt-4">
              <div className={`w-20 h-0.5 rounded-full ${
                variant === "light" 
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                  : "bg-gradient-to-r from-blue-400 to-cyan-400"
              }`}></div>
              <div className={`w-4 h-4 rounded-full mx-4 -mt-1.5 animate-pulse ${
                variant === "light" ? "bg-blue-600" : "bg-blue-400"
              }`}></div>
              <div className={`w-20 h-0.5 rounded-full ${
                variant === "light" 
                  ? "bg-gradient-to-l from-blue-600 to-cyan-600"
                  : "bg-gradient-to-l from-blue-400 to-cyan-400"
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }