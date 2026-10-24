import { useState } from 'react'
import { BriefcaseBusiness, CodeXml, Download, Menu, X } from 'lucide-react'
import { siteLinks } from '../../data/siteLinks'

const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Assistant', href: '#ai-assistant' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: siteLinks.github, Icon: CodeXml },
  { label: 'LinkedIn', href: siteLinks.linkedin, Icon: BriefcaseBusiness },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-default bg-base/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#about"
          className="flex shrink-0 flex-col gap-0.5 rounded-md font-mono font-semibold uppercase tracking-wider text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
        >
          <span className="text-xs sm:text-sm">Anukul <span className="text-muted">Prajapati</span></span>
          <span className="flex items-center gap-1.5 text-[8px] tracking-[0.12em] text-muted sm:text-[9px]">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_var(--state-success)]" />
            </span>
            Available for Full-Stack &amp; AI Roles
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteLinks.resume}
            download
            className="inline-flex items-center gap-2 rounded-md bg-accent-primary px-3 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary shadow-lg shadow-accent-primary/20 transition-all hover:-translate-y-0.5 hover:bg-accent-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-md border border-transparent p-2 text-muted transition-colors hover:border-border-hover hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-md border border-border-default p-2 text-muted transition-colors hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-50 lg:hidden ${isMenuOpen ? 'visible' : 'invisible'}`}
      >
        <button
          type="button"
          tabIndex={isMenuOpen ? 0 : -1}
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`absolute inset-0 h-full w-full bg-base/80 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-border-default bg-surface p-6 shadow-2xl shadow-accent-primary/10 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden="true" />
              Anukul Prajapati
            </span>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              className="rounded-md p-2 text-muted transition-colors hover:bg-base hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {navigationLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
                className="rounded-md px-3 py-3 text-base text-muted transition-colors hover:bg-base hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href={siteLinks.resume}
            download
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-accent-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>

          <div className="mt-auto flex gap-3 border-t border-border-default pt-6">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                tabIndex={isMenuOpen ? 0 : -1}
                className="rounded-md p-2 text-muted transition-colors hover:bg-base hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </header>
  )
}

export default Navbar
