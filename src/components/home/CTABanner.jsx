import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const MotionLink = motion.create(Link)

/**
 * Home — closing CTA band before footer.
 */
export default function CTABanner() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest-800 via-forest-900 to-ink-900 px-8 py-12 text-center shadow-2xl shadow-forest-900/25 ring-1 ring-maize-400/15 sm:px-12 sm:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(252,211,77,0.14)_0%,transparent_38%,transparent_62%,rgba(249,115,22,0.12)_100%)]"
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-maize-400/10 via-transparent to-accent-500/10"
            animate={{ opacity: [0.55, 0.9, 0.55] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 opacity-45">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-maize-300 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-accent-500 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest-600/30 blur-3xl" />
          </div>
          <div className="relative">
            <h2
              id="cta-heading"
              className="font-display text-3xl font-semibold tracking-tight text-cream-50 sm:text-4xl"
            >
              Ready to taste the difference?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-cream-100/85 sm:text-lg">
              Request specifications, arrange a facility walkthrough, or ask for a sample batch.
              We respond within two business days (dummy SLA for demo purposes).
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <MotionLink
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-maize-300 via-maize-400 to-accent-400 px-8 py-3.5 text-sm font-bold text-forest-900 shadow-lg"
                initial={false}
                whileHover={{
                  boxShadow: '0 16px 40px -10px rgba(234, 88, 12, 0.38)',
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                Start a conversation
                <FaArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                  aria-hidden
                />
              </MotionLink>
              <MotionLink
                to="/team"
                className="rounded-full border px-8 py-3.5 text-sm font-semibold text-cream-50"
                initial={false}
                whileHover={{
                  borderColor: 'rgba(252, 211, 77, 0.55)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                style={{ borderColor: 'rgba(244, 241, 234, 0.28)' }}
              >
                Meet the team
              </MotionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
