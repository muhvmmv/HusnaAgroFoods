import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionReveal from '../ui/SectionReveal'
import flourImg from '../../assets/samples/1kg-flour.png'
import gritsImg from '../../assets/samples/1kg-grits.png'

const MotionLink = motion.create(Link)

const items = [
  {
    title: 'Maize flour',
    accent: 'from-maize-300 via-maize-400 to-accent-500/85',
    imageSrc: flourImg,
    imageAlt: 'Husna Agro Foods maize flour product',
  },
  {
    title: 'Maize grits',
    accent: 'from-forest-700 via-forest-800 to-accent-600/90',
    imageSrc: gritsImg,
    imageAlt: 'Husna Agro Foods maize grits product',
  },
]

function ProductPhotoSlot({ src, alt, title }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative flex min-h-[18rem] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 to-cream-50 sm:min-h-[20rem]">
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain object-center p-4 transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full min-h-[9rem] flex-col items-center justify-center gap-2 px-4 text-center sm:min-h-[10.5rem]">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-800/45">
            Your photo
          </span>
          <span className="font-mono text-[11px] leading-relaxed text-forest-800/50">{src}</span>
          <span className="max-w-[12rem] text-[11px] text-ink-800/45">
            Add this file to the <code className="rounded bg-white/60 px-1 py-0.5">public</code> folder
            for {title}.
          </span>
        </div>
      )}
    </div>
  )
}

/**
 * Home — product preview cards linking to Products page.
 */
export default function ProductPreview() {
  return (
    <section
      id="products-preview"
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="products-preview-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700">
            Product preview
          </p>
          <h2
            id="products-preview-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl"
          >
            Staples customers keep returning for..
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <SectionReveal key={item.title} delayIndex={i + 1}>
              <motion.article
                className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-sm"
                initial={false}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(22, 101, 52, 0.22)',
                  boxShadow: '0 24px 50px -20px rgba(22, 101, 52, 0.12)',
                }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'rgba(15, 20, 25, 0.08)',
                }}
              >
                <div className="-mx-8 -mt-8 mb-6 overflow-hidden rounded-t-3xl">
                  <ProductPhotoSlot src={item.imageSrc} alt={item.imageAlt} title={item.title} />
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">
                  {item.title}
                </h3>
                <MotionLink
                  to="/products"
                  className="mt-6 inline-flex text-sm font-bold text-ink-900"
                  initial={false}
                  whileHover={{ color: 'var(--color-accent-600)' }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  Explore specifications →
                </MotionLink>
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-maize-200/45 to-accent-400/15 opacity-75 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
