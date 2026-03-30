export interface SkinTypeRoutineStep {
  step: number;
  name: string;
  description: string;
  product: string;
  tip?: string;
}

export interface SkinTypeData {
  id: string;
  name: string;
  emoji: string;
  description: string;
  cardColor: string;
  routine: SkinTypeRoutineStep[];
  tips: string[];
  premiumProducts: string[];
}

export interface ToolData {
  id: string;
  name: string;
  emoji: string;
  usage: string;
  benefits: string;
  premium: boolean;
  color: string;
}

export interface TeamMember {
  email?: string;
  phone?: string;
  name: string;
  role: string;
  gradient: string;
  initials: string;
}

export interface SeasonalTip {
  season: string;
  emoji: string;
  tip: string;
  color: string;
}

export interface DiyRemedy {
  name: string;
  emoji: string;
  ingredients: string;
  steps: string;
  color: string;
}

export interface SelfCareQuote {
  quote: string;
  author: string;
}

export const SKIN_TYPES: SkinTypeData[] = [
  {
    id: "normal",
    name: "Normal",
    emoji: "✨",
    description:
      "Well-balanced skin with minimal imperfections. Not too oily, not too dry.",
    cardColor: "#E7A7B4",
    routine: [
      {
        step: 1,
        name: "Gentle Cleanse",
        description: "Wash away impurities without stripping.",
        product: "CeraVe Hydrating Cleanser",
        tip: "Use lukewarm water for best results.",
      },
      {
        step: 2,
        name: "Toner",
        description: "Balance pH and prep skin for hydration.",
        product: "Thayers Witch Hazel Rose Toner",
      },
      {
        step: 3,
        name: "Vitamin C Serum",
        description: "Brighten and protect against environmental damage.",
        product: "TruSkin Vitamin C Serum",
        tip: "Apply in the morning for UV protection synergy.",
      },
      {
        step: 4,
        name: "Lightweight Moisturizer",
        description: "Keep skin plump and hydrated all day.",
        product: "Neutrogena Hydro Boost Gel",
      },
      {
        step: 5,
        name: "SPF 30+",
        description: "Shield from UV rays daily.",
        product: "La Roche-Posay Anthelios SPF 50",
        tip: "Reapply every 2 hours outdoors.",
      },
      {
        step: 6,
        name: "Night Cream",
        description: "Repair and renew while you sleep.",
        product: "Olay Regenerist Night Cream",
      },
    ],
    tips: [
      "Exfoliate 1-2 times a week.",
      "Stay hydrated – drink 8 glasses of water daily.",
      "Maintain your routine even when skin looks great.",
    ],
    premiumProducts: [
      "SkinCeuticals CE Ferulic",
      "Sunday Riley Good Genes",
      "La Mer Moisturizing Cream",
    ],
  },
  {
    id: "oily",
    name: "Oily",
    emoji: "💧",
    description:
      "Excess sebum production causing shine, enlarged pores, and potential breakouts.",
    cardColor: "#BFD8EA",
    routine: [
      {
        step: 1,
        name: "Gel Cleanser",
        description: "Remove excess oil and deep-clean pores.",
        product: "Neutrogena Oil-Free Acne Wash",
        tip: "Cleanse twice daily – over-washing triggers more oil.",
      },
      {
        step: 2,
        name: "Exfoliating Toner",
        description: "Unclog pores with gentle chemical exfoliation.",
        product: "Paula's Choice BHA Liquid",
      },
      {
        step: 3,
        name: "Niacinamide Serum",
        description: "Minimize pores and regulate sebum.",
        product: "The Ordinary Niacinamide 10%",
        tip: "Use consistently for 4-6 weeks to see results.",
      },
      {
        step: 4,
        name: "Oil-Free Moisturizer",
        description: "Hydrate without clogging pores.",
        product: "Clinique Dramatically Different Moisturizing Gel",
      },
      {
        step: 5,
        name: "Mattifying SPF",
        description: "Protect and control shine simultaneously.",
        product: "EltaMD UV Clear SPF 46",
      },
      {
        step: 6,
        name: "Clay Mask (2x/week)",
        description: "Deep-clean pores and absorb excess oil.",
        product: "Aztec Secret Indian Healing Clay",
      },
    ],
    tips: [
      "Use blotting papers throughout the day.",
      "Avoid touching your face.",
      "Use non-comedogenic makeup products.",
    ],
    premiumProducts: [
      "Dr. Dennis Gross AHA/BHA Peel",
      "Drunk Elephant T.L.C. Framboos",
      "Tatcha The Dewy Skin Cream",
    ],
  },
  {
    id: "dry",
    name: "Dry",
    emoji: "🌸",
    description:
      "Skin that lacks moisture, often feeling tight, flaky, and sometimes itchy.",
    cardColor: "#CBB8E8",
    routine: [
      {
        step: 1,
        name: "Cream Cleanser",
        description: "Cleanse without disrupting the moisture barrier.",
        product: "Cetaphil Gentle Skin Cleanser",
      },
      {
        step: 2,
        name: "Hydrating Toner",
        description: "Layer moisture from the first step.",
        product: "Fresh Rose Deep Hydration Toner",
        tip: "Pat in gently, never wipe.",
      },
      {
        step: 3,
        name: "Hyaluronic Acid Serum",
        description: "Attract and bind moisture deep into the skin.",
        product: "The Ordinary Hyaluronic Acid 2%",
        tip: "Apply on damp skin for maximum absorption.",
      },
      {
        step: 4,
        name: "Rich Moisturizer",
        description: "Create a protective barrier and lock in hydration.",
        product: "CeraVe Moisturizing Cream",
      },
      {
        step: 5,
        name: "Face Oil",
        description: "Seal in all moisture and add a healthy glow.",
        product: "Rosehip Seed Oil (Pure)",
        tip: "A few drops go a long way.",
      },
      {
        step: 6,
        name: "Overnight Mask",
        description: "Intensively repair and deeply hydrate overnight.",
        product: "LANEIGE Water Sleeping Mask",
      },
    ],
    tips: [
      "Use a humidifier in dry climates.",
      "Avoid hot showers – use warm water.",
      "Apply moisturizer within 60 seconds of cleansing.",
    ],
    premiumProducts: [
      "La Mer Moisturizing Cream",
      "Charlotte Tilbury Magic Cream",
      "Augustinus Bader The Rich Cream",
    ],
  },
  {
    id: "combination",
    name: "Combination",
    emoji: "🌺",
    description:
      "Oily in the T-zone (forehead, nose, chin) while cheeks remain normal to dry.",
    cardColor: "#E7A7B4",
    routine: [
      {
        step: 1,
        name: "Balancing Cleanser",
        description: "Clean all zones without over-drying.",
        product: "La Roche-Posay Toleriane Cleanser",
      },
      {
        step: 2,
        name: "Balancing Toner",
        description: "Control oil where needed, add moisture elsewhere.",
        product: "Kiehl's Calendula Toner",
      },
      {
        step: 3,
        name: "Lightweight Serum",
        description: "Targeted hydration without excess weight.",
        product: "Murad Nutrient-Charged Water Gel",
      },
      {
        step: 4,
        name: "Zone Moisturizing",
        description: "Lighter formula on T-zone, richer on cheeks.",
        product: "Belif True Cream Aqua Bomb + Bomb",
      },
      {
        step: 5,
        name: "Broad-Spectrum SPF",
        description: "Protect evenly across all zones.",
        product: "Biore UV Aqua Rich Watery Essence SPF 50",
      },
    ],
    tips: [
      "Multi-masking: clay on T-zone, hydrating mask on cheeks.",
      "Pay attention to seasonal changes in your skin.",
      "Carry blotting papers for midday T-zone touch-ups.",
    ],
    premiumProducts: [
      "SK-II Facial Treatment Essence",
      "Sisley Black Rose Precious Face Oil",
      "Tatcha The Water Cream",
    ],
  },
  {
    id: "sensitive",
    name: "Sensitive",
    emoji: "🌷",
    description:
      "Prone to redness, irritation, stinging, and reactions to products or environment.",
    cardColor: "#BFD8EA",
    routine: [
      {
        step: 1,
        name: "Fragrance-Free Cleanser",
        description: "Gently cleanse without triggering reactions.",
        product: "Vanicream Gentle Facial Cleanser",
      },
      {
        step: 2,
        name: "Calming Essence",
        description: "Soothe redness and strengthen the skin barrier.",
        product: "Dr. Jart+ Cicapair Tiger Grass Essence",
        tip: "Patch test all new products on your inner wrist first.",
      },
      {
        step: 3,
        name: "Centella Serum",
        description: "Reduce inflammation and accelerate healing.",
        product: "COSRX Centella Blemish Ampule",
      },
      {
        step: 4,
        name: "Barrier Moisturizer",
        description: "Fortify and protect compromised skin.",
        product: "Avene Cicalfate+ Restorative Cream",
      },
      {
        step: 5,
        name: "Mineral SPF",
        description: "Physical protection that won't irritate.",
        product: "Blue Lizard Sensitive SPF 30+",
      },
    ],
    tips: [
      "Introduce one new product at a time.",
      "Avoid fragrances, alcohol, and harsh acids.",
      "Keep your routine simple – fewer ingredients = fewer reactions.",
    ],
    premiumProducts: [
      "La Mer Creme de la Mer",
      "Sisley Ecological Compound",
      "Caudalie Vinoperfect Serum",
    ],
  },
  {
    id: "acne",
    name: "Acne-Prone",
    emoji: "🌿",
    description:
      "Frequent breakouts, blackheads, or whiteheads due to clogged pores and bacteria.",
    cardColor: "#CBB8E8",
    routine: [
      {
        step: 1,
        name: "Salicylic Acid Cleanser",
        description: "Exfoliate pores and prevent breakouts.",
        product: "CeraVe Acne Foaming Cream Cleanser",
        tip: "Don't scrub – let the active ingredient do the work.",
      },
      {
        step: 2,
        name: "BHA Toner",
        description: "Penetrate pores and dissolve excess sebum.",
        product: "COSRX BHA Blackhead Power Liquid",
      },
      {
        step: 3,
        name: "Spot Treatment",
        description: "Kill acne-causing bacteria directly.",
        product: "Differin Gel (Adapalene 0.1%)",
      },
      {
        step: 4,
        name: "Oil-Free Moisturizer",
        description: "Hydrate without clogging – essential even for acne skin.",
        product: "Neutrogena Oil-Free Moisture SPF 15",
      },
      {
        step: 5,
        name: "Non-Comedogenic SPF",
        description: "UV protection that doesn't worsen breakouts.",
        product: "EltaMD UV Clear SPF 46",
      },
      {
        step: 6,
        name: "Retinol (PM, 2x/week)",
        description: "Prevent future breakouts and reduce acne scarring.",
        product: "The Ordinary Retinol 0.5% in Squalane",
        tip: "Always follow with moisturizer. Use on dry skin only.",
      },
      {
        step: 7,
        name: "Sheet Mask (weekly)",
        description: "Soothe post-breakout irritation.",
        product: "COSRX Acne-Calming Sheet Mask",
      },
    ],
    tips: [
      "Change your pillowcase every 2-3 days.",
      "Never pop or pick at breakouts.",
      "Stay patient – clear skin takes consistent effort over weeks.",
    ],
    premiumProducts: [
      "Proactiv Solution 3-Step System",
      "SkinMedica TNS Advanced+ Serum",
      "Zit Zapper by Peter Thomas Roth",
    ],
  },
];

