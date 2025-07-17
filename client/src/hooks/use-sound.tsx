import { useState, useCallback } from "react";

export function useSound() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const playSound = useCallback((soundId: string) => {
    if (soundEnabled) {
      try {
        // Create audio element and play sound from assets folder
        const audio = new Audio(`/assets/audio/${soundId}.wav`);
        audio.volume = 0.3; // Set volume to 30%
        audio.play().catch(() => {
          // Fallback to console log if audio file doesn't exist
          console.log(`Playing sound: ${soundId}`);
        });
      } catch (error) {
        console.log(`Playing sound: ${soundId}`);
      }
    }
  }, [soundEnabled]);

  const toggleSound = useCallback(() => {
    setSoundEnabled(!soundEnabled);
  }, [soundEnabled]);

  return {
    soundEnabled,
    playSound,
    toggleSound
  };
}
