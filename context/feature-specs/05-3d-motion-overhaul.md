# Feature Spec: 05 - 3D Canvas, Scroll & Hover Motion Overhaul

## Objective
Enhance the portfolio UI by adding an interactive 3D Canvas background in the Hero section, smooth 2D entrance animations on scroll for all sections, and interactive hover tilt/glow effects on cards and buttons.

## Instructions for Agent
1. Read `agents.md` and `context/ui-context.md` before starting.
2. Update `context/progress-tracker.md` to mark this feature unit as **In Progress**.
3. Install animation & 3D libraries:
   - Install `framer-motion`, `three`, `@react-three/fiber`, `@react-three/drei`.
4. Build 3D Hero Canvas (`src/components/ui/HeroCanvas.jsx`):
   - Create a lightweight 3D interactive particle sphere or rotating geometry torus using `@react-three/fiber`.
   - Embed this canvas seamlessly behind the Hero text content (`absolute inset-0 -z-10 pointer-events-none`).
5. Apply 2D Scroll Animations (`Framer Motion`):
   - Wrap major sections (`Hero`, `SkillsAndExperience`, `Projects`, `Footer`) with Framer Motion `motion.div`.
   - Add scroll entrance triggers (`initial={{ opacity: 0, y: 30 }}` `whileInView={{ opacity: 1, y: 0 }}` `transition={{ duration: 0.6 }}`).
6. Apply Interactive Hover Effects:
   - Convert skill cards and timeline cards to motion cards with subtle 3D hover tilt (`whileHover={{ scale: 1.02, translateY: -4 }}`) and border glow transitions (`hover:border-[var(--accent-primary)]`).
   - Add spring micro-interactions to buttons (`whileHover={{ scale: 1.05 }}` `whileTap={{ scale: 0.95 }}`).
7. Update Documentation:
   - Update `context/progress-tracker.md` to record the completed 3D & motion overhaul.

## Verification Checklist (Definition of Done)
- [ ] 3D Canvas renders smoothly in the Hero section without lag or frame drops.
- [ ] Sections animate smoothly into view upon scrolling.
- [ ] Cards display 2D/3D tilt and glow effects on mouse hover.
- [ ] `npm run build` passes with zero errors or bundle conflicts.
- [ ] `context/progress-tracker.md` is updated to mark this unit as **Complete**.