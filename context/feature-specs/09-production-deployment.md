# Feature Spec: 09 - Production Build, SEO & Deployment Readiness

## Objective
Audit the entire portfolio codebase for performance, optimize 3D/animation bundle sizes, configure SEO metadata, verify production build consistency, and create deployment configuration files.

## Instructions for Agent
1. Read `agents.md` and all files in `/context/` before starting.
2. Update `context/progress-tracker.md` to mark this final unit as **In Progress**.
3. SEO & Head Metadata (`index.html`):
   - Update `<title>` to: `Anukul Prajapati | Full-Stack Java & AI Developer`.
   - Add high-signal meta tags: description, keywords (Java, Spring Boot, React, AI Agentic Systems), Open Graph (OG) tags, and favicon.
4. Code Quality & Performance Audit:
   - Check all components for unused imports or dead variables.
   - Ensure dynamic lazy loading for heavy components (e.g., Three.js / React Three Fiber canvas in `HeroCanvas.jsx`).
   - Confirm all external links possess `rel="noopener noreferrer" target="_blank"`.
5. Deployment Configuration:
   - Create a `vercel.json` (or `netlify.toml`) rewrite configuration file to support single-page application (SPA) routing:
     ```json
     {
       "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
     }
     ```
6. Build Verification:
   - Run `npm run build` locally to confirm the production build completes with zero errors or warnings.
7. Update Documentation:
   - Mark all tasks in `context/progress-tracker.md` as **Completed**.

## Verification Checklist (Definition of Done)
- [ ] `index.html` contains production-ready title, meta tags, and Open Graph metadata.
- [ ] SPA routing rules (`vercel.json`) are present in the project root.
- [ ] `npm run build` executes cleanly with standard bundle output.
- [ ] `context/progress-tracker.md` is updated to mark the entire project as **Complete**.