'use client'

import { SplineScene } from "@/components/ui/splite";
import { useRetellAI } from "@/hooks/useRetellAI";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { Mic, MicOff, Phone, PhoneOff, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SplineSceneBasic() {
  const { callState, startCall, endCall, isActive, isConnecting, error } = useRetellAI('agent_40993a6c2c34df3cabba81e8bc');
  const [isHovered, setIsHovered] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const isMobile = useIsMobile();

  // Robot animation sequence
  useEffect(() => {
    // Start with robot in close-up view
    const animationTimer = setTimeout(() => {
      setIsAnimationComplete(true);
      // Show button after full 5 seconds (2.5s animation + 2.5s wait)
      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 2500); // Additional 2.5 second delay after animation
      return () => clearTimeout(buttonTimer);
    }, 2500); // 2.5 second animation

    return () => clearTimeout(animationTimer);
  }, []);

  const handleMouseEnter = () => {
    console.log('Mouse entered, current callState:', callState);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse left');
    setIsHovered(false);
  };

  const handleSceneClick = () => {
    console.log('Clicked scene, current callState:', callState, 'isActive:', isActive);
    if (callState === 'idle') {
      console.log('Starting call on click...');
      startCall();
    }
  };

  const handleEndCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('End call button clicked');
    endCall();
  };

  const handleStartCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Start call button clicked');
    startCall();
  };

  return (
    <div className={cn(
      "relative mx-auto transition-all duration-500",
      isMobile ? "w-full max-w-sm aspect-square" : "w-full max-w-4xl aspect-[4/3]"
    )}>

      {/* Voice Call Status Overlay */}
      {(isActive || isConnecting) && (
        <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm border rounded-lg px-4 py-3 shadow-lg">
          <div className="flex items-center gap-3 text-sm">
            {isConnecting && (
              <>
                <div className="relative">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-yellow-500 rounded-full animate-voice-ripple"></div>
                </div>
                <span className="font-medium">Connecting...</span>
              </>
            )}
            {isActive && (
              <>
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-voice-ripple"></div>
                </div>
                <span className="font-medium text-green-700 dark:text-green-300">Voice Active</span>
              </>
            )}
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="absolute top-4 left-4 z-20 bg-destructive/90 text-destructive-foreground px-4 py-2 rounded-lg text-sm shadow-lg max-w-xs">
          <div className="font-medium">Connection Error</div>
          <div className="text-xs opacity-90">{error}</div>
        </div>
      )}

      {/* Control Buttons */}
      <div className={cn(
        "absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-3",
        isMobile ? "flex-col items-center" : "flex-row"
      )}>
        {callState === 'idle' && (
          <Button
            onClick={handleStartCall}
            size={isMobile ? "lg" : "default"}
            className={cn(
              "voice-gradient text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300",
              "hover:scale-105 animate-pulse-glow",
              isMobile ? "w-16 h-16 rounded-full p-0" : "px-6"
            )}
          >
            <Phone className={cn(isMobile ? "w-6 h-6" : "w-4 h-4 mr-2")} />
            {!isMobile && "Start Call"}
          </Button>
        )}

        {(isActive || isConnecting) && (
          <Button
            onClick={handleEndCall}
            variant="destructive"
            size={isMobile ? "lg" : "default"}
            className={cn(
              "shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
              isMobile ? "w-16 h-16 rounded-full p-0" : "px-6"
            )}
          >
            <PhoneOff className={cn(isMobile ? "w-6 h-6" : "w-4 h-4 mr-2")} />
            {!isMobile && "End Call"}
          </Button>
        )}
      </div>


      {/* Spline Scene Container */}
      <div 
        className={cn(
          "w-full h-full cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden relative",
          "hover:scale-[1.02] hover:shadow-2xl",
          isActive && "ai-glow scale-[1.02]",
          isConnecting && "animate-pulse-glow",
          callState === 'idle' && isHovered && "shadow-xl scale-[1.01]"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSceneClick}
      >
        {/* Robot Animation Container */}
        <div 
          className={cn(
            "w-full h-full transition-all duration-[2500ms] ease-out",
            // Start with close-up view (scaled and positioned)
            !isAnimationComplete && "scale-[2.5] translate-y-8",
            // End with full view
            isAnimationComplete && "scale-100 translate-y-0",
            // Robot talking animation when call is active
            isActive && "animate-robot-talking"
          )}
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        
        {/* Tap to Talk Button - Positioned on Robot's Chest */}
        {callState === 'idle' && showButton && isAnimationComplete && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={cn(
              "relative pointer-events-auto transition-all duration-700 ease-out",
              isMobile ? "translate-y-6" : "translate-y-12",
              showButton ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}>
              <Button
                size="lg"
                className={cn(
                  "rounded-full bg-white/95 backdrop-blur-md border-4 border-cyan-400",
                  "text-cyan-600 shadow-2xl hover:shadow-cyan-400/50 hover:bg-white",
                  "transition-all duration-500 hover:scale-110",
                  "animate-pulse-glow font-semibold",
                  // Precise 68px size as specified (60px on mobile)
                  isMobile ? "w-[60px] h-[60px] p-0 text-lg" : "w-[68px] h-[68px] p-0 text-xl"
                )}
                onClick={handleStartCall}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <Hand className={cn(
                    "drop-shadow-lg text-cyan-600",
                    isMobile ? "w-5 h-5" : "w-6 h-6"
                  )} />
                  <span className={cn(
                    "font-bold text-cyan-600 drop-shadow-lg leading-tight",
                    isMobile ? "text-[10px]" : "text-xs"
                  )}>
                    Tap to Talk
                  </span>
                </div>
              </Button>
              
              {/* Pulsing Ring Animation */}
              <div className={cn(
                "absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping",
                "pointer-events-none"
              )} />
            </div>
          </div>
        )}
      </div>

      {/* Voice Activity Indicator */}
      {isActive && (
        <div className="absolute bottom-4 right-4 z-10">
          <div className="flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-3 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-700 dark:text-green-300 font-medium">Listening</span>
          </div>
        </div>
      )}
    </div>
  )
}