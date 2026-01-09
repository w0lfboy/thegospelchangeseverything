import { DailyPrayer } from "@/data/dailyContent";
import { PrayerActions } from "./PrayerActions";
import { useShare } from "@/hooks/useShare";
import { useBookmarks } from "@/hooks/useBookmarks";
import { toast } from "@/hooks/use-toast";

interface PrayerSectionProps {
  prayer: DailyPrayer;
  timeOfDay: 'morning' | 'midday' | 'evening';
  backgroundImage: string;
  date: string;
}

const timeLabels = {
  morning: 'Morning Prayer',
  midday: 'Midday Prayer', 
  evening: 'Evening Prayer'
};

export function PrayerSection({ prayer, timeOfDay, backgroundImage, date }: PrayerSectionProps) {
  const { sharePrayer } = useShare();
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

  const bookmarked = isBookmarked(date, timeOfDay);

  const handleBookmark = () => {
    if (bookmarked) {
      removeBookmark(`${date}-${timeOfDay}`);
      toast({
        title: "Removed from favorites",
        description: "Prayer removed from your saved list.",
      });
    } else {
      addBookmark({
        date,
        timeOfDay,
        call: prayer.call,
        scripture: prayer.scripture,
        reflection: prayer.reflection,
        prompts: prayer.prompts,
        benediction: prayer.benediction,
      });
      toast({
        title: "Saved to favorites",
        description: "Access this prayer anytime from your saved list.",
      });
    }
  };

  const handleShare = () => {
    sharePrayer(prayer, timeOfDay);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-[35vh] min-h-[220px] overflow-hidden">
        <div 
          className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat blur-[2px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="glass-overlay" />
        <div className="grain-overlay" />
        
        {/* Safe area for notch/status bar */}
        <div className="safe-area-top" />
        
        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-5 pt-safe">
          <span className="slide-up inline-block self-start rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">
            {timeLabels[timeOfDay]}
          </span>
          
          <p className="slide-up delay-200 mt-3 font-serif text-lg leading-relaxed text-white/95 drop-shadow-md sm:text-xl md:text-2xl">
            {prayer.call}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative">
        <div className="content-overlay absolute inset-x-0 -top-12 h-12" />
        
        <div className="bg-background px-5 pb-32 pt-6 sm:px-6">
          {/* Action buttons */}
          <div className="slide-up delay-250 mb-6 flex justify-end">
            <PrayerActions
              isBookmarked={bookmarked}
              onBookmark={handleBookmark}
              onShare={handleShare}
            />
          </div>

          {/* Scripture */}
          <section className="slide-up delay-300">
            <span className="section-label">Scripture</span>
            <blockquote className="mt-3">
              <p className="scripture-text text-foreground">
                "{prayer.scripture.text}"
              </p>
              <cite className="mt-3 block font-sans text-sm font-medium text-muted-foreground not-italic">
                — {prayer.scripture.reference}
              </cite>
            </blockquote>
          </section>

          <div className="section-divider slide-up delay-400" />

          {/* Reflection */}
          <section className="slide-up delay-400">
            <span className="section-label">Reflection</span>
            <p className="reflection-text mt-3">
              {prayer.reflection}
            </p>
          </section>

          <div className="section-divider slide-up delay-500" />

          {/* Prayer Prompts */}
          <section className="slide-up delay-500">
            <span className="section-label">Pray</span>
            <ul className="mt-4 space-y-4">
              {prayer.prompts.map((prompt, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/40" />
                  <p className="font-sans text-base leading-relaxed text-foreground/85 sm:text-lg">
                    {prompt}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <div className="section-divider slide-up delay-600" />

          {/* Silent Prayer */}
          <section className="slide-up delay-600">
            <span className="section-label">Silence</span>
            <p className="mt-3 font-sans text-sm text-muted-foreground">
              Take a moment in quiet prayer. Speak to God in your own words, or simply rest in His presence.
            </p>
            <div className="mt-4 flex items-center justify-center">
              <div className="animate-breathe h-3 w-3 rounded-full bg-primary/30" />
            </div>
          </section>

          <div className="section-divider slide-up delay-700" />

          {/* Benediction */}
          <section className="slide-up delay-700">
            <span className="section-label">Benediction</span>
            <p className="benediction-text mt-3">
              {prayer.benediction}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
