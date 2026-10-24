# Architecture Context

## Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| Frontend Framework | React (Vite) + JavaScript | Client-side rendering, component lifecycle, and responsive UI execution |
| Styling | Tailwind CSS | Responsive utility-first styling and design token enforcement |
| Motion & 3D | Framer Motion + React Three Fiber / Three.js | Accessible scroll/hover animation and interactive Hero canvas |
| Backend Framework | Java / Spring Boot | RESTful API services, business logic, security, and backend integrations |
| Database & ORM | PostgreSQL + Spring Data JPA | Relational data persistence for project metadata, contact submissions, and logs |
| AI Integration | Local portfolio knowledge/query engine; Gemini / OpenAI via Spring Boot planned | Provides instant responses to common portfolio questions without exposing provider credentials in the browser |

---

## System Boundaries

* `src/components/ui` — Reusable base UI building blocks (buttons, cards, dialogs, badges)
* `src/components/sections` — Major portfolio page sections (Hero, About, Projects, Experience, AI Assistant, Contact)
* `src/hooks` — Custom React hooks for local state, API fetching, and event handlers
* `src/services` — API client modules (Axios/Fetch wrappers) communicating with the Java Spring Boot backend
* `src/data` — Static configuration data, project mock lists, and timeline details
* `src/data/aiKnowledge.js` and `src/utils/aiResponseEngine.js` — Structured portfolio facts and the local rule-based response engine used by the AI assistant
* `backend/src/main/java` — Spring Boot controllers, service layers, security configs, and data repositories (Java backend service)
* **Contact submission:** The current frontend validates the contact form and opens a prefilled email draft addressed to the portfolio owner. Server-side delivery requires a Spring Boot contact endpoint, which has not yet been provided.
* **Production delivery:** Vercel serves the Vite build and rewrites application paths to `index.html` for SPA navigation. The Hero canvas is dynamically loaded, pauses outside the viewport, and its Three.js vendor modules are size-split to keep each output chunk below 400 KB.

---

## Storage Model

* **Relational Database (PostgreSQL):** Stores contact form submissions, user feedback logs, dynamic project metadata, and site metrics managed via Spring Data JPA.
* **Static Asset Storage / CDN:** Stores project preview screenshots, downloadable PDF resumes, and media artifacts.

---

## Auth and Access Model

* **Public Read-Only Access:** Visitors can browse the portfolio, view projects, and interact with the AI assistant without requiring authentication.
* **Backend Security:** API endpoints handling contact submissions or administrative actions are protected via Spring Security with CORS configuration and input sanitization.
* **Data Mutation Control:** Only authorized requests or verified form payloads can trigger backend data creation or email notifications.

---

## Invariants

* Frontend components never execute direct database calls or business logic; all mutations and complex requests must pass through the Java Spring Boot REST API.
* The frontend must gracefully handle network latency or backend downtime without breaking the core UI layout.
* Component development must strictly adhere to the styling tokens defined in `ui-context.md` without introducing raw inline styles.
* Strict component separation: layout wrappers, sections, and atomic UI elements must remain isolated within their designated directories.