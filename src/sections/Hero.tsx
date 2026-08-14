import { Reveal } from '../components/Reveal'
import { images } from '../content/portfolio'
import { useTranslation } from '../i18n/LanguageProvider'
import styles from './Hero.module.css'

export function Hero() {
  const t = useTranslation()
  const hero = t.hero
  const portrait = images.portrait
  const portraitText = t.images.portrait

  return (
    <section id="top" className={`container ${styles.hero}`} aria-label={hero.name}>
      <div className={styles.introBlock}>
        <p className={styles.chapterLabel}>{hero.chapterLabel}</p>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <Reveal>
          <h1 className={styles.title}>
            <span className={styles.name}>{hero.name}</span>
            <span className={styles.subName}>{hero.subName}</span>
          </h1>
        </Reveal>
        <p className={styles.role}>{hero.roleLines.join('\n')}</p>
      </div>

      <Reveal className={styles.photo} delay={100}>
        <figure className={styles.photoFrame}>
          <img
            src={portrait.src}
            srcSet={`${portrait.src} 320w, ${portrait.large} 640w`}
            sizes="(min-width: 900px) 34vw, 80vw"
            width={portrait.width}
            height={portrait.height}
            alt={portraitText.alt}
            loading="eager"
            decoding="async"
            className={styles.photoImg}
            style={{ objectPosition: portrait.objectPosition }}
          />
          <span className={styles.photoLabel}>{hero.photoLabel}</span>
        </figure>
      </Reveal>

      <div className={styles.detailsBlock}>
        <p className={styles.intro}>{hero.introLines.join('\n')}</p>

        <dl className={styles.metaRail}>
          {hero.metadataRail.map((item) => (
            <div key={item.label} className={styles.metaItem}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        <a href="#experience" className={styles.cta}>
          {hero.cta.label}
        </a>
      </div>
    </section>
  )
}
