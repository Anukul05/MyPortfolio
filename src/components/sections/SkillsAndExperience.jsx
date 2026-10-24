import { experience, skillCategories } from '../../data/experience'
import { motion } from 'framer-motion'

const SkillsAndExperience = () => (
  <section
    id="experience"
    aria-labelledby="experience-heading"
    className="scroll-mt-16 border-t border-border-default px-4 py-20 sm:px-6 md:py-28 lg:px-8"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-secondary">/ Skills &amp; Experience</p>
        <h2
          id="experience-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
        >
          Building across the stack
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          A practical toolkit for developing reliable full-stack applications and AI-enabled
          experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {skillCategories.map(({ category, skills }, index) => (
          <motion.article
            key={category}
            className="group relative overflow-hidden rounded-xl border border-border-default bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/50"
            whileHover={{ scale: 1.02, y: -4, rotateX: 1, rotateY: -1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-accent-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-primary">{category}</h3>
              <span className="font-mono text-sm font-semibold text-accent-primary">
                {index + 1}/
              </span>
            </div>
            <ul aria-label={`${category} skills`} className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border-default bg-base px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent-primary/50 hover:bg-surface-hover hover:text-primary"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-4xl">
        <div className="mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-secondary">/ Career journey</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Professional Experience
          </h2>
        </div>

        <ol className="relative space-y-8 before:absolute before:bottom-3 before:left-[0.4375rem] before:top-3 before:w-px before:bg-border-default sm:before:left-[0.6875rem]">
          {experience.map(({ role, company, period, summary, highlights, current }) => (
            <li key={`${company}-${period}`} className="relative pl-8 sm:pl-12">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-base sm:left-1 sm:h-5 sm:w-5 ${
                  current
                    ? 'bg-success shadow-[0_0_12px_var(--state-success)]'
                    : 'bg-muted'
                }`}
              />
              <motion.article
                className="group relative overflow-hidden rounded-xl border border-border-default bg-surface p-5 transition-all duration-300 hover:border-accent-primary/40 sm:p-7"
                whileHover={{ scale: 1.01, y: -3, rotateX: 0.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-primary sm:text-xl">{role}</h3>
                    <p className="mt-1 text-sm font-medium text-accent-primary">{company}</p>
                  </div>
                  <span className="inline-flex w-fit shrink-0 rounded-md border border-border-default bg-base px-3 py-1 font-mono text-xs text-muted sm:text-sm">
                    {period}
                  </span>
                </div>
                <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
                  {summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 font-mono text-xs leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
)

export default SkillsAndExperience
