
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function StackedCircularFooter() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-white/10 p-8">
            <Icons.logo className="w-6 h-6 text-white" />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-white/80 text-white transition-colors">Home</a>
            <a href="/about" className="hover:text-white/80 text-white transition-colors">About</a>
            <a href="/creative-ai" className="hover:text-white/80 text-white transition-colors">Creative AI</a>
            <a href="/voice-ai" className="hover:text-white/80 text-white transition-colors">Voice AI</a>
            <a href="/projects" className="hover:text-white/80 text-white transition-colors">Projects</a>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-white/40 text-white hover:bg-white/10">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-white/40 text-white hover:bg-white/10">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-white/40 text-white hover:bg-white/10">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-white/40 text-white hover:bg-white/10">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input 
                  id="email" 
                  placeholder="Enter your email" 
                  type="email" 
                  className="rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:bg-white/20" 
                />
              </div>
              <Button type="submit" className="rounded-full bg-white text-black hover:bg-white/90">Subscribe</Button>
            </form>
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