export const TOOLS: ToolData[] = [
  {
    id: "jade-roller",
    name: "Jade Roller",
    emoji: "💚",
    usage:
      "Roll outward from the center of your face after applying serum or moisturizer.",
    benefits:
      "Reduces puffiness, improves circulation, helps products absorb deeper, feels incredibly relaxing.",
    premium: false,
    color: "#BFD8EA",
  },
  {
    id: "gua-sha",
    name: "Gua Sha",
    emoji: "🌿",
    usage:
      "Glide at a 45 degree angle using gentle upward strokes on oiled skin.",
    benefits:
      "Sculpts facial contours, releases muscle tension, boosts lymphatic drainage.",
    premium: false,
    color: "#CBB8E8",
  },
  {
    id: "silicone-brush",
    name: "Silicone Cleansing Brush",
    emoji: "🫧",
    usage: "Use in gentle circular motions while cleansing for 60 seconds.",
    benefits:
      "Deeper cleanse, gentle exfoliation, 35x more bacteria removal than hands alone.",
    premium: false,
    color: "#E7A7B4",
  },
  {
    id: "mask-brush",
    name: "Mask Applicator Brush",
    emoji: "🖌",
    usage: "Apply face masks evenly in outward brush strokes from the center.",
    benefits:
      "Even application, hygienic, reduces product waste, fun and satisfying to use!",
    premium: false,
    color: "#F1E3CF",
  },
  {
    id: "ice-globes",
    name: "Ice Globes",
    emoji: "❄",
    usage:
      "Chill in fridge 15 mins, roll in circular motions to depuff and calm.",
    benefits:
      "Instant de-puffing, tightens pores, soothes inflammation, reduces redness.",
    premium: false,
    color: "#BFD8EA",
  },
  {
    id: "led-mask",
    name: "LED Light Therapy Mask",
    emoji: "💡",
    usage: "Wear 10 mins daily. Red light for anti-aging, blue light for acne.",
    benefits:
      "Clinically proven to boost collagen, destroy acne bacteria, and accelerate healing.",
    premium: true,
    color: "#E7A7B4",
  },
  {
    id: "high-freq",
    name: "High-Frequency Wand",
    emoji: "⚡",
    usage: "Glide over clean skin in circular motions 3-5 minutes per area.",
    benefits:
      "Kills surface bacteria, tightens skin, reduces fine lines and wrinkles.",
    premium: true,
    color: "#CBB8E8",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Nandana",
    role: "Skincare Expert",
    initials: "N",
    gradient: "linear-gradient(135deg, #F3C7CF, #E7A7B4)",
    email: "nandana@bloomskincare.com",
    phone: "+91 98765 43210",
  },
  {
    name: "Adhithya",
    role: "UI Developer",
    initials: "A",
    gradient: "linear-gradient(135deg, #BFD8EA, #B0C8DA)",
    email: "adhithya@bloomskincare.com",
    phone: "+91 98765 43211",
  },
  {
    name: "Aiswarya",
    role: "Content Creator",
    initials: "Ai",
    gradient: "linear-gradient(135deg, #CBB8E8, #D7C3F8)",
    email: "aishwarya@bloomskincare.com",
    phone: "+91 98765 43212",
  },
  {
    name: "Nidhimol",
    role: "Research Lead",
    initials: "Ni",
    gradient: "linear-gradient(135deg, #F1E3CF, #E8D5B7)",
    email: "nidhimol@bloomskincare.com",
    phone: "+91 98765 43213",
  },
  {
    name: "Krishnapriya",
    role: "Brand Designer",
    initials: "K",
    gradient: "linear-gradient(135deg, #F3C7CF, #CBB8E8)",
    email: "krishnapriya@bloomskincare.com",
    phone: "+91 98765 43214",
  },
];

