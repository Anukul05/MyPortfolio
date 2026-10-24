import { lazy, Suspense } from 'react'
import { ArrowDownRight, ArrowUpRight, CodeXml } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteLinks } from '../../data/siteLinks'

const HeroCanvas = lazy(() => import('../ui/HeroCanvas'))

const technologies = [
  'Java',
  'Spring Boot',
  'React',
  'Tailwind CSS',
  'REST APIs',
  'AI Agents',
]

const Hero = () => (
  <section
    aria-labelledby="hero-title"
    className="relative isolate flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center justify-center overflow-hidden px-4 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-36 lg:px-8"
  >
    <Suspense fallback={null}>
      <HeroCanvas />
    </Suspense>
    <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-accent-secondary sm:text-sm">
        / Full-Stack Java · Agentic Systems
      </p>
      <div className="mb-8 inline-flex items-center gap-2 rounded-md border border-border-default bg-surface/80 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-muted backdrop-blur-xl sm:text-xs">
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
        </span>
        Available for Full-Stack &amp; AI Roles
      </div>

      <h1
        id="hero-title"
        className="max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-primary sm:text-5xl md:text-6xl lg:text-7xl"
      >
        AI-Powered &nbsp;
        <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
          Java Full-Stack Developer
        </span>
      </h1>

      <p className="mt-6 max-w-3xl font-mono text-sm leading-relaxed text-muted sm:text-base md:text-lg">
        Shipping Java microservices, React products, and spec-driven AI workflows from idea to
        production.
      </p>

      <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
        <motion.a
          href="#projects"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary shadow-lg shadow-accent-primary/25 transition-all hover:-translate-y-0.5 hover:bg-accent-primary/90 hover:shadow-accent-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base sm:text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          Explore Projects
          <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
        </motion.a>
        <motion.a
          href="#ai-assistant"
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-accent-primary/40 bg-surface/80 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary shadow-lg shadow-accent-primary/10 transition-all hover:-translate-y-0.5 hover:border-accent-primary/70 hover:shadow-accent-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base sm:text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          Talk to AI Assistant
        </motion.a>
        <motion.a
          href="#contact"
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-border-default px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted transition-colors hover:border-border-hover hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base sm:text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          Contact Me
        </motion.a>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md border border-border-default bg-surface/60 px-3 py-2 font-mono text-xs text-muted transition-all hover:border-accent-primary/50 hover:text-primary"
        >
          <ArrowDownRight className="h-4 w-4 text-accent-primary" aria-hidden="true" />
          View selected work
        </a>
        <a
          href={siteLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border-default bg-surface/60 px-3 py-2 font-mono text-xs text-muted transition-all hover:border-accent-secondary/50 hover:text-primary"
        >
          <CodeXml className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
          GitHub
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      <ul
        aria-label="Core technologies"
        className="mt-10 flex max-w-3xl flex-wrap justify-center gap-2"
      >
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-border-default bg-surface/70 px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-accent-primary/40 hover:text-primary sm:text-xs"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Hero
