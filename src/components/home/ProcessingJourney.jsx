import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionReveal from '../ui/SectionReveal'

const MotionLink = motion.create(Link)

const steps = [
  { title: 'Intake & cleaning', detail: 'Foreign matter removal.' },
  { title: 'Conditioning', detail: 'Controlled moisture for optimal bran separation.' },
  { title: 'Degermination', detail: 'Germ and hull reduction.' },
  { title: 'Milling & sifting', detail: 'Roller mills, plansifters, and tight particle bands.' },
  { title: 'Packaging', detail: 'Sealed bags with batch codes.' },
]

/**
 * Home — animated step timeline preview; deep dive on Processing page.
 */
export default function ProcessingJourney() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700">
              Processing journey
            </p>
            <h2
              id="journey-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl"
            >
              From single peice of corn to finished product.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-800/80">
              Each stage is monitored so texture and safety stay predictable. See the full flow,
              hygiene practices, and quality checkpoints on our dedicated page.
            </p>
            <MotionLink
              to="/processing"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-maize-300 to-maize-400 px-6 py-3 text-sm font-bold text-forest-900 shadow-md"
              initial={false}
              whileHover={{
                boxShadow: '0 12px 28px -8px rgba(234, 88, 12, 0.3)',
                scale: 1.02,
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              How we mill
            </MotionLink>
          </SectionReveal>

          <ol className="relative space-y-0">
            <div className="absolute left-[0.65rem] top-2 bottom-2 w-px bg-gradient-to-b from-maize-300 via-accent-400/60 to-forest-800/35 sm:left-3" />
            {steps.map((s, i) => (
              <SectionReveal key={s.title} delayIndex={i}>
                <li className="relative flex gap-4 pb-10 pl-10 sm:pl-12">
                  <motion.span
                    className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-forest-800 text-[10px] font-bold text-maize-200 shadow sm:h-7 sm:w-7 sm:text-xs"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22, delay: i * 0.05 }}
                  >
                    {i + 1}
                  </motion.span>
                  <motion.div
                    className="rounded-2xl bg-white/85 p-5 shadow-sm backdrop-blur"
                    initial={false}
                    whileHover={{
                      borderColor: 'rgba(251, 191, 36, 0.4)',
                      boxShadow: '0 12px 32px -14px rgba(22, 101, 52, 0.12)',
                    }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: 'rgba(15, 20, 25, 0.08)',
                    }}
                  >
                    <h3 className="font-display text-lg font-semibold text-ink-900">{s.title}</h3>
                    <p className="mt-1 text-sm text-ink-800/75">{s.detail}</p>
                  </motion.div>
                </li>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
