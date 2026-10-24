# UI Context (v4 - 3D Interactive & Animated Workspace)

## Theme
Dark only. High-tech, immersive developer workspace combining pitch-black depth (`#030712`), glowing glassmorphism surfaces, interactive 3D elements (canvas models/floating geometry), and micro-animations on scroll and hover.

## Colors
Define your color tokens as CSS custom properties. All components must use these tokens — no hardcoded hex values.

| Role | CSS Variable | Value |
| :--- | :--- | :--- |
| Page background | `--bg-base` | `#030712` |
| Surface / Cards | `--bg-surface` | `#0b0f19` |
| Surface Hover | `--bg-surface-hover` | `#111827` |
| Primary text | `--text-primary` | `#f8fafc` |
| Muted text | `--text-muted` | `#94a3b8` |
| Primary accent | `--accent-primary` | `#3b82f6` (Electric Blue) |
| Secondary accent | `--accent-secondary` | `#10b981` (Emerald Glow) |
| Border | `--border-default` | `#1e293b` |
| Border Hover | `--border-hover` | `#3b82f6` (Glowing Blue) |
| Error | `--state-error` | `#ef4444` |
| Success | `--state-success` | `#10b981` |

## Typography
| Role | Font | Variable |
| :--- | :--- | :--- |
| UI Header / Body | Inter / Geist Sans | `--font-sans` |
| Code / Monospace / Badges | JetBrains Mono / Geist Mono | `--font-mono` |

## 3D & Animation Guidelines
* **3D Background Canvas:** Subtle interactive 3D particle mesh or low-poly geometric shape reacting to mouse movement in the Hero section.
* **Scroll Animations (2D):** Smooth fade-in, upward translate, and scale-in triggers on section entrance using Framer Motion (`whileInView`).
* **Hover Interactions:**
  * **Cards:** 3D tilt tilt-shift effect on mouse hover (`tilt` motion effect) with border glow transitions.
  * **Buttons:** Magnetic pull or pulse-glow on hover with smooth spring motion.
* **Borders & Glass:** Glassmorphic containers (`backdrop-blur-xl bg-black/40 border border-[var(--border-default)]`).

## Dependencies Required
* `framer-motion` (for 2D scroll & hover animations)
* `@react-three/fiber` & `@react-three/drei` & `three` (for 3D webgl canvas)