'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  variants?: Variants
}

export default function AnimateOnScroll({ children, className, delay = 0, variants }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants ?? fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
