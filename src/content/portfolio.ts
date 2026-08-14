// Locale-independent data only — image geometry, hrefs, and raw facts.
// All display text (alt/caption/label, headings, body copy) lives in
// src/i18n/translations.ts and is looked up by these same keys via useTranslation().
// Edit Claude.md first, then sync translations.ts — this file should rarely change.

const BASE = import.meta.env.BASE_URL

// Central metadata for the 5 real event photos + the personal portrait.
// Each real photo ships two WebP widths (see public/images/experience/,
// generated from image-sources/ with EXIF auto-orientation baked in).
export const images = {
  heroVisionTeam: {
    large: `${BASE}images/experience/hull-vision-team-1400.webp`,
    small: `${BASE}images/experience/hull-vision-team-700.webp`,
    width: 1400,
    height: 1050,
    objectPosition: 'center 35%',
  },
  experienceTeam: {
    large: `${BASE}images/experience/hull-team-1800.webp`,
    small: `${BASE}images/experience/hull-team-800.webp`,
    width: 1800,
    height: 1350,
    objectPosition: 'center',
  },
  expoTeam: {
    large: `${BASE}images/experience/expo-team-1200.webp`,
    small: `${BASE}images/experience/expo-team-640.webp`,
    width: 1200,
    height: 900,
    objectPosition: 'center 30%',
  },
  expoSignage: {
    large: `${BASE}images/experience/expo-digital-signage-800.webp`,
    small: `${BASE}images/experience/expo-digital-signage-420.webp`,
    width: 800,
    height: 1067,
    objectPosition: 'center',
  },
  expoRobot: {
    large: `${BASE}images/experience/expo-collaborative-robot-800.webp`,
    small: `${BASE}images/experience/expo-collaborative-robot-420.webp`,
    width: 800,
    height: 1067,
    objectPosition: 'center',
  },
  portrait: {
    src: `${BASE}images/experience/portrait-sung-sehyun-320.webp`,
    large: `${BASE}images/experience/portrait-sung-sehyun-640.webp`,
    width: 640,
    height: 800,
    objectPosition: 'center 15%',
  },
  renewalBefore: {
    large: `${BASE}images/experience/hull-before-home-1600.webp`,
    small: `${BASE}images/experience/hull-before-home-800.webp`,
    width: 1600,
    height: 813,
    objectPosition: 'top',
  },
  renewalAfter: {
    large: `${BASE}images/experience/hull-after-home-1600.webp`,
    small: `${BASE}images/experience/hull-after-home-800.webp`,
    width: 1600,
    height: 855,
    objectPosition: 'top',
  },
  simulatorBefore: {
    large: `${BASE}images/experience/simulator-editor-1600.webp`,
    small: `${BASE}images/experience/simulator-editor-800.webp`,
    width: 1600,
    height: 857,
    objectPosition: 'top',
  },
  simulatorAfter: {
    large: `${BASE}images/experience/simulator-result-1600.webp`,
    small: `${BASE}images/experience/simulator-result-800.webp`,
    width: 1600,
    height: 852,
    objectPosition: 'top',
  },
} as const

export const person = {
  nameKo: '성세현',
  nameEn: 'Sung Sehyun',
  nameHanja: '成世睍',
  email: 'sehyun2727@gmail.com',
  githubProfile: 'https://github.com/sehyun2727',
} as const

export const repos = {
  simulator: 'https://github.com/sehyun2727/Digitalsignage-Simulater',
  landingPage: 'https://github.com/sehyun2727/JISA-internship-reflection',
} as const

export const internship = {
  period: '2026.06.30 — 08.29',
  location: 'Tokyo, Japan',
  company: 'HULL株式会社',
  companySite: 'https://hull-inc.jp/',
} as const

export const nav = {
  wordmark: 'S.S / TOKYO 2026',
  items: [
    { key: 'experience', href: '#experience' },
    { key: 'renewal', href: '#renewal' },
    { key: 'simulator', href: '#simulator' },
    { key: 'growth', href: '#growth' },
  ],
  githubHref: person.githubProfile,
} as const

export const simulator = {
  repoUrl: repos.simulator,
  techLine: 'React · TypeScript · Konva · Zustand · Vitest · Playwright',
} as const

export const footer = {
  emailHref: `mailto:${person.email}`,
  githubHref: repos.landingPage,
  hullWebsiteHref: internship.companySite,
  backToTopHref: '#top',
} as const
