import { Button } from "@/components/ui/button"
import { LiquidCard } from "@/components/ui/liquid-glass-card"

const services = [
  {
    title: "Creative AI",
    description: "Cutting-edge creative AI solutions including image generation and content creation.",
    image: "https://aybvvjxzepenfyzrhdrk.supabase.co/storage/v1/object/sign/simplegenai/IMG_6830.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MzIyMmY5NC0wZWJiLTQyMjgtOTNkMi1jYzRjNDJkYWY0MzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaW1wbGVnZW5haS9JTUdfNjgzMC5QTkciLCJpYXQiOjE3NTQ4NDEyNDgsImV4cCI6NDkwODQ0MTI0OH0.mTn3YDQP3sbjse_uI7h_miXzczFTs_MJ6f0qGOoo27I",
    avatar: "https://aybvvjxzepenfyzrhdrk.supabase.co/storage/v1/object/sign/simplegenai/Creative%20(2).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MzIyMmY5NC0wZWJiLTQyMjgtOTNkMi1jYzRjNDJkYWY0MzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaW1wbGVnZW5haS9DcmVhdGl2ZSAoMikucG5nIiwiaWF0IjoxNzU0ODQxMjE4LCJleHAiOjQ5MDg0NDEyMTh9.Z2OlzVYWB9qkpaxXMVHVPPp71AagUXnzmtLRPPpoy20",
    cta: "Explore",
    gradient: "from-purple-500 via-pink-500 to-blue-500"
  },
  {
    title: "Voice AI",
    description: "Advanced voice AI technologies including conversational interfaces and speech recognition.",
    image: "https://aybvvjxzepenfyzrhdrk.supabase.co/storage/v1/object/sign/simplegenai/Voice%20AI%20Grad%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MzIyMmY5NC0wZWJiLTQyMjgtOTNkMi1jYzRjNDJkYWY0MzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaW1wbGVnZW5haS9Wb2ljZSBBSSBHcmFkICgxKS5wbmciLCJpYXQiOjE3NTQ4NDA4NzEsImV4cCI6NDkwODQ0MDg3MX0.AVVNXnWJl-cboISNC2Gr8TClZmqf3RwKh4KBszrCsOc",
    avatar: "https://aybvvjxzepenfyzrhdrk.supabase.co/storage/v1/object/sign/simplegenai/Voice%20AI%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MzIyMmY5NC0wZWJiLTQyMjgtOTNkMi1jYzRjNDJkYWY0MzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaW1wbGVnZW5haS9Wb2ljZSBBSSAoMSkucG5nIiwiaWF0IjoxNzU0ODQwODQyLCJleHAiOjQ5MDg0NDA4NDJ9.a28oAXAD6SVx9L23qGxmHjy_jC-RqTt55D2A4d2dG5Q",
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
    image: "https://aybvvjxzepenfyzrhdrk.supabase.co/storage/v1/object/sign/simplegenai/Extra%20Grad%2002.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MzIyMmY5NC0wZWJiLTQyMjgtOTNkMi1jYzRjNDJkYWY0MzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaW1wbGVnZW5haS9FeHRyYSBHcmFkIDAyLnBuZyIsImlhdCI6MTc1NDg0MDY5MiwiZXhwIjo0OTA4NDQwNjkyfQ.EmvVvH-ADmp-YKJXTBpqRuwHZPWI7la9KnUz9BTnGxI",
    avatar: "https://aybvvjxzepenfyzrhdrk.supabase.co/storage/v1/object/sign/simplegenai/Automation.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MzIyMmY5NC0wZWJiLTQyMjgtOTNkMi1jYzRjNDJkYWY0MzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaW1wbGVnZW5haS9BdXRvbWF0aW9uLnBuZyIsImlhdCI6MTc1NDg0MDM5NSwiZXhwIjo0OTA4NDQwMzk1fQ.5o2zykgXGV65haTgY3Wf71Z-PmISqWuSg8jx1xuz5yI",
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
                  <img
                    src={service.avatar}
                    alt={service.title}
                    className="absolute top-56 left-1/2 z-10  w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-md  object-cover  transition-all duration-500 hover:scale-105"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
