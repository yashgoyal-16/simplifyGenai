import { Home, User, Briefcase, Phone, Zap } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Creative AI', url: '/creative-ai', icon: Zap },
    { name: 'Voice AI', url: '/voice-ai', icon: Phone }
  ]

  return <NavBar items={navItems} />
}