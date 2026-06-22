'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { useTheme } from '@/components/portfolio/ThemeProvider'

const leafTypes = [
  {
    d: 'M61 8C45 13 31 25 22 41C14 56 17 73 29 84C42 96 60 101 78 94C95 87 105 72 103 55C101 36 84 18 61 8Z',
    vein: 'M60 16C58 33 58 54 65 88',
    laterals: [
      'M59 30C48 31 38 35 29 43',
      'M59 42C45 44 34 51 25 61',
      'M61 55C49 59 40 68 34 80',
      'M63 32C75 35 86 42 96 54',
      'M63 46C77 50 88 59 98 72',
      'M66 61C77 66 85 75 91 87',
    ],
    stem: 'M65 88C65 97 62 105 58 113',
  },
  {
    d: 'M54 6C38 17 25 35 20 54C16 70 23 86 37 94C51 101 68 98 82 87C96 76 103 58 99 42C95 25 78 12 54 6Z',
    vein: 'M54 14C54 34 58 58 73 90',
    laterals: [
      'M55 31C45 34 36 41 28 52',
      'M57 44C45 49 36 59 29 74',
      'M60 57C51 64 45 74 41 88',
      'M58 34C69 37 80 44 91 56',
      'M62 49C74 53 84 62 94 76',
      'M67 65C76 70 83 78 88 88',
    ],
    stem: 'M73 90C76 98 76 106 73 114',
  },
  {
    d: 'M57 8C43 16 33 29 29 44C25 59 30 75 43 85C55 94 73 94 86 85C99 76 106 60 102 44C98 28 83 15 57 8Z',
    vein: 'M57 16C57 34 60 55 72 88',
    laterals: [
      'M57 31C48 34 40 41 33 52',
      'M59 45C49 50 41 60 36 75',
      'M61 59C54 65 49 74 47 86',
      'M60 33C70 36 81 43 93 55',
      'M63 48C75 52 85 61 96 75',
    ],
    stem: 'M72 88C74 98 73 106 70 114',
  },
]

function seeded(i: number, offset = 0) {
  const x = Math.sin(i * 12.9898 + offset * 78.233) * 43758.5453
  return x - Math.floor(x)
}

function Leaf({ leaf, index }: { leaf: typeof leafTypes[0]; index: number }) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const seed = useMemo(() => ({
    x: seeded(index, 1) * 100,
    y: seeded(index, 2) * 92,
    size: 58 + seeded(index, 3) * 74,
    rotation: seeded(index, 4) * 360,
    duration: 12 + seeded(index, 5) * 14,
    delay: seeded(index, 6) * -22,
    drift: 18 + seeded(index, 7) * 34,
    sway: 0.6 + seeded(index, 8) * 0.8,
    opacity: isDark
      ? 0.45 + seeded(index, 9) * 0.25
      : 0.2 + seeded(index, 9) * 0.15,
  }), [index, isDark])

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${Math.round(seed.x * 100) / 100}%`,
        top: `${Math.round(seed.y * 100) / 100}%`,
        width: Math.round(seed.size),
        height: Math.round(seed.size),
      }}
      animate={{
        y: [0, -seed.drift, 0],
        x: [0, Math.sin(index) * seed.sway * 10, 0, Math.sin(index + 2) * seed.sway * 10, 0],
        rotate: [seed.rotation, seed.rotation + 10, seed.rotation - 4, seed.rotation + 8, seed.rotation],
      }}
      transition={{
        duration: seed.duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: seed.delay,
      }}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full" style={{ opacity: seed.opacity }}>
        <defs>
          <linearGradient id={`leaf-grad-${index}`} x1="18" y1="12" x2="98" y2="102" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={isDark ? 'oklch(0.85 0.15 150 / 0.9)' : 'oklch(0.77 0.12 145 / 0.82)'} />
            <stop offset="45%" stopColor={isDark ? 'oklch(0.7 0.18 160 / 0.9)' : 'oklch(0.55 0.14 158 / 0.86)'} />
            <stop offset="100%" stopColor={isDark ? 'oklch(0.55 0.14 170 / 0.85)' : 'oklch(0.34 0.09 175 / 0.78)'} />
          </linearGradient>
          <filter id={`leaf-shadow-${index}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor={isDark ? 'oklch(0.6 0.2 160 / 0.2)' : 'oklch(0.2 0.05 170 / 0.12)'} />
          </filter>
        </defs>
        <path d={leaf.d} fill={`url(#leaf-grad-${index})`} filter={`url(#leaf-shadow-${index})`} />
        <path d={leaf.vein} stroke={isDark ? 'oklch(0.98 0.02 120 / 0.7)' : 'oklch(0.98 0.02 120 / 0.38)'} strokeWidth="1.25" strokeLinecap="round" fill="none" />
        {leaf.laterals.map((ld, i) => (
          <path key={i} d={ld} stroke={isDark ? 'oklch(0.98 0.02 120 / 0.5)' : 'oklch(0.98 0.02 120 / 0.24)'} strokeWidth="0.75" strokeLinecap="round" fill="none" />
        ))}
        <path d={leaf.stem} stroke={isDark ? 'oklch(0.6 0.15 150 / 0.8)' : 'oklch(0.34 0.1 145 / 0.6)'} strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </motion.div>
  )
}

