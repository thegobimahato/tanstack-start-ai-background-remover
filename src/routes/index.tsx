'use client'

import { Button } from '@/components/ui/button'
import { Link, createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <Hero />
}

export default function Hero() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-black text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(5,0,0,0.65), rgba(0,0,0,0.75))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-7xl px-6">
        <div className="flex flex-col items-center gap-10">
          {/* Pill panel */}
          <motion.section
            className="relative w-full"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            aria-labelledby="hero-title"
          >
            <div className="mx-auto max-w-3xl rounded-[36px] px-10 py-12 text-center bg-white/3 border border-white/6 backdrop-blur-sm shadow-[0_10px_30px_rgba(2,6,23,0.6)]">
              <DecorativeCapsule />

              <motion.h1
                id="hero-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
                initial={{ y: -6, opacity: 0, scale: 0.998 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.06 }}
                style={{ textShadow: '0 6px 30px rgba(2,6,23,0.6)' }}
              >
                Remove image backgrounds instantly.
              </motion.h1>

              <motion.p
                className="mt-4 text-lg text-white/70 max-w-2xl mx-auto"
                initial={{ y: -4, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                Fast, reliable background removal for product photos, portraits
                and marketing.
                <br />{' '}
                <span className="text-xl">
                  one click, professional quality.
                </span>
              </motion.p>

              <motion.div
                className="mt-8 flex justify-center items-center gap-3"
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.18 }}
              >
                <Button asChild>
                  <Link to="/projects">Get Started Free</Link>
                </Button>

                {/* small accent dot */}
                <span
                  aria-hidden
                  className="inline-block ml-2 rounded-full"
                  style={{
                    width: 10,
                    height: 10,
                    background:
                      'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 30%, transparent 60%)',
                    boxShadow: '0 6px 30px rgba(56,189,248,0.08)',
                    transform: 'translateY(2px)',
                  }}
                />
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}

/* small decorative capsule elements that mirror the rounded pill edges
   - kept in a helper component for readability
   - purely visual; pointerEvents disabled */
function DecorativeCapsule() {
  return (
    <>
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: -22,
          top: '18%',
          width: 36,
          height: '64%',
          borderRadius: 36,
          border: '1px solid rgba(255,255,255,0.03)',
          boxShadow: 'inset 0 0 30px rgba(255,255,255,0.02)',
          transform: 'skewY(-6deg)',
          pointerEvents: 'none',
        }}
      />
      <span
        aria-hidden
        style={{
          position: 'absolute',
          right: -22,
          top: '18%',
          width: 36,
          height: '64%',
          borderRadius: 36,
          border: '1px solid rgba(255,255,255,0.03)',
          boxShadow: 'inset 0 0 30px rgba(255,255,255,0.02)',
          transform: 'skewY(6deg)',
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
