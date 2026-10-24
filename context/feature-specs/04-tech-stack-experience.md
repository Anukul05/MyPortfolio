# Feature Spec: 04 - Tech Stack Grid & Experience Timeline

## Objective
Build a dual-part section showcasing Anukul's categorized technical skill set (Backend Java, Frontend, AI/Tooling) and an interactive, chronological professional experience timeline reading from `src/data/experience.js`.

## Instructions for Agent
1. Read `agents.md` and all files in `/context` before starting.
2. Update `context/progress-tracker.md` to mark this unit as **In Progress**.
3. Create `src/components/sections/SkillsAndExperience.jsx`:
   - Section ID: `#experience`
   - **Part A — Tech Stack Grid:**
     - Render 3 categorized cards (Backend, Frontend, AI/Tools) using surface tokens (`--bg-surface`, `--border-default`).
     - Display skill items as clean pill tags with subtle accent hover effects.
   - **Part B — Experience Timeline:**
     - Vertical timeline line using `--border-default`.
     - Timeline nodes with glowing status dots for current roles.
     - Role title, company name, time period badge, summary description, and bulleted key highlights.
4. Import and mount `<SkillsAndExperience />` inside `src/App.jsx` right below `<Hero />`.

## Verification Checklist (Definition of Done)
- [ ] Tech stack grid is fully responsive (1 column on mobile, 3 columns on desktop).
- [ ] Timeline displays cleanly on mobile without horizontal clipping.
- [ ] Data is read cleanly from `src/data/experience.js`.
- [ ] `npm run build` passes with zero errors.
- [ ] `context/progress-tracker.md` is updated to mark this unit as **Complete**.