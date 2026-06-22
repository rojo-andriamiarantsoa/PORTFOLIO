import { personalInfo } from '@/data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <span>&copy; {year} {personalInfo.shortName}. Tous droits réservés.</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
            {personalInfo.email}
          </a>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">
            {personalInfo.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}
