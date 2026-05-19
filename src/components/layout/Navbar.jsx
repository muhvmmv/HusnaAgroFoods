import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const MotionLink = motion.create(Link)

/** File must live in `public/` so the path is served from the site root. */
const NAV_LOGO_SRC = `${import.meta.env.BASE_URL}logoo.jpeg`
/** Empty: company name is in text beside the mark (avoids duplicate SR announcements). */
const NAV_LOGO_ALT = ''

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/processing', label: 'Processing & Quality' },
  { to: '/team', label: 'Team' },
]

const navClass = ({ isActive }) =>
  [
    'rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-300 ease-out',
    isActive
      ? 'bg-forest-800 text-maize-100 shadow-sm shadow-forest-900/15'
      : 'text-ink-800/80 hover:bg-maize-100/85 hover:text-forest-900',
  ].join(' ')

/**
 * Desktop horizontal nav + animated mobile drawer (slide-in panel).
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-900/[0.06] bg-cream-50/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maize-400"
          onClick={() => setOpen(false)}
        >
          <img
            src={NAV_LOGO_SRC}
            alt={NAV_LOGO_ALT}
            className="h-9 w-auto max-h-10 max-w-[9.5rem] shrink-0 object-contain object-left sm:h-10 sm:max-w-[11rem]"
            decoding="async"
            fetchPriority="high"
          />
          <span className="flex flex-col leading-tight">
            <span className="relative inline-block w-fit font-display text-lg font-semibold tracking-tight text-forest-900 sm:text-xl">
              Husna Agro Foods
              <span
                className="absolute -bottom-1 left-0 flex w-full items-center gap-1"
                aria-hidden
              >
                <span className="h-px flex-1 rounded-full bg-gradient-to-r from-transparent to-forest-700/70" />
                <span className="h-1 w-1 rotate-45 rounded-sm bg-maize-400" />
                <span className="h-[3px] min-w-[3.5rem] flex-[1.4] rounded-full bg-gradient-to-r from-maize-400 via-accent-500 to-maize-400 sm:min-w-[4.5rem]" />
                <span className="h-1 w-1 rotate-45 rounded-sm bg-maize-400" />
                <span className="h-px flex-1 rounded-full bg-gradient-to-l from-transparent to-forest-700/70" />
              </span>
            </span>
            <span className="mt-1 hidden text-xs font-medium text-ink-800/60 sm:block">
              Maize flour &amp; grits
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <MotionLink
            to="/contact"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-maize-50 shadow-sm sm:inline-flex"
            initial={false}
            whileHover={{
              backgroundColor: 'var(--color-forest-700)',
              boxShadow: '0 10px 24px -8px rgba(5, 46, 22, 0.35)',
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: 'var(--color-forest-800)' }}
          >
            Talk to us
          </MotionLink>

          <button
            type="button"
            className="inline-flex min-w-[3.25rem] flex-col items-center justify-center gap-0.5 rounded-xl border border-ink-900/10 bg-white/70 px-2.5 py-2 text-forest-900 shadow-sm transition-colors duration-300 hover:border-maize-300/50 hover:bg-maize-50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX className="h-5 w-5" aria-hidden /> : <HiMenuAlt3 className="h-5 w-5" aria-hidden />}
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-forest-800">
              Menu
            </span>
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-sm lg:hidden"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-ink-900/10 bg-white opacity-100 shadow-2xl backdrop-blur-none lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-ink-900/5 bg-white px-4 py-4">
                <span className="font-display text-lg font-semibold text-forest-900">Menu</span>
                <button
                  type="button"
                  className="rounded-lg p-2 text-ink-800 hover:bg-maize-100"
                  onClick={() => setOpen(false)}
                >
                  <HiX className="h-6 w-6" aria-hidden />
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 bg-white p-4" aria-label="Mobile primary">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        [
                          'block rounded-xl px-4 py-3 text-base font-medium',
                          isActive
                            ? 'bg-forest-800 text-maize-50'
                            : 'text-ink-800 hover:bg-maize-100',
                        ].join(' ')
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="border-t border-ink-900/5 bg-white p-4">
                <MotionLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-maize-300 via-maize-400 to-accent-500 py-3 text-sm font-bold text-forest-900 shadow-md"
                  whileHover={{ scale: 1.01, boxShadow: '0 12px 28px -10px rgba(234, 88, 12, 0.28)' }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  Contact us
                </MotionLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
