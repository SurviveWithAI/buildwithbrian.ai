# AGENTS.md — buildwithbrian.ai

> **Strict rules for all work on this portfolio.**  
> This site is a high-signal, production-grade artifact. Every change must increase quality, performance, accessibility, or maintainability. No exceptions.

**Owner:** Brian Phillips (@survivewithai)  
**Tagline:** AI Survivalist — Adapt. Survive. Thrive. In the age of AI.  
**Core Constraint:** 100% of the code and every featured project was built exclusively with **Grok Build** (xAI CLI agent). No templates, no fluff, no heavy frameworks.

---

## 1. Project Philosophy & Non-Negotiables

- **Performance is a feature.** Target Lighthouse 95+ / 100 / 100 / 100. Total JS < 120KB gzipped. 60fps interactions.
- **Accessibility is non-negotiable.** WCAG 2.2 AA minimum. Full keyboard, screen reader, reduced-motion support.
- **SEO is table stakes.** Perfect meta, Open Graph, Twitter cards, JSON-LD schema, sitemap, canonicals, alt text, semantic HTML.
- **Design integrity.** Deep space dark theme (`#0a0a0a` void) with elegant cyan (`#00f5ff`) / teal (`#00d4aa`) neon accents used *sparingly*. Subtle professional cyberpunk edge. Inspiration: x.ai (minimalist futuristic) + realfood.gov (clean, scannable, trustworthy) + light cyberpunk soul.
- **Minimalism & velocity.** Astro 6 + Tailwind 4 + vanilla JS only. Zero React/Vue/Svelte islands unless explicitly justified and isolated. No animation libraries.
- **Single source of truth.** Project content lives **only** in `src/data/projects.ts`. Everything else derives from it.
- **Future-proof but lean.** Content Collections schema exists and is ready but not over-engineered today.

---

## 2. Astro Code Conventions (Clean & Scalable)

### File & Component Rules
- Every `.astro` file starts with a clear frontmatter block (triple-dash) containing:
  - JSDoc-style description of purpose
  - Props interface (when applicable)
  - Only the minimal imports needed
- Prefer **composition over inheritance**. Small, focused, single-responsibility components.
- Shared UI primitives live in `src/components/ui/`.
- Layouts in `src/layouts/`. Pages in `src/pages/`.
- **Never** put business logic or data in components. Data → `src/data/`. Types → `src/types/` (create when needed).
- Use Astro slots intentionally (`<slot />`, named slots for nav/footer).
- For interactivity: vanilla `<script>` tags (inline or module) or tiny `public/scripts/`. Prefer IntersectionObserver, requestAnimationFrame, and native APIs.
- Astro islands (`<script client:load>` etc.) only when absolutely required and documented why.

### Routing & Structure
- This is a **clean single-page scroll site**. `index.astro` composes all sections in logical reading order.
- 404 page must be beautiful and on-brand (already implemented).
- Future expansion: use Content Collections under `src/content/` (projects/ or insights/) only when we add dedicated detail pages. Do not create new pages without updating the plan.

### Frontmatter & Props
```astro
---
/**
 * ComponentName.astro
 * One-sentence purpose. Why it exists.
 */
export interface Props {
  variant?: 'default' | 'featured';
}
const { variant = 'default' } = Astro.props;
---
```

---

## 3. Tailwind CSS + Design System Conventions

### Tokens (Single Source of Truth)
- **All colors, spacing, shadows, radii live in `src/styles/global.css`** under `:root` CSS variables **and** the `@theme inline` block.
- Never hardcode hex values in components except for one-off rare cases (document the exception).
- Current palette (do not change without Design Persona + approval):
  - `--bg-void`, `--bg-elevated`, `--bg-card`
  - `--text-primary`, `--text-secondary`, `--text-muted`
  - `--accent-cyan`, `--accent-teal`, `--accent-green`, `--accent-purple`
  - Glow shadows: `--glow-cyan`, `--glow-teal`, etc.

### Usage
- Use Tailwind utilities + our semantic tokens (`bg-void`, `text-cyan`, `shadow-neon-cyan`).
- Responsive: mobile-first (`md:`, `lg:`). Test every breakpoint.
- Typography: Razor-sharp headings with `tracking-[-3.2px]` etc. System font stack + mono for code/terminal elements.
- Effects (scanlines, matrix grid, glitch, neon glows) are defined once in global.css and reused via classes (`.scanlines`, `.neon-btn`, `.glitch`, `.reveal`).
- Hover states: subtle scale + glow intensification. Always pair with `transition-all` or specific properties.

