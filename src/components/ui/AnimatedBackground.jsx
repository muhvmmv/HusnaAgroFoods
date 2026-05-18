import { motion } from 'framer-motion'

/**
 * Subtle drifting gradients — premium feel without heavy particle systems.
 */
export default function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -left-1/4 top-0 h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-maize-200/45 to-maize-100/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/3 h-[32rem] w-[32rem] rounded-full bg-gradient-to-bl from-forest-700/12 to-forest-900/5 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-accent-500/18 to-accent-400/8 blur-3xl"
        animate={{ scale: [1, 1.06, 1], opacity: [0.38, 0.52, 0.38] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-cream-50/85 to-cream-50" />
    </div>
  )
}
