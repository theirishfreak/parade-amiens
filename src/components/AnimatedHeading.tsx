import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  initialDelay?: number
  className?: string
}

export default function AnimatedHeading({ text, initialDelay = 200, className = '' }: AnimatedHeadingProps) {
  const [visibleChars, setVisibleChars] = useState<Set<string>>(new Set())

  const lines = text.split('\n')

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    let globalIndex = 0
    lines.forEach((line, lineIndex) => {
      const lineLength = line.length
      line.split('').forEach((_, charIndex) => {
        const key = `${lineIndex}-${charIndex}`
        const delay = initialDelay + (lineIndex * lineLength * 30) + (charIndex * 30)
        const timer = setTimeout(() => {
          setVisibleChars(prev => new Set(prev).add(key))
        }, delay)
        timers.push(timer)
        globalIndex++
      })
    })

    return () => timers.forEach(clearTimeout)
  }, [text, initialDelay])

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} style={{ display: 'block' }}>
          {line.split('').map((char, charIndex) => {
            const key = `${lineIndex}-${charIndex}`
            const isVisible = visibleChars.has(key)
            return (
              <span
                key={charIndex}
                style={{
                  display: 'inline-block',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-18px)',
                  transition: 'opacity 500ms ease, transform 500ms ease',
                  whiteSpace: 'pre',
                }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