function FloatingLeaves() {
  const leaves = useMemo(
    () => Array.from({ length: 24 }, (_, i) => leafTypes[i % leafTypes.length]),
    [],
  )

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-80 pointer-events-none">
      {leaves.map((leaf, i) => (
        <Leaf key={i} leaf={leaf} index={i} />
      ))}
    </div>
  )
}

function LakeVisual() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-0 h-[38vh] min-h-72 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-x-0 bottom-0 h-full bg-[linear-gradient(to_bottom,transparent,oklch(0.88_0.04_185/0.22)_38%,oklch(0.78_0.07_190/0.3)_100%)]" />
      <svg className="absolute inset-x-0 bottom-0 h-full w-full" viewBox="0 0 1440 430" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lake-fill" x1="0" y1="110" x2="0" y2="430" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.96 0.02 135 / 0)" />
            <stop offset="44%" stopColor="oklch(0.83 0.05 188 / 0.28)" />
            <stop offset="100%" stopColor="oklch(0.58 0.08 190 / 0.18)" />
          </linearGradient>
        </defs>
        <path d="M0 188C160 154 291 168 432 190C607 218 741 218 922 184C1116 148 1277 146 1440 178V430H0Z" fill="url(#lake-fill)" />
        <path d="M0 190C160 154 291 168 432 190C607 218 741 218 922 184C1116 148 1277 146 1440 178" fill="none" stroke="oklch(0.48 0.1 180 / 0.2)" strokeWidth="1.5" />
        <path d="M136 249C296 233 448 235 615 251M791 252C978 228 1158 226 1320 244" fill="none" stroke="oklch(0.98 0.02 120 / 0.22)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M198 306C402 286 583 292 774 308M906 316C1047 300 1190 300 1346 313" fill="none" stroke="oklch(0.37 0.08 185 / 0.16)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M326 365C525 348 704 354 894 368M1012 374C1120 364 1234 364 1366 374" fill="none" stroke="oklch(0.98 0.02 120 / 0.16)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-24">
      <FloatingLeaves />
      <LakeVisual />

      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.94_0.04_125/0.8),transparent_48%),linear-gradient(to_bottom,oklch(0.99_0.01_120/0.9),transparent_50%,var(--background))] pointer-events-none dark:bg-[radial-gradient(ellipse_at_top,oklch(0.26_0.05_165/0.6),transparent_48%),linear-gradient(to_bottom,oklch(0.15_0.03_165/0.7),transparent_50%,var(--background))]" />
      <div className="absolute inset-x-0 top-20 z-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-20 z-10 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="inline-flex items-center px-5 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-xs font-medium text-primary mb-8 shadow-sm shadow-primary/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {personalInfo.subtitle}
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-foreground">{personalInfo.name.split(' ').slice(0, -1).join(' ')}</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-teal-600 to-accent bg-clip-text text-transparent dark:via-teal-300">
              {personalInfo.name.split(' ').pop()}
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            className="text-sm text-primary/70 font-medium italic mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href="#about"
              className="group relative inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-medium overflow-hidden transition-all hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary" />
              <span className="relative text-primary-foreground flex items-center gap-2">
                Découvrir mon parcours
                <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-primary/30 bg-background/55 px-8 text-sm font-medium text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-primary/10 hover:border-primary/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Me contacter
            </a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap justify-center">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors flex items-center gap-1.5">
                <Mail className="h-3 w-3" />
                {personalInfo.email}
              </a>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors flex items-center gap-1.5">
                <Phone className="h-3 w-3" />
                {personalInfo.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
