import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Education } from '@/sections/Education'
import { Experience } from '@/sections/Experience'
import { HayNatiora } from '@/sections/HayNatiora'
import { Skills } from '@/sections/Skills'
import { Languages } from '@/sections/Languages'
import { Publications } from '@/sections/Publications'
import { Contact } from '@/sections/Contact'
import { Navigation } from '@/components/portfolio/Navigation'
import { Footer } from '@/components/portfolio/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <HayNatiora />
        <Skills />
        <Languages />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
