import { Reveal } from '../components/Reveal'
import { useTranslation } from '../i18n/LanguageProvider'
import styles from './Growth.module.css'

export function Growth() {
  const growth = useTranslation().growth

  return (
    <section id="growth" className="section" aria-labelledby="growth-title">
      <div className="container">
        <Reveal>
          <p className="kicker">{growth.kicker}</p>
          <h2 id="growth-title" className="sectionTitle">
            {growth.titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal className={styles.lead}>
          <p>{growth.lead}</p>
        </Reveal>

        <Reveal className={styles.shifts}>
          <ul className={styles.shiftList}>
            {growth.shifts.map((shift) => (
              <li key={shift.before} className={styles.shiftItem}>
                <span className={styles.shiftBefore}>{shift.before}</span>
                <span className={styles.shiftArrow} aria-hidden="true">
                  →
                </span>
                <span className={styles.shiftAfter}>{shift.after}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className={styles.notes}>
          <Reveal className={styles.note}>
            <p className={styles.noteTitle}>{growth.communication.title}</p>
            <p className={styles.noteBody}>{growth.communication.body}</p>
          </Reveal>
          <Reveal delay={80} className={styles.note}>
            <p className={styles.noteTitle}>{growth.life.title}</p>
            <p className={styles.noteBody}>{growth.life.body}</p>
          </Reveal>
          <Reveal delay={160} className={styles.note}>
            <p className={styles.noteTitle}>{growth.advice.title}</p>
            <p className={styles.noteBody}>{growth.advice.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
