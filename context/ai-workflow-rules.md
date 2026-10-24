# AI Workflow Rules

## Approach
Build this portfolio project incrementally using a spec-driven workflow. Context files define what to build, how to build it, and the current state of progress. Always implement against these specs — do not infer or invent behavior from scratch.

## Scoping Rules
* Work on one component or feature unit at a time.
* Prefer small, verifiable increments over large speculative changes.
* Do not combine unrelated component boundaries or feature slices in a single implementation step.

## When to Split Work
Split an implementation step if it combines:
* UI layout changes and complex state/chat logic integration.
* Multiple unrelated component modules or sections (e.g., Hero section and Contact form simultaneously).
* Styling tokens or interactions not clearly defined in the context files.
* If a change cannot be verified end to end quickly, the scope is too broad — split it.

## Handling Missing Requirements
* Do not invent product behavior or design patterns not defined in the context files.
* If a requirement is ambiguous, resolve it in the relevant context file before implementing.
* If a requirement is missing, add it as an open question in `progress-tracker.md` before continuing.

## Protected Files
Do not modify the following unless explicitly instructed:
* `src/components/ui/*` — reusable base UI or design system building blocks.
* Tailwind configuration or global base CSS files unless explicitly required by a design system spec.
* Any third-party package configuration internals.

## Keeping Docs in Sync
Update the relevant context file whenever implementation changes:
* Component architecture or directory structure.
* State management or data handling decisions.
* Code conventions or JavaScript/React standards.
* Feature scope or section definitions.

## Before Moving to the Next Unit
* The current unit works end to end within its defined scope.
* No invariant defined in `architecture.md` was violated.
* `progress-tracker.md` reflects the completed work.
* `npm run build` passes with zero errors.