import { Reveal } from '../components/Reveal'
import { images } from '../content/portfolio'
import { useTranslation } from '../i18n/LanguageProvider'
import styles from './WebsiteRenewal.module.css'

export function WebsiteRenewal() {
  const t = useTranslation()
  const websiteRenewal = t.renewal
  const beforeText = t.images.renewalBefore
  const afterText = t.images.renewalAfter

  return (
    <section id="renewal" className={`section ${styles.section}`} aria-labelledby="renewal-title">
      <div className="container">
        <Reveal>
          <p className="kicker">{websiteRenewal.kicker}</p>
          <h2 id="renewal-title" className="sectionTitle">
            {websiteRenewal.titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal className={styles.lead}>
          <p>{websiteRenewal.lead}</p>
        </Reveal>

        <div className={styles.compare}>
          <Reveal className={styles.compareCol}>
            <p className={styles.compareLabel}>{websiteRenewal.structureDiagram.before.heading}</p>
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <span />
                <span />
                <span />
              </div>
              <img
                src={images.renewalBefore.small}
                srcSet={`${images.renewalBefore.small} 800w, ${images.renewalBefore.large} 1600w`}
                sizes="(min-width: 720px) 42vw, 92vw"
                width={images.renewalBefore.width}
                height={images.renewalBefore.height}
                alt={beforeText.alt}
                loading="lazy"
                decoding="async"
                className={styles.frameImg}
                style={{ objectPosition: images.renewalBefore.objectPosition }}
              />
            </div>
            <ul className={styles.compareList}>
              {websiteRenewal.structureDiagram.before.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className={styles.compareCol}>
            <p className={styles.compareLabel}>{websiteRenewal.structureDiagram.after.heading}</p>
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <span />
                <span />
                <span />
              </div>
              <img
                src={images.renewalAfter.small}
                srcSet={`${images.renewalAfter.small} 800w, ${images.renewalAfter.large} 1600w`}
                sizes="(min-width: 720px) 42vw, 92vw"
                width={images.renewalAfter.width}
                height={images.renewalAfter.height}
                alt={afterText.alt}
                loading="lazy"
                decoding="async"
                className={styles.frameImg}
                style={{ objectPosition: images.renewalAfter.objectPosition }}
              />
            </div>
            <ul className={styles.compareList}>
              {websiteRenewal.structureDiagram.after.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className={styles.flow}>
          <ol className={styles.flowList}>
            {websiteRenewal.flow.map((step) => (
              <li key={step} className={styles.flowStep}>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className={styles.subBlock}>
          <h3 className={styles.subBlockTitle}>{websiteRenewal.subBlockTitle}</h3>
          <p className={styles.subBlockBody}>{websiteRenewal.subBlockBody}</p>
          <p className={styles.status}>{websiteRenewal.status}</p>
        </Reveal>

        <dl className={styles.techStack}>
          {websiteRenewal.techStack.map((item) => (
            <div key={item.label} className={styles.techItem}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
