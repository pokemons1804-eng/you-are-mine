import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Header = () => {
  const names = ['Vampire', 'Khushi', 'Shrishti'];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % names.length);
    }, 2000); // Change name every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative py-12 text-center">
      {/* Decorative elements */}
      <div className="absolute top-4 left-1/4 text-gold animate-sparkle">✨</div>
      <div className="absolute top-8 right-1/4 text-rose-light animate-sparkle delay-500">💕</div>
      <div className="absolute top-12 left-1/3 text-gold animate-sparkle delay-700">✨</div>

      {/* Main title */}
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-gold animate-shimmer" />
          <Heart className="w-8 h-8 text-primary animate-heartbeat fill-current" />
          <Sparkles className="w-6 h-6 text-gold animate-shimmer" />
        </div>

        <h1 className="font-display text-4xl md:text-6xl text-foreground mb-3">
          Valentine's Week
        </h1>
        
        <p className="font-script text-3xl md:text-4xl text-gradient mb-2">
          For My <span className="inline-block transition-all duration-500">{names[currentNameIndex]}</span>
        </p>

        <p className="text-muted-foreground text-lg">
          February 7 - 14, 2026
        </p>

        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="text-rose-light">🌹</span>
          <span className="text-sm text-muted-foreground">Answer questions to unlock each day</span>
          <span className="text-rose-light">🌹</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
