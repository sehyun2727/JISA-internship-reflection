import { Reveal } from './Reveal'
import styles from './Bridge.module.css'

/** Short connective sentence between sections — see Claude.md §3-1. Not a top-level section. */
export function Bridge({ children }: { children: string }) {
  return (
    <div className={styles.bridge}>
      <div className="container">
        <Reveal>
          <p>{children}</p>
        </Reveal>
      </div>
    </div>
  )
}
