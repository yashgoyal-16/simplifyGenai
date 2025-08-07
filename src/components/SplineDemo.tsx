'use client'

import { SplineScene } from "@/components/ui/splite";
import { useRetellAI } from "@/hooks/useRetellAI";
import { useState } from "react";
 
export function SplineSceneBasic() {
  const { callState, startCall, endCall, isActive, isConnecting, error } = useRetellAI('agent_40993a6c2c34df3cabba81e8bc');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log('Mouse entered, current callState:', callState);
    setIsHovered(true);
    if (callState === 'idle') {
      console.log('Starting call on hover...');
      startCall();
    }
  };

  const handleMouseLeave = () => {
    console.log('Mouse left');
    setIsHovered(false);
  };

  const handleClick = () => {
    console.log('Clicked scene, current callState:', callState, 'isActive:', isActive);
    if (callState === 'idle') {
      console.log('Starting call on click...');
      startCall();
    }
  };

  const handleEndCall = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering scene click
    console.log('End call button clicked');
    endCall();
  };

  return (
    <div className="w-[800px] h-[600px] relative">
      {/* Voice Call Status Overlay */}
      {(isActive || isConnecting) && (
        <div className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm border rounded-lg px-3 py-2">
          <div className="flex items-center gap-2 text-sm">
            {isConnecting && (
              <>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span>Connecting...</span>
              </>
            )}
            {isActive && (
              <>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Voice Active</span>
                <button 
                  onClick={handleEndCall}
                  className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  End Call
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="absolute top-4 left-4 z-10 bg-red-500/90 text-white px-3 py-2 rounded-lg text-sm">
          Error: {error}
        </div>
      )}

      {/* Hover Instruction */}
      {callState === 'idle' && isHovered && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-background/80 backdrop-blur-sm border rounded-lg px-4 py-2">
          <div className="text-sm text-center">
            🎤 Hover to start voice conversation
          </div>
        </div>
      )}

      <div 
        className={`w-full h-full cursor-pointer transition-all duration-300 ${
          isActive ? 'ring-2 ring-green-500/50 ring-offset-2 ring-offset-background' : 
          isConnecting ? 'ring-2 ring-yellow-500/50 ring-offset-2 ring-offset-background' :
          isHovered ? 'ring-2 ring-primary/30 ring-offset-2 ring-offset-background' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}