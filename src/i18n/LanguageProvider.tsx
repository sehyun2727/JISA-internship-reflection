import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LOCALES, type Locale } from './types'
import { translations } from './translations'

const STORAGE_KEY = 'locale'

// og:locale wants underscore variants (ko_KR), not the app's hyphenated locale codes.
const OG_LOCALE: Record<Locale, string> = { ko: 'ko_KR', ja: 'ja_JP', en: 'en_US' }

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'ko'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored && (LOCALES as string[]).includes(stored) ? (stored as Locale) : 'ko'
}

function setMetaContent(selector: string, content: string) {
  document.head.querySelector(selector)?.setAttribute('content', content)
}

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale())

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  useEffect(() => {
    const t = translations[locale]
    document.documentElement.lang = locale
    document.title = t.meta.title
    setMetaContent('meta[name="description"]', t.meta.description)
    setMetaContent('meta[property="og:title"]', t.meta.title)
    setMetaContent('meta[property="og:description"]', t.meta.description)
    setMetaContent('meta[property="og:locale"]', OG_LOCALE[locale])
    setMetaContent('meta[name="twitter:title"]', t.meta.title)
    setMetaContent('meta[name="twitter:description"]', t.meta.description)
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

function useLanguageContext() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLocale/useTranslation must be used within a LanguageProvider')
  return ctx
}

export function useLocale() {
  return useLanguageContext()
}

export function useTranslation() {
  const { locale } = useLanguageContext()
  return translations[locale]
}
