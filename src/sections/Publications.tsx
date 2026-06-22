'use client'

import { motion } from 'framer-motion'
import { publications } from '@/data/portfolio'
import { FileText, BookOpen, Beaker } from 'lucide-react'

const typeIcons: Record<string, React.ReactNode> = {
  'Publication scientifique': <BookOpen className="w-4 h-4" />,
  'Communication nationale': <FileText className="w-4 h-4" />,
  'Projets de recherche': <Beaker className="w-4 h-4" />,
}

const typeAccents: Record<string, string> = {
  'Publication scientifique': 'border-l-primary',
  'Communication nationale': 'border-l-accent',
  'Projets de recherche': 'border-l-secondary',
}

export function Publications() {
  return (
    <section id="publications" className="relative py-24 sm:py-32 px-4 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Publications & Distinctions
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recherche et contributions académiques
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className={`bg-card border border-border/50 rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-all border-l-4 ${
                typeAccents[pub.type] || 'border-l-primary'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  {typeIcons[pub.type] || <FileText className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                      {pub.year}
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                      {pub.type}
                    </span>
                    {pub.authors && (
                      <span className="text-[10px] font-medium text-accent uppercase tracking-wider">
                        {pub.authors}
                      </span>
                    )}
                  </div>

                  {'title' in pub && pub.title && (
                    <h3 className="text-sm sm:text-base font-semibold leading-snug mb-1">
                      {pub.title}
                    </h3>
                  )}

                  {'journal' in pub && pub.journal && (
                    <p className="text-xs text-muted-foreground italic">
                      {pub.journal}
                    </p>
                  )}

                  {'event' in pub && pub.event && (
                    <p className="text-xs text-muted-foreground">
                      {pub.event}
                      {pub.location ? ` — ${pub.location}` : ''}
                    </p>
                  )}

                  {'projects' in pub && pub.projects && (
                    <ul className="mt-2 space-y-1.5">
                      {pub.projects.map((project, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/40 mt-1.5 flex-shrink-0">
                            <path d="M12 2C10 8 6 12 2 14C8 16 12 20 14 22C16 20 20 16 22 14C18 12 14 8 12 2Z" fill="currentColor" />
                          </svg>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {'school' in pub && pub.school && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {pub.school}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
