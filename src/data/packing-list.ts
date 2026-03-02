// packing-list.ts — Philippines-specific packing config
// Merges with packing-base.ts universal items at runtime

import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

// ─────────────────────────────────────────────────────────────────────────────
// PHILIPPINES DESTINATION ESSENTIALS (unique to this country)
// ─────────────────────────────────────────────────────────────────────────────
export const PHILIPPINES_ESSENTIALS: PackingItem[] = [
  {
    id: 'ph-sunscreen',
    name: 'Reef-Safe Mineral Sunscreen',
    category: 'destination',
    description: 'Marine park rangers at El Nido, Tubbataha, and Apo Island will turn you away with chemical sunscreen. Zinc oxide only.',
    essential: true,
    climate: ['tropical', 'coastal'],
    amazonSearchFallback: 'reef+safe+mineral+sunscreen+zinc+oxide',
    affiliatePrice: '$12–22',
    localAlternative: 'Available in Manila and Cebu malls but expensive — bring from home',
  },
  {
    id: 'ph-drybag',
    name: 'Waterproof Dry Bag (20L)',
    category: 'destination',
    description: 'Island hopping means everything rides in open bangkas. One wave, one rogue splash from a spray — your electronics are gone without this.',
    essential: true,
    climate: ['tropical', 'coastal'],
    amazonSearchFallback: 'dry+bag+20l+waterproof+island+hopping',
    affiliatePrice: '$18–35',
    localAlternative: 'Available at outdoor shops in El Nido and Coron but quality varies',
  },
  {
    id: 'ph-seasick',
    name: 'Seasickness Medicine',
    category: 'destination',
    description: 'Typhoon season means rough swells on every inter-island crossing. Dramamine or Bonine, taken 1 hour before boarding. In calm dry season, optional — but bangkas can still rock.',
    essential: true,
    seasons: ['rainy', 'shoulder'],
    amazonSearchFallback: 'dramamine+seasickness+motion+sickness+tablets',
    affiliatePrice: '$5–12',
    localAlternative: 'Meclizine available at Mercury Drug for about ₱5/tab',
  },
  {
    id: 'ph-phoneholder',
    name: 'Waterproof Phone Pouch',
    category: 'destination',
    description: 'Underground rivers, waterfalls, snorkeling — your phone touches water every single day in the Philippines.',
    essential: true,
    climate: ['tropical', 'coastal'],
    amazonSearchFallback: 'waterproof+phone+pouch+neck+lanyard',
    affiliatePrice: '$10–20',
    localAlternative: 'Available at dive shops in El Nido and Boracay',
  },
  {
    id: 'ph-phrases',
    name: 'Filipino Phrase Card / App',
    category: 'destination',
    description: '"Salamat" (thank you), "Kuya/Ate" (respectful address), "Magkano?" (how much?) — basic phrases open doors and unlock smiles.',
    essential: false,
    localAlternative: 'Google Translate works everywhere with signal — download Filipino offline pack',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GEAR WE RECOMMEND — Philippines (4-6 curated items for GearRecommendations component)
// ─────────────────────────────────────────────────────────────────────────────
export const PHILIPPINES_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  {
    id: 'gr-ph-sunscreen',
    name: 'Reef-Safe Mineral Sunscreen',
    reason: 'Marine park rangers at El Nido will turn you away with chemical sunscreen. Coral-safe is mandatory — and the coral here is worth protecting.',
    amazonSearchFallback: 'reef+safe+mineral+sunscreen',
    affiliatePrice: '~$14',
  },
  {
    id: 'gr-ph-drybag',
    name: 'Dry Bag (20L)',
    reason: 'Island hopping means your stuff rides in open bangka boats. One wave and your phone is gone. This is the single most important gear item for the Philippines.',
    amazonSearchFallback: 'dry+bag+20l+waterproof',
    affiliatePrice: '~$22',
  },
  {
    id: 'gr-ph-towel',
    name: 'Quick-Dry Travel Towel',
    reason: "Beach resorts provide towels. Island-hopping boats, waterfall hikes, and homestays don't. Pack one that dries in 30 minutes in the sun.",
    amazonSearchFallback: 'quick+dry+microfiber+travel+towel',
    affiliatePrice: '~$18',
  },
  {
    id: 'gr-ph-phoneholder',
    name: 'Waterproof Phone Pouch',
    reason: 'Underground rivers. Waterfall hikes. Snorkel trips. Bangka spray. Your phone sees water daily here. ₱500 of protection for a $1,000 device.',
    amazonSearchFallback: 'waterproof+phone+pouch+lanyard',
    affiliatePrice: '~$12',
  },
  {
    id: 'gr-ph-repellent',
    name: 'DEET Insect Repellent',
    reason: 'Dengue is real in the Philippines — cases spike after typhoon season. DEET works. Natural alternatives with citronella do not in tropical humidity.',
    amazonSearchFallback: 'deet+30+percent+insect+repellent',
    affiliatePrice: '~$9',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PHILIPPINES SITE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const PHILIPPINES_CONFIG: PackingConfig = {
  sitePrefix: 'dph',
  destination: 'Philippines',
  climate: ['tropical', 'coastal'],
  currency: 'PHP',
  plugType: 'Type A/B/C',
  plugVoltage: '220V',
  affiliateTag: 'discoverphili-20',
  destinationEssentials: PHILIPPINES_ESSENTIALS,
  gearRecommendations: PHILIPPINES_GEAR_RECOMMENDATIONS,
};

// ─────────────────────────────────────────────────────────────────────────────
// FAQ ITEMS for packing-list.astro
// ─────────────────────────────────────────────────────────────────────────────
// Universal alias — copied to all sites, import SITE_CONFIG in PackingList.astro
export const SITE_CONFIG = PHILIPPINES_CONFIG;

export const PHILIPPINES_PACKING_FAQS = [
  {
    question: 'What should I pack for the Philippines?',
    answer: 'The essentials are reef-safe sunscreen, a dry bag for island hopping, insect repellent (DEET-based for dengue protection), a waterproof phone pouch, and seasickness medicine for boat transfers. Our interactive checklist above covers 60+ items across 7 categories, customized for the Philippines\' tropical climate.',
  },
  {
    question: 'Do I need bug spray in the Philippines?',
    answer: 'Yes — DEET-based insect repellent is essential. Dengue fever is endemic in the Philippines with peaks after typhoon season (October–December). Use at least 20–30% DEET on exposed skin, especially at dusk and dawn. Natural alternatives with citronella are not effective in tropical humidity.',
  },
  {
    question: 'What power adapter do I need for the Philippines?',
    answer: 'The Philippines uses Type A and Type B plugs (the same flat 2-pin and 3-pin plugs as the USA) at 220V/60Hz. American devices work without an adapter, but check your device\'s voltage rating — most modern phones, laptops, and cameras handle 110–240V automatically. Older single-voltage devices will need a converter.',
  },
  {
    question: 'Can I buy toiletries in the Philippines?',
    answer: 'Yes — basic toiletries are available everywhere at SM, Robinsons, and Mercury Drug. Bring your own reef-safe sunscreen (hard to find locally and expensive), DEET insect repellent, and any prescription medications. Everything else — shampoo, toothpaste, deodorant, flip-flops — buy locally and save luggage space.',
  },
  {
    question: 'How many outfits should I pack for the Philippines?',
    answer: 'For a 7-day trip: 4 lightweight shirts, 2–3 shorts, 1 pair of long pants (for temples, nicer restaurants), 2 swimsuits. Laundry is cheap everywhere — ₱100–150/kg for wash-and-fold, usually same day. For 14 days, pack the same and use laundry every 4–5 days rather than doubling your clothes.',
  },
  {
    question: 'What should I NOT bring to the Philippines?',
    answer: 'Skip the hair dryer (every hotel has one), heavy cotton clothing (stays wet in humidity for hours), expensive jewelry (theft risk in crowds), and large amounts of cash beyond what you need for a few days. Also leave the physical guidebook — Google Maps and offline apps are more useful and up-to-date.',
  },
];
