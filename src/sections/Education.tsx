'use client'

import { motion } from 'framer-motion'
import { education } from '@/data/portfolio'
import { GraduationCap } from 'lucide-react'

const degreeIcons: Record<string, string> = {
  'M2': 'border-primary bg-primary text-primary-foreground',
  'Formation': 'border-accent bg-accent text-accent-foreground',
  'Licence': 'border-secondary bg-secondary text-secondary-foreground',
  'Baccalauréat': 'border-primary bg-primary text-primary-foreground',
}

function getDegreeStyle(degree: string) {
  for (const [key, style] of Object.entries(degreeIcons)) {
    if (degree.startsWith(key)) return style
  }
  return 'border-muted-foreground/30 bg-background'
}

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-4 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Formation
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un parcours académique d&apos;excellence, de Madagascar à l&apos;Europe
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent -translate-x-1/2" />

          {education.map((item, index) => {
            const style = getDegreeStyle(item.degree)
            return (
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
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${style}`}>
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="flex-1 min-w-0 bg-card border border-border/50 rounded-xl p-5 sm:p-6 ml-12 sm:ml-0 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold leading-snug">
                    {item.degree}
                  </h3>
                  {item.specialization && (
                    <p className="text-sm text-primary/80 font-medium mt-0.5">
                      {item.specialization}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <span>{item.school}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <span>{item.location}</span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed border-t border-border/50 pt-3">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            )})}
        </div>


      </div>
    </section>
  )
}
