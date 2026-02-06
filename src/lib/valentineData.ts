export interface ValentineDay {
  id: number;
  name: string;
  date: Date;
  emoji: string;
  description: string;
  question: string;
  answerType: 'date' | 'text';
  correctAnswer: string;
  unlockMessage: string;
  romanticParagraph: string; // Added for special message after correct answer
  color: string;
}

export const VALENTINE_DAYS: ValentineDay[] = [
  {
    id: 1,
    name: "Rose Day",
    date: new Date(2026, 1, 7), // Feb 7, 2026
    emoji: "🌹",
    description: "For my beautiful Vampire, a rose as red as my love for you",
    question: "When did I propose you to marry me?",
    answerType: 'date',
    correctAnswer: "2024-12-29",
    unlockMessage: "You remembered our special moment, Khushi! 💍",
    romanticParagraph: "I don't know how lucky I am or how many good deeds I did in my previous life to get someone like you. I might be one of the saints in my previous life to get someone as good as you in my current life. Every moment with you feels like a blessing, and I promise to cherish you for all the lifetimes to come.",
    color: "from-rose-deep to-primary"
  },
  {
    id: 2,
    name: "Propose Day",
    date: new Date(2026, 1, 8), // Feb 8, 2026
    emoji: "💍",
    description: "Shrishti, every day I choose you again and again",
    question: "Our scooty ride in Lucknow?",
    answerType: 'date',
    correctAnswer: "2021-08-19",
    unlockMessage: "That adventurous ride with you, Vampire! 🛵",
    romanticParagraph: "That scooty ride through the streets of Lucknow wasn't just a journey through the city - it was the beginning of us. With you sitting behind me, your arms wrapped around me, I felt like I could ride through any storm. Every bump on the road, every turn we took, it all led me to realize that you're the adventure I want for the rest of my life.",
    color: "from-pink-soft to-rose-light"
  },
  {
    id: 3,
    name: "Chocolate Day",
    date: new Date(2026, 1, 9), // Feb 9, 2026
    emoji: "🍫",
    description: "Khushi, you're sweeter than any chocolate",
    question: "When did I meet you after coming from Bangalore?",
    answerType: 'date',
    correctAnswer: "2025-01-16",
    unlockMessage: "I couldn't wait to see you, Shrishti! ✈️",
    romanticParagraph: "The miles between Bangalore and you felt like oceans. Every minute away from you was a minute too long. When I finally saw you after that long journey, everything made sense again. You are my home, Khushi. No matter where I go, no matter how far I travel, my heart always finds its way back to you. You're not just the destination - you're the reason for every journey.",
    color: "from-burgundy to-rose-deep"
  },
  {
    id: 4,
    name: "Teddy Day",
    date: new Date(2026, 1, 10), // Feb 10, 2026
    emoji: "🧸",
    description: "My cute little Vampire, soft and cuddly like a teddy",
    question: "When did we go to Bithoor?",
    answerType: 'date',
    correctAnswer: "2026-01-22",
    unlockMessage: "Our beautiful day at Bithoor, Khushi! 🏛️",
    romanticParagraph: "Bithoor with you was… educational. A masterclass in improvisation, really — learning the hard way that things don't always tear the way you expect, and sometimes you lose one attempt just figuring out which side is up. History felt very hands-on there. By the end, I remember you just staring at me like I was some ancient artifact, while I was completely gone, mentally off-grid. The place itself left its marks too — souvenirs scattered like evidence of an overenthusiastic sightseeing tour. Safe to say, the trip left us both a little disoriented, slightly bruised, and way more aware of how intense 'exploring together' can get.",
    color: "from-gold to-gold-shimmer"
  },
  {
    id: 5,
    name: "Promise Day",
    date: new Date(2026, 1, 11), // Feb 11, 2026
    emoji: "🤞",
    description: "Shrishti, I promise to love you forever",
    question: "When did I say that I love you?",
    answerType: 'date',
    correctAnswer: "2026-02-04",
    romanticParagraph: "Those three words - 'I love you' - they were always there in my heart, waiting for the perfect moment to find their way to you. When I finally said them, it felt like setting my soul free. Vampire, you are the poetry my heart writes every single day. You are the song my soul sings. I promise to love you not just with words, but with every breath, every heartbeat, every moment of my existence.",
    unlockMessage: "Those three magical words for you, Vampire! ❤️",
    color: "from-rose-light to-pink-soft"
  },
  {
    id: 6,
    name: "Hug Day",
    date: new Date(2026, 1, 12), // Feb 12, 2026
    emoji: "🤗",
    description: "Khushi, your hugs feel like home",
    question: "When did you buy me shoes?",
    answerType: 'date',
    correctAnswer: "2025-06-25",
    unlockMessage: "You spoil me so much, Shrishti! 👟",
    romanticParagraph: "You remember the little things — like gifting me shoes the moment you noticed I wanted one, without me ever asking. But it never stopped there. From anime swords that felt straight out of my dreams, to Valorant skins you knew I'd love, from roses and chocolates to not one but two bracelets I carry pieces of you in — every gift told a story. And the self-made candles… those weren't just candles, they were time, effort, and love poured into something just for me. It's these quiet, thoughtful gestures that show how deeply you care. You don't love me with loud declarations; you love me in everyday moments, in surprises, in noticing what I need before I even say it. Khushi, you make me feel valued, cherished, and completely loved in ways I never knew were possible.",
    color: "from-rose-blush to-rose-light"
  },
  {
    id: 7,
    name: "Kiss Day",
    date: new Date(2026, 1, 13), // Feb 13, 2026
    emoji: "💋",
    description: "Vampire, your kisses are my favorite",
    question: "What did I bring you from Goa?",
    answerType: 'text',
    correctAnswer: "bracelet",
    unlockMessage: "That special bracelet from Goa, Khushi! 🌊",
    romanticParagraph: "That bracelet from Goa is more than just jewelry. Every time I see it on your wrist, I'm pulled back to that journey — the waves, the sunset, the air that felt unreal — and how, in all that beauty, my thoughts were only of you. I still remember recording our little video that day, wanting to freeze that moment forever. I remember making you wear all those bracelets with my own hands, slow and deliberate, like it meant something deeper than it looked. Even the ride back — my bike, the road, and your hands very clearly refusing to behave — felt like part of the memory I never want to lose. I wanted to bring back a piece of that paradise for you, because Shrishti, you deserve every beautiful thing this world has to offer. You wear the bracelet, but you've wrapped yourself around my heart the same way — beautifully, permanently, lovingly.",
    color: "from-primary to-rose-deep"
  },
  {
    id: 8,
    name: "Valentine's Day",
    date: new Date(2026, 1, 14), // Feb 14, 2026
    emoji: "❤️",
    description: "Shrishti, you are my forever Valentine",
    question: "What was the first gift I gave you?",
    answerType: 'text',
    correctAnswer: "tumbler",
    unlockMessage: "The beginning of our gifts, Vampire! 🎁",
    romanticParagraph: "The first gift I gave you marked the beginning of a tradition - a tradition of showing you, again and again, how much you mean to me. But the truth is, meri pyaari khushi ji - you are the greatest gift I've ever received. You've given me love, laughter, companionship, and a future worth dreaming about. On this Valentine's Day and every day after, I want you to know: you are my today and all of my tomorrows. I love you more than words can express, more than actions can show, but I promise to spend every day trying.",
    color: "from-primary via-rose-deep to-burgundy"
  }
];

