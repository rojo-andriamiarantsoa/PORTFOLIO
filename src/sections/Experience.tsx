'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/portfolio'
import { Briefcase, FlaskConical, Building2, Sparkles } from 'lucide-react'

const typeIcons: Record<string, React.ReactNode> = {
  work: <Briefcase className="w-3.5 h-3.5" />,
  internship: <FlaskConical className="w-3.5 h-3.5" />,
  entrepreneurship: <Building2 className="w-3.5 h-3.5" />,
}

const typeStyles: Record<string, string> = {
  work: 'border-primary bg-primary text-primary-foreground',
  internship: 'border-accent bg-accent text-accent-foreground',
  entrepreneurship: 'border-secondary bg-secondary text-secondary-foreground shadow-sm shadow-secondary/30',
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Expériences
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De la recherche académique à l&apos;entrepreneuriat, en passant par l&apos;industrie
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-secondary/40 -translate-x-1/2" />

          {experience.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 last:mb-0 ${
                index % 2 === 0 ? '' : 'sm:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="hidden sm:block flex-1" />

              <div className="relative z-10 flex-shrink-0">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                  typeStyles[item.type] || typeStyles.work
                }`}>
                  {typeIcons[item.type]}
                </div>
              </div>

              <div className={`flex-1 min-w-0 bg-card border rounded-xl p-5 sm:p-6 ml-12 sm:ml-0 transition-all ${
                item.featured
                  ? 'border-primary/40 bg-gradient-to-br from-primary/[0.05] to-accent/[0.03] hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10'
                  : 'border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'
              }`}>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                    {item.period}
                  </span>
                  {item.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-[10px] font-semibold text-primary uppercase tracking-wider border border-primary/20">
                      <Sparkles className="w-2.5 h-2.5" />
                      Projet clé
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-semibold leading-snug">
                  {item.role}
                </h3>
                <p className="text-sm text-primary/80 font-medium mt-0.5">
                  {item.company}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.location}
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed border-t border-border/30 pt-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
