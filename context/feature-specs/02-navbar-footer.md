# Feature Spec: 02 - Navigation Bar & Footer Shell

## Objective
Build a responsive, fixed top navigation bar with glassmorphism styling, section jump links, mobile slide-over menu drawer, quick CTA links, and a minimalist technical footer shell.

## Instructions for Agent
1. Read `agents.md` and all files in `/context` before starting.
2. Update `context/progress-tracker.md` to mark this unit as **In Progress**.
3. Create `src/components/sections/Navbar.jsx`:
   - Fixed header (`fixed top-0 w-full z-50`) with backdrop blur (`backdrop-blur-md bg-[var(--bg-base)]/80`) and bottom border (`border-b border-[var(--border-default)]`).
   - Left side: Logo / Name badge ("Anukul Prajapati" with a subtle green pulse dot for live availability).
   - Center links (Desktop): `#about`, `#experience`, `#projects`, `#ai-assistant`, `#contact`.
   - Right side: Quick CTA button for "Download Resume" (opens/downloads resume) and icon buttons for GitHub and LinkedIn using `lucide-react`.
   - Mobile: Hamburger menu button that toggles a full slide-over drawer with the navigation links.
4. Create `src/components/sections/Footer.jsx`:
   - Minimalist bottom bar displaying copyright, tech stack tag ("Built with React, Tailwind & Spring Boot"), and social links.
5. Update `src/App.jsx` to render `<Navbar />`, a main scrollable container shell with placeholders for upcoming sections, and `<Footer />`.

## Verification Checklist (Definition of Done)
- [ ] Navbar sticks to top on scroll with smooth glassmorphism backdrop blur.
- [ ] Mobile hamburger drawer opens and closes smoothly without breaking page layout.
- [ ] All icon buttons use `lucide-react` icons sized properly (`h-5 w-5`).
- [ ] `npm run build` passes with zero errors.
- [ ] `context/progress-tracker.md` is updated to mark this unit as **Complete**.