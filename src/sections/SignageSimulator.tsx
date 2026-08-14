import { Reveal } from '../components/Reveal'
import { images, simulator as simulatorData } from '../content/portfolio'
import { useTranslation } from '../i18n/LanguageProvider'
import styles from './SignageSimulator.module.css'

export function SignageSimulator() {
  const t = useTranslation()
  const simulator = t.simulator
  const beforeText = t.images.simulatorBefore
  const afterText = t.images.simulatorAfter

  return (
    <section id="simulator" className={styles.section} aria-labelledby="simulator-title">
      <div className="container">
        <Reveal>
          <p className={styles.kicker}>{simulator.kicker}</p>
          <h2 id="simulator-title" className={styles.title}>
            {simulator.titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal className={styles.projectName}>
          <p className={styles.projectNameLabel}>SIDE PROJECT</p>
          <p className={styles.projectNameTitle}>
            {simulator.projectNameLines.map((line) => (
              <span key={line} className={styles.projectNameLine}>
                {line}
              </span>
            ))}
          </p>
        </Reveal>

        <div className={styles.mainGrid}>
          <Reveal className={styles.body} delay={80}>
            <p>{simulator.body}</p>
            <p className={styles.disclaimer}>{simulator.disclaimer}</p>

            <ul className={styles.highlights}>
              {simulator.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.facts} delay={120}>
            <dl className={styles.factsList}>
              {simulator.facts.map((fact) =>
                'href' in fact && fact.href ? (
                  <div key={fact.label} className={styles.factItem}>
                    <dt>{fact.label}</dt>
                    <dd>
                      <a
                        href={fact.href}
                        className={styles.factLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {fact.value}
                      </a>
                    </dd>
                  </div>
                ) : (
                  <div key={fact.label} className={styles.factItem}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ),
              )}
            </dl>
          </Reveal>
        </div>

        <div className={styles.gallery}>
          <Reveal className={styles.galleryItem}>
            <figure className={styles.galleryFigure}>
              <img
                src={images.simulatorBefore.small}
                srcSet={`${images.simulatorBefore.small} 800w, ${images.simulatorBefore.large} 1600w`}
                sizes="(min-width: 720px) 42vw, 92vw"
                width={images.simulatorBefore.width}
                height={images.simulatorBefore.height}
                alt={beforeText.alt}
                loading="lazy"
                decoding="async"
                className={styles.galleryImg}
                style={{ objectPosition: images.simulatorBefore.objectPosition }}
              />
              <figcaption className={styles.galleryCaption}>{simulator.galleryCaptionBefore}</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={80} className={styles.galleryItem}>
            <figure className={styles.galleryFigure}>
              <img
                src={images.simulatorAfter.small}
                srcSet={`${images.simulatorAfter.small} 800w, ${images.simulatorAfter.large} 1600w`}
                sizes="(min-width: 720px) 42vw, 92vw"
                width={images.simulatorAfter.width}
                height={images.simulatorAfter.height}
                alt={afterText.alt}
                loading="lazy"
                decoding="async"
                className={styles.galleryImg}
                style={{ objectPosition: images.simulatorAfter.objectPosition }}
              />
              <figcaption className={styles.galleryCaption}>
                {simulator.galleryCaptionAfter}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal className={styles.workflow}>
          <ol className={styles.workflowList}>
            {simulator.steps.map((step) => (
              <li key={step.num} className={styles.workflowStep}>
                <span className={styles.workflowNum}>{step.num}</span>
                <span>{step.label}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className={styles.footerRow}>
          <p className={styles.techLine}>{simulatorData.techLine}</p>
          <p className={styles.feedback}>{simulator.feedback}</p>
          <a
            href={simulatorData.repoUrl}
            className={styles.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.common.githubLabel}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
