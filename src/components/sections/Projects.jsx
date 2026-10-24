import { useState } from 'react'
import { ChevronDown, CodeXml, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { projectsData } from '../../data/projects'

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <motion.section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-16 border-t border-border-default px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-secondary">
            03 / PORTFOLIO WORK
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Selected Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Systems and products built across full-stack engineering, microservices, and AI.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projectsData.map((project, index) => {
            const isExpanded = expandedProject === project.id
            const hasLiveDemo = project.liveUrl && project.liveUrl !== '#'

            return (
              <motion.article
                key={project.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-default bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/50"
                whileHover={{ scale: 1.02, y: -4, rotateX: 1, rotateY: -1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-accent-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      {project.featured && (
                        <span className="mb-3 inline-flex rounded-md border border-accent-primary/30 bg-accent-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-primary">
                          Featured
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-muted">{project.subtitle}</p>
                    </div>
                    <span className="font-mono text-sm font-semibold text-accent-primary">
                      {index + 1}/
                    </span>
                  </div>

                  <p className="mt-5 font-mono text-xs leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border-default bg-base px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent-primary/50 hover:bg-surface-hover hover:text-primary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border-default pt-5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-border-default px-3 py-2 font-mono text-xs text-primary transition-colors hover:border-accent-primary/60 hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                    >
                      <CodeXml className="h-4 w-4" aria-hidden="true" />
                      Source Code
                      <ExternalLink className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
                    </a>
                    {hasLiveDemo && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-accent-primary px-3 py-2 font-mono text-xs font-semibold text-primary transition-colors hover:bg-accent-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                      >
                        Live Demo
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`${project.id}-details`}
                      onClick={() =>
                        setExpandedProject(isExpanded ? null : project.id)
                      }
                      className="ml-auto inline-flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs text-muted transition-colors hover:bg-surface-hover hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                    >
                      {isExpanded ? 'Hide details' : 'View details'}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <div
                    id={`${project.id}-details`}
                    hidden={!isExpanded}
                    className="mt-4 rounded-lg border border-border-default bg-base/70 p-4"
                  >
                    <h4 className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
                      Architecture highlights
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
