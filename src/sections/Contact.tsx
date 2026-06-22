'use client'

import { motion } from 'framer-motion'
import { personalInfo, references } from '@/data/portfolio'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-muted/30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Me contacter
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Discutons de votre projet ou d&apos;une collaboration
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="group bg-card border border-border/50 rounded-xl p-5 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</p>
              <p className="text-sm font-medium break-all">{personalInfo.email}</p>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="group bg-card border border-border/50 rounded-xl p-5 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Téléphone</p>
              <p className="text-sm font-medium">{personalInfo.phone}</p>
            </a>

            <div className="group bg-card border border-border/50 rounded-xl p-5 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary mx-auto mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Adresse</p>
              <p className="text-sm font-medium">{personalInfo.address}</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-card border border-border/50 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6 text-center">
              Références
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {references.map((ref, i) => (
                <motion.div
                  key={i}
                  className="border border-border/30 rounded-lg p-4 text-center hover:border-primary/20 hover:bg-primary/[0.02] transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <p className="text-sm font-semibold">{ref.name}</p>
                  <p className="text-xs text-primary/80 mt-0.5">{ref.role}</p>
                  <p className="text-xs text-muted-foreground">{ref.institution}</p>
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 block"
                  >
                    {ref.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
