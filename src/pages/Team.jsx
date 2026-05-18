import { motion } from 'framer-motion'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'

// Import images
import anas from '../assets/team/anas-nasirdeen.png'
import usman from '../assets/team/prof.JPG'
import abdulnasir from '../assets/team/abdulnasir-nasirdeen.png'
import haruna from '../assets/team/haruna-usman.png'
import muhammad from '../assets/team/muhammad-nasirdeen.png'

const leaders = [
  {
    name: 'Engr. Anas Nasirdeen',
    role: 'Chief Executive Officer / Managing Director',
    image: anas,
    objectPosition: 'center top',
  },
  {
    name: 'Prof. Nasirdeen Usman, mni',
    role: 'Chairman, Board of Directors',
    image: usman,
    objectPosition: 'center 15%',
  },
  {
    name: 'Barr. Abdulnasir Nasirdeen',
    role: 'Chief Marketing Officer / Legal Advisor',
    image: abdulnasir,
    objectPosition: 'center 20%',
  },
  {
    name: 'Engr. Haruna Usman',
    role: 'Cheif Operating Officer',
    image: haruna,
    objectPosition: 'center top',
  },
  {
    name: 'Engr. Muhammad Nasirdeen',
    role: 'Chief Technical Officer',
    image: muhammad,
    objectPosition: 'center top',
  },
]

export default function Team() {
  const [topLeader, ...otherLeaders] = leaders

  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Leadership you can speak with."
        subtitle="A compact, accountable team connects the field narrative with the precision of modern milling."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Top centered leader */}
        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-md">
            <SectionReveal>
              <LeaderCard person={topLeader} />
            </SectionReveal>
          </div>
        </div>

        {/* Remaining four leaders */}
        <div className="grid gap-8 sm:grid-cols-2">
          {otherLeaders.map((person, i) => (
            <SectionReveal key={person.name} delayIndex={i % 2}>
              <LeaderCard person={person} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </>
  )
}

/* Reusable leader card */
function LeaderCard({ person }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="overflow-hidden rounded-3xl border border-ink-900/8 bg-white shadow-sm"
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden bg-cream-100">
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover"
          style={{ objectPosition: person.objectPosition || 'center center' }}
        />
      </div>

      {/* Info */}
      <div className="p-6 sm:p-7 text-center">
        <h2 className="font-display text-xl font-semibold text-forest-900">
          {person.name}
        </h2>
        <p className="mt-1 text-sm font-semibold text-accent-600">
          {person.role}
        </p>
      </div>
    </motion.article>
  )
}
