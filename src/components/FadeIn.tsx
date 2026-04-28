import { useEffect, useRef, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  fromScroll?: boolean
}

export default function FadeIn({ children, delay = 0, duration = 600, className = '', fromScroll = false }: FadeInProps) {
  const [visible, setVisible] = useState(!fromScroll)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!fromScroll) {
      const timer = setTimeout(() => setVisible(true), delay)
      return () => clearTimeout(timer)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay, fromScroll])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: fromScroll ? '0ms' : `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