### Component Styling
- Prefer `class` lists that compose existing utilities.
- For complex cards/modals: keep logic in the component, styles in global.css or minimal scoped `<style>` only when unavoidable (Astro scoped styles are fine but rare in this project).

---

## 4. Accessibility (a11y) Rules — WCAG 2.2 AA

**Mandatory for every interactive element and section:**

1. Semantic HTML first (`<nav>`, `<main>`, `<section>`, proper heading hierarchy `h1` → `h2` → `h3`).
2. All images have meaningful `alt` (decorative images: `alt=""` + `aria-hidden`).
3. All controls are keyboard reachable and operable (Tab, Enter/Space, Escape for modals).
4. Focus states are **visible** — use our neon focus ring or Tailwind `focus-visible:ring-2 focus-visible:ring-cyan`.
5. ARIA:
   - `aria-label`, `aria-expanded`, `aria-controls`, `aria-current="page"` for nav spy.
   - Modals: `role="dialog"`, `aria-modal="true"`, focus trap (vanilla JS), `aria-labelledby`.
6. **Reduced motion:** Every animation/transition checks `window.__REDUCED_MOTION` or `@media (prefers-reduced-motion: reduce)`. Provide instant alternatives.
7. Color contrast: Cyan/teal on dark void must pass 4.5:1 minimum. Test with tools.
8. Screen reader testing: Landmarks, live regions for dynamic content (filters, modal open).
9. Touch targets ≥ 44×44px on mobile.

**Never ship** a feature that breaks any of the above.

---

## 5. SEO & Meta Rules

- **BaseLayout.astro is the single source of truth** for `<head>`, OG, Twitter, JSON-LD.
- Every page must pass:
  - Unique, descriptive `<title>` (50-60 chars ideal)
  - `description` 120-160 chars
  - Full OG + Twitter card images (1200×630 recommended)
  - Canonical URL (respect `base` path for GitHub Pages)
  - Structured data (Person + WebSite + Organization already present; extend only with review)
- Use `@astrojs/sitemap` (already integrated). Generate on every build.
- `robots.txt` must exist in `public/`.
- All links use `rel="noopener noreferrer"` when opening external tabs.
- Image optimization: Use modern formats (WebP already in use). Add `loading="lazy"` + `decoding="async"` for below-fold.
- For future blog/insights: proper article schema.

**Update canonical + site URLs** in one place when switching between GitHub Pages and custom domain.

---

## 6. Performance Rules

- **Static output only** (`output: 'static'`). No SSR/edge functions unless a specific future need is proven.
- **Bundle discipline:**
  - No heavy deps. Current allowed: Astro, Tailwind 4 via Vite plugin, @astrojs/sitemap.
  - Any new dependency requires explicit justification in plan.md and user approval.
- **Critical path:** Hero must paint instantly. Neural canvas is lightweight canvas API (no WebGL unless justified).
- **Images:** Preload hero/OG critical assets. Use `width`/`height` or aspect-ratio to prevent CLS.
- **Fonts:** System font stack only (no web fonts unless approved — they hurt performance and cyberpunk aesthetic).
- **Scroll & reveals:** IntersectionObserver only. Unobserve after trigger. Throttle rAF for canvas.
- **Core Web Vitals targets (prod):** LCP < 1.8s, INP < 150ms, CLS < 0.05 on 4G+ modern mobile.
- Always run `npm run build` and inspect `dist/` + Lighthouse before any "phase complete" claim.

---

## 7. GitHub Pages Deployment Best Practices

### Config Handling (astro.config.mjs)
- `site` + `base` must be correct for the target:
  - GitHub Pages (current default): `https://survivewithai.github.io` + `/buildwithbrian.ai`
  - Custom domain later: `https://buildwithbrian.ai` + `/`
- The workflow (`/.github/workflows/deploy.yml`) is production-grade (Node 22, npm ci, upload-pages-artifact, deploy-pages).
- **Never** commit `dist/` to git.

