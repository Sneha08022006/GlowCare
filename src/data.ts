export type SkinType = 'dry' | 'oily' | 'combination' | 'sensitive';

export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  benefits: string[];
  rating: number;
};

export const products: Product[] = [
  {
    id: 'face-wash',
    name: 'Rose Cloud Face Wash',
    category: 'Face Wash',
    tagline: 'A gentle gel-to-foam cleanse',
    description:
      'A pH-balanced gel cleanser infused with rose water and hyaluronic acid that lifts impurities without stripping the skin barrier.',
    price: '$24',
    image:
      'https://images.pexels.com/photos/30877766/pexels-photo-30877766.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['Non-stripping', 'Hydrating', 'Fragrance-free'],
    rating: 4.8,
  },
  {
    id: 'moisturizer',
    name: 'Velvet Dew Moisturizer',
    category: 'Moisturizer',
    tagline: 'Weightless 48-hour hydration',
    description:
      'A featherlight gel-cream with squalane and ceramides that melts in for soft, plump, dewy skin that lasts all day.',
    price: '$38',
    image:
      'https://images.pexels.com/photos/27544670/pexels-photo-27544670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['Ceramide-rich', 'Non-greasy', 'Barrier repair'],
    rating: 4.9,
  },
  {
    id: 'sunscreen',
    name: 'Silk Veil Sunscreen SPF 50',
    category: 'Sunscreen',
    tagline: 'Invisible broad-spectrum protection',
    description:
      'A fluid SPF 50 with niacinamide that blurs pores and leaves a natural glow — no white cast, no pilling, no compromise.',
    price: '$32',
    image:
      'https://images.pexels.com/photos/16615433/pexels-photo-16615433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['No white cast', 'SPF 50', 'Reef-safe'],
    rating: 4.7,
  },
  {
    id: 'serum',
    name: 'Glow Drops Serum',
    category: 'Serum',
    tagline: 'Radiance in a dropper',
    description:
      'A 10% vitamin C + hyaluronic acid serum that visibly brightens, evens tone, and floods skin with deep hydration.',
    price: '$48',
    image:
      'https://images.pexels.com/photos/4735937/pexels-photo-4735937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['Brightening', 'Antioxidant', 'Fast-absorbing'],
    rating: 4.9,
  },
  {
    id: 'cleanser',
    name: 'Honey Milk Cleanser',
    category: 'Cleanser',
    tagline: 'Creamy melt-away cleanse',
    description:
      'A nourishing cream cleanser with raw honey and oat milk that dissolves makeup and sunscreen while comforting the skin.',
    price: '$28',
    image:
      'https://images.pexels.com/photos/16329382/pexels-photo-16329382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['Makeup-melting', 'Soothing', 'pH-balanced'],
    rating: 4.8,
  },
];

export type RoutineStep = {
  step: string;
  product: string;
  detail: string;
};

export type Recommendation = {
  type: SkinType;
  label: string;
  emoji: string;
  intro: string;
  routine: RoutineStep[];
  tips: string[];
};

