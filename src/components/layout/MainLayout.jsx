import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import AnimatedBackground from '../ui/AnimatedBackground'

/**
 * Global layout: premium shell with subtle moving backdrop + page transitions.
 */
export default function MainLayout() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream-50 text-ink-900">
      <AnimatedBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        {/* Smooth route cross-fade — Framer Motion + React Router */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  )
}
