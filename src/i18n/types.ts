export type Locale = 'ko' | 'ja' | 'en'

export const LOCALES: Locale[] = ['ko', 'ja', 'en']

export const LOCALE_LABEL: Record<Locale, string> = {
  ko: 'KO',
  ja: 'JP',
  en: 'EN',
}

interface Fact {
  label: string
  value: string
  href?: string
}

interface Step {
  num: string
  label: string
}

interface Shift {
  before: string
  after: string
}

interface RailItem {
  label: string
  body: string
}

interface StructureBlock {
  heading: string
  items: string[]
}

interface ImageText {
  alt: string
  caption?: string
  label?: string
}

export interface Translation {
  meta: {
    title: string
    description: string
  }
  common: {
    skipLink: string
    githubLabel: string
  }
  header: {
    navAriaLabel: string
    nav: {
      experience: string
      renewal: string
      simulator: string
      growth: string
    }
    menuOpen: string
    menuClose: string
    languageSwitcherAriaLabel: string
    languageNames: Record<Locale, string>
  }
  hero: {
    chapterLabel: string
    eyebrow: string
    name: string
    subName: string
    roleLines: string[]
    introLines: string[]
    metadataRail: Fact[]
    cta: { label: string }
    photoLabel: string
  }
  storyBand: {
    titleLines: string[]
    bodyLines: string[]
  }
  bridges: {
    heroToExperience: string
    experienceToRenewal: string
    renewalToFieldInsight: string
    fieldInsightToSimulator: string
    simulatorToGrowth: string
  }
  experience: {
    kicker: string
    title: string
    intro: string
    axes: { num: string; code: string; title: string; body: string }[]
    strip: string[]
    figureMeta: string[]
  }
  renewal: {
    kicker: string
    titleLines: string[]
    lead: string
    flow: string[]
    subBlockTitle: string
    subBlockBody: string
    status: string
    structureDiagram: { before: StructureBlock; after: StructureBlock }
    techStack: Fact[]
  }
  fieldInsight: {
    kicker: string
    observation: {
      titleLines: string[]
      subhead: string
      body: string
      rail: RailItem[]
      securityNote: string
    }
    expo: { label: string; title: string; body: string }
    transition: {
      label: string
      titleLines: string[]
      titleLocalLines: string[]
      body: string
    }
  }
  simulator: {
    kicker: string
    titleLines: string[]
    projectNameLines: string[]
    body: string
    disclaimer: string
    steps: Step[]
    feedback: string
    facts: Fact[]
    highlights: string[]
    galleryCaptionBefore: string
    galleryCaptionAfter: string
  }
  growth: {
    kicker: string
    titleLines: string[]
    lead: string
    shifts: Shift[]
    communication: { title: string; body: string }
    life: { title: string; body: string }
    advice: { title: string; body: string }
  }
  footer: {
    closingLines: string[]
    thanks: string
    contactsAriaLabel: string
    contactLabels: { email: string; github: string; hullWebsite: string }
    programLines: string[]
    noticeLines: string[]
    closingMeta: string
    backToTop: string
    signatureRole: string
  }
  images: {
    heroVisionTeam: ImageText
    experienceTeam: ImageText
    expoTeam: ImageText
    expoSignage: ImageText
    expoRobot: ImageText
    portrait: ImageText
    renewalBefore: ImageText
    renewalAfter: ImageText
    simulatorBefore: ImageText
    simulatorAfter: ImageText
  }
}
