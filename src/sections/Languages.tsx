'use client'

import { motion } from 'framer-motion'
import { languages } from '@/data/portfolio'
import { Globe } from 'lucide-react'

export function Languages() {
  const getBarColors = (name: string) => {
    if (name === 'Français' || name === 'Malgache') return ['from-primary', 'via-primary/60', 'to-primary/30']
    return ['from-accent', 'via-accent/60', 'to-accent/30']
  }

  return (
    <section id="languages" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/25 text-xs font-medium text-primary mb-6">
            <Globe className="w-3.5 h-3.5" />
            Langues
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Langues parlées
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </motion.div>

        <div className="space-y-6">
          {languages.map((lang, index) => {
            const colors = getBarColors(lang.name)
            return (
              <motion.div
                key={lang.name}
                className="bg-card border border-border/50 rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold">{lang.name}</span>
                    <span className="ml-2 text-xs text-muted-foreground uppercase tracking-wider bg-muted/50 px-2 py-0.5 rounded-full">
                      {lang.level}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {lang.percentage}%
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-muted-foreground/10 overflow-hidden p-0.5">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${colors[0]} ${colors[1]} ${colors[2]}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
