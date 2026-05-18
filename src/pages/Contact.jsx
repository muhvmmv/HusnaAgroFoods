import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import { FaPhone, FaEnvelope, FaLocationDot, FaClock } from 'react-icons/fa6'

/** Official place link from Google Maps (Share). */
const GOOGLE_MAPS_PLACE_URL = 'https://maps.app.goo.gl/KCqw3nti1KHzuHhc6'

/**
 * Coordinates for the same pin as the link above (Husnaagrofoods on Google Maps).
 * Used for the iframe embed; short links cannot be used as iframe `src`.
 */
const MAP_EMBED_LAT = 10.3846508
const MAP_EMBED_LNG = 8.7025472

/**
 * Optional: in `.env` set `VITE_GOOGLE_MAPS_EMBED_SRC` to the full `src` from
 * Google Maps → Share → Embed a map (overrides lat/lng embed).
 */
const MAP_IFRAME_SRC =
  import.meta.env.VITE_GOOGLE_MAPS_EMBED_SRC ||
  `https://www.google.com/maps?q=${MAP_EMBED_LAT},${MAP_EMBED_LNG}&z=17&hl=en&output=embed`

/** Inbox for contact form (FormSubmit forwards submissions here). */
const CONTACT_FORM_EMAIL = 'husnaagrofood@gmail.com'
const FORM_SUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_FORM_EMAIL)}`

/**
 * Contact — form sends via FormSubmit (no server code). First-time: check this inbox
 * for FormSubmit’s activation link before submissions are delivered.
 */
export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle') // idle | submitting | success
  const [formError, setFormError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setFormError('')
    const form = e.currentTarget
    const fd = new FormData(form)
    if (fd.get('_honey')) {
      return
    }

    setFormStatus('submitting')
    const payload = {
      _subject: 'Website contact — Husna Agro Foods',
      _template: 'table',
      _captcha: 'false',
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      organization: String(fd.get('org') ?? '').trim() || '(not provided)',
      message: String(fd.get('message') ?? '').trim(),
    }

    try {
      const res = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setFormStatus('success')
        form.reset()
        return
      }
      setFormError(
        typeof data.message === 'string'
          ? data.message
          : 'Could not send the message. Try again or email us directly.',
      )
    } catch {
      setFormError('Network error. Check your connection and try again.')
    }
    setFormStatus('idle')
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s plan your next shipment."
        
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <SectionReveal>
            <div className="space-y-6 rounded-3xl border border-ink-900/8 bg-white p-8 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-forest-900">Visit &amp; hours</h2>
              <ul className="space-y-4 text-sm text-ink-800/85">
                <li className="flex gap-3">
                  <FaLocationDot className="mt-0.5 h-5 w-5 shrink-0 text-maize-500" aria-hidden />
                  <span>KM1 Jos raod, Saminaka, Kaduna State, Nigeria</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhone className="mt-0.5 h-5 w-5 shrink-0 text-maize-500" aria-hidden />
                  <div className="flex flex-col gap-2 font-medium text-forest-800">
                    <a href="tel:+2348034518836" className="hover:underline">
                      +234 803 451 8836
                    </a>
                    <a href="tel:+2348169626550" className="hover:underline">
                      +234 816 962 6550
                    </a>
                    <a href="tel:+2348066544996" className="hover:underline">
                      +234 806 654 4996
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="h-5 w-5 shrink-0 text-maize-500" aria-hidden />
                  <a
                    href="mailto:husnaagrofood@gmail.com"
                    className="font-medium text-forest-800 hover:underline"
                  >
                    husnaagrofood@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaClock className="mt-0.5 h-5 w-5 shrink-0 text-maize-500" aria-hidden />
                  <span>Facility tours by appointment</span>
                </li>
              </ul>
            </div>

            <SectionReveal delayIndex={1} className="mt-6">
              <div className="overflow-hidden rounded-3xl border border-ink-900/8 bg-white shadow-lg ring-1 ring-ink-900/5">
                <div className="relative aspect-[16/11] w-full">
                  <iframe
                    title="Map — Husna Agro Foods location"
                    src={MAP_IFRAME_SRC}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="border-t border-ink-900/[0.06] px-4 py-3 text-center text-xs text-ink-800/60">
                  <a
                    href={GOOGLE_MAPS_PLACE_URL}
                    className="font-medium text-forest-800 underline decoration-maize-400/70 underline-offset-2 hover:text-accent-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
            </SectionReveal>
          </SectionReveal>

          <SectionReveal delayIndex={1}>
            <motion.form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-ink-900/8 bg-white p-8 shadow-sm sm:p-10"
              initial={false}
              animate={formStatus === 'success' ? { scale: [1, 1.01, 1] } : {}}
              transition={{ duration: 0.35 }}
            >
              <h2 className="font-display text-xl font-semibold text-forest-900">Send a message</h2>
              <p className="mt-2 text-sm text-ink-800/75">
                We will respond to you as soon as possible via email.
              </p>

              <div className="mt-8 space-y-6">
                {/* Honeypot — leave off; bots that fill it are rejected by FormSubmit */}
                <input
                  type="text"
                  name="_honey"
                  defaultValue=""
                  tabIndex={-1}
                  autoComplete="off"
                  className="pointer-events-none absolute left-0 top-0 h-px w-px opacity-0"
                  aria-hidden="true"
                />
                {[
                  { id: 'name', label: 'Full name', type: 'text', autoComplete: 'name' },
                  { id: 'email', label: 'Work email', type: 'email', autoComplete: 'email' },
                  { id: 'org', label: 'Company / organization', type: 'text', autoComplete: 'organization' },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      placeholder=" "
                      required={field.id !== 'org'}
                      disabled={formStatus === 'submitting'}
                      className="peer block w-full rounded-xl border border-ink-900/15 bg-cream-50/50 px-4 pb-2.5 pt-6 text-sm text-ink-900 shadow-sm transition focus:border-maize-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-maize-400/25 disabled:opacity-60"
                    />
                    <label
                      htmlFor={field.id}
                      className="pointer-events-none absolute left-4 top-3.5 origin-left text-sm text-ink-800/55 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-forest-800 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-forest-800"
                    >
                      {field.label}
                    </label>
                  </div>
                ))}

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder=" "
                    required
                    disabled={formStatus === 'submitting'}
                    className="peer block w-full resize-y rounded-xl border border-ink-900/15 bg-cream-50/50 px-4 pb-2.5 pt-6 text-sm text-ink-900 shadow-sm transition focus:border-maize-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-maize-400/25 disabled:opacity-60"
                  />
                  <label
                    htmlFor="message"
                    className="pointer-events-none absolute left-4 top-3.5 origin-left text-sm text-ink-800/55 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-forest-800 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-forest-800"
                  >
                    How can we help?
                  </label>
                </div>
              </div>

              {formStatus === 'success' && (
                <p
                  className="mt-6 rounded-xl bg-forest-800/10 px-4 py-3 text-sm font-medium text-forest-900"
                  role="status"
                >
                  Thank you — your message was sent. We’ll get back to you soon.
                </p>
              )}

              {formError && (
                <p
                  className="mt-6 rounded-xl border border-accent-500/30 bg-accent-500/10 px-4 py-3 text-sm font-medium text-ink-900"
                  role="alert"
                >
                  {formError}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="mt-8 w-full rounded-xl bg-gradient-to-r from-maize-300 via-maize-400 to-accent-500 py-3.5 text-sm font-bold text-forest-900 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maize-500 disabled:cursor-not-allowed disabled:opacity-70"
                initial={false}
                whileHover={
                  formStatus === 'submitting'
                    ? {}
                    : {
                        boxShadow: '0 14px 32px -10px rgba(234, 88, 12, 0.32)',
                        scale: 1.01,
                      }
                }
                whileTap={formStatus === 'submitting' ? {} : { scale: 0.99 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                {formStatus === 'submitting' ? 'Sending…' : 'Submit message'}
              </motion.button>
            </motion.form>
          </SectionReveal>
        </div>
      </div>
    </>
  )
}
