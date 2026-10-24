import { BriefcaseBusiness, CodeXml } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { siteLinks } from '../../data/siteLinks'

const socialLinks = [
  { label: 'GitHub', href: siteLinks.github, Icon: CodeXml },
  { label: 'LinkedIn', href: siteLinks.linkedin, Icon: BriefcaseBusiness },
]

const Footer = () => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.footer
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="border-t border-border-default bg-base/80"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-7 font-mono text-xs text-muted sm:px-6 md:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} Anukul Prajapati</p>
        <p className="rounded-md border border-border-default bg-surface px-3 py-1.5 uppercase tracking-wide">
          Built with React, Tailwind &amp; Spring Boot
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-md border border-transparent p-2 transition-colors hover:border-border-hover hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