export const SEASONAL_TIPS: SeasonalTip[] = [
  {
    season: "Spring",
    emoji: "🌸",
    tip: "Switch to lighter moisturizers as humidity rises. Add an antioxidant serum to combat seasonal allergies and pollution.",
    color: "#F3C7CF",
  },
  {
    season: "Summer",
    emoji: "☀️",
    tip: "Prioritize SPF 50+ daily. Use lightweight gel moisturizers and keep a facial mist for instant refreshment throughout the day.",
    color: "#BFD8EA",
  },
  {
    season: "Autumn",
    emoji: "🍂",
    tip: "Transition to richer moisturizers as air gets drier. Add a weekly hydrating mask to prep skin for cooler weather.",
    color: "#F1E3CF",
  },
  {
    season: "Winter",
    emoji: "❄️",
    tip: "Layer hydration: essence + serum + cream + oil. Use a humidifier indoors and avoid long hot showers that strip skin.",
    color: "#CBB8E8",
  },
];

export const DIY_REMEDIES: DiyRemedy[] = [
  {
    name: "Honey & Oat Face Mask",
    emoji: "🍯",
    ingredients: "2 tbsp raw honey + 1 tbsp finely ground oats",
    steps:
      "Mix together, apply to clean face, leave 15-20 mins, rinse with warm water. Perfect for dry and sensitive skin.",
    color: "#F1E3CF",
  },
  {
    name: "Green Tea Ice Cubes",
    emoji: "🍵",
    ingredients: "Brewed green tea, ice cube tray",
    steps:
      "Freeze brewed green tea into cubes. Wrap in cloth, glide over face for 30-60 seconds to de-puff and tighten pores.",
    color: "#BFD8EA",
  },
  {
    name: "Turmeric Glow Mask",
    emoji: "✨",
    ingredients: "1 tsp turmeric + 2 tbsp plain yogurt + 1 tsp honey",
    steps:
      "Mix well, apply a thin layer, leave 10 mins, rinse thoroughly. Reduces dullness and evens skin tone.",
    color: "#E7A7B4",
  },
  {
    name: "Rose Water Toner",
    emoji: "🌹",
    ingredients: "Pure rose water (bottled or homemade)",
    steps:
      "Spritz or pat onto clean skin after cleansing. Hydrates, soothes, and smells heavenly. Safe for all skin types.",
    color: "#CBB8E8",
  },
];

