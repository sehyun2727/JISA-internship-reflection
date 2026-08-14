import { Reveal } from '../components/Reveal'
import { images } from '../content/portfolio'
import { useTranslation } from '../i18n/LanguageProvider'
import styles from './FieldInsight.module.css'

export function FieldInsight() {
  const t = useTranslation()
  const fieldInsight = t.fieldInsight
  const heroPhoto = images.heroVisionTeam
  const heroPhotoText = t.images.heroVisionTeam

  return (
    <section id="field-insight" className={styles.section} aria-labelledby="field-insight-title">
      <div className={styles.blockObservation}>
        <div className="container">
          <Reveal>
            <p className={styles.kicker}>{fieldInsight.kicker}</p>
            <h2 id="field-insight-title" className={styles.title}>
              {fieldInsight.observation.titleLines.map((line) => (
                <span key={line} className={styles.titleLine}>
                  {line}
                </span>
              ))}
            </h2>
            <p className={styles.subhead}>{fieldInsight.observation.subhead}</p>
          </Reveal>

          <Reveal className={styles.heroPhoto} delay={60}>
            <figure className={styles.heroPhotoFrame}>
              <img
                src={heroPhoto.small}
                srcSet={`${heroPhoto.small} 700w, ${heroPhoto.large} 1400w`}
                sizes="(min-width: 720px) 44vw, 92vw"
                width={heroPhoto.width}
                height={heroPhoto.height}
                alt={heroPhotoText.alt}
                loading="lazy"
                decoding="async"
                className={styles.heroPhotoImg}
                style={{ objectPosition: heroPhoto.objectPosition }}
              />
              <span className={styles.heroPhotoLabel}>{heroPhotoText.label}</span>
            </figure>
            <figcaption className={styles.heroPhotoCaption}>{heroPhotoText.caption}</figcaption>
          </Reveal>

          <Reveal className={styles.obsBody} delay={80}>
            <p>{fieldInsight.observation.body}</p>
          </Reveal>

          <Reveal className={styles.rail} delay={120}>
            <ul className={styles.railList}>
              {fieldInsight.observation.rail.map((item) => (
                <li key={item.label} className={styles.railItem}>
                  <p className={styles.railLabel}>{item.label}</p>
                  <p className={styles.railBody}>{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <p className={styles.securityNote}>{fieldInsight.observation.securityNote}</p>
        </div>
      </div>

      <div className={styles.blockExpo}>
        <div className="container">
          <Reveal>
            <p className={styles.expoLabel}>{fieldInsight.expo.label}</p>
            <h3 className={styles.expoTitle}>{fieldInsight.expo.title}</h3>
            <p className={styles.expoBody}>{fieldInsight.expo.body}</p>
          </Reveal>

          <Reveal className={styles.mosaic} delay={80}>
            <figure className={styles.mosaicMain}>
              <img
                src={images.expoTeam.small}
                srcSet={`${images.expoTeam.small} 640w, ${images.expoTeam.large} 1200w`}
                sizes="(min-width: 720px) 40vw, 92vw"
                width={images.expoTeam.width}
                height={images.expoTeam.height}
                alt={t.images.expoTeam.alt}
                loading="lazy"
                decoding="async"
                className={styles.mosaicImg}
                style={{ objectPosition: images.expoTeam.objectPosition }}
              />
              <figcaption className={styles.mosaicCaption}>{t.images.expoTeam.caption}</figcaption>
            </figure>

            <div className={styles.mosaicSide}>
              <figure className={styles.mosaicVert}>
                <img
                  src={images.expoSignage.small}
                  srcSet={`${images.expoSignage.small} 420w, ${images.expoSignage.large} 800w`}
                  sizes="(min-width: 720px) 18vw, 44vw"
                  width={images.expoSignage.width}
                  height={images.expoSignage.height}
                  alt={t.images.expoSignage.alt}
                  loading="lazy"
                  decoding="async"
                  className={styles.mosaicImg}
                  style={{ objectPosition: images.expoSignage.objectPosition }}
                />
                <figcaption className={styles.mosaicCaption}>
                  {t.images.expoSignage.caption}
                </figcaption>
              </figure>
              <figure className={styles.mosaicVert}>
                <img
                  src={images.expoRobot.small}
                  srcSet={`${images.expoRobot.small} 420w, ${images.expoRobot.large} 800w`}
                  sizes="(min-width: 720px) 18vw, 44vw"
                  width={images.expoRobot.width}
                  height={images.expoRobot.height}
                  alt={t.images.expoRobot.alt}
                  loading="lazy"
                  decoding="async"
                  className={styles.mosaicImg}
                  style={{ objectPosition: images.expoRobot.objectPosition }}
                />
                <figcaption className={styles.mosaicCaption}>{t.images.expoRobot.caption}</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>

      <div className={styles.blockTransition}>
        <div className="container">
          <Reveal>
            <p className={styles.transitionLabel}>{fieldInsight.transition.label}</p>
            <h3 className={styles.transitionTitleEn}>
              {fieldInsight.transition.titleLines.map((line) => (
                <span key={line} className={styles.transitionLine}>
                  {line}
                </span>
              ))}
            </h3>
            <p className={styles.transitionTitleLocal}>
              {fieldInsight.transition.titleLocalLines.map((line) => (
                <span key={line} className={styles.transitionLocalLine}>
                  {line}
                </span>
              ))}
            </p>
            <p className={styles.transitionBody}>{fieldInsight.transition.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
