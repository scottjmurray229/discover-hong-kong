// Popular Hong Kong POI coordinates for itinerary geocoding.
// Keyed by lowercase normalized name. Covers top attractions across all HK destinations.
// Used by generate-itinerary.ts to resolve activity coordinates without Geocoding API calls.

export const LANDMARK_COORDS: Record<string, { lat: number; lng: number }> = {
  // ── Hong Kong International Airport ──
  'hong kong international airport': { lat: 22.3080, lng: 113.9185 },
  'hkia': { lat: 22.3080, lng: 113.9185 },
  'chek lap kok': { lat: 22.3080, lng: 113.9185 },

  // ── Central ──
  'central': { lat: 22.2820, lng: 114.1588 },
  'hong kong station': { lat: 22.2846, lng: 114.1583 },
  'ifc mall': { lat: 22.2855, lng: 114.1583 },
  'exchange square': { lat: 22.2835, lng: 114.1566 },
  'mid-levels escalator': { lat: 22.2840, lng: 114.1520 },
  'soho central': { lat: 22.2825, lng: 114.1510 },
  'lan kwai fong': { lat: 22.2812, lng: 114.1552 },
  'government house': { lat: 22.2789, lng: 114.1589 },
  'tai cheong bakery': { lat: 22.2804, lng: 114.1537 },
  'man mo temple': { lat: 22.2842, lng: 114.1500 },

  // ── The Peak ──
  'victoria peak': { lat: 22.2759, lng: 114.1455 },
  'the peak': { lat: 22.2759, lng: 114.1455 },
  'peak tram': { lat: 22.2802, lng: 114.1515 },
  'peak tower': { lat: 22.2762, lng: 114.1484 },

  // ── Sheung Wan ──
  'sheung wan': { lat: 22.2870, lng: 114.1517 },
  'tai ping shan': { lat: 22.2870, lng: 114.1490 },
  'western market': { lat: 22.2869, lng: 114.1516 },

  // ── Wan Chai ──
  'wan chai': { lat: 22.2783, lng: 114.1727 },
  'hong kong convention centre': { lat: 22.2828, lng: 114.1740 },
  'golden bauhinia square': { lat: 22.2834, lng: 114.1744 },
  'the pawn wanchai': { lat: 22.2785, lng: 114.1720 },

  // ── Causeway Bay ──
  'causeway bay': { lat: 22.2800, lng: 114.1840 },
  'victoria park': { lat: 22.2828, lng: 114.1878 },
  'times square hk': { lat: 22.2785, lng: 114.1825 },
  'tai hang': { lat: 22.2779, lng: 114.1888 },

  // ── Aberdeen ──
  'aberdeen': { lat: 22.2483, lng: 114.1574 },
  'aberdeen harbour': { lat: 22.2483, lng: 114.1574 },
  'jumbo floating restaurant': { lat: 22.2408, lng: 114.1588 },

  // ── Stanley ──
  'stanley': { lat: 22.2189, lng: 114.2133 },
  'stanley market': { lat: 22.2189, lng: 114.2133 },
  'stanley military cemetery': { lat: 22.2106, lng: 114.2183 },
  'stanley beach': { lat: 22.2189, lng: 114.2178 },
  'st stephens beach': { lat: 22.2139, lng: 114.2178 },

  // ── Tsim Sha Tsui (TST) ──
  'tsim sha tsui': { lat: 22.2980, lng: 114.1722 },
  'clock tower tst': { lat: 22.2944, lng: 114.1703 },
  'avenue of stars': { lat: 22.2939, lng: 114.1742 },
  'the peninsula hotel': { lat: 22.2956, lng: 114.1726 },
  'hong kong museum of history': { lat: 22.2966, lng: 114.1763 },
  'kowloon park': { lat: 22.2997, lng: 114.1700 },
  'rosewood hong kong': { lat: 22.2950, lng: 114.1775 },
  'harbor city': { lat: 22.2994, lng: 114.1683 },
  'harbour city': { lat: 22.2994, lng: 114.1683 },
  '1881 heritage': { lat: 22.2963, lng: 114.1722 },

  // ── Jordan / Yau Ma Tei ──
  'jordan': { lat: 22.3051, lng: 114.1720 },
  'yau ma tei': { lat: 22.3101, lng: 114.1691 },
  'temple street night market': { lat: 22.3083, lng: 114.1694 },
  'tin hau temple yaumatei': { lat: 22.3103, lng: 114.1699 },

  // ── Mong Kok ──
  'mong kok': { lat: 22.3193, lng: 114.1693 },
  'ladies market': { lat: 22.3193, lng: 114.1717 },
  'sneaker street': { lat: 22.3183, lng: 114.1693 },
  'flower market mong kok': { lat: 22.3283, lng: 114.1700 },
  'bird garden mong kok': { lat: 22.3294, lng: 114.1706 },

  // ── Sham Shui Po ──
  'sham shui po': { lat: 22.3294, lng: 114.1619 },

  // ── Wong Tai Sin ──
  'wong tai sin temple': { lat: 22.3422, lng: 114.1942 },

  // ── Diamond Hill ──
  'chi lin nunnery': { lat: 22.3378, lng: 114.2005 },
  'nan lian garden': { lat: 22.3367, lng: 114.2014 },

  // ── Sai Kung ──
  'sai kung': { lat: 22.3803, lng: 114.2700 },
  'sai kung waterfront': { lat: 22.3803, lng: 114.2700 },
  'high island reservoir': { lat: 22.3883, lng: 114.3383 },

  // ── New Territories ──
  'new territories': { lat: 22.4500, lng: 114.1667 },
  'sha tin': { lat: 22.3833, lng: 114.1883 },
  'sha tin racecourse': { lat: 22.3850, lng: 114.1917 },
  'ten thousand buddhas monastery': { lat: 22.3875, lng: 114.1952 },
  'tai po': { lat: 22.4508, lng: 114.1642 },
  'tai mei tuk': { lat: 22.4700, lng: 114.2383 },
  'ping shan heritage trail': { lat: 22.4583, lng: 113.9983 },
  'yuen long': { lat: 22.4450, lng: 114.0217 },

  // ── Lantau Island ──
  'lantau island': { lat: 22.2667, lng: 113.9333 },
  'tian tan buddha': { lat: 22.2538, lng: 113.9050 },
  'big buddha': { lat: 22.2538, lng: 113.9050 },
  'po lin monastery': { lat: 22.2558, lng: 113.9050 },
  'ngong ping': { lat: 22.2553, lng: 113.9056 },
  'ngong ping 360': { lat: 22.2553, lng: 113.9056 },
  'tai o': { lat: 22.2547, lng: 113.8633 },
  'tai o stilt village': { lat: 22.2547, lng: 113.8633 },
  'discovery bay': { lat: 22.2783, lng: 114.0467 },
  'mui wo': { lat: 22.2650, lng: 114.0000 },
  'silver mine bay': { lat: 22.2650, lng: 114.0000 },
  'cheung sha beach': { lat: 22.2333, lng: 113.9700 },

  // ── Lamma Island ──
  'lamma island': { lat: 22.2167, lng: 114.1167 },
  'yung shue wan': { lat: 22.2208, lng: 114.1208 },
  'sok kwu wan': { lat: 22.2133, lng: 114.1300 },
  'lamma fisherfolk village': { lat: 22.2208, lng: 114.1208 },

  // ── Cheung Chau ──
  'cheung chau': { lat: 22.2108, lng: 114.0267 },

  // ── Mui Wo / Peng Chau ──
  'peng chau': { lat: 22.2867, lng: 114.0400 },

  // ── Star Ferry ──
  'star ferry': { lat: 22.2944, lng: 114.1672 },
  'star ferry pier tsim sha tsui': { lat: 22.2944, lng: 114.1672 },
  'star ferry pier central': { lat: 22.2872, lng: 114.1600 },

  // ── Hiking ──
  'dragons back': { lat: 22.2483, lng: 114.2383 },
  "dragon's back": { lat: 22.2483, lng: 114.2383 },
  'macLehose trail': { lat: 22.3883, lng: 114.2383 },
  'hong kong trail': { lat: 22.2667, lng: 114.1700 },
  'wilson trail': { lat: 22.3333, lng: 114.2333 },

  // ── Museums ──
  'hong kong museum of art': { lat: 22.2939, lng: 114.1717 },
  'hong kong space museum': { lat: 22.2950, lng: 114.1714 },
  'hong kong science museum': { lat: 22.2994, lng: 114.1728 },
  'hong kong museum of coastal defence': { lat: 22.2783, lng: 114.2283 },
  'sai wan war cemetery': { lat: 22.2683, lng: 114.2417 },

  // ── Macau (day trip) ──
  'macau': { lat: 22.1987, lng: 113.5439 },
  'macau ferry terminal': { lat: 22.1987, lng: 113.5439 },
};
