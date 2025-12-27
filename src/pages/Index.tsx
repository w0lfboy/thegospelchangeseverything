import { useState, useEffect } from "react";
import { PrayerCard } from "@/components/PrayerCard";
import { TimeNavigation } from "@/components/TimeNavigation";
import { getTodaysContent, getCurrentTimeOfDay, TimeOfDayContent } from "@/data/dailyContent";

import morningImage from "@/assets/morning-nature.jpg";
import middayImage from "@/assets/midday-nature.jpg";
import eveningImage from "@/assets/evening-nature.jpg";

const backgroundImages = {
  morning: morningImage,
  midday: middayImage,
  evening: eveningImage,
};

const Index = () => {
  const [activeTime, setActiveTime] = useState<'morning' | 'midday' | 'evening'>(
    getCurrentTimeOfDay()
  );
  const [content, setContent] = useState<TimeOfDayContent | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setContent(getTodaysContent());
  }, []);

  const handleTimeChange = (time: 'morning' | 'midday' | 'evening') => {
    if (time === activeTime) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTime(time);
      setIsTransitioning(false);
    }, 300);
  };

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-pulse-soft font-serif text-2xl text-muted-foreground">
          Loading...
        </div>
      </div>
    );
  }

  const currentReading = content[activeTime];
  const currentBackground = backgroundImages[activeTime];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div 
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <PrayerCard
          reading={currentReading}
          timeOfDay={activeTime}
          backgroundImage={currentBackground}
        />
      </div>
      
      <TimeNavigation 
        activeTime={activeTime} 
        onTimeChange={handleTimeChange} 
      />
    </main>
  );
};

export default Index;
