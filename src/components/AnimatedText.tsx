import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

interface CharProps {
  char: string
  start: number
  end: number
  smoothProgress: MotionValue<number>
}

function AnimatedChar({ char, start, end, smoothProgress }: CharProps) {
  const opacity = useTransform(smoothProgress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.8']
  })

  const springConfig = { damping: 20, stiffness: 200 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)

  const words = text.split(' ')

  // Precompute global character indices so each char knows its scroll range
  let globalIndex = 0
  const wordData = words.map((word) => {
    const chars = word.split('')
    const charRanges = chars.map((char) => {
      const start = globalIndex / text.length
      const end = (globalIndex + 1) / text.length
      globalIndex += 1
      return { char, start, end }
    })
    // Account for the space after each word (except the last)
    if (globalIndex < text.length) globalIndex += 1
    return { chars: charRanges }
  })

  return (
    <p ref={ref} className={`${className} break-normal`}>
      {wordData.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-1.5">
          {word.chars.map((c, charIndex) => (
            <AnimatedChar
              key={charIndex}
              char={c.char}
              start={c.start}
              end={c.end}
              smoothProgress={smoothProgress}
            />
          ))}
        </span>
      ))}
    </p>
  )
}