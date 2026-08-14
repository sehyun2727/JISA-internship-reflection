import { Reveal } from '../components/Reveal'
import { images } from '../content/portfolio'
import { useTranslation } from '../i18n/LanguageProvider'
import styles from './Experience.module.css'

export function Experience() {
  const t = useTranslation()
  const experience = t.experience
  const photo = images.experienceTeam
  const photoText = t.images.experienceTeam

  return (
    <section id="experience" className={`section ${styles.section}`} aria-labelledby="experience-title">
      <div className="container">
        <Reveal>
          <p className="kicker">{experience.kicker}</p>
          <h2 id="experience-title" className="sectionTitle">
            {experience.title}
          </h2>
        </Reveal>

        <Reveal className={styles.intro}>
          <p>{experience.intro}</p>
        </Reveal>

        <div className={styles.axes}>
          {experience.axes.map((axis, index) => (
            <Reveal key={axis.code} delay={index * 80} className={styles.axis}>
              <p className={styles.axisNum}>{axis.num}</p>
              <p className={styles.axisCode}>{axis.code}</p>
              <h3 className={styles.axisTitle}>{axis.title}</h3>
              <p className={styles.axisBody}>{axis.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.figureWrap} delay={80}>
          <figure className={styles.figure}>
            <img
              src={photo.small}
              srcSet={`${photo.small} 800w, ${photo.large} 1800w`}
              sizes="(min-width: 900px) 62vw, 92vw"
              width={photo.width}
              height={photo.height}
              alt={photoText.alt}
              loading="lazy"
              decoding="async"
              className={styles.figureImg}
              style={{ objectPosition: photo.objectPosition }}
            />
            <figcaption className={styles.figureCaption}>
              <p>{photoText.caption}</p>
              {experience.figureMeta.map((line) => (
                <p key={line} className={styles.figureMeta}>
                  {line}
                </p>
              ))}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className={styles.strip}>
          {experience.strip.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
