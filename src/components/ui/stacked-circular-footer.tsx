
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function StackedCircularFooter() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-12">
            <h2 className="text-6xl md:text-8xl font-bold text-white text-center">
              SimplifygenAI
            </h2>
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-white/80 text-white transition-colors">Home</a>
            <a href="/about" className="hover:text-white/80 text-white transition-colors">About</a>
            <a href="/creative-ai" className="hover:text-white/80 text-white transition-colors">Creative AI</a>
            <a href="/voice-ai" className="hover:text-white/80 text-white transition-colors">Voice AI</a>
            <a href="/projects" className="hover:text-white/80 text-white transition-colors">Projects</a>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-white/40 text-white hover:bg-white/10 bg-transparent">
              <Facebook className="h-4 w-4 text-white" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-white/40 text-white hover:bg-white/10 bg-transparent">
              <Twitter className="h-4 w-4 text-white" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-white/40 text-white hover:bg-white/10 bg-transparent">
              <Instagram className="h-4 w-4 text-white" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-white/40 text-white hover:bg-white/10 bg-transparent">
              <Linkedin className="h-4 w-4 text-white" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-white/60">
              © 2024 SimplifyGenAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
