import SectionReveal from './SectionReveal'

/**
 * Shared inner-page hero band — large type, short intro, optional eyebrow.
 */
export default function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <header className="relative overflow-hidden border-b border-ink-900/[0.07] bg-gradient-to-b from-white via-cream-50/90 to-maize-50/20 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(252,211,77,0.12),transparent),radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(22,101,52,0.06),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionReveal>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">{eyebrow}</p>
          )}
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-800/80">{subtitle}</p>
          )}
          {children}
        </SectionReveal>
      </div>
    </header>
  )
}
