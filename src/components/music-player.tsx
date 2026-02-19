'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      {hasInteracted && (
         <iframe
            style={{ display: 'none' }}
            src={`https://www.youtube.com/embed/4h3o5Cj-a3k?autoplay=1&loop=1&playlist=4h3o5Cj-a3k&mute=${isMuted ? 1 : 0}`}
            allow="autoplay"
            title="YouTube video player"
        ></iframe>
      )}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="fixed bottom-6 left-6 z-50 text-muted-foreground hover:text-foreground"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </Button>
    </>
  );
};

export default MusicPlayer;
