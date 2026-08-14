import { useEffect, useId, useRef, useState } from 'react'
import { nav } from '../content/portfolio'
import { useHeaderScrolled } from '../hooks/useHeaderScrolled'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { LOCALES } from '../i18n/types'
import { useLocale, useTranslation } from '../i18n/LanguageProvider'
import styles from './Header.module.css'

const SECTION_IDS = nav.items.map((item) => item.href.replace('#', ''))

function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const t = useTranslation()

  return (
    <div className={styles.langSwitcher} role="group" aria-label={t.header.languageSwitcherAriaLabel}>
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          className={styles.langButton}
          aria-pressed={locale === code}
          aria-label={t.header.languageNames[code]}
          onClick={() => setLocale(code)}
        >
          {code === 'ja' ? 'JP' : code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const scrolled = useHeaderScrolled()
  const activeId = useScrollSpy(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const t = useTranslation()

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [activeId])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.wordmark}>
          {nav.wordmark}
        </a>

        <div className={styles.actions}>
          <nav className={styles.nav} aria-label={t.header.navAriaLabel}>
            <ul className={styles.navList}>
              {nav.items.map((item) => {
                const id = item.href.replace('#', '')
                const isActive = id === activeId
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={styles.navLink}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span className={styles.navDot} aria-hidden="true" />
                      {t.header.nav[item.key]}
                    </a>
                  </li>
                )
              })}
            </ul>
            <a
              href={nav.githubHref}
              className={styles.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.common.githubLabel}
            </a>
          </nav>

          <LanguageSwitcher />

          <button
            ref={toggleRef}
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="visuallyHidden">{menuOpen ? t.header.menuClose : t.header.menuOpen}</span>
            <span className={styles.menuIcon} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id={menuId} className={styles.mobileMenu} hidden={!menuOpen}>
        <ul className={styles.mobileNavList}>
          {nav.items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {t.header.nav[item.key]}
              </a>
            </li>
          ))}
          <li>
            <a
              href={nav.githubHref}
              className={styles.mobileNavLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.common.githubLabel}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