### Domain Switching Checklist
1. Update `astro.config.mjs` (uncomment desired block).
2. For custom domain: rename `public/CNAME.custom-domain` → `public/CNAME` (contains the domain).
3. Push → GitHub Actions runs → verify at the new URL.
4. Update `BaseLayout.astro` canonical + schema URLs if they are hardcoded.
5. Update README + any marketing.

### Other GH Pages Gotchas
- `.nojekyll` file is present (prevents Jekyll processing).
- Use `import.meta.env.BASE_URL` and `import.meta.env.SITE` for asset paths (already done in BaseLayout).
- For large assets: keep under GitHub limits or use Git LFS only if truly needed.

---

## 8. Plan Mode Protocol (Mandatory for Ambiguous or High-Impact Work)

**When to enter Plan Mode:**
- Any task with "genuine ambiguity" (multiple reasonable architectures, unclear requirements, high-impact restructuring).
- Before major new sections, redesigns, new dependencies, or content model changes.
- User explicitly requests a "plan" or "design doc".

**How to use:**
1. Call `enter_plan_mode` tool (no args).
2. While in plan mode you are **read-only** for exploration:
   - Use `read_file`, `grep`, `list_dir`, `web_search` (for external best practices).
   - You **cannot** use `search_replace`, `write`, or run build/test commands that mutate.
3. Explore thoroughly: component architecture, existing data flows, performance profile, a11y gaps, design consistency.
4. Produce (or update) `plan.md` in project root with:
   - Requirements recap
   - Architecture decisions + trade-offs
   - Exact component tree / file changes
   - SEO / a11y / perf goals
   - Design direction references (x.ai + realfood.gov + cyberpunk)
   - Phased task breakdown
   - Risks & mitigations
5. Call `exit_plan_mode` (reads the plan file you wrote and presents it to user).
6. **User must approve the plan** before any implementation begins.

**Never** do big work without a plan when the situation matches the criteria above.

---

## 9. Spawning Sub-Agents & Personas (The Team)

This project uses specialized sub-agents for quality and parallelization. Always use the `spawn_subagent` tool.

### Available Personas (use exact names in prompts)

| Persona                | Purpose                              | Typical `capability_mode` | Isolation?     | When to Spawn |
|------------------------|--------------------------------------|---------------------------|----------------|---------------|
| **Architect**          | Requirements analysis, architecture, create/update `plan.md` | `read-only`              | Recommended  | Start of any complex feature or redesign |
| **Design**             | UI/UX, color, typography, spacing, micro-interactions, visual QA, responsive states | `read-write` or `execute` | Optional     | After architecture approved, before or during implementation |
| **Frontend Implementer** | Build Astro components, pages, vanilla JS, Tailwind, integrate data | `read-write`             | Optional     | Core building phase |
| **QA**                 | Comprehensive tests (manual + automated if added), a11y audits (axe, WAVE, keyboard, screen reader sim), mobile edge cases, performance regression, cross-browser | `execute`                | Recommended  | After implementation, before Reviewer |
| **Reviewer**           | Final code review against AGENTS.md + plan.md. Security, maintainability, performance, a11y, consistency. Produces review report. | `read-only`              | Recommended  | Last gate before user sign-off |

### How to Spawn (Exact Pattern)

```js
// Example: Architect for initial plan
await spawn_subagent({
  prompt: "You are the Architect Persona. Read AGENTS.md thoroughly first. Analyze the current codebase, the user's requirements for [X], external best practices for Astro portfolios, x.ai and realfood.gov design patterns. Create a detailed plan.md covering component architecture, SEO/a11y/perf goals, exact design direction, and phased task list. Output only the plan content to plan.md using the write tool at the end.",
  description: "Architect initial portfolio plan",
  subagent_type: "general-purpose",   // or "plan" if available
  capability_mode: "read-only",
  isolation: "worktree",             // Strongly preferred for safety
  cwd: "buildwithbrian.ai"
});
```

**Rules for sub-agents:**
- Every sub-agent prompt **must** start with "Read AGENTS.md thoroughly first" (or the full content if context is limited).
- Sub-agents must respect the "pause for approval" rule between major phases.
- Use `isolation: "worktree"` for any mutating work to protect the main workspace.
- Communicate progress via the subagent output. The main agent (you) aggregates and presents clean summaries + diffs to the human.
- Use `todo_write` inside complex sub-agent runs for visibility.
- When a sub-agent finishes a phase, it should output a clear "PHASE COMPLETE — AWAITING APPROVAL" message.

