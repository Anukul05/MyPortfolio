# Feature Spec: 08 - Contact Section & Direct Communication

## Objective
Build a high-converting, responsive Contact section featuring a glassmorphic communication form, 1-click email copy functionality, social link badges, and direct availability info.

## Instructions for Agent
1. Read `agents.md` and all files in `/context/` before starting.
2. Update `context/progress-tracker.md` to mark this unit as **In Progress**.
3. Create `src/components/sections/Contact.jsx`:
   - Section ID: `#contact`
   - Section Badge: ("05 / GET IN TOUCH") paired with headline "Let's Build High-Signal Systems Together".
   - Left Column (Direct Info & Links):
     - Quick "Copy Email" button with visual feedback state ("Copied to Clipboard!").
     - Social icons/links for GitHub, LinkedIn, and X (Twitter) using `lucide-react`.
     - Live availability badge: "Open for Full-Time Roles & AI Consulting".
   - Right Column (Contact Form):
     - Input fields: Name, Email, Subject, and Message.
     - Glassmorphic inputs using surface tokens (`bg-[var(--bg-surface)] border border-[var(--border-default)] focus:border-[var(--accent-primary)]`).
     - Submit button with sending state, success toast notification, and form reset.
4. Import and mount `<Contact />` inside `src/App.jsx` above `<Footer />`.
5. Update `context/progress-tracker.md` to mark this unit as **Complete**.

## Verification Checklist (Definition of Done)
- [ ] Contact form is fully functional with client-side validation and feedback states.
- [ ] "Copy Email" button copies email address smoothly and displays a success tooltip.
- [ ] Responsive layout adjusts seamlessly between 1-column on mobile and 2-column on desktop.
- [ ] `npm run build` passes with zero errors or warnings.
- [ ] `context/progress-tracker.md` is updated to reflect project completion.