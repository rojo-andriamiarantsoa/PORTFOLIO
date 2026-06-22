'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/data/portfolio'
import { Shield, FlaskConical, Leaf, TrendingUp, Users, Monitor } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-5 h-5" />,
  flask: <FlaskConical className="w-5 h-5" />,
  leaf: <Leaf className="w-5 h-5" />,
  'trending-up': <TrendingUp className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  monitor: <Monitor className="w-5 h-5" />,
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Compétences
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un savoir-faire pluridisciplinaire au service de l&apos;innovation santé
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-card border border-border/50 rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {iconMap[category.icon] || <Shield className="w-5 h-5" />}
                </div>
                <h3 className="text-sm font-semibold">{category.name}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + i * 0.03, duration: 0.3 }}
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/50 flex-shrink-0">
                      <path d="M12 2C10 8 6 12 2 14C8 16 12 20 14 22C16 20 20 16 22 14C18 12 14 8 12 2Z" fill="currentColor" />
                    </svg>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