export const recommendations: Record<SkinType, Recommendation> = {
  dry: {
    type: 'dry',
    label: 'Dry Skin',
    emoji: '💧',
    intro:
      'Your skin craves deep, lasting moisture. This routine layers hydration and seals it in for a soft, supple finish.',
    routine: [
      { step: 'Morning', product: 'Honey Milk Cleanser', detail: 'Creamy, non-foaming cleanse that protects your lipid barrier.' },
      { step: 'Treat', product: 'Glow Drops Serum', detail: 'Hyaluronic acid on damp skin for a hydration surge.' },
      { step: 'Hydrate', product: 'Velvet Dew Moisturizer', detail: 'Lock in moisture with ceramides and squalane.' },
      { step: 'Protect', product: 'Silk Veil Sunscreen SPF 50', detail: 'Daily UV defense with a dewy, never tight finish.' },
    ],
    tips: [
      'Apply serum to slightly damp skin to pull hydration deeper.',
      'Layer a facial oil at night for an extra moisture seal.',
      'Avoid hot water — lukewarm keeps your barrier intact.',
    ],
  },
  oily: {
    type: 'oily',
    label: 'Oily Skin',
    emoji: '🌿',
    intro:
      'Balance is your goal. This routine controls excess sebum while keeping skin hydrated and comfortably matte.',
    routine: [
      { step: 'Morning', product: 'Rose Cloud Face Wash', detail: 'A gel-to-foam cleanse that clears oil without over-stripping.' },
      { step: 'Treat', product: 'Glow Drops Serum', detail: 'Vitamin C brightens and helps balance oil production.' },
      { step: 'Hydrate', product: 'Velvet Dew Moisturizer', detail: 'A gel-cream texture hydrates without clogging pores.' },
      { step: 'Protect', product: 'Silk Veil Sunscreen SPF 50', detail: 'A fluid, matte-finish SPF that never feels heavy.' },
    ],
    tips: [
      'Cleanse twice daily to manage excess sebum.',
      'Skip heavy creams — lightweight gel-creams are your friend.',
      'Niacinamide helps refine the look of enlarged pores.',
    ],
  },
  combination: {
    type: 'combination',
    label: 'Combination Skin',
    emoji: '⚖️',
    intro:
      'Two zones, one routine. These products balance an oily T-zone while caring for drier cheeks.',
    routine: [
      { step: 'Morning', product: 'Rose Cloud Face Wash', detail: 'A balanced gel cleanse that respects both zones.' },
      { step: 'Treat', product: 'Glow Drops Serum', detail: 'Brighten and even tone across the whole face.' },
      { step: 'Hydrate', product: 'Velvet Dew Moisturizer', detail: 'Apply more on cheeks, less on the T-zone.' },
      { step: 'Protect', product: 'Silk Veil Sunscreen SPF 50', detail: 'Weightless protection that adapts to both areas.' },
    ],
    tips: [
      'Use a clay mask on your T-zone once a week.',
      'Layer extra hydration only where your skin feels dry.',
      'Blot, don\'t over-cleanse, to manage midday shine.',
    ],
  },
  sensitive: {
    type: 'sensitive',
    label: 'Sensitive Skin',
    emoji: '🌸',
    intro:
      'Calm and soothe is the priority. This fragrance-free routine strengthens your barrier and reduces redness.',
    routine: [
      { step: 'Morning', product: 'Honey Milk Cleanser', detail: 'A gentle, creamy cleanse that comforts reactive skin.' },
      { step: 'Treat', product: 'Glow Drops Serum', detail: 'A low-irritation brightener — patch test first.' },
      { step: 'Hydrate', product: 'Velvet Dew Moisturizer', detail: 'Ceramides rebuild a fragile moisture barrier.' },
      { step: 'Protect', product: 'Silk Veil Sunscreen SPF 50', detail: 'Mineral-friendly SPF with no stinging or white cast.' },
    ],
    tips: [
      'Introduce one new product at a time.',
      'Always patch test on your inner arm for 24 hours.',
      'Choose fragrance-free formulas to avoid flare-ups.',
    ],
  },
};

export type Review = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    name: 'Amara L.',
    role: 'Verified Buyer',
    avatar: 'https://images.pexels.com/photos/29755259/pexels-photo-29755259.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'The AI quiz nailed my combination skin. My T-zone is finally balanced and my cheeks feel soft for the first time in years.',
  },
  {
    name: 'Priya S.',
    role: 'Skincare Enthusiast',
    avatar: 'https://images.pexels.com/photos/9774655/pexels-photo-9774655.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'Glow Drops gave me a visible glow in two weeks. The sunscreen leaves zero white cast — it is now my everyday staple.',
  },
  {
    name: 'Sofia M.',
    role: 'Verified Buyer',
    avatar: 'https://images.pexels.com/photos/8140902/pexels-photo-8140902.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'As someone with sensitive skin, I was nervous. The Honey Milk Cleanser is the gentlest, most effective cleanse I have tried.',
  },
  {
    name: 'Jordan T.',
    role: 'Verified Buyer',
    avatar: 'https://images.pexels.com/photos/13140394/pexels-photo-13140394.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'The routine builder felt personal, not generic. My dry skin has never looked this dewy and healthy.',
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'How does the AI recommendation work?',
    answer:
      'After you complete the Skin Quiz, our system matches your answers to a curated routine designed for your skin type — balancing ingredients, texture, and order of application.',
  },
  {
    question: 'Are GlowCare products suitable for sensitive skin?',
    answer:
      'Yes. Every formula is fragrance-free and dermatologist-tested. Our sensitive-skin routine is specifically built to calm and strengthen a fragile barrier.',
  },
  {
    question: 'How long until I see results?',
    answer:
      'Most customers notice softer, more hydrated skin within a week. Brightening and tone-evening results from the serum typically appear after 3–4 weeks of consistent use.',
  },
  {
    question: 'Can I use these products together?',
    answer:
      'Absolutely. Each recommended routine is designed as a complete, compatible system — cleanse, treat, hydrate, and protect in the right order.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer:
      'Every GlowCare product is cruelty-free and never tested on animals. Our sunscreen is also reef-safe.',
  },
];
