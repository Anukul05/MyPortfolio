import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Bot, LoaderCircle, Terminal, UserRound } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { aiKnowledge } from '../../data/aiKnowledge'
import { getAiResponse } from '../../utils/aiResponseEngine'

const initialMessages = [
  {
    id: 'welcome',
    role: 'assistant',
    content:
      'Hi, I’m Anukul’s portfolio copilot. Ask me about Java, Spring Boot, projects, AI workflows, or availability.',
  },
]

const AiAssistant = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [question, setQuestion] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')
  const historyRef = useRef(null)
  const inputRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const history = historyRef.current
    if (history) {
      history.scrollTo({
        top: history.scrollHeight,
        behavior: reduceMotion ? 'auto' : 'smooth',
      })
    }
  }, [messages, isGenerating, reduceMotion])

  const submitQuestion = async (prompt = question) => {
    const trimmedQuestion = prompt.trim()
    if (!trimmedQuestion || isGenerating) return

    setError('')
    setQuestion('')
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: `${Date.now()}-user`, role: 'user', content: trimmedQuestion },
    ])
    setIsGenerating(true)

    await new Promise((resolve) => window.setTimeout(resolve, 250))

    try {
      const response = getAiResponse(trimmedQuestion)
      setMessages((currentMessages) => [
        ...currentMessages,
        { id: `${Date.now()}-assistant`, role: 'assistant', content: response },
      ])
    } catch (responseError) {
      setError('The response could not be generated. Please try again or use the contact section.')
      console.error('AI assistant response failed:', responseError)
    } finally {
      setIsGenerating(false)
      inputRef.current?.focus()
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    void submitQuestion()
  }

  const animationInitial = reduceMotion ? false : { opacity: 0, y: 30 }

  return (
    <motion.section
      id="ai-assistant"
      aria-labelledby="ai-assistant-heading"
      className="scroll-mt-16 border-t border-border-default px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      initial={animationInitial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 text-center">
          <p className="inline-flex items-center gap-2 rounded-md border border-border-default bg-surface px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden="true" />
            04 / PORTFOLIO COPILOT
          </p>
          <h2
            id="ai-assistant-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Ask the portfolio
          </h2>
          <p className="mt-3 font-mono text-xs leading-relaxed text-muted sm:text-sm">
            Instant answers about Anukul’s engineering background and work.
          </p>
        </header>

        <div className="overflow-hidden rounded-xl border border-border-default bg-surface shadow-xl shadow-base/50">
          <div className="flex items-center justify-between border-b border-border-default bg-base/70 px-4 py-3">
            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              <Terminal className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
              <span>portfolio-copilot</span>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
              Online
            </span>
          </div>

          <div
            ref={historyRef}
            aria-label="Chat history"
            aria-live="polite"
            className="flex max-h-[26rem] min-h-72 flex-col gap-4 overflow-y-auto p-4 sm:p-6"
          >
            {messages.map(({ id, role, content }) => (
              <div
                key={id}
                className={`flex items-start gap-3 ${role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border ${
                    role === 'assistant'
                      ? 'border-accent-primary/30 bg-accent-primary/10 text-accent-primary'
                      : 'border-border-default bg-base text-muted'
                  }`}
                  aria-hidden="true"
                >
                  {role === 'assistant' ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <UserRound className="h-4 w-4" />
                  )}
                </span>
                <p
                  className={`max-w-[85%] whitespace-pre-line rounded-xl border px-4 py-3 font-mono text-xs leading-relaxed sm:text-sm ${
                    role === 'assistant'
                      ? 'border-accent-primary/20 bg-base/70 text-primary'
                      : 'border-accent-primary/30 bg-accent-primary/10 text-primary'
                  }`}
                >
                  {role === 'assistant' && (
                    <span className="mr-2 text-accent-primary">copilot &gt;</span>
                  )}
                  {content}
                </p>
              </div>
            ))}

            {isGenerating && (
              <div className="flex items-center gap-3" role="status" aria-label="Generating response">
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent-primary/30 bg-accent-primary/10 text-accent-primary">
                  <Bot className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-border-default bg-base/70 px-4 py-3 font-mono text-xs text-muted">
                  <LoaderCircle className="h-4 w-4 animate-spin text-accent-primary" aria-hidden="true" />
                  Generating response…
                </span>
              </div>
            )}
          </div>

          {error && (
            <p role="alert" className="px-4 pb-2 font-mono text-xs text-error sm:px-6">
              {error}
            </p>
          )}

          <div className="border-t border-border-default bg-base/40 p-4 sm:p-6">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-muted">
              Suggested prompts
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              {aiKnowledge.suggestedQuestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  disabled={isGenerating}
                  onClick={() => void submitQuestion(suggestion)}
                  className="rounded-md border border-border-default bg-base px-3 py-2 text-left font-mono text-[10px] text-muted transition-colors hover:border-accent-primary/50 hover:bg-surface-hover hover:text-primary disabled:cursor-not-allowed disabled:opacity-50 sm:text-xs"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <label className="sr-only" htmlFor="ai-assistant-input">
                Ask the portfolio copilot
              </label>
              <input
                ref={inputRef}
                id="ai-assistant-input"
                type="text"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask about Java, projects, AI workflows…"
                disabled={isGenerating}
                className="min-w-0 flex-1 rounded-md border border-border-default bg-base px-4 py-3 font-mono text-xs text-primary placeholder:text-muted/70 focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary disabled:opacity-60 sm:text-sm"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!question.trim() || isGenerating}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-primary text-primary transition-colors hover:bg-accent-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ArrowUp className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
            <p className="mt-2 font-mono text-[10px] text-muted">
              Press Enter to send · Portfolio answers use a local knowledge base
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default AiAssistant
