'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const isMobile = useIsMobile()
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const LoadingFallback = () => (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white/30"></div>
        <div className="text-white/60 text-sm">Loading 3D Scene...</div>
      </div>
    </div>
  )

  const ErrorFallback = () => (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4 text-center px-4">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
          <div className="w-8 h-8 text-white/60">⚠️</div>
        </div>
        <div className="text-white/60 text-sm">
          Unable to load 3D scene
          <br />
          <span className="text-xs opacity-75">Please check your connection</span>
        </div>
      </div>
    </div>
  )

  if (hasError) {
    return <ErrorFallback />
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="w-full h-full relative">
        {!isLoaded && <LoadingFallback />}
        <Spline
          scene={scene}
          className={className}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          // Mobile optimization settings
          renderOnDemand={isMobile}
          dpr={isMobile ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio}
        />
      </div>
    </Suspense>
  )
}