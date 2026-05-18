import { motion } from 'framer-motion'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import { FaDroplet, FaShieldHalved, FaGears } from 'react-icons/fa6'

const flow = [
  {
    step: '01',
    title: 'Receiving & identity',
    text: 'Truck checks, visual checks to make sure the best maize grains are used.',
  },
  {
    step: '02',
    title: 'Cleaning',
    text: 'removing any stones, dust, and ferrous risk before conditioning.',
  },
  {
    step: '03',
    title: 'Conditioning',
    text: 'Tempering softens bran for cleaner separation.',
  },
  {
    step: '04',
    title: 'Degermination & reduction',
    text: 'Break rolls and sifters.',
  },
  {
    step: '05',
    title: 'Final milling',
    text: 'smooth reduction rolls refine particle size.',
  },
  {
    step: '06',
    title: 'QA & release',
    text: 'Checks then gate release. Non-conforming material is blocked from packaging.',
  },
  {
    step: '07',
    title: 'Packaging & storage',
    text: 'Sealed bags, palletization, and dry storage protect shelf life until dispatch.',
  },
]

const pillars = [
  {
    title: 'Hygiene culture',
    body: 'Handwash stations, and documented sanitation rounds keep zones accountable.',
    icon: FaShieldHalved,
  },
  {
    title: 'Moisture discipline',
    body: 'we monitor and adjust conditioning with discipline.',
    icon: FaDroplet,
  },
  {
    title: 'Modern equipment',
    body: 'Automated machines.',
    icon: FaGears,
  },
]

/**
 * Processing & Quality — step flow + hygiene/consistency story.
 */
export default function ProcessingQuality() {
  return (
    <>
      <PageHeader
        eyebrow="Processing & quality"
        title="A disciplined line from intake to sealed bag."
        subtitle="Below is a simplified view of how maize moves through Husna Agro Foods."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <ol className="relative space-y-6">
          <div className="absolute left-[1.15rem] top-3 bottom-3 hidden w-px bg-gradient-to-b from-maize-400 to-forest-800/40 sm:block" />
          {flow.map((f, i) => (
            <SectionReveal key={f.step} delayIndex={i % 3}>
              <li className="relative sm:pl-20">
                <motion.div
                  className="absolute left-0 top-1 hidden h-9 w-9 items-center justify-center rounded-full bg-forest-800 text-xs font-bold text-maize-200 shadow sm:flex"
                  whileHover={{ scale: 1.06 }}
                >
                  {f.step}
                </motion.div>
                <div className="rounded-3xl border border-ink-900/8 bg-white p-6 shadow-sm sm:p-8">
                  <p className="text-xs font-bold text-maize-600 sm:hidden">Step {f.step}</p>
                  <h2 className="font-display text-xl font-semibold text-forest-900">{f.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-800/85">{f.text}</p>
                </div>
              </li>
            </SectionReveal>
          ))}
        </ol>

        <SectionReveal className="mt-20">
          <h2 className="font-display text-2xl font-semibold text-forest-900">
            Hygiene, consistency, modern milling
          </h2>
          <p className="mt-3 max-w-2xl text-base text-ink-800/80">
            These three themes guide capital investments and daily operations.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delayIndex={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-3xl border border-ink-900/8 bg-gradient-to-b from-white to-cream-50 p-6 shadow-sm"
              >
                <pillar.icon className="h-8 w-8 text-forest-800" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold text-forest-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-800/80">{pillar.body}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </>
  )
}
