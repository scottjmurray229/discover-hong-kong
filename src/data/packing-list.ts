// packing-list.ts — Hong Kong-specific packing config
// Merges with packing-base.ts universal items at runtime

import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

// ─────────────────────────────────────────────────────────────────────────────
// HONG KONG DESTINATION ESSENTIALS (unique to this destination)
// ─────────────────────────────────────────────────────────────────────────────
export const HK_ESSENTIALS: PackingItem[] = [
  {
    id: 'hk-octopus',
    name: 'Octopus Card (Top Up at Airport)',
    category: 'destination',
    description: 'The single most essential item for Hong Kong. Works on MTR, trams, buses, ferries, and most convenience stores. Buy at the Airport Express counter on arrival and charge with HKD 300.',
    essential: true,
    climate: ['tropical', 'coastal'],
    amazonSearchFallback: 'octopus+card+hong+kong+travel',
    affiliatePrice: 'HKD 150 deposit',
    localAlternative: 'Available at every MTR station and the airport',
  },
  {
    id: 'hk-layers',
    name: 'Light Jacket / Layers',
    category: 'destination',
    description: 'October to March can be surprisingly cold — air conditioning in malls and restaurants is aggressively set to near-freezing year-round. A lightweight packable jacket is useful in all seasons.',
    essential: true,
    climate: ['tropical', 'coastal'],
    amazonSearchFallback: 'packable+lightweight+jacket+travel',
    affiliatePrice: '$30-60',
    localAlternative: 'Available everywhere in Hong Kong',
  },
  {
    id: 'hk-shoes',
    name: 'Comfortable Walking Shoes',
    category: 'destination',
    description: 'Hong Kong involves serious walking — hills, escalators, and market streets. If hiking the MacLehose Trail or Dragon\'s Back, bring proper hiking shoes. For urban exploration, well-fitted trainers are fine.',
    essential: true,
    climate: ['tropical', 'coastal'],
    amazonSearchFallback: 'comfortable+walking+shoes+travel',
    affiliatePrice: '$60-120',
    localAlternative: 'Available throughout Hong Kong',
  },
  {
    id: 'hk-adapter',
    name: 'Type G Power Adapter',
    category: 'destination',
    description: 'Hong Kong uses Type G plugs (the same 3-pin square plugs as the UK) at 220V/50Hz. Essential if your home country uses different plugs.',
    essential: true,
    climate: ['tropical', 'coastal'],
    amazonSearchFallback: 'type+g+uk+power+adapter+travel',
    affiliatePrice: '$10-15',
    localAlternative: 'Available at convenience stores and electronics shops',
  },
  {
    id: 'hk-phrases',
    name: 'Cantonese Phrase App',
    category: 'destination',
    description: '"M goi" (excuse me / thank you for service), "Do je" (thank you for a gift), "Gei do cheen?" (how much?) — basic Cantonese phrases get a warm response even in tourist areas.',
    essential: false,
    localAlternative: 'Google Translate works well — download Cantonese offline pack',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GEAR WE RECOMMEND — Hong Kong (4-6 curated items for GearRecommendations component)
// ─────────────────────────────────────────────────────────────────────────────
export const HK_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  {
    id: 'gr-hk-shoes',
    name: 'Comfortable Walking Shoes',
    reason: 'Hong Kong averages 10-15km of walking per day. Hills, stairs, and market streets. The right shoes make or break the trip.',
    amazonSearchFallback: 'comfortable+travel+walking+shoes',
    affiliatePrice: '~$75',
  },
  {
    id: 'gr-hk-jacket',
    name: 'Packable Down Jacket',
    reason: 'Air conditioning in Hong Kong is set to sub-zero in every mall, restaurant, and MTR carriage. Even in summer, you need layers the moment you step inside.',
    amazonSearchFallback: 'packable+down+jacket+lightweight',
    affiliatePrice: '~$55',
  },
  {
    id: 'gr-hk-daypack',
    name: 'Lightweight Daypack (20L)',
    reason: 'A full day in Hong Kong — dim sum, hiking, ferry, night market — means carrying water, layers, and your day\'s purchases. A packable daypack is essential.',
    amazonSearchFallback: 'lightweight+packable+daypack+20l',
    affiliatePrice: '~$30',
  },
  {
    id: 'gr-hk-adapter',
    name: 'Type G Power Adapter',
    reason: 'Hong Kong uses UK-style plugs. Buy a good adapter before you leave home — airport versions are overpriced.',
    amazonSearchFallback: 'type+g+uk+power+adapter',
    affiliatePrice: '~$12',
  },
  {
    id: 'gr-hk-waterbottle',
    name: 'Insulated Water Bottle',
    reason: 'Hong Kong tap water is safe to drink. Bring an insulated bottle and refill at MTR stations and hotels. Saves money and reduces plastic.',
    amazonSearchFallback: 'insulated+water+bottle+travel',
    affiliatePrice: '~$25',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HONG KONG SITE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const HK_CONFIG: PackingConfig = {
  sitePrefix: 'dhk',
  destination: 'Hong Kong',
  climate: ['tropical', 'coastal'],
  currency: 'HKD',
  plugType: 'Type G',
  plugVoltage: '220V',
  affiliateTag: 'discoverphili-20',
  destinationEssentials: HK_ESSENTIALS,
  gearRecommendations: HK_GEAR_RECOMMENDATIONS,
};

// ─────────────────────────────────────────────────────────────────────────────
// Universal alias — imported as SITE_CONFIG in packing-list.astro
// ─────────────────────────────────────────────────────────────────────────────
export const SITE_CONFIG = HK_CONFIG;

export const HK_PACKING_FAQS = [
  {
    question: 'What should I pack for Hong Kong?',
    answer: 'The essentials are comfortable walking shoes, a light jacket for air-conditioned spaces, a Type G power adapter, and layers for October-March. An Octopus card (bought on arrival) handles all transport. Our interactive checklist above covers 60+ items across 7 categories, customized for Hong Kong.',
  },
  {
    question: 'What power adapter do I need for Hong Kong?',
    answer: 'Hong Kong uses Type G plugs (the same 3-pin square plugs as the UK) at 220V/50Hz. If you are traveling from the USA, you will need a Type G adapter. Most modern electronics (phones, laptops, cameras) handle 100-240V automatically — check the label. Older single-voltage devices need a voltage converter.',
  },
  {
    question: 'Do I need to bring cash to Hong Kong?',
    answer: 'Credit cards are accepted at hotels, larger restaurants, and most shops. However, the traditional teahouses in Jordan and Mong Kok, wet market stalls, and street food vendors are cash-only. Bring HKD 500-1,000 in cash for the first day. ATMs are everywhere — HSBC and Hang Seng charge no fees for international cards at many locations.',
  },
  {
    question: 'What should I wear in Hong Kong?',
    answer: 'Light, breathable clothing for the heat and humidity from April to October. A light jacket is essential year-round for aggressive air conditioning. October to March can be genuinely cold (10-15 degrees C in January) — bring a proper warm layer. Smart casual is fine for most restaurants. One slightly nicer outfit for a harbour-view dinner is worth packing.',
  },
  {
    question: 'How many outfits should I pack for Hong Kong?',
    answer: 'For a 7-day trip: 4-5 lightweight shirts, 2-3 trousers or skirts, one smart casual outfit, comfortable walking shoes, and one pair of hiking shoes if you plan the MacLehose Trail or Dragon\'s Back. Laundry services are available at most hotels and laundromats throughout the city.',
  },
  {
    question: 'What should I NOT bring to Hong Kong?',
    answer: 'Skip excessive cash (ATMs everywhere), heavy clothing if visiting April-September, and items that can be bought cheaply locally. Electronics, clothing, and toiletries are all available in Hong Kong at competitive prices. The city is one of the world\'s great shopping destinations — leave room in your bag for what you find there.',
  },
];
