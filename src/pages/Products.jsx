import { motion } from 'framer-motion'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import flour1kg from '../assets/samples/1kg-flour.png'
import grits1kg from '../assets/samples/1kg-grits.png'
import bag10kg from '../assets/samples/10kg.png'
import bag25kg from '../assets/samples/25kg.png'

const products = [
  {
    name: 'Maize flour',
    summary: '...taste like no other',
    variants: [
      {
        title: '1kg packs (1x10)',
        description: '1kg packs x 10',
        image: flour1kg,
      },
      {
        title: '10kg bag',
        description: '10kg',
        image: bag10kg,
      },
      {
        title: '25kg bag',
        description: '25kg',
        image: bag25kg,
      },
    ],
  },
  {
    name: 'Maize grits',
    summary: '...taste like no other',
    variants: [
      {
        title: '1kg packs (1x10)',
        description: '1kg packs x 10',
        image: grits1kg,
      },
      {
        title: '10kg bag',
        description: '10kg',
        image: bag10kg,
      },
      {
        title: '25kg bag',
        description: '25kg',
        image: bag25kg,
      },
    ],
  },
]

export default function Products() {
  return (
    <>
      <PageHeader eyebrow="Products" title="Maize flour & Maize grits." />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-16">
          {products.map((p, index) => (
            <SectionReveal key={p.name} delayIndex={index}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className="grid overflow-hidden rounded-[2rem] border border-ink-900/8 bg-white shadow-sm lg:grid-cols-[0.55fr_1.45fr]"
              >
                {/* Decorative green side with yellow text */}
                <div className="flex items-center justify-center bg-gradient-to-br from-forest-800 to-ink-900 px-6 py-12">
                  <h2 className="text-center font-display text-2xl font-semibold tracking-wide text-maize-300">
                    {p.name}
                  </h2>
                </div>

                {/* Right content (no product title here) */}
                <div className="p-8 sm:p-10">
                  <p className="max-w-2xl text-base leading-relaxed text-ink-800/85">
                    {p.summary}
                  </p>

                  {/* Variants */}
                  <h3 className="mt-10 text-sm font-bold uppercase tracking-wide text-forest-800">
                    Available pack sizes
                  </h3>

                  <div className="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {p.variants.map((v) => (
                      <div
                        key={v.title}
                        className="overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-50 shadow-sm"
                      >
                        <div className="h-72 overflow-hidden bg-cream-100">
                          <img
                            src={v.image}
                            alt={`${p.name} — ${v.title}`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        {/* Variant description */}
                        <div className="p-5">
                          <p className="text-sm font-semibold text-forest-900">{v.title}</p>
                          <p className="mt-1 text-sm text-ink-800/85">{v.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal className="mt-16 rounded-3xl border border-dashed border-forest-800/25 bg-forest-800/5 p-8 text-center">
          <p className="font-display text-lg font-semibold text-forest-900">
            Custom granulation or private label?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-ink-800/80">
            Reach out via the contact page with your target specification.
          </p>
        </SectionReveal>
      </div>
    </>
  )
}
