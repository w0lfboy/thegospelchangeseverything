import { useState, useEffect } from "react";
import { PrayerSection } from "@/components/PrayerSection";
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
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    setContent(getTodaysContent());
    setTodayDate(new Date().toISOString().split('T')[0]);
  }, []);

  const handleTimeChange = (time: 'morning' | 'midday' | 'evening') => {
    if (time === activeTime) return;
    
    setIsTransitioning(true);
    // Scroll to top when changing times
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      setActiveTime(time);
      setIsTransitioning(false);
    }, 300);
  };

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-breathe font-serif text-xl text-muted-foreground">
          Preparing your prayer...
        </div>
      </div>
    );
  }

  const currentPrayer = content[activeTime];
  const currentBackground = backgroundImages[activeTime];

  return (
    <main className="min-h-screen bg-background">
      <div 
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        key={activeTime}
      >
        <PrayerSection
          prayer={currentPrayer}
          timeOfDay={activeTime}
          backgroundImage={currentBackground}
          date={todayDate}
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
