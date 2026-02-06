import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {
          console.log('Autoplay blocked - user needs to interact first');
        });
        setIsMuted(false);
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <Button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-rose-deep hover:opacity-90 transition-all hover:scale-110"
        size="icon"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5 animate-pulse" />
        )}
      </Button>
      
      {/* Audio element - you can add a romantic music file here */}
      <audio ref={audioRef} loop>
        {/* <source src="/romantic-music.mp3" type="audio/mpeg" /> */}
        {/* For now, no audio file - but the toggle is ready */}
      </audio>
    </>
  );
};

export default MusicToggle;
