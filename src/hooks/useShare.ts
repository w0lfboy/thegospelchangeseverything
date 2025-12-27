import { useCallback } from 'react';
import { toast } from '@/hooks/use-toast';
import { DailyPrayer } from '@/data/dailyContent';

export function useShare() {
  const formatPrayerText = useCallback((prayer: DailyPrayer, timeOfDay: string): string => {
    const timeLabel = timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1);
    
    return `${timeLabel} Prayer

${prayer.call}

📖 Scripture
"${prayer.scripture.text}"
— ${prayer.scripture.reference}

✨ Reflection
${prayer.reflection}

🙏 Pray
${prayer.prompts.map(p => `• ${p}`).join('\n')}

🕊️ Benediction
${prayer.benediction}

—
Shared from Daily Prayer`;
  }, []);

  const sharePrayer = useCallback(async (prayer: DailyPrayer, timeOfDay: string) => {
    const text = formatPrayerText(prayer, timeOfDay);
    const timeLabel = timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1);

    // Try Web Share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${timeLabel} Prayer`,
          text: text,
        });
        return true;
      } catch (err) {
        // User cancelled or share failed, fall back to clipboard
        if ((err as Error).name !== 'AbortError') {
          console.log('Share failed, falling back to clipboard');
        }
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Prayer text copied. Share it with your group!",
      });
      return true;
    } catch {
      toast({
        title: "Unable to share",
        description: "Please try again or manually copy the text.",
        variant: "destructive",
      });
      return false;
    }
  }, [formatPrayerText]);

  return { sharePrayer };
}
