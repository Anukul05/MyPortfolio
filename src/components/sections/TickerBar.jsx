const tickerItems = [
  'Ship Fast',
  'Agentic Workflows',
  'Java Spring Boot',
  'React Vite',
  'REST APIs',
]

const TickerBar = () => (
  <div
    role="region"
    aria-label="Ship Fast, Agentic Workflows, Java Spring Boot, React Vite, REST APIs"
    className="ticker overflow-hidden border-y border-border-default bg-surface/70 py-3"
  >
    <div className="ticker-track flex min-w-max items-center" aria-hidden="true">
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center">
          {tickerItems.map((item) => (
            <li
              key={`${copy}-${item}`}
              className="flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.18em] text-muted sm:text-sm"
            >
              <span className="text-accent-secondary">/</span>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
)

export default TickerBar
