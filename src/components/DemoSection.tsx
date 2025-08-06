import { Button } from "@/components/ui/button"
import { LiquidCard } from "@/components/ui/liquid-glass-card"

const services = [
  {
    title: "Creative AI",
    description: "Cutting-edge creative AI solutions including image generation and content creation.",
    image: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/1.svg",
    avatar: "https://res.cloudinary.com/dm8mx2tfd/image/upload/v1754500296/Creative_l6q61u.png",
    cta: "Explore",
    gradient: "from-purple-500 via-pink-500 to-blue-500"
  },
  {
    title: "Voice AI",
    description: "Advanced voice AI technologies including conversational interfaces and speech recognition.",
    image: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/1.svg",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/4.jpg",
    cta: "Listen",
    gradient: "from-green-500 via-teal-500 to-blue-500"
  },
  {
    title: "MVP Development",
    description: "Rapid AI prototype development using cutting-edge tools like Cursor and Lovable.",
    image: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/1.svg",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/4.jpg",
    cta: "Build",
    gradient: "from-orange-500 via-red-500 to-pink-500"
  },
  {
    title: "AI Automation",
    description: "Streamline operations with intelligent automation using Make, GoHighLevel, and n8n.",
    image: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/1.svg",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/4.jpg",
    cta: "Automate",
    gradient: "from-cyan-500 via-blue-500 to-purple-500"
  }
]

export default function DemoSection() {
  return (
    <section className="py-24 bg-black md:hidden relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {/* Animated gradient background behind each card */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10 blur-2xl animate-pulse rounded-xl`} 
                   style={{ animationDelay: `${index * 500}ms` }}></div>
              
           <LiquidCard className="w-full p-2 relative z-10">
  <div className="relative overflow-hidden">
    <img
      src={service.image}
      alt={service.title}
      className="h-[420px] w-full rounded-sm object-cover"
    />

    {/* Centered avatar */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <img
        src={service.avatar}
        alt={service.title}
        className="h-[200px] w-[200px] rounded-md border-4 object-cover shadow-xl transition-all duration-500 hover:scale-105"
      />
    </div>

    <div className="absolute bottom-0 left-0 w-full rounded-b-md bg-gradient-to-t from-black/80 to-transparent p-8">
      <div>
        <h1 className="text-2xl text-white">{service.title}</h1>
        <p className="text-sm text-white/80">
          {service.description}
        </p>
        <Button className="mt-3">{service.cta}</Button>
      </div>
    </div>
  </div>
</LiquidCard>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}