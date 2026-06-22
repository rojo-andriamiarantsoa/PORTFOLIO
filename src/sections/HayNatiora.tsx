'use client'

import { motion } from 'framer-motion'
import { hayNatiora } from '@/data/portfolio'
import { CheckCircle2, Lightbulb } from 'lucide-react'

export function HayNatiora() {
  return (
    <section id="haynatiora" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-primary/[0.05] to-accent/[0.02]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/25 text-xs font-medium text-primary mb-6">
            Projet Entrepreneurial
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
            {hayNatiora.name}
          </h2>
          <p className="text-lg text-primary/80 font-medium">
            {hayNatiora.tagline}
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-accent/40" />
            <span className="w-2 h-2 rounded-full bg-accent/50" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-accent/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Contexte & Genèse
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {hayNatiora.context}
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  Fondée en {hayNatiora.founded}
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {hayNatiora.location}
                </span>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-accent/30 transition-all">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Réalisations
              </h3>
              <ul className="space-y-3">
                {hayNatiora.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-gradient-to-br from-primary/[0.06] to-accent/[0.04] border border-primary/25 rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 flex items-center gap-2 text-accent">
                <Lightbulb className="w-4 h-4" />
                Ce que ce projet illustre
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {hayNatiora.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    className="bg-background/70 border border-primary/15 rounded-xl p-4 hover:bg-background/90 hover:border-primary/30 transition-all group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-xs font-bold text-primary">{i + 1}</span>
                      </div>
                      <p className="text-sm font-medium">{highlight}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Description</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {hayNatiora.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
