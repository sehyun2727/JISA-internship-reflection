import styles from './AssetPlaceholder.module.css'

interface AssetPlaceholderProps {
  /** Recommended final filename, e.g. "profile-sung-sehyun.webp" */
  filename: string
  /** Short description of what the real asset should show. */
  description: string
  aspectRatio?: string
  className?: string
  tone?: 'light' | 'dark'
}

/**
 * Explicit "asset needed" placeholder. Never used to fake a real photo —
 * per Claude.md section 8/9, missing assets must stay visibly unresolved.
 */
export function AssetPlaceholder({
  filename,
  description,
  aspectRatio = '4 / 3',
  className,
  tone = 'light',
}: AssetPlaceholderProps) {
  return (
    <div
      className={[styles.placeholder, tone === 'dark' ? styles.dark : '', className]
        .filter(Boolean)
        .join(' ')}
      style={{ aspectRatio }}
      role="img"
      aria-label={`자산 준비 중: ${description}`}
    >
      <span className={styles.badge}>Asset needed</span>
      <p className={styles.filename}>{filename}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