export const ENVELOPE_MESSAGES = [
  "padh le bhai 📚",
  "excersize karo malik 💪",
  "spicy noodles nhi khaane hain 🍜",
  "poore din call kyu chalani hai 📱",
  "video on karle 📹",
  "earphone khareed lo 🎧",
  "phone he chutiya hai 📵",
  "baal achhe lag rahe 💇‍♀️",
  "muu mat fulaao 😤",
  "yellow color ka sweater tmpe accha lag raha 💛",
  "hatt be 😏",
  "inhaler kaha hai mera 💨",
  "moti hain aap boht 🐷",
  "bhai kitne pimples hain 😅",
  "makeup nhi khareedna hai 💄",
  "aankhe acchi hai 👀",
  "awaaj acchi hai 🎤",
  "call chalte chalte nhi sona hai 😴",
  "muu se haath hatao 🤭",
  "tmhari side profile acchi lagti hai ✨",
  "kitna overthink karti hai 🧠",
  "overthink karna band kardo 🛑",
  "padhai kar jaake 📖",
  "gaana sunao koi 🎵",
  "ghar k kaam kar liya karo 🏠",
  "apni image acchi karlo 😎",
  "mature bano bhai 🧐",
  "bachpana chor do 👶",
  "i love you ❤️",
  "you love me 💕",
  "marry me 💍",
  "please smile more 😊",
  "keep fighting with me 😤",
  "i love you 💖",
  "i love you 💗",
  "mera naam khadoos nhi hai 😏",
  "mera naam pumpkin nhi hai 🎃",
  "mera naam dhruvie nhi hai 😅",
  "movie dekhne chalogi 🎬",
  "can i call you 📞",
  "can i see you 👀",
  "i miss you 💔",
  "i miss you 🥺",
  "i want to see you 💝",
  "can i hug you 🤗",
  "koi gift dedo mujhe 🎁",
  "game khelogi 🎮",
  "gana sunao koi 🎵",
  "mujhe sab aata hai 😎"
];

export const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * ENVELOPE_MESSAGES.length);
  return ENVELOPE_MESSAGES[randomIndex];
};

export const formatDateForComparison = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// FOR TESTING: Set this to true to make all days available
const TEST_MODE = false; // PRODUCTION MODE - Days unlock on real dates

export const isDayAvailable = (dayDate: Date): boolean => {
  if (TEST_MODE) return true; // All days available in test mode
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const checkDate = new Date(dayDate);
  checkDate.setHours(0, 0, 0, 0);
  return today >= checkDate;
};

export const getUnlockedDays = (): number[] => {
  const stored = localStorage.getItem('valentine_unlocked_days');
  if (stored) {
    return JSON.parse(stored);
  }
  return [1]; // First day is always unlocked
};

export const unlockDay = (dayId: number): void => {
  const unlocked = getUnlockedDays();
  if (!unlocked.includes(dayId)) {
    unlocked.push(dayId);
    localStorage.setItem('valentine_unlocked_days', JSON.stringify(unlocked));
  }
};

export const isDayUnlocked = (dayId: number): boolean => {
  return getUnlockedDays().includes(dayId);
};
