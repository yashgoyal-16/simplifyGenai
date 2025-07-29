import { Button } from "@/components/ui/button"
import { LiquidCard } from "@/components/ui/liquid-glass-card"

const services = [
  {
    title: "AI Consulting",
    description: "Strategic AI integration guidance for enterprise businesses and Fortune 500 companies.",
    image: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/1.svg",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/4.jpg",
    cta: "Learn More"
  },
  {
    title: "Creative AI",
    description: "Cutting-edge creative AI solutions including image generation and content creation.",
    image: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/1.svg",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/4.jpg",
    cta: "Explore"
  },
  {
    title: "Voice AI",
    description: "Advanced voice AI technologies including conversational interfaces and speech recognition.",
    image: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/1.svg",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/4.jpg",
    cta: "Listen"
  }
]

export default function DemoSection() {
  return (
    <section className="py-24 bg-black md:hidden">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {services.map((service, index) => (
            <LiquidCard key={index} className="w-full p-2">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[420px] w-full rounded-sm object-cover"
                />
                <img
                  src={service.avatar}
                  alt={service.title}
                  className="absolute top-36 left-1/2 z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-md border-4 object-cover shadow-xl transition-all duration-500 hover:scale-105"
                />
                 
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
          ))}
        </div>
      </div>
    </section>
  )
}