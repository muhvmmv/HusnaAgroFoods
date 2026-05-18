import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import heroImage from '../../assets/hero.png'

const MotionLink = motion.create(Link)

/**
 * Home — animated hero: headline, supporting copy, primary/secondary CTAs.
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_0%_-20%,rgba(252,211,77,0.22),transparent_55%),radial-gradient(ellipse_90%_70%_at_100%_0%,rgba(234,88,12,0.08),transparent_50%),linear-gradient(165deg,rgba(254,243,199,0.35)_0%,var(--color-cream-50)_42%,rgba(22,101,52,0.06)_100%)]"
          animate={{ opacity: [0.92, 1, 0.92] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-maize-200/50 to-transparent blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gradient-to-bl from-accent-400/12 via-forest-700/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-forest-800/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-forest-800"
            >
              ...taste like no other
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
            >
              Milled with care.
              <span className="block bg-gradient-to-r from-forest-800 via-forest-600 to-accent-500 bg-clip-text text-transparent">
                Trusted by kitchens everywhere.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-800/80"
            >
              Husna Agro Foods produces premium{' '}
              <strong className="font-semibold text-ink-900">maize flour</strong> and{' '}
              <strong className="font-semibold text-ink-900">maize grits</strong> with modern
              milling, strict hygiene, and batch-to-batch consistency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MotionLink
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-maize-50 shadow-lg shadow-forest-900/20"
                initial={false}
                whileHover={{
                  backgroundColor: 'var(--color-forest-700)',
                  boxShadow: '0 20px 40px -12px rgba(5, 46, 22, 0.28)',
                }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                style={{ backgroundColor: 'var(--color-forest-800)' }}
              >
                Partner with us
                <FaArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                  aria-hidden
                />
              </MotionLink>
              <MotionLink
                to="/products"
                className="inline-flex items-center rounded-full border-2 border-forest-800/25 bg-white/85 px-7 py-3.5 text-sm font-semibold text-ink-900 backdrop-blur-md"
                initial={false}
                whileHover={{
                  borderColor: 'rgba(251, 191, 36, 0.75)',
                  backgroundColor: 'rgba(255, 251, 235, 0.95)',
                  color: 'var(--color-forest-900)',
                }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                style={{ borderColor: 'rgba(22, 101, 52, 0.22)' }}
              >
                View products
              </MotionLink>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-ink-900/10 pt-8 sm:max-w-lg"
            >
              {[
                { k: 'Hygiene', v: '' },
                { k: 'Consistency', v: '' },
                { k: 'Excellence', v: '' },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-800/50">
                    {row.k}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink-900">{row.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-2xl sm:max-w-3xl lg:max-w-none xl:max-w-[38rem]"
          >
            <div className="overflow-hidden rounded-[2rem] bg-cream-50 shadow-2xl shadow-forest-900/12 ring-1 ring-forest-800/10">
              <img
                src={heroImage}
                alt="Husna Agro Foods premium maize flour and grits"
                className="mx-auto h-auto w-full max-h-[26rem] object-contain object-center sm:max-h-[30rem] lg:max-h-[34rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
