import { Button } from "@/components/ui/button"
import { LiquidCard } from "@/components/ui/liquid-glass-card"

export default function DemoSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <LiquidCard className="w-full min-w-[350px] p-2">
            <div className="relative overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/1.svg"
                alt="Your Image"
                className="h-[420px] w-full rounded-sm object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/ui/public/images/4.jpg"
                alt="Your Image"
                className="absolute top-36 left-1/2 z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-md border-4 object-cover shadow-xl transition-all duration-500 hover:scale-105"
              />
               
              <div className="absolute bottom-0 left-0 w-full rounded-b-md bg-gradient-to-t from-black/80 to-transparent p-8">
                <div>
                  <h1 className="text-2xl text-white">Subscribe</h1>
                  <p className="text-sm text-white/80">
                    Subscribe to a plan, get access to Dashboard, and start listing
                    your requests.
                  </p>
                  <Button className="mt-3">Learn More</Button>
                </div>
              </div>
            </div>
          </LiquidCard>
        </div>
      </div>
    </section>
  )
}