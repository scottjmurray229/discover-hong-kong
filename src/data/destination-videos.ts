/**
 * Shared video map for destination cards.
 * Maps destination slugs to video file paths (preview preferred, hero as fallback).
 * Used by: src/pages/index.astro, src/pages/destinations/index.astro
 */

export interface VideoData {
  preview: string;
  hero: string;
}

export const destinationVideoMap: Record<string, VideoData> = {
  'victoria-peak': { preview: '', hero: '' },
  'tsim-sha-tsui': { preview: '', hero: '' },
  'mong-kok': { preview: '', hero: '' },
  'lantau-island': { preview: '', hero: '' },
  'central': { preview: '', hero: '' },
  'wan-chai': { preview: '', hero: '' },
  'aberdeen': { preview: '', hero: '' },
  'sai-kung': { preview: '', hero: '' },
  'stanley': { preview: '', hero: '' },
  'causeway-bay': { preview: '', hero: '' },
  'lamma-island': { preview: '', hero: '' },
  'tai-o': { preview: '', hero: '' },
};
