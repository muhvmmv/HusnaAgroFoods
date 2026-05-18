import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaLocationDot, FaInstagram, FaFacebook } from 'react-icons/fa6'

const INSTAGRAM_URL =
  'https://www.instagram.com/husna_agrofoods?igsh=MTl1a2N2OHdocGJibg%3D%3D&utm_source=qr'
const FACEBOOK_URL =
  'https://www.facebook.com/share/1DBMc1vkVz/?mibextid=wwXIfr'

const MotionLink = motion.create(Link)

/** Same mark as navbar (`public/logoo.jpeg`). */
const FOOTER_LOGO_SRC = '/logoo.jpeg'

const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/processing', label: 'Processing' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]


export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-maize-400/15 bg-gradient-to-b from-ink-900 via-ink-900 to-[#0a0d11] text-cream-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={FOOTER_LOGO_SRC}
                alt=""
                className="h-11 w-auto max-w-[10rem] shrink-0 object-contain object-left sm:max-w-[11rem]"
                decoding="async"
              />
              <div>
                <p className="font-display text-xl font-semibold">Husna Agro Foods</p>
                <p className="text-sm text-cream-100/70">
                  ...taste like no others
                </p>
              </div>
            </div>
            <motion.div className="mt-6 flex items-center gap-3">
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Husna Agro Foods on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream-100/90"
                initial={false}
                whileHover={{
                  color: 'rgba(253, 224, 71, 0.95)',
                  borderColor: 'rgba(253, 224, 71, 0.45)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <FaInstagram className="h-5 w-5" aria-hidden />
              </motion.a>
              <motion.a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Husna Agro Foods on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream-100/90"
                initial={false}
                whileHover={{
                  color: 'rgba(253, 224, 71, 0.95)',
                  borderColor: 'rgba(253, 224, 71, 0.45)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <FaFacebook className="h-5 w-5" aria-hidden />
              </motion.a>
            </motion.div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-maize-300">Explore</p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <MotionLink
                    to={l.to}
                    className="text-sm text-cream-100/80"
                    initial={false}
                    whileHover={{ color: 'rgba(253, 224, 71, 0.95)', x: 2 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {l.label}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-maize-300">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
              <li className="flex gap-2">
                <FaLocationDot className="mt-0.5 shrink-0 text-maize-400" aria-hidden />
                <span>KM1 Jos raod, Saminaka, Kaduna State, Nigeria</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhone className="mt-0.5 shrink-0 text-maize-400" aria-hidden />
                <div className="flex flex-col gap-1.5">
                  <motion.a
                    href="tel:+2348034518836"
                    className="text-cream-100/80"
                    initial={false}
                    whileHover={{ color: 'rgba(253, 224, 71, 0.95)' }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    +234 803 451 8836
                  </motion.a>
                  <motion.a
                    href="tel:+2348169626550"
                    className="text-cream-100/80"
                    initial={false}
                    whileHover={{ color: 'rgba(253, 224, 71, 0.95)' }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    +234 816 962 6550
                  </motion.a>
                  <motion.a
                    href="tel:+2348066544996"
                    className="text-cream-100/80"
                    initial={false}
                    whileHover={{ color: 'rgba(253, 224, 71, 0.95)' }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    +234 806 654 4996
                  </motion.a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="shrink-0 text-maize-400" aria-hidden />
                <motion.a
                  href="mailto:husnaagrofood@gmail.com"
                  className="text-cream-100/80"
                  initial={false}
                  whileHover={{ color: 'rgba(253, 224, 71, 0.95)' }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  husnaagrofood@gmail.com
                </motion.a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream-100/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Husna Agro Foods. All rights reserved.</p>
          <p>No online ordering for now.</p>
        </div>
      </div>
    </footer>
  )
}
