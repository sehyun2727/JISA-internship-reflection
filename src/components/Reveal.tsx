import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './Reveal.module.css'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in ms, applied via inline transition-delay. */
  delay?: number
}

/** Fades/slides content in once it enters the viewport. No-op when reduced motion is on. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(reducedMotion)

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <div
      ref={ref}
      className={[styles.reveal, isVisible ? styles.isVisible : '', className]
        .filter(Boolean)
        .join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
