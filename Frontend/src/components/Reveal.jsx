import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

const Reveal = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  amount = 0.15,
}) => {
  const shouldReduceMotion = useReducedMotion()

  const offsets = {
    up: { x: 0, y: 42 },
    down: { x: 0, y: -42 },
    left: { x: 42, y: 0 },
    right: { x: -42, y: 0 },
  }

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        ...offsets[direction],
        filter: 'blur(8px)',
      }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{
        once: true,
        amount,
        margin: '0px 0px -50px 0px',
      }}
      transition={{
        opacity: {
          duration: shouldReduceMotion ? 0.2 : 0.65,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
        y: {
          type: 'spring',
          stiffness: 75,
          damping: 18,
          delay,
        },
        x: {
          type: 'spring',
          stiffness: 75,
          damping: 18,
          delay,
        },
        filter: {
          duration: shouldReduceMotion ? 0.2 : 0.7,
          delay,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal