import { Reveal } from '../components/Reveal'
import { footer as footerData, images, person } from '../content/portfolio'
import { useTranslation } from '../i18n/LanguageProvider'
import styles from './Footer.module.css'

export function Footer() {
  const t = useTranslation()
  const footer = t.footer
  const portrait = images.portrait
  const portraitText = t.images.portrait

  const contacts = [
    { label: footer.contactLabels.email, href: footerData.emailHref },
    { label: footer.contactLabels.github, href: footerData.githubHref },
    { label: footer.contactLabels.hullWebsite, href: footerData.hullWebsiteHref },
  ]

  return (
    <footer className={styles.footer} aria-labelledby="footer-title">
      <div className="container">
        <Reveal className={styles.signature}>
          <img
            src={portrait.src}
            width={portrait.width}
            height={portrait.height}
            alt={portraitText.alt}
            loading="lazy"
            decoding="async"
            className={styles.signatureImg}
            style={{ objectPosition: portrait.objectPosition }}
          />
          <div className={styles.signatureText}>
            <p className={styles.signatureName}>{person.nameKo}</p>
            <p className={styles.signatureRole}>{footer.signatureRole}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 id="footer-title" className={styles.closing}>
            {footer.closingLines.map((line) => (
              <span key={line} className={styles.closingLine}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.closingMeta}>{footer.closingMeta}</p>
        </Reveal>

        <Reveal className={styles.thanks} delay={120}>
          <p>{footer.thanks}</p>
        </Reveal>

        <nav className={styles.contacts} aria-label={footer.contactsAriaLabel}>
          <ul className={styles.contactList}>
            {contacts.map((contact) => {
              const isExternal = contact.href.startsWith('http')
              return (
                <li key={contact.href}>
                  <a
                    href={contact.href}
                    className={styles.contactLink}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {contact.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className={styles.bottom}>
          <div className={styles.program}>
            {footer.programLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className={styles.notice}>
            {footer.noticeLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a href={footerData.backToTopHref} className={styles.backToTop}>
            {footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
