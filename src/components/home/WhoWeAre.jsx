import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionReveal from '../ui/SectionReveal'

const MotionLink = motion.create(Link)

/**
 * Home — short positioning statement + link to full About page.
 */
export default function WhoWeAre() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="who-heading">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-gradient-to-br from-maize-100/35 via-white to-forest-800/[0.07] p-px shadow-md shadow-forest-900/8">
          <div className="grid gap-10 rounded-[1.4375rem] border border-ink-900/[0.07] bg-white/75 p-8 backdrop-blur-md sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14 lg:p-12">
            <SectionReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                Who we are
              </p>
              <h2
                id="who-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl"
              >
                A modern mill built on agricultural roots.
              </h2>
            </SectionReveal>
            <SectionReveal delayIndex={1}>
              <p className="text-base leading-relaxed text-ink-800/85 sm:text-lg">
                Husna Agro Foods partners with trusted growers to source quality maize and also grows its own maize to maintain that premium quality, then
                processes it through calibrated cleaning, degermination, and milling stages.
                Our team obsesses over everything from texture to food safety and everything in between so every bag reflects
                the same premium standard.
              </p>
              <MotionLink
                to="/about"
                className="mt-6 inline-flex text-sm font-semibold text-ink-900 underline decoration-maize-400 decoration-2 underline-offset-4"
                initial={false}
                whileHover={{
                  color: 'var(--color-forest-800)',
                  textDecorationColor: 'rgba(249, 115, 22, 0.85)',
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                Read our full story
              </MotionLink>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
