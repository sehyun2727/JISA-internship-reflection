import { Reveal } from './Reveal'
import { useTranslation } from '../i18n/LanguageProvider'
import styles from './StoryBand.module.css'

/** Full-width dark statement band beneath Hero — see Claude.md §4.2. Not a top-level section. */
export function StoryBand() {
  const story = useTranslation().storyBand

  return (
    <div className={styles.band}>
      <div className="container">
        <Reveal>
          <p className={styles.title}>
            {story.titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </p>
          <p className={styles.body}>{story.bodyLines.join('\n')}</p>
        </Reveal>
      </div>
    </div>
  )
}
