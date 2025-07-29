import { Home, User, Briefcase, Phone, Zap } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { useLocation } from 'react-router-dom'

export function NavBarDemo() {
  const location = useLocation()
  const isAutomationPage = location.pathname === '/projects'
  
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Creative AI', url: '/creative-ai', icon: Zap, special: true },
    { name: 'Automation', url: '/projects', icon: Briefcase },
    { name: 'Voice AI', url: '/voice-ai', icon: Phone }
  ]

  return <NavBar items={navItems} variant={isAutomationPage ? "light" : "default"} />
}