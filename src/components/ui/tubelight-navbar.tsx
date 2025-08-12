
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  special?: boolean
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  variant?: "default" | "light"
}

export function NavBar({ items, className, variant = "default" }: NavBarProps) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Set active tab based on current route
    const currentItem = items.find(item => item.url === location.pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [location.pathname, items])

  const handleNavClick = (itemName: string) => {
    setActiveTab(itemName)
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-4 sm:mb-6 sm:pt-6 pointer-events-none px-4 sm:px-0",
        className,
      )}
    >
      <div className={cn(
        "flex items-center gap-1 sm:gap-3 backdrop-blur-lg py-2 px-2 sm:py-1 sm:px-1 rounded-full shadow-lg pointer-events-auto",
        variant === "light" 
          ? "bg-black/10 border border-black/20" 
          : "bg-white/10 border border-white/20"
      )}>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => handleNavClick(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-sans font-medium rounded-full transition-colors touch-manipulation",
                "px-3 py-3 sm:px-6 sm:py-2 min-w-[44px] min-h-[44px] flex items-center justify-center",
                item.special 
                  ? "text-yellow-400 font-semibold shadow-md ring-1 ring-yellow-400/30 bg-yellow-400/10" 
                  : variant === "light"
                    ? "text-black/80 hover:text-black"
                    : "text-white/80 hover:text-white",
                isActive && !item.special && (variant === "light" ? "bg-black/20 text-black" : "bg-white/20 text-white"),
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={20} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className={cn(
                    "absolute inset-0 w-full rounded-full -z-10",
                    variant === "light" ? "bg-black/10" : "bg-white/10"
                  )}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className={cn(
                    "absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full",
                    variant === "light" ? "bg-black" : "bg-white"
                  )}>
                    <div className={cn(
                      "absolute w-12 h-6 rounded-full blur-md -top-2 -left-2",
                      variant === "light" ? "bg-black/20" : "bg-white/20"
                    )} />
                    <div className={cn(
                      "absolute w-8 h-6 rounded-full blur-md -top-1",
                      variant === "light" ? "bg-black/20" : "bg-white/20"
                    )} />
                    <div className={cn(
                      "absolute w-4 h-4 rounded-full blur-sm top-0 left-2",
                      variant === "light" ? "bg-black/20" : "bg-white/20"
                    )} />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
