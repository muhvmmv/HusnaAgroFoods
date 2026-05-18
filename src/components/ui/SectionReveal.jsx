import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

/**
 * Scroll-triggered fade/slide — reuse across sections for consistent motion.
 */
export default function SectionReveal({ children, className = '', delayIndex = 0 }) {
  return (
    <motion.div
      custom={delayIndex}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12% 0px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
