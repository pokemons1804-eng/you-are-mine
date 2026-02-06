import { useMemo } from 'react';
import { VALENTINE_DAYS, isDayUnlocked } from '@/lib/valentineData';

const Navigation = () => {
  const unlockedDays = useMemo(() => {
    return VALENTINE_DAYS.filter(day => isDayUnlocked(day.id));
  }, []);

  if (unlockedDays.length === 0) return null;

  const scrollToDay = (dayId: number) => {
    const element = document.getElementById(`day-${dayId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50 py-3">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2">
          {unlockedDays.map(day => (
            <button
              key={day.id}
              onClick={() => scrollToDay(day.id)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-rose-deep/20 hover:from-primary/40 hover:to-rose-deep/40 text-sm font-medium text-foreground transition-all hover:scale-105 border border-primary/30"
            >
              {day.emoji} {day.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
