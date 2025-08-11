'use client'

import { SplineScene } from "@/components/ui/splite";
import { useRetellAI } from "@/hooks/useRetellAI";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Mic, MicOff, Phone, PhoneOff, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SplineSceneBasic() {
  const { callState, startCall, endCall, isActive, isConnecting, error } = useRetellAI('agent_40993a6c2c34df3cabba81e8bc');
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

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
        
      >
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
        
        {/* Tap to Talk Button - Positioned on Robot's Chest */}
        {callState === 'idle' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={cn(
              "relative pointer-events-auto",
              isMobile ? "translate-y-4" : "translate-y-8"
            )}>
              <Button
                size="lg"
                className={cn(
                  "rounded-full bg-white/10 backdrop-blur-md border border-white/20",
                  "text-white shadow-2xl hover:shadow-white/20 hover:bg-white/20",
                  "transition-all duration-500 hover:scale-110",
                  "animate-pulse-glow",
                  isMobile ? "w-20 h-20 p-0" : "w-24 h-24 p-0"
                )}
                onClick={handleStartCall}
              >
                <div className="flex flex-col items-center gap-1">
                  <Hand className={cn(
                    "drop-shadow-lg",
                    isMobile ? "w-8 h-8" : "w-10 h-10"
                  )} />
                  <span className={cn(
                    "font-semibold text-white/90 drop-shadow-lg",
                    isMobile ? "text-xs" : "text-sm"
                  )}>
                    Tap to Talk
                  </span>
                </div>
              </Button>
              
              {/* Pulsing Ring Animation */}
              <div className={cn(
                "absolute inset-0 rounded-full border-2 border-white/30 animate-ping",
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