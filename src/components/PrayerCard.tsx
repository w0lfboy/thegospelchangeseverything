import { DailyReading } from "@/data/dailyContent";

interface PrayerCardProps {
  reading: DailyReading;
  timeOfDay: 'morning' | 'midday' | 'evening';
  backgroundImage: string;
}

const timeLabels = {
  morning: 'Morning Prayer',
  midday: 'Midday Prayer',
  evening: 'Evening Prayer'
};

export function PrayerCard({ reading, timeOfDay, backgroundImage }: PrayerCardProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="glass-overlay" />
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-32 pt-20">
        {/* Time Label */}
        <div className="fade-in mb-8">
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium uppercase tracking-widest text-white/90 backdrop-blur-sm">
            {timeLabels[timeOfDay]}
          </span>
        </div>
        
        {/* Scripture */}
        <div className="slide-up mb-6" style={{ animationDelay: '0.2s' }}>
          <p className="scripture-text text-white drop-shadow-lg">
            "{reading.verse}"
          </p>
          <p className="mt-4 font-sans text-lg font-medium text-white/80">
            — {reading.reference}
          </p>
        </div>
        
        {/* Divider */}
        <div 
          className="my-8 h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          style={{ animationDelay: '0.4s' }}
        />
        
        {/* Prayer */}
        <div className="slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="prayer-text text-white/90 drop-shadow-md">
            {reading.prayer}
          </p>
        </div>
      </div>
    </div>
  );
}
