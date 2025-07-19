import { Home, User, Briefcase, FileText, Zap } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Creative AI', url: '/creative-ai', icon: Zap },
    { name: 'Resume', url: '/resume', icon: FileText }
  ]

  return <NavBar items={navItems} />
}