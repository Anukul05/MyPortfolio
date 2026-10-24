# Feature Spec: 07 - Interactive AI Assistant (Portfolio Copilot)

## Objective
Build an interactive, terminal-inspired AI chat widget (`#ai-assistant`) that allows recruiters and visitors to interactively query Anukul Prajapati's technical background, projects, skill set, and job availability.

## Instructions for Agent
1. Read `agents.md` and all context files in `/context/` before starting.
2. Update `context/progress-tracker.md` to mark this unit as **In Progress**.
3. Create `src/components/sections/AiAssistant.jsx`:
   - Section ID: `#ai-assistant`
   - Header with category pill badge ("04 / PORTFOLIO COPILOT") and live status dot.
   - Glassmorphism terminal container (`bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-xl overflow-hidden`).
   - Chat history view displaying user and AI messages with distinct styling (`--accent-primary` highlights for AI responses).
   - Quick prompt pill buttons from `aiKnowledge.suggestedQuestions` for 1-click query execution.
   - Input bar with send button, loader animation while generating, and keyboard Enter submission.
4. Implement Lightweight Query Engine (`src/utils/aiResponseEngine.js`):
   - Pattern-matching rule system over `src/data/aiKnowledge.js` providing instant structured answers for common queries (tech stack, experience, contact, AI methodology, availability).
   - Fallback response generator for unhandled questions encouraging direct contact via the contact form.
5. Import and mount `<AiAssistant />` in `src/App.jsx` right below `<Projects />`.
6. Update `context/progress-tracker.md` to mark this unit as **Complete**.

## Verification Checklist (Definition of Done)
- [ ] AI Copilot interface renders cleanly with smooth message scrolling.
- [ ] Clicking suggested prompt pills fills and executes the chat instantly.
- [ ] Responds accurately to inquiries about Java, Spring Boot, React, AI agent workflows, and hiring status.
- [ ] `npm run build` executes with zero errors.
- [ ] `context/progress-tracker.md` is updated.