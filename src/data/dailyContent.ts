export interface DailyReading {
  verse: string;
  reference: string;
  prayer: string;
}

export interface TimeOfDayContent {
  morning: DailyReading;
  midday: DailyReading;
  evening: DailyReading;
}

// Daily readings that rotate based on the day of the year
export const dailyReadings: TimeOfDayContent[] = [
  {
    morning: {
      verse: "This is the day the Lord has made; let us rejoice and be glad in it.",
      reference: "Psalm 118:24",
      prayer: "Heavenly Father, thank You for this new day. Fill my heart with joy and purpose as I step forward in Your light. Guide my thoughts, words, and actions to bring glory to Your name. Amen."
    },
    midday: {
      verse: "Come to me, all you who are weary and burdened, and I will give you rest.",
      reference: "Matthew 11:28",
      prayer: "Lord, in the midst of this day's demands, I pause to find rest in You. Renew my strength and help me to trust in Your provision. May Your peace guard my heart and mind. Amen."
    },
    evening: {
      verse: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
      reference: "Psalm 4:8",
      prayer: "Gracious God, as this day draws to a close, I thank You for Your faithfulness. Forgive my shortcomings and grant me peaceful rest. Watch over me and those I love through the night. Amen."
    }
  },
  {
    morning: {
      verse: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.",
      reference: "Lamentations 3:22-23",
      prayer: "Father, Your mercies are new this morning. Help me to receive Your grace with a grateful heart and to extend that same grace to others today. Amen."
    },
    midday: {
      verse: "Trust in the Lord with all your heart and lean not on your own understanding.",
      reference: "Proverbs 3:5",
      prayer: "Lord, when I feel uncertain or overwhelmed, help me to trust in Your wisdom rather than my own. Guide my decisions and keep me on Your path. Amen."
    },
    evening: {
      verse: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures.",
      reference: "Psalm 23:1-2",
      prayer: "Good Shepherd, thank You for leading me through this day. I rest in the assurance that You provide for all my needs. Grant me restorative sleep. Amen."
    }
  },
  {
    morning: {
      verse: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
      reference: "Isaiah 40:31",
      prayer: "Almighty God, I place my hope in You this morning. Renew my strength and lift me above my circumstances. Help me to soar with purpose today. Amen."
    },
    midday: {
      verse: "Be still, and know that I am God.",
      reference: "Psalm 46:10",
      prayer: "Lord, in the busyness of this moment, I choose to be still before You. Quiet my anxious thoughts and remind me of Your sovereign presence. Amen."
    },
    evening: {
      verse: "Cast all your anxiety on him because he cares for you.",
      reference: "1 Peter 5:7",
      prayer: "Caring Father, I lay down the worries of this day at Your feet. Thank You for carrying my burdens and for Your unfailing love. Grant me peaceful rest tonight. Amen."
    }
  },
  {
    morning: {
      verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.",
      reference: "Jeremiah 29:11",
      prayer: "Lord, I trust that You have good plans for my life. Help me to walk in faith today, knowing that You are working all things for my good. Amen."
    },
    midday: {
      verse: "The Lord is my light and my salvation—whom shall I fear?",
      reference: "Psalm 27:1",
      prayer: "Mighty God, You are my light in every darkness. Remove fear from my heart and fill me with confidence in Your protection. Amen."
    },
    evening: {
      verse: "He will cover you with his feathers, and under his wings you will find refuge.",
      reference: "Psalm 91:4",
      prayer: "Protecting Father, I take refuge in Your presence tonight. Cover me with Your peace and keep me safe through the night hours. Amen."
    }
  },
  {
    morning: {
      verse: "Commit your way to the Lord; trust in him and he will act.",
      reference: "Psalm 37:5",
      prayer: "Lord, I commit this day to You. Whatever I face, I trust that You will guide my steps and work on my behalf. Amen."
    },
    midday: {
      verse: "And we know that in all things God works for the good of those who love him.",
      reference: "Romans 8:28",
      prayer: "Faithful God, even when I don't understand, I believe You are working for my good. Strengthen my faith and help me to see Your hand in all circumstances. Amen."
    },
    evening: {
      verse: "Weeping may stay for the night, but rejoicing comes in the morning.",
      reference: "Psalm 30:5",
      prayer: "Comforting Lord, whatever sorrows or challenges I faced today, I trust in Your promise of joy. Restore my soul as I rest in Your love. Amen."
    }
  },
  {
    morning: {
      verse: "The Lord bless you and keep you; the Lord make his face shine on you.",
      reference: "Numbers 6:24-25",
      prayer: "Gracious God, let Your face shine upon me this day. Bless my coming and going, and make me a blessing to everyone I meet. Amen."
    },
    midday: {
      verse: "I can do all things through Christ who strengthens me.",
      reference: "Philippians 4:13",
      prayer: "Lord Jesus, thank You for being my strength. When I feel weak or inadequate, remind me that Your power works through me. Amen."
    },
    evening: {
      verse: "Great peace have those who love your law, and nothing can make them stumble.",
      reference: "Psalm 119:165",
      prayer: "Loving Father, I find peace in Your word and Your ways. Guard my heart with Your truth and keep my feet from stumbling. Amen."
    }
  },
  {
    morning: {
      verse: "Create in me a pure heart, O God, and renew a steadfast spirit within me.",
      reference: "Psalm 51:10",
      prayer: "Holy God, cleanse my heart as I begin this day. Fill me with Your Spirit and help me to live with integrity and love. Amen."
    },
    midday: {
      verse: "Let the peace of Christ rule in your hearts.",
      reference: "Colossians 3:15",
      prayer: "Prince of Peace, let Your peace reign in my heart right now. Help me to respond to every situation with Your grace and calm. Amen."
    },
    evening: {
      verse: "I will praise the Lord, who counsels me; even at night my heart instructs me.",
      reference: "Psalm 16:7",
      prayer: "Wise Counselor, thank You for guiding me today. As I sleep, continue to speak to my heart and prepare me for tomorrow. Amen."
    }
  }
];

export function getTodaysContent(): TimeOfDayContent {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dailyReadings[dayOfYear % dailyReadings.length];
}

export function getCurrentTimeOfDay(): 'morning' | 'midday' | 'evening' {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'midday';
  return 'evening';
}
