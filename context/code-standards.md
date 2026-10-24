# Code Standards

## General
* Keep modules and components small and single-purpose.
* Fix root causes; do not layer temporary workarounds or hacky state fixes.
* Do not mix unrelated concerns (e.g., combining API data fetching, business logic, and UI rendering in a single massive component).

## JavaScript & Code Quality
* Use modern ES6+ syntax (arrow functions, destructuring, template literals, optional chaining, and async/await).
* Avoid global state clutter; manage state locally via hooks or clean context patterns.
* Validate unknown external input (e.g., JSON responses from the Java backend or API payloads) before rendering or processing it.

## React & Vite Conventions
* Use functional components exclusively with clear arrow function syntax.
* Keep components modular; break down large UI sections into reusable sub-components.
* Use custom hooks (`src/hooks/`) to encapsulate reusable logic, event listeners, or asynchronous data-fetching routines.
* Ensure all hooks follow standard React rules (call at the top level, no conditional hook calls).

## Styling
* Use Tailwind CSS utility classes and CSS custom property tokens — avoid hardcoded hex values (e.g., do not use `bg-[#121212]`).
* Follow the spacing, border radius, and typography scale defined in `ui-context.md`.
* Ensure every component is fully responsive using mobile-first Tailwind breakpoints (`sm:`, `md:`, `lg:`).
* Respect `prefers-reduced-motion` for animated interactions, scroll reveals, and 3D effects.
* Keep interactive canvas effects lightweight and scoped to visible sections.

## API & Service Integration
* Keep API communication isolated inside service modules (`src/services/`) rather than raw fetch calls scattered across UI components.
* Handle API errors gracefully with proper try/catch blocks and user-friendly fallback UI states (e.g., error banners or skeletons).
* Expect consistent, predictable JSON response shapes from the Java Spring Boot backend.

## Data and Storage
* Static mock configurations, project arrays, and timeline items belong in structured data files (`src/data/`).
* Dynamic records (contact form logs, analytics) belong in the PostgreSQL database managed by the Java backend.
* Large files, preview images, and downloadable resumes belong in static asset storage or CDN.

## File Organization
* `src/components/ui/` — Reusable, atomic design building blocks (buttons, badges, cards)
* `src/components/sections/` — Major portfolio page sections (Hero, Projects, AI Assistant, Contact)
* `src/hooks/` — Custom React hooks for state and side effects
* `src/services/` — API client wrappers and service communication modules for backend interaction
* `src/data/` — Static application data, project lists, and configuration constants
* `src/utils/` — Helper functions, formatting utilities, and class mergers
