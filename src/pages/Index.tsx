import { useState, useCallback, useMemo } from 'react';
import Header from '@/components/Header';
import DayCard from '@/components/DayCard';
import FloatingEnvelope from '@/components/FloatingEnvelope';
import FallingPetals from '@/components/FallingPetals';
import FinalRose from '@/components/FinalRose';
import Navigation from '@/components/Navigation';
import MusicToggle from '@/components/MusicToggle';
import { VALENTINE_DAYS, isDayAvailable, isDayUnlocked } from '@/lib/valentineData';

const envelopePositions = [
  { left: '10%', top: '85%' },  // Bottom left
  { left: '85%', top: '88%' },  // Bottom right
];

const Index = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUnlock = useCallback(() => {
    setRefreshKey(prev => prev + 1);
  }, []);

  const dayCards = useMemo(() => {
    return VALENTINE_DAYS.map((day, index) => {
      const available = isDayAvailable(day.date);
      const unlocked = isDayUnlocked(day.id);
      
      // Hide days that are not available yet OR (available but previous day not unlocked)
      if (!available) return null;
      if (index > 0 && !isDayUnlocked(index)) return null;
      
      return (
        <DayCard
          key={`${day.id}-${refreshKey}`}
          day={day}
          isFirst={index === 0}
          onUnlock={handleUnlock}
        />
      );
    }).filter(Boolean); // Remove null values
  }, [refreshKey, handleUnlock]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Music Toggle */}
      <MusicToggle />

      {/* Background gradient */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, hsl(350 40% 15%) 0%, hsl(350 30% 8%) 50%, hsl(350 30% 6%) 100%)'
        }}
      />

      {/* Falling petals */}
      <FallingPetals />

      {/* Floating envelopes */}
      {envelopePositions.map((position, index) => (
        <FloatingEnvelope
          key={index}
          position={position}
          delay={index * 0.5}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10">
        <div className="container max-w-6xl mx-auto px-4 pb-20">
          <Header />

          {/* Navigation - shows only unlocked days */}
          <Navigation />

          {/* Days Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {dayCards}
          </div>

          {/* Final Rose - shows when all complete */}
          <FinalRose key={refreshKey} />
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-32 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(350 30% 8%) 0%, transparent 100%)'
        }}
      />
    </div>
  );
};

export default Index;
