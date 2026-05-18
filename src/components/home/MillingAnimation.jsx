import { motion } from 'framer-motion'

const LOOP = 12

const grains = [
  { id: 'a', size: 'h-2.5 w-2.5', left: '12%', top: '18%', delay: 0 },
  { id: 'b', size: 'h-3 w-3', left: '38%', top: '8%', delay: 0.4 },
  { id: 'c', size: 'h-2 w-2', left: '62%', top: '22%', delay: 0.8 },
  { id: 'd', size: 'h-3.5 w-3.5', left: '78%', top: '10%', delay: 0.2 },
  { id: 'e', size: 'h-2 w-2', left: '52%', top: '28%', delay: 1.1 },
  { id: 'f', size: 'h-2.5 w-2.5', left: '26%', top: '36%', delay: 0.6 },
]

/**
 * Warm maize kernels — abstract floating rounds.
 */
function MaizeStage() {
  return (
    <div className="relative isolate h-[min(5.5rem,22vw)] w-full shrink-0">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b	from-maize-100/60 to-transparent"
        aria-hidden
      />
      {grains.map((g) => (
        <motion.div
          key={g.id}
          className={`absolute rounded-full bg-gradient-to-br from-maize-400 to-maize-300 shadow-sm ring-1 ring-white/40 ${g.size}`}
          style={{ left: g.left, top: g.top }}
          animate={{
            y: [0, -5, 2, 0],
            x: [0, 3, -2, 0],
            scale: [1, 1.06, 0.98, 1],
          }}
          transition={{
            duration: 4.2 + g.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: g.delay,
          }}
        />
      ))}
    </div>
  )
}

/**
 * Vertical mill channel — calm compression pulse.
 */
function MillingColumn() {
  return (
    <div className="relative flex shrink-0 items-center justify-center py-1">
      <div className="relative h-20 w-6 sm:h-24 sm:w-7">
        <motion.div
          className="absolute inset-x-1 top-1 bottom-1 rounded-full bg-gradient-to-b from-forest-700/25 via-forest-800/15 to-forest-900/20"
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-x-1.5 top-2 bottom-2 rounded-full bg-gradient-to-b from-forest-800 to-forest-900 shadow-[inset_0_2px_6px_rgba(0,0,0,0.35)]"
          style={{ originX: 0.5 }}
          animate={{
            scaleY: [1, 0.94, 1],
            scaleX: [1, 1.06, 1],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }}
        />
        <motion.div
          className="absolute left-1/2 top-0 h-2 w-[115%] -translate-x-1/2 rounded-full bg-forest-900/40"
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  leftPct: 36 + (i * 19) % 28,
  delay: (i * 0.38) % 3.8,
  duration: 1.85 + (i % 6) * 0.12,
  drift: ((i % 3) - 1) * 4,
  w: 2 + (i % 3),
}))

/**
 * Cream powder stream — discrete particles, small horizontal drift.
 */
function FlourPour() {
  return (
    <div className="relative h-[min(5rem,18vw)] w-full shrink-0 overflow-visible">
      <div
        className="pointer-events-none absolute inset-x-[35%] top-0 bottom-0 bg-gradient-to-b from-cream-100/15 to-transparent blur-[1px]"
        aria-hidden
      />
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0 rounded-full bg-cream-50 shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
          style={{
            left: `${p.leftPct}%`,
            width: p.w,
            height: p.w,
            marginLeft: -p.w / 2,
          }}
          animate={{
            y: [0, 102],
            x: [0, p.drift * 0.35, p.drift * 0.75, p.drift * 1.05],
            opacity: [0, 0.55, 0.78, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
            times: [0, 0.1, 0.38, 0.78, 1],
          }}
        />
      ))}
    </div>
  )
}

function FlourBagSvg({ className }) {
  return (
    <svg
      viewBox="0 0 88 108"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M22 38 L28 14 H60 L66 38 L72 84 Q72 98 44 100 Q16 98 16 84 Z"
        className="stroke-forest-800"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M24 40 H64"
        className="stroke-forest-800/35"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M30 22 H58"
        className="stroke-forest-800/25"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * Bag outline + masked fill rising inside the silhouette (approx. clip).
 */
function FlourBag() {
  return (
    <div className="relative mx-auto flex w-[min(7.5rem,42vw)] shrink-0 justify-center sm:w-[8.75rem]">
      <div className="relative aspect-[88/108] w-full">
        <div
          className="absolute bottom-[6%] left-[18%] right-[18%] top-[38%] overflow-hidden rounded-b-[0.55rem]"
          aria-hidden
        >
          <motion.div
            className="absolute bottom-0 left-0 right-0 origin-bottom rounded-t-[3px] bg-gradient-to-t from-cream-200/95 via-cream-100 to-white/95"
            initial={false}
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{
              duration: LOOP,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.38, 0.62, 1],
            }}
            style={{ height: '100%' }}
          />
        </div>

        <motion.div
          className="relative z-10 flex h-full w-full items-end justify-center text-forest-900 drop-shadow-sm"
          initial={false}
          animate={{
            opacity: [0.85, 1, 1, 0.92, 0.85],
            scale: [0.97, 1, 1, 0.99, 0.97],
            y: [4, 0, 0, 1, 4],
          }}
          transition={{
            duration: LOOP,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.35, 0.65, 0.9, 1],
          }}
        >
          <FlourBagSvg className="h-full w-auto max-h-[6.75rem] sm:max-h-[7.75rem]" />
        </motion.div>
      </div>
    </div>
  )
}

/**
 * Calm, looping diagram: maize → mill → flour stream → bag fill.
 * Decorative only — no Lottie/canvas/video.
 */
export default function MillingAnimation({ className = '' }) {
  return (
    <div
      className={`flex min-h-[260px] w-full flex-col items-stretch justify-between gap-0 sm:min-h-[300px] ${className}`}
      role="img"
      aria-label="Stylized milling journey from maize through processing into a flour bag"
    >
      <MaizeStage />
      <MillingColumn />
      <FlourPour />
      <FlourBag />
    </div>
  )
}

export { MaizeStage, MillingColumn, FlourPour, FlourBag }
