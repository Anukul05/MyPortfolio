# Feature Spec: 03 - Hero Section

## Objective
Build a high-impact, responsive Hero section that highlights Anukul Prajapati's value proposition as a Full-Stack Java & AI Developer, featuring interactive CTA buttons and a dynamic availability badge.

## Instructions for Agent
1. Read `agents.md` and all files in `/context` before starting.
2. Update `context/progress-tracker.md` to mark this unit as **In Progress**.
3. Create `src/components/sections/Hero.jsx`:
   - Section container centered vertically with responsive top padding to clear the fixed navbar (`pt-32 pb-20 md:pt-40 md:pb-32`).
   - Status Badge: Top pill badge with a pulsing green indicator ("Available for Full-Time Roles & AI Consulting").
   - Headline: Large, bold typography using `--text-primary` with subtle gradient text highlights on key terms ("Full-Stack Java" and "AI Engineering").
   - Subtitle: Clear summary emphasizing microservices, Spring Boot, React, and spec-driven AI development.
   - Action Buttons:
     - Primary CTA: "Explore Projects" button with smooth anchor scroll to `#projects`.
     - Secondary CTA: "Talk to AI Assistant" button with subtle glow effect pointing to `#ai-assistant`.
     - Tertiary CTA: "Contact Me" outline button scroll to `#contact`.
   - Tech Pill Tags: A subtle horizontal row displaying core stack tags (`Java`, `Spring Boot`, `React`, `Tailwind CSS`, `REST APIs`, `AI Agents`).
4. Import and mount `<Hero />` inside `src/App.jsx` right below `<Navbar />` and above `<Footer />`.

## Verification Checklist (Definition of Done)
- [ ] Hero section is fully responsive across mobile, tablet, and desktop viewports.
- [ ] Primary CTA smooth-scrolls to `#projects` without page jump bugs.
- [ ] Styling strictly adheres to CSS tokens from `context/ui-context.md` (`--bg-base`, `--accent-primary`, etc.).
- [ ] `npm run build` passes with zero errors.
- [ ] `context/progress-tracker.md` is updated to mark this unit as **Complete**.