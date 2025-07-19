import { useState, useCallback } from 'react';

const useVapi = () => {
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);

  const toggleCall = useCallback(() => {
    if (isSessionActive) {
      // End call
      setIsSessionActive(false);
      setVolumeLevel(0);
    } else {
      // Start call
      setIsSessionActive(true);
      // Simulate volume levels for demo purposes
      const interval = setInterval(() => {
        setVolumeLevel(Math.random() * 100);
      }, 100);
      
      // Stop simulation after 10 seconds (demo)
      setTimeout(() => {
        clearInterval(interval);
        setIsSessionActive(false);
        setVolumeLevel(0);
      }, 10000);
    }
  }, [isSessionActive]);

  return {
    volumeLevel,
    isSessionActive,
    toggleCall
  };
};

export default useVapi;