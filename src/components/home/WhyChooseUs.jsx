import { motion } from 'framer-motion'
import {
  FaShieldHalved,
  FaLeaf,
  FaChartLine,
  FaHandshake,
} from 'react-icons/fa6'
import SectionReveal from '../ui/SectionReveal'

const points = [
  {
    title: 'Food safety first',
    icon: FaShieldHalved,
  },
  {
    title: 'Sustainability mindset',
    icon: FaLeaf,
  },
  {
    title: 'Consistent specs',
    icon: FaChartLine,
  },
  {
    title: 'Partnership tone',
    icon: FaHandshake,
  },
]

/**
 * Home — “Why choose us” grid with icon cards and hover polish.
 */
export default function WhyChooseUs() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            Why choose us
          </p>
          <h2
            id="why-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl"
          >
            Precision milling with a human touch.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {points.map((p, i) => (
            <SectionReveal key={p.title} delayIndex={i}>
              <motion.div
                className="h-full rounded-3xl bg-gradient-to-b from-white to-cream-50/80 p-7 shadow-sm"
                initial={false}
                whileHover={{
                  scale: 1.012,
                  borderColor: 'rgba(234, 179, 8, 0.42)',
                  backgroundColor: 'rgba(255, 251, 235, 0.65)',
                  boxShadow: '0 18px 48px -16px rgba(22, 101, 52, 0.14)',
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'rgba(15, 20, 25, 0.08)',
                }}
              >
                <motion.span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-800 via-forest-800 to-accent-600/85 text-maize-200 shadow-sm ring-1 ring-maize-400/20"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p.icon className="h-6 w-6" aria-hidden />
                </motion.span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-800/80">{p.body}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