### Parallel Execution
You may spawn multiple independent sub-agents in one step (e.g., Design + Implementer on separate concerns) **only after** the plan is approved and phases are clearly independent.

---

## 10. Task & Phase Management (Mandatory for >3 Step Work)

- Use the `todo_write` tool at the start of any multi-phase effort.
- Keep the list **live and accurate** — mark items completed **immediately** when done (never batch).
- Only one item `in_progress` at a time.
- Phases must be completed, reviewed, and **user-approved** before the next phase begins.
- Example phases for this site: Foundation → Architecture Plan → Design System → Core Components → Polish & Interactions → QA & a11y → Reviewer Pass → README + Deploy Docs.

---

## 11. Editing Workflow & Clean Diffs

1. **Always read first.** Use `read_file` (with offset/limit for large files) before any `search_replace`.
2. Use `search_replace` for **all** mutations. Prefer small, precise, unique-string replacements.
3. For complex refactors, multiple targeted replaces are better than one giant block.
4. After edits: run `npm run build` and verify no regressions.
5. Present changes as **clean diffs** (or before/after summaries) to the user.
6. **Never** proceed to the next major phase without explicit user approval ("approved", "looks good, proceed", etc.).

---

## 12. Specific Project Files & Ownership

| File / Area                        | Rules |
|------------------------------------|-------|
| `src/data/projects.ts`             | **SINGLE SOURCE OF TRUTH**. Add/edit projects here only. Every card + modal reads from this. |
| `src/styles/global.css`            | Design system owner. All tokens, effects, base styles. |
| `src/layouts/BaseLayout.astro`     | SEO, schema, meta, global <head>. Touch only with care. |
| `src/components/ui/`               | Reusable primitives (buttons, badges, modals). Keep them generic. |
| `src/components/*Section.astro`    | Page sections. Compose UI primitives + data. |
| `astro.config.mjs`                 | Deployment config (site/base). Document every change. |
| `.github/workflows/deploy.yml`     | Never touch unless GitHub Pages behavior changes. |
| `public/images/`                   | Optimized assets only. Name descriptively. |
| `plan.md`                          | Living document. Update when architecture evolves. |

---

## 13. Quality Gates Before "Done"

For every phase or feature:
- [ ] `npm run build` succeeds with zero errors/warnings.
- [ ] Manual smoke test in `npm run preview` (desktop + mobile emulation).
- [ ] Keyboard navigation full pass (Tab through everything, Esc closes modals).
- [ ] Reduced-motion test (toggle in OS and verify no broken states).
- [ ] Lighthouse run on localhost:4321 (or preview) — note scores.
- [ ] Visual regression spot-check: hero, project grid, modal on 3 breakpoints.
- [ ] All text passes spellcheck and brand voice (sharp, futuristic, empowering, high-signal).
- [ ] AGENTS.md rules followed (document any intentional deviation and why).
- [ ] Reviewer Persona sign-off for anything beyond tiny tweaks.

---

## 14. Communication & Handoff Style

- Be direct. No filler.
- When presenting work: 
  1. Status (what was accomplished)
  2. Key decisions & rationale
  3. Clean diffs or file references with line numbers
  4. Outstanding questions / risks
  5. Explicit "Ready for your approval to proceed to NEXT_PHASE"
- When spawning sub-agents, give them rich context + the exact phase goal + reference to AGENTS.md + plan.md.

---

## 15. What "Production-Ready" Means Here

- Runs perfectly on GitHub Pages + custom domain with zero config changes at runtime.
- Survives real traffic, real mobile devices, real screen readers.
- Easy for Brian (or future collaborators) to update content in one place.
- Beautiful under scrutiny: design, code, performance, a11y.

**Ship sharp. Ship often. Survive the future.**

---

*This document is the law for all agents (human or AI) working on buildwithbrian.ai. Update it only via the Architect persona + explicit user approval when the project scope meaningfully changes.*

**Last updated:** 2026 (initial comprehensive foundation)  
**Maintained by:** Grok Build + Brian Phillips
