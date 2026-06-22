'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'

const highlights = [
  { label: 'Master 2', text: 'Sciences du Médicament · Bioentrepreneurs', color: 'from-primary/20 to-primary/5' },
  { label: 'Startup', text: 'Fondatrice Hay Natiora SARLU', color: 'from-accent/20 to-accent/5' },
  { label: 'Publication', text: 'Co-auteure · Journal of Bioresource Management', color: 'from-secondary/20 to-secondary/5' },
  { label: 'Innovation', text: 'Consultante en financement CIR/CII/JEI', color: 'from-primary/20 to-primary/5' },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            À propos
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
              {personalInfo.bio}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <path d="M12 2C10 8 6 12 2 14C8 16 12 20 14 22C16 20 20 16 22 14C18 12 14 8 12 2Z" fill="currentColor" />
              </svg>
              En bref
            </p>
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className={`rounded-xl bg-gradient-to-br ${item.color} border border-border/50 p-5 hover:border-primary/30 transition-all`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              >
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
