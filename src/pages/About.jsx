import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import factoryImg1 from '../assets/factory-img1.png'
import factoryImg2 from '../assets/factory-img2.png'

/**
 * About — story, mission/vision, values, facility placeholders.
 */
export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Grounded in agriculture, Elevated by process."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <h2 className="font-display text-2xl font-semibold text-forest-900">Our story</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-800/85">
              Established in 2021 as a prominent player in Nigeria's Agrofood processing sector. The company is
dedicated to transforming fresh grains into high-quality products, including maize flour, maize grits,
and animal feeds. With the motto "...tastes like no other," Husna AgroFoods Ltd is committed to
delivering superior products that cater for both human and animal nutritional needs

            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-800/85">
              Today, figures aside, we think of ourselves as a bridge between growers who
              work the land and kitchens that depend on dependable staples.
            </p>
          </SectionReveal>

          <SectionReveal delayIndex={1}>
            <div className="overflow-hidden rounded-3xl border border-ink-900/8 bg-ink-800 shadow-lg">
              <img
                src={factoryImg1}
                alt="Husna Agro Foods facility exterior"
                className="aspect-[4/3] w-full object-cover object-center"
              />
            </div>
          </SectionReveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <SectionReveal>
            <div className="rounded-3xl border border-ink-900/8 bg-white p-8 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-forest-900">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-800/80">
                To produce and deliver high-quality Agro-based food products that meet the needs of
our customers while supporting the growth of the local agricultural economy.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delayIndex={1}>
            <div className="rounded-3xl border border-ink-900/8 bg-white p-8 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-forest-900">Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-800/80">
                To be the leading producer of nutritious Agrofoods products in Nigeria, recognized for our product
quality, innovation, and commitment, thereby contributing to the health and well-being of communities
through sustainable practices

              </p>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-forest-900">Values</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'Quality: Uncompromising quality through modern milling',
              'Innovation: Advancing maize through continuous innovation',
              'Safety is non-negotiablSustainability: Sustainably grown, responsibly processed maize',
              'Community: Empowering communities, creating opportunities',
            ].map((v) => (
              <li
                key={v}
                className="flex items-start gap-3 rounded-2xl border border-ink-900/8 bg-cream-100/60 px-5 py-4 text-sm font-medium text-forest-900"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-maize-500" aria-hidden />
                {v}
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal className="mt-16" delayIndex={1}>
          <div className="overflow-hidden rounded-3xl border border-ink-900/8 bg-white shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="overflow-hidden md:aspect-auto">
                <img
                  src={factoryImg2}
                  alt="Husna Agro Foods milling line"
                  className="aspect-video h-full w-full object-cover object-center md:min-h-full"
                />
              </div>
              <div className="p-8 sm:p-10">
                <h2 className="font-display text-xl font-semibold text-forest-900">
                  Inside the facility
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-800/80">
                  Controlled traffic flows separate raw intake from finished goods. Lighting,
                  ventilation, and equipment layout are designed for inspection-friendly
                  operations.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </>
  )
}
