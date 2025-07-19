
'use client'

import { SplineScene } from "@/components/ui/splite";
 
export function SplineSceneBasic() {
  return (
    <div className="w-full max-w-[800px] h-[400px] md:h-[600px] relative pointer-events-none">
      <SplineScene 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full pointer-events-auto"
      />
    </div>
  )
}