export const QUOTES: SelfCareQuote[] = [
  {
    quote: "Your skin is a reflection of your inner health. Nourish it gently.",
    author: "Bloom",
  },
  {
    quote: "Self-care is not selfish. It is the foundation of your best self.",
    author: "Bloom",
  },
  {
    quote:
      "Consistency is the secret ingredient in every great skincare routine.",
    author: "Bloom",
  },
  {
    quote: "Glow from within. Let your radiance be your greatest accessory.",
    author: "Bloom",
  },
];

export const QUIZ_QUESTIONS = [
  {
    id: "q1",
    question:
      "How does your skin feel 2 hours after cleansing (no products applied)?",
    options: [
      { label: "Tight and flaky", types: ["dry"] },
      { label: "Shiny all over", types: ["oily"] },
      { label: "Comfortable and balanced", types: ["normal"] },
      {
        label: "Oily on nose/forehead, normal elsewhere",
        types: ["combination"],
      },
      { label: "Red or slightly irritated", types: ["sensitive"] },
    ],
  },
  {
    id: "q2",
    question: "How often do you experience breakouts?",
    options: [
      { label: "Rarely – my skin is pretty clear", types: ["normal", "dry"] },
      {
        label: "Frequently, especially on the T-zone",
        types: ["oily", "acne"],
      },
      { label: "Occasionally, usually hormonal", types: ["combination"] },
      { label: "Often, all over my face", types: ["acne"] },
      { label: "Sometimes, with redness", types: ["sensitive"] },
    ],
  },
  {
    id: "q3",
    question: "How does your skin react to new skincare products?",
    options: [
      { label: "Usually fine, adapts well", types: ["normal"] },
      { label: "Can cause more breakouts", types: ["acne", "oily"] },
      { label: "Sometimes gets dry or flaky", types: ["dry"] },
      { label: "Reacts with redness or burning", types: ["sensitive"] },
      {
        label: "Varies – some areas react, some don't",
        types: ["combination"],
      },
    ],
  },
];
