// Shared destination coordinates — single source of truth
// Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  'victoria-peak': { lat: 22.2759, lng: 114.1455, label: 'Victoria Peak' },
  'tsim-sha-tsui': { lat: 22.2970, lng: 114.1722, label: 'Tsim Sha Tsui' },
  'mong-kok': { lat: 22.3193, lng: 114.1694, label: 'Mong Kok' },
  'lantau-island': { lat: 22.2611, lng: 113.9442, label: 'Lantau Island' },
  'central': { lat: 22.2819, lng: 114.1577, label: 'Central District' },
  'wan-chai': { lat: 22.2793, lng: 114.1722, label: 'Wan Chai' },
  'aberdeen': { lat: 22.2490, lng: 114.1510, label: 'Aberdeen' },
  'sai-kung': { lat: 22.3826, lng: 114.2707, label: 'Sai Kung' },
  'stanley': { lat: 22.2193, lng: 114.2135, label: 'Stanley' },
  'causeway-bay': { lat: 22.2800, lng: 114.1840, label: 'Causeway Bay' },
  'lamma-island': { lat: 22.2110, lng: 114.1240, label: 'Lamma Island' },
  'tai-o': { lat: 22.2535, lng: 113.8640, label: 'Tai O' },
};

// Map center for Hong Kong
export const MAP_CENTER = { lat: 22.3193, lng: 114.1694 };
export const MAP_ZOOM = 11;
