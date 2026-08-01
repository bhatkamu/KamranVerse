import React, { useRef, useState, useEffect } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface MagnetProps extends MotionProps {
  children: React.ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
}

export default function Magnet({ 
  children, 
  padding = 150, 
  strength = 3, 
  activeTransition = "transform 0.3s ease-out", 
  inactiveTransition = "transform 0.6s ease-in-out",
  ...props 
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distX = Math.abs(e.clientX - centerX)
      const distY = Math.abs(e.clientY - centerY)
      
      if (distX < padding && distY < padding) {
        const deltaX = (e.clientX - centerX) / strength
        const deltaY = (e.clientY - centerY) / strength
        setTransform(`translate3d(${deltaX}px, ${deltaY}px, 0)`)
      } else {
        setTransform('')
      }
    }

    const handleMouseLeave = () => {
      setTransform('')
    }

    window.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [padding, strength])

  return (
    <motion.div
      ref={ref}
      style={{ 
        willChange: 'transform',
        transition: transform ? activeTransition : inactiveTransition,
        transform 
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}