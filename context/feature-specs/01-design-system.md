# Feature Spec: 01 - Design System & Global Styles

## Objective
Configure Tailwind CSS and global CSS variables in the main stylesheet to match the color tokens, typography, and dark-mode aesthetic defined in `context/ui-context.md`.

## Instructions for Agent
1. Read `agents.md` and all files in `/context` before starting.
2. Update `context/progress-tracker.md` to mark this unit as **In Progress**.
3. Configure CSS custom properties in your main CSS file for:
   - `--bg-base`: `#09090b`
   - `--bg-surface`: `#18181b`
   - `--text-primary`: `#f4f4f5`
   - `--text-muted`: `#a1a1aa`
   - `--accent-primary`: `#3b82f6`
   - `--border-default`: `#27272a`
   - `--state-error`: `#ef4444`
   - `--state-success`: `#22c55e`
4. Configure Tailwind (`tailwind.config.js`) to map these CSS variables to utility tokens so no hardcoded hex values are used.
5. Install `lucide-react` for stroke-based icons.
6. Create a reusable `src/utils/cn.js` helper utility using `clsx` and `tailwind-merge` for class merging.

## Verification Checklist (Definition of Done)
- [ ] Tailwind compiles successfully with zero errors.
- [ ] Background color defaults to `#09090b`.
- [ ] `cn()` helper function is created in `src/utils/cn.js`.
- [ ] `context/progress-tracker.md` is updated to mark this unit as **Complete**.