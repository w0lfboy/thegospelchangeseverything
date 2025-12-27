export interface DailyPrayer {
  // Call to presence
  call: string;
  // Scripture reading
  scripture: {
    text: string;
    reference: string;
  };
  // Brief reflection
  reflection: string;
  // Prayer prompts (2-3 short prompts)
  prompts: string[];
  // Closing benediction
  benediction: string;
}

export interface TimeOfDayContent {
  morning: DailyPrayer;
  midday: DailyPrayer;
  evening: DailyPrayer;
}

// Gospel-centered daily readings with Reformed theological depth
export const dailyReadings: TimeOfDayContent[] = [
  {
    morning: {
      call: "In the name of the Father, and of the Son, and of the Holy Spirit. Lord, open my lips, that my mouth may declare Your praise.",
      scripture: {
        text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
        reference: "Lamentations 3:22-23"
      },
      reflection: "Before your feet touched the floor this morning, God's mercies were already waiting for you. Not because you earned them, but because He is faithful. Your standing before God today rests not on your performance, but on Christ's finished work.",
      prompts: [
        "Thank God that His love toward you in Christ never wavers, even when your faithfulness does.",
        "Ask the Spirit to help you walk in awareness of grace today, not striving to earn what is already yours.",
        "Commit this day to the Lord, trusting that He who began a good work in you will carry it to completion."
      ],
      benediction: "Go now in the peace of Christ. His mercies are sufficient for whatever this day holds."
    },
    midday: {
      call: "O God, come to my assistance. O Lord, make haste to help me.",
      scripture: {
        text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
        reference: "Matthew 11:28-29"
      },
      reflection: "In the middle of your day, Christ invites you to come—not to a task list, but to Himself. His yoke is not another burden added to your load; it is an exchange. You give Him your striving; He gives you His rest.",
      prompts: [
        "Acknowledge any weariness or anxiety you are carrying right now.",
        "Receive Christ's invitation afresh: lay down your burdens at His feet.",
        "Ask for grace to work from rest rather than for rest."
      ],
      benediction: "The Lord is your shepherd. You lack nothing. Rest in His care."
    },
    evening: {
      call: "I will lie down and sleep in peace, for You alone, O Lord, make me dwell in safety.",
      scripture: {
        text: "He who dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
        reference: "Psalm 91:1-2"
      },
      reflection: "As this day closes, remember: your security does not depend on what you accomplished or failed to accomplish. You rest in the shadow of the Almighty—hidden with Christ in God. Nothing can snatch you from His hand.",
      prompts: [
        "Confess any ways you trusted in yourself today rather than in Christ. Receive His forgiveness.",
        "Thank God for specific evidences of grace you witnessed today.",
        "Entrust to Him anything left undone, trusting His sovereign care."
      ],
      benediction: "The Lord watch between you and Him while you sleep. May you wake to fresh mercies and renewed strength."
    }
  },
  {
    morning: {
      call: "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places.",
      scripture: {
        text: "This is the day the Lord has made; let us rejoice and be glad in it.",
        reference: "Psalm 118:24"
      },
      reflection: "This day is not random. It has been made—crafted, prepared, given by God Himself. Joy is not denial of difficulty; it is confidence that the One who made this day also holds it. He holds you.",
      prompts: [
        "Thank God that He is sovereign over this day and all it contains.",
        "Ask for eyes to see His goodness even in ordinary moments.",
        "Pray for someone who may be struggling to see God's faithfulness today."
      ],
      benediction: "Go in gladness. The Lord goes before you and behind you, and His hand rests upon you."
    },
    midday: {
      call: "Be still, and know that I am God.",
      scripture: {
        text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5-6"
      },
      reflection: "The call to trust is not a call to understand. God does not ask you to figure everything out—He asks you to lean on Him. Your understanding is limited; His is infinite. Rest in what you cannot see.",
      prompts: [
        "Name something you are trying to control or figure out on your own.",
        "Release it to God, confessing your limited perspective.",
        "Ask for the grace of trust, especially where understanding fails."
      ],
      benediction: "The Lord directs your steps. Trust His path, even in the dark."
    },
    evening: {
      call: "Return to your rest, my soul, for the Lord has been good to you.",
      scripture: {
        text: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside quiet waters. He restores my soul.",
        reference: "Psalm 23:1-3"
      },
      reflection: "The Good Shepherd makes you lie down—not out of demand, but out of love. He knows your need for rest even when you do not. Let Him lead you beside still waters tonight. Let Him restore what the day has drained.",
      prompts: [
        "Thank the Shepherd for His provision today, naming specific ways He cared for you.",
        "Receive His gift of rest, letting go of striving.",
        "Ask Him to restore your soul as you sleep."
      ],
      benediction: "Goodness and mercy follow you. Dwell in the house of the Lord, now and forever."
    }
  },
  {
    morning: {
      call: "Father, I belong to You. In Christ, I am Yours, and You are mine. Awaken my heart to the reality of Your love.",
      scripture: {
        text: "But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.",
        reference: "Ephesians 2:4-5"
      },
      reflection: "You were dead. Not wounded, not weak—dead. And God, rich in mercy, moved toward you in love. Before you could take a step toward Him, He made you alive. This is the gospel: grace that precedes, grace that saves, grace that sustains.",
      prompts: [
        "Marvel at God's initiative in salvation. Thank Him that you did not have to find Him—He found you.",
        "Confess any self-reliance, and receive again the gift of grace.",
        "Ask the Spirit to keep the gospel central in your thoughts today."
      ],
      benediction: "You are alive in Christ. Walk today in that resurrection power."
    },
    midday: {
      call: "Lord Jesus Christ, Son of God, have mercy on me.",
      scripture: {
        text: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ, through whom we have gained access by faith into this grace in which we now stand.",
        reference: "Romans 5:1-2"
      },
      reflection: "Justification is not a process you are completing; it is a verdict already declared. In Christ, you stand. Not because you performed well this morning, but because He performed perfectly for you. Peace with God is yours—now, already, irrevocably.",
      prompts: [
        "Thank God for the peace that is yours through Christ's work, not your own.",
        "If you are feeling condemned, remind yourself of the truth: there is no condemnation for those in Christ Jesus.",
        "Pray for someone who needs to hear the gospel of grace today."
      ],
      benediction: "Stand firm in grace. The Father's favor rests upon you in Christ."
    },
    evening: {
      call: "Into Your hands, O Lord, I commit my spirit, for You have redeemed me, O Lord, God of truth.",
      scripture: {
        text: "Cast all your anxiety on him because he cares for you.",
        reference: "1 Peter 5:7"
      },
      reflection: "The command to cast anxiety is rooted in a promise: He cares for you. You are not casting your worries into a void—you are giving them to a Father who loves you, a Savior who died for you, a Spirit who dwells within you. You are cared for.",
      prompts: [
        "Name your anxieties honestly before God. Do not minimize them.",
        "Cast them—actively, deliberately—onto Him who cares for you.",
        "Rest in the truth that He is able to bear what you cannot."
      ],
      benediction: "The peace of God, which surpasses all understanding, guard your heart and mind in Christ Jesus."
    }
  },
  {
    morning: {
      call: "Holy, holy, holy is the Lord God Almighty, who was and is and is to come. Worthy are You, our Lord and God, to receive glory and honor and power.",
      scripture: {
        text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
        reference: "Jeremiah 29:11"
      },
      reflection: "God's plans are not uncertain. He is not reacting to circumstances or adjusting on the fly. His purposes for you were set in Christ before the foundation of the world. Even in exile, even in waiting, His plans are for your good and His glory.",
      prompts: [
        "Thank God that His plans for you are rooted in His unchanging character.",
        "Surrender any areas where you are trying to write your own story.",
        "Ask for faith to trust His timing, even when the path is unclear."
      ],
      benediction: "The Lord your God is with you. He is mighty to save. He will quiet you with His love."
    },
    midday: {
      call: "Lord, You are my portion and my cup. You hold my lot.",
      scripture: {
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        reference: "Romans 8:28"
      },
      reflection: "All things. Not some things. Not only the good things. All things are being woven together by a sovereign, loving God for your ultimate good and conformity to Christ. This is not wishful thinking—this is the promise of the One who cannot lie.",
      prompts: [
        "Name something difficult you are facing. Affirm God's sovereignty over it.",
        "Ask for grace to trust Him even when you cannot trace His hand.",
        "Pray for someone else who is struggling to believe this promise."
      ],
      benediction: "Nothing can separate you from the love of God in Christ Jesus. Hold fast to this hope."
    },
    evening: {
      call: "The Lord Almighty grant me and those I love a peaceful night and a perfect end.",
      scripture: {
        text: "He who dwells in the shelter of the Most High will rest in the shadow of the Almighty. He will cover you with his feathers, and under his wings you will find refuge.",
        reference: "Psalm 91:1, 4"
      },
      reflection: "Under His wings. The imagery is tender, protective, intimate. The God who spoke galaxies into existence bends low to shelter you. You are not alone tonight. You are hidden, covered, kept by the One whose love will never let you go.",
      prompts: [
        "Thank God for being your refuge and dwelling place.",
        "Confess any fears, and receive His promise of protection.",
        "Rest in the truth that nothing can reach you apart from His sovereign permission."
      ],
      benediction: "May the Lord bless you and keep you. May He make His face shine upon you and be gracious to you. May He lift up His countenance upon you and give you peace."
    }
  },
  {
    morning: {
      call: "O God, You are my God; earnestly I seek You; my soul thirsts for You as in a dry and weary land where there is no water.",
      scripture: {
        text: "Seek the Lord while he may be found; call upon him while he is near. Let the wicked forsake his way, and the unrighteous man his thoughts; let him return to the Lord, that he may have compassion on him.",
        reference: "Isaiah 55:6-7"
      },
      reflection: "God invites you to seek Him—not because He is hiding, but because He desires to be found. This is grace: the holy God making Himself available to sinners. Come as you are. Return to Him. His compassion awaits.",
      prompts: [
        "Confess any ways you have wandered in heart or mind.",
        "Receive God's compassion and forgiveness in Christ.",
        "Ask the Spirit to deepen your desire to seek Him throughout this day."
      ],
      benediction: "The Lord is near to all who call on Him. Seek Him today, and you will find Him."
    },
    midday: {
      call: "I am not my own, but belong—body and soul, in life and in death—to my faithful Savior, Jesus Christ.",
      scripture: {
        text: "I can do all things through him who strengthens me.",
        reference: "Philippians 4:13"
      },
      reflection: "This is not a verse about achieving your goals. It is about contentment in every circumstance—abundance or need, plenty or want. Christ's strength is sufficient not to help you conquer the world, but to walk faithfully wherever He places you.",
      prompts: [
        "Acknowledge your dependence on Christ for all things.",
        "Ask for His strength to be faithful in your current circumstances, not to escape them.",
        "Thank Him that His power is made perfect in your weakness."
      ],
      benediction: "His grace is sufficient for you. His power rests upon you. Go in His strength."
    },
    evening: {
      call: "My soul finds rest in God alone; my salvation comes from Him. He alone is my rock and my salvation; He is my fortress, I will never be shaken.",
      scripture: {
        text: "Weeping may stay for the night, but rejoicing comes in the morning.",
        reference: "Psalm 30:5"
      },
      reflection: "If you are weeping tonight, know this: sorrow is real, but it is not final. The night may be long, but morning is coming. God's faithfulness will meet you in the dawn. Hold on. Joy is on its way.",
      prompts: [
        "Bring your sorrows honestly before God. He can handle your pain.",
        "Ask for grace to endure the night, trusting in the morning that is coming.",
        "Thank Him for the hope of resurrection—the ultimate morning after the darkest night."
      ],
      benediction: "The Lord is close to the brokenhearted. He saves those who are crushed in spirit. Rest in His presence tonight."
    }
  },
  {
    morning: {
      call: "Praise be to the Lord, to God our Savior, who daily bears our burdens.",
      scripture: {
        text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.",
        reference: "Numbers 6:24-26"
      },
      reflection: "This ancient blessing is yours today—not because you deserve it, but because God delights to give it. His face shines upon you in Christ. His grace covers you. His peace guards you. Receive this blessing as the gift it is.",
      prompts: [
        "Receive God's blessing with open hands, not clenched fists of performance.",
        "Thank Him for His grace that is new this morning.",
        "Ask to be a channel of His blessing to others today."
      ],
      benediction: "The Lord bless you and keep you. Go in His grace, His favor, His peace."
    },
    midday: {
      call: "Lord Jesus, You are the way, the truth, and the life. Apart from You I can do nothing.",
      scripture: {
        text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
        reference: "Colossians 3:15"
      },
      reflection: "Peace is not the absence of conflict; it is the presence of Christ. Let His peace rule—preside, govern, arbitrate—in your heart. When anxiety knocks, let peace answer the door. When chaos presses in, let Christ reign.",
      prompts: [
        "Invite Christ's peace to rule in any area of inner conflict.",
        "Choose thankfulness as an act of faith, not feeling.",
        "Pray for peace in your relationships and community."
      ],
      benediction: "The peace of Christ reign in you. Be thankful in all things."
    },
    evening: {
      call: "Lord, I am not worthy to receive You, but only say the word and I shall be healed.",
      scripture: {
        text: "I will praise the Lord, who counsels me; even at night my heart instructs me. I keep my eyes always on the Lord. With him at my right hand, I will not be shaken.",
        reference: "Psalm 16:7-8"
      },
      reflection: "Even in the night, God counsels. Even in sleep, He instructs. Your soul is not abandoned when your eyes close. The Lord stands at your right hand—near, present, watchful. You will not be shaken.",
      prompts: [
        "Thank God for His counsel throughout this day.",
        "Ask Him to instruct your heart even as you sleep.",
        "Fix your eyes on the Lord, and entrust the night to Him."
      ],
      benediction: "The Lord is at your right hand. You will not be shaken. Sleep in His steadfast love."
    }
  },
  {
    morning: {
      call: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
      scripture: {
        text: "Create in me a pure heart, O God, and renew a steadfast spirit within me. Do not cast me from your presence or take your Holy Spirit from me. Restore to me the joy of your salvation.",
        reference: "Psalm 51:10-12"
      },
      reflection: "Only God can create a clean heart. You cannot manufacture purity; you can only receive it. This prayer of David is a prayer of dependence, of honest need, of confident hope. The God who creates is the God who restores.",
      prompts: [
        "Ask God to search your heart and reveal any unconfessed sin.",
        "Receive His cleansing through the blood of Christ.",
        "Pray for renewed joy in your salvation—not earned, but restored."
      ],
      benediction: "The Lord renews and restores. Go with a clean heart and a steadfast spirit."
    },
    midday: {
      call: "My soul glorifies the Lord and my spirit rejoices in God my Savior.",
      scripture: {
        text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
        reference: "Psalm 27:1"
      },
      reflection: "Fear is answered not by courage, but by God. When the Lord is your light, darkness loses its power. When He is your salvation, threats lose their teeth. When He is your stronghold, you can face anything. Fear not—He is with you.",
      prompts: [
        "Name any fears that are pressing on you today.",
        "Declare the truth: The Lord is your light, salvation, and stronghold.",
        "Ask for faith to walk without fear, trusting in His presence."
      ],
      benediction: "Be strong and take heart. Wait for the Lord."
    },
    evening: {
      call: "Into Your hands I commit my spirit; deliver me, Lord, my faithful God.",
      scripture: {
        text: "Great peace have those who love your law, and nothing can make them stumble.",
        reference: "Psalm 119:165"
      },
      reflection: "Peace comes through loving God's Word—not as a burden, but as a delight. Those who treasure Scripture find their feet steady and their hearts anchored. Let His Word dwell in you richly tonight, and peace will follow.",
      prompts: [
        "Thank God for the gift of His Word.",
        "Confess any neglect of Scripture, and ask for renewed love for it.",
        "Ask the Spirit to bring His Word to mind as you sleep."
      ],
      benediction: "Great peace is yours in Christ. Nothing can make you stumble. Rest secure in Him."
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
