import { useRef, useState } from 'react'
import {
  BriefcaseBusiness,
  Check,
  CodeXml,
  Copy,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { siteLinks } from '../../data/siteLinks'

const socialLinks = [
  { label: 'GitHub', href: siteLinks.github, Icon: CodeXml },
  { label: 'LinkedIn', href: siteLinks.linkedin, Icon: BriefcaseBusiness },
]

const Contact = () => {
  const [copyState, setCopyState] = useState('idle')
  const [submitState, setSubmitState] = useState('idle')
  const formRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteLinks.email)
      setCopyState('copied')
      window.setTimeout(() => setCopyState('idle'), 2200)
    } catch (error) {
      console.error('Unable to copy the email address:', error)
      setCopyState('error')
      window.setTimeout(() => setCopyState('idle'), 3500)
    }
  }

  const submitContact = async (event) => {
    event.preventDefault()
    const form = formRef.current
    if (!form || submitState === 'sending') return

    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const subject = String(formData.get('subject') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !email || !subject || message.length < 10) {
      form.reportValidity()
      return
    }

    setSubmitState('sending')
    const body = `From: ${name} (${email})\n\n${message}`
    const mailto = `mailto:${siteLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 150))
      window.location.href = mailto
      form.reset()
      setSubmitState('opened')
    } catch (error) {
      console.error('Unable to open a new email draft:', error)
      setSubmitState('error')
    }
  }

  const animationInitial = reduceMotion ? false : { opacity: 0, y: 30 }

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 border-t border-border-default px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      initial={animationInitial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-secondary">
            05 / GET IN TOUCH
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Let&apos;s Build High-Signal Systems Together
          </h2>
          <p className="mt-4 font-mono text-xs leading-relaxed text-muted sm:text-sm">
            Have a role, project, or idea in mind? Start a conversation.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.aside
            className="group relative overflow-hidden rounded-xl border border-border-default bg-surface p-6 transition-colors hover:border-accent-primary/50 sm:p-8"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-accent-primary/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Direct communication
              </p>
              <div className="mt-5 flex items-center gap-3 rounded-lg border border-border-default bg-base p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-accent-primary/30 bg-accent-primary/10 text-accent-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Email</p>
                  <a
                    href={`mailto:${siteLinks.email}`}
                    className="break-all font-mono text-xs text-primary transition-colors hover:text-accent-primary sm:text-sm"
                  >
                    {siteLinks.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border-default px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-accent-primary/50 hover:bg-surface-hover hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                >
                  {copyState === 'copied' ? (
                    <Check className="h-4 w-4 text-success" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                  <span className="hidden sm:inline">
                    {copyState === 'copied' ? 'Copied!' : 'Copy Email'}
                  </span>
                </button>
              </div>
              <p aria-live="polite" className="mt-2 min-h-4 font-mono text-[10px] text-muted">
                {copyState === 'copied' && 'Copied to Clipboard!'}
                {copyState === 'error' && 'Clipboard unavailable. Select and copy the email above.'}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${siteLinks.phone}`}
                  className="inline-flex items-center gap-3 rounded-lg border border-border-default bg-base p-4 font-mono text-xs text-muted transition-colors hover:border-accent-primary/50 hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-primary" aria-hidden="true" />
                  {siteLinks.phone}
                </a>
                <a
                  href={siteLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg border border-border-default bg-base p-4 font-mono text-xs text-muted transition-colors hover:border-accent-secondary/50 hover:text-primary"
                >
                  <MessageCircle
                    className="h-4 w-4 shrink-0 text-accent-secondary"
                    aria-hidden="true"
                  />
                  WhatsApp
                  <ExternalLink className="ml-auto h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-lg border border-success/20 bg-success/5 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted sm:text-xs">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                Open for Full-Time Roles &amp; AI Consulting
              </div>

              <div className="mt-6 flex gap-3 border-t border-border-default pt-5">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex items-center gap-2 rounded-md border border-border-default px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-accent-primary/50 hover:bg-surface-hover hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          <div className="rounded-xl border border-border-default bg-surface p-6 backdrop-blur-xl sm:p-8">
            <form ref={formRef} onSubmit={submitContact} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block font-mono text-xs text-muted">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Your name"
                    className="w-full rounded-md border border-border-default bg-base px-3 py-3 font-mono text-xs text-primary placeholder:text-muted/70 focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block font-mono text-xs text-muted">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-border-default bg-base px-3 py-3 font-mono text-xs text-primary placeholder:text-muted/70 focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-2 block font-mono text-xs text-muted">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={150}
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-md border border-border-default bg-base px-3 py-3 font-mono text-xs text-primary placeholder:text-muted/70 focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block font-mono text-xs text-muted">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  placeholder="Tell me a little about your project or opportunity..."
                  className="w-full resize-y rounded-md border border-border-default bg-base px-3 py-3 font-mono text-xs leading-relaxed text-primary placeholder:text-muted/70 focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
                />
              </div>

              <button
                type="submit"
                disabled={submitState === 'sending'}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-accent-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary shadow-lg shadow-accent-primary/20 transition-colors hover:bg-accent-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-wait disabled:opacity-70"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {submitState === 'sending' ? 'Preparing Email…' : 'Send Message'}
              </button>
            </form>

            <p
              role={submitState === 'error' ? 'alert' : 'status'}
              aria-live="polite"
              className={`mt-4 min-h-5 rounded-md border px-3 py-2 font-mono text-xs leading-relaxed ${
                submitState === 'error'
                  ? 'border-error/30 bg-error/5 text-error'
                  : 'border-border-default bg-base/70 text-muted'
              }`}
            >
              {submitState === 'sending' && 'Preparing your email draft…'}
              {submitState === 'opened' &&
                'Your email app should open with your message. Send it there to complete delivery.'}
              {submitState === 'error' &&
                'Could not open your email app. Please email Anukul directly using the address shown.'}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact