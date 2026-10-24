# Feature Spec: 06 - Featured Projects Section

## Objective
Build a responsive, interactive Projects section displaying project cards with glassmorphic cards, tech pill tags, interactive hover effects, live demo/GitHub CTAs, and expandable detail cards using data from `src/data/projects.js`.

## Instructions for Agent
1. Read `agents.md` and all files in `/context` before starting.
2. Update `context/progress-tracker.md` to mark this unit as **In Progress**.
3. Create `src/components/sections/Projects.jsx`:
   - Section ID: `#projects`
   - Header with section badge ("03 / PORTFOLIO WORK"), high-contrast headline, and subtitle.
   - Grid layout (1 column on mobile, 2 columns on desktop) consuming `projectsData` from `src/data/projects.js`.
   - Card container styled with `bg-[var(--bg-surface)] border border-[var(--border-default)]` and Framer Motion hover elevation (`whileHover={{ y: -6 }}`).
   - Feature bullet list highlighting architectural achievements.
   - External links for GitHub repository and Live Demo using `lucide-react` icons (`ExternalLink`, `Github`).
4. Import and mount `<Projects />` in `src/App.jsx` right below `<SkillsAndExperience />`.
5. Update `context/progress-tracker.md` to mark this task as **Complete**.

## Verification Checklist (Definition of Done)
- [ ] Projects grid renders smoothly across mobile and desktop viewports.
- [ ] Hover states feature blue border glows matching `ui-context.md`.
- [ ] Links open in new tabs securely (`target="_blank" rel="noopener noreferrer"`).
- [ ] `npm run build` completes with zero errors.
- [ ] `context/progress-tracker.md` is updated.
