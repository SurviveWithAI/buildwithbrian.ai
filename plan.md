# plan.md — buildwithbrian.ai Portfolio Completion Plan

**Project:** buildwithbrian.ai  
**Brand:** Brian Phillips, "AI Survivalist — Adapt. Survive. Thrive. In the age of AI."  
**Core Focus:** Rapid AI prototyping and practical tools built exclusively with Grok Build (xAI’s CLI coding agent).  
**Tone:** Sharp, futuristic, high-signal, empowering builder energy with a slight professional cyberpunk edge.  
**X:** @survivewithai | **Domain:** buildwithbrian.ai  
**Date:** 2026-05-29 (Architect analysis complete)  
**Status:** Foundation substantially complete and production-grade. This plan guides final refinement to exact requirements using the specialized persona team.

This document was produced by the Architect Persona after mandatory full review of AGENTS.md (all 15 sections internalized, especially Plan Mode protocol, one-phase-at-a-time user approval, sub-agent spawning rules, design system ownership in `global.css`, single-source-of-truth in `src/data/projects.ts`, WCAG 2.2 AA, Lighthouse 95+/100/100/100, vanilla Astro + Tailwind 4 only, clean diffs via `search_replace` after reads, and quality gates).

**All work must follow AGENTS.md strictly.** No heavy frameworks. No bloat. Pause for explicit user approval ("approved", "proceed", etc.) between major phases. Use `spawn_subagent` for Design / Frontend Implementer / QA / Reviewer personas (every prompt starts with "Read AGENTS.md thoroughly first").

---

## 1. Executive Summary of Current State vs. Target Vision

**Current State (Strengths — High Quality Foundation):**
- Substantially built single-page scroll portfolio using Astro 6 + Tailwind 4 (Vite) + strict TypeScript + vanilla JS only. Zero unnecessary dependencies.
- Brand, tagline, and "exclusively Grok Build" messaging are present and consistent across Hero trust badge, project cards (`.grok-badge`), modals (dedicated "HOW GROK BUILD WAS USED" section), About, Footer disclaimer, and provenance lines.
- 7 rich projects in `src/data/projects.ts` (SSOT with full schema: problem/grokRole/results/tech/featured flags + helpers). All cards show "BUILT WITH GROK BUILD" badge.
- Sophisticated lightweight neural canvas in Hero (adaptive nodes, packets, mouse influence, visibility pause, reduced-motion static fallback, dpr cap, ResizeObserver + multiple safeResize strategies) + 404 variant. 60fps target achieved in code.
- Comprehensive design system in `src/styles/global.css`: deep void (`#0a0a0a`), cyan (`#00f5ff`)/teal (`#00d4aa`) neon accents, glows, subtle glitch/scanlines/matrix, cyber-card sweep, reveals (IO + stagger), neon-btn, timeline, modal. Reduced-motion media query + per-canvas handling.
- Strong accessibility foundations (semantic HTML, ARIA in Nav/Modal, focus-visible neon ring, alt texts, keyboard support, focus return/trap basics).
- Excellent SEO base in `BaseLayout.astro` (full OG/Twitter with dims, keywords, JSON-LD Person/WebSite/Organization, canonical prop).
- Production deployment: `astro.config.mjs` (GH Pages with base + commented custom domain), robust `.github/workflows/deploy.yml` (Node 22, npm ci, pages artifact), `public/robots.txt` + sitemap integration, `.nojekyll`, `CNAME.custom-domain`.
- Clean component composition, small single-responsibility files, IntersectionObserver/rAF patterns, passive listeners.
- 404 is beautiful and on-brand. Nav has scroll-spy + responsive hamburger/overlay. Projects have live filters + search (⌘K) + accessible modal.
- Strict TS (`tsconfig.json` extends Astro strict + extra flags + path aliases). `content.config.ts` + types ready for future collections (currently unused).

**Gaps vs. Exact Requirements (Honest):**
- Exact 6-section structure is *close but not precise*: Build Process and Stack are separate sections (with conflicting "CHAPTER 03/04" labels) instead of a single combined "Build Process & Stack" section 4. Insights/Connect numbering also drifts.
- SEO: Hardcoded URLs/canonicals in `BaseLayout.astro` (GH Pages + mixed `buildwithbrian.ai` in schema). OG image default `.jpg` vs schema `.png`. Font preconnect remnant (system fonts only per AGENTS). Not fully env-driven for seamless GH ↔ custom domain.
- Design: Already very close to "dark cosmic + elegant cyan/teal neon *sparingly*" with cyberpunk edge, but needs targeted refinement for x.ai minimalist futuristic (generous whitespace, razor typography hierarchy, negative space) + realfood.gov clean scannable trustworthy flow (clear visual hierarchy, info density without clutter, predictable rhythm). Some token usage not 100% strict (e.g., hardcoded `bg-[#0a0a0a]` in ProjectCard).
- A11y: Strong base but unverified WCAG 2.2 AA checklist items remain (contrast audits, live regions for dynamic filters, robust focus trap, touch target verification, screen-reader testing for search/filter results).
- Performance: Code is disciplined (tiny bundle target, canvas optimizations), but no in-repo Lighthouse numbers or formal bundle analysis yet. Targets (95+/100/100/100, <120KB gzipped JS) are aspirational until measured.
- Other: Modal uses `window` global for data (functional but not ideal). Insights are static X teasers (fine for now). No automated tests. Chapter labels in sections add noise vs. clean 6-section flow.

**Overall Assessment:** 80-85% complete at high quality. No fundamental rewrites needed. This is a "polish to production-excellence" effort, not a rebuild. With disciplined phases it can hit "production-ready" (survives real traffic, easy updates via SSOT, beautiful under scrutiny) quickly.

---

## 2. Detailed Component Architecture

**Current Tree (as audited):**
```
src/
├── layouts/
│   └── BaseLayout.astro          # SEO/OG/JSON-LD owner (single source)
├── pages/
│   ├── index.astro               # Section composer + global .reveal IO script
│   └── 404.astro                 # Self-contained cyberpunk 404 + mini canvas
├── components/
│   ├── Nav.astro                 # Fixed nav, scroll-spy (throttled rAF), mobile overlay + ARIA
│   ├── Hero.astro                # Neural canvas (full vanilla perf logic) + CTAs + glitch
│   ├── About.astro               # Bio + metrics + animated counters (IO + rAF)
│   ├── ProjectsSection.astro     # Filters/search (debounce + DOM show/hide) + grid + modal include
│   │   └── ui/
│   │       ├── ProjectCard.astro # cyber-card + grok-badge + lazy webp + tech tags (button semantics)
│   │       └── ProjectModal.astro# Accessible dialog (role/aria-modal/focus trap/Esc/backdrop/return focus) + dynamic content
│   ├── BuildProcess.astro        # 4-step timeline (RECON/IGNITION/HARDENING/TRANSMISSION) + SVGs + click highlight
│   ├── StackGrid.astro           # 9-item responsive icon grid (inline SVGs, cyber-card hovers)
│   ├── Insights.astro            # 4 static X teaser cards (insight-card)
│   └── Footer.astro              # Connect section + strong disclaimer + micro footer + matrix text
├── data/
│   └── projects.ts               # **SSOT** (Project interface + 7 entries + categories + filter/get helpers)
├── styles/
│   └── global.css                # **Design system owner** (all tokens, @theme, effects, reduced-motion, focus)
├── content.config.ts             # Zod schemas + InferEntrySchema (future-proof, unused today)
├── types/
│   └── index.ts                  # Barrel re-exports
└── utils/                        # (empty — keep lean)
```

**Recommended Refinements (Maintainability/Scalability, No Bloat):**
- Keep all files small and focused. Prefer composition.
- For required combined section 4: Either (a) merge logic into a new `BuildProcessAndStack.astro` (recommended for single-responsibility) or (b) keep separate files but orchestrate cleanly in `index.astro` with unified header (no duplicate chapter labels).
- Centralize URL/canonical logic in `BaseLayout.astro` (use `import.meta.env.SITE` + `BASE_URL` everywhere; remove hardcodes).
- Consider lightweight custom event or data-attribute pattern for modal data instead of `window.__ALL_PROJECTS` / `__openProjectModal` (still vanilla).
- No new components unless duplication emerges. UI primitives stay in `ui/`.
- Future (only after approval): Migrate projects/insights to Content Collections under `src/content/` when dedicated pages are added (never create pages without plan update per AGENTS.md).

Design system and data ownership remain non-negotiable (global.css + projects.ts).

---

## 3. Specific SEO Strategy & Current Implementation Audit

**Current Implementation (BaseLayout.astro:24-126, index.astro, astro.config, public/robots.txt):**
- Strong: Full title/desc/author/keywords/theme-color, OG (type/url/title/desc/image + width/height/site_name/locale), Twitter cards (large image + creator/site), JSON-LD graph (Person + WebSite + Organization with knowsAbout/Grok emphasis), sitemap integration, robots.txt (allows + sitemap link), favicons with BASE_URL, canonical prop.
- Astro static output + `@astrojs/sitemap` generates on build.
- GH Pages handling via `site`/`base` in config + `import.meta.env` in layout.

**Gaps & Required Strategy:**
- Hardcoded canonical (`https://survivewithai.github.io/buildwithbrian.ai`), schema URLs (mixed `buildwithbrian.ai`), image reference mismatch (default `/og-image.jpg` vs schema `.png`).
- Preconnect to fonts.googleapis.com (unnecessary — system fonts only per AGENTS).
- Domain switch must be one-place (config) + update any remaining hardcodes.
- Future-proof: Compute all URLs from `import.meta.env.SITE` + `BASE_URL`. Add optional project/article schema later only if expanding.
- Images: WebP + explicit dimensions + lazy good. Add `decoding="async"` + preload for critical (OG/hero assets if needed).
- Canonical must respect base path for both GH Pages and custom domain.

**Recommended Approach:** Make `BaseLayout` fully env-driven. Document exact switch checklist (already partially in AGENTS.md + README). Verify sitemap/robots on both targets post-deploy.

---

## 4. Accessibility Audit Findings + Concrete Remaining Goals (WCAG 2.2 AA)

**Strengths (Already Strong):**
- Semantic landmarks/sections/headings (h1 hero → h2 sections).
- All images have meaningful or decorative `alt`.
- Interactive controls keyboard-reachable (buttons, links, filters).
- Visible focus (neon ring via `:focus-visible` in global.css + explicit rings on cards).
- Modal: `role="dialog"`, `aria-modal`, labelled, basic focus trap (Tab cycle), Esc, backdrop, return focus, ARIA on nav (expanded/controls/hidden).
- Reduced motion: Global flag + CSS `@media` + canvas fallbacks + per-component respect.
- ARIA labels on key elements (nav toggle, cards, close).
- Touch-friendly sizes on most controls.

**Findings & Remaining Goals (Concrete Checklist):**
- Color contrast: Cyan/teal on void/card backgrounds must be audited (target 4.5:1+). Use tools (axe, WAVE, manual).
- Dynamic content: Add `aria-live="polite"` region for filter/search results count/changes (ProjectsSection).
- Focus management: Strengthen modal trap (handle more edge cases); ensure no focus loss on filter changes.
- Touch targets: Verify all filters, CTAs, timeline nodes, cards ≥ 44×44px on mobile (test in dev tools).
- Keyboard full pass + screen reader sim required (VoiceOver/NVDA): Landmarks, live regions, modal announcements, counter updates.
- Headings: Verify no skips inside modals/sections.
- Other WCAG 2.2: Reflow, text spacing (already good), focus appearance (strong), dragging (N/A).
- Skip link for main content (optional but high-value for long scroll site).

**Never ship** without passing manual keyboard + reduced-motion + basic screen-reader tests (per AGENTS quality gates).

---

## 5. Performance Goals + Current Measurements/Opportunities

**Targets (per AGENTS.md non-negotiables):**
- Lighthouse 95+ / 100 / 100 / 100 (Performance / A11y / Best Practices / SEO).
- Total JS < 120KB gzipped.
- 60fps interactions (canvas primary risk).
- Core Web Vitals (prod): LCP < 1.8s, INP < 150ms, CLS < 0.05 (4G+ modern mobile).
- Static output only. System fonts. No animation libs.

**Current (Code-Level):**
- Excellent discipline: Tiny inline scripts, IO unobserve, passive listeners, rAF throttling, canvas optimizations (adaptive count, dpr ≤2.5, visibility pause, reduced-motion static path), lazy images + explicit w/h, will-change limited.
- Hero canvas is the highest-risk element but architected well.
- No web fonts, minimal deps.

**Opportunities & Measurement Plan:**
- Remove font preconnect immediately.
- Run `npm run build` + `npm run preview` + Lighthouse (localhost + deployed) on every phase gate.
- Analyze `dist/_astro` bundle (should be tiny).
- Image strategy: All project webps present and optimized; consider AVIF if needed later (only with justification).
- CLS prevention: Already good (dimensions, reveals after paint).
- Canvas: Monitor node count / frame times on low-end devices; keep throttle logic.
- Always inspect `dist/` before claiming phase complete.

---

## 6. Precise Design Direction Guidance for the Design Persona

**Core Blend Required:** x.ai (minimalist futuristic: generous breathing room, bold but simple headlines, confident negative space, ultra-clean hierarchy, "less is more" precision) + realfood.gov (clean scannable trustworthy flow: predictable section rhythm, clear visual hierarchy, high information density without clutter, excellent typography contrast/legibility, calm professional layout) + slight professional cyberpunk edge (restrained neon, subtle texture/effects that feel sharp and high-signal without visual noise).

**Specific Recommendations (Do Not Over-Engineer):**
- **Typography:** Maintain razor-sharp tracking (already excellent, e.g., `tracking-[-3.6px]`). Ensure consistent scale + line-height rhythm across h1/h2/h3. Use system stack + mono for code/terminal. Increase whitespace around major headings (x.ai influence) while keeping scannable line lengths.
- **Spacing Rhythm:** Enforce consistent 4px/8px-based vertical rhythm (already in vars). Audit sections for even padding/margins (py-20 etc.). Use more generous horizontal padding on desktop for "void" breathing room.
- **Neon & Effects Restraint:** Cyan/teal accents *sparingly* — primarily CTAs, key labels ("CHAPTER" or section markers), hover glows, and the grok-badge. Reduce any glow intensity if overpowering. Glitch/scanlines/matrix must remain subtle (current is good; make matrix even fainter on non-hero sections). No new effects.
- **Hover States & Micro-Interactions:** Subtle scale + glow intensification only (already present). Pair every transition with `transition-all` or targeted properties. Cyber-card sweep is premium — keep.
- **Visual Hierarchy & Cards:** Strengthen section headers (uppercase micro-label + large headline). Cards (cyber-card) should feel scannable (realfood.gov): clear title, shortDesc, limited tech tags, strong "Built with Grok Build" signal. Consistent internal spacing.
- **Dark Cosmic Backgrounds:** Maintain `--bg-void` / elevated / card stack. Subtle vignette/gradients only where they add depth (hero already excellent).
- **Particle/Neural Aesthetics:** Hero canvas is signature — keep lightweight and atmospheric. No expansion to other sections unless justified.
- **Responsive & Mobile-First:** Test every breakpoint. Ensure mobile feels as premium as desktop (larger touch targets, stacked layouts that remain scannable).
- **Overall Aesthetic:** "Super smooth, professional, tech-forward." High-signal minimalism first; cyberpunk as elegant accent, not decoration.

Design Persona owns visual QA, spacing/typography audits, and any CSS token tweaks (always in `global.css`).

---

## 7. Clear Phased Task Breakdown with Ownership

**Rules (AGENTS.md):** One major phase at a time. User approval required before next. Spawn dedicated sub-agents (`spawn_subagent` tool, isolation preferred, prompts start with AGENTS.md read). Design first for any visual work. Frontend Implementer for code. QA after implementation. Reviewer last gate. Use `todo_write` inside complex runs. Run `npm run build` + quality gates after every phase. Present clean diffs/summaries.

**Phased Plan (Recommended Order):**

| Phase | Description | Primary Owner(s) | Est. Effort | Key Dependencies | Approval Gate |
|-------|-------------|------------------|-------------|------------------|---------------|
| 1. Quick Wins & Foundation | Remove font preconnect; strict token usage (fix hardcoded bg in ProjectCard); centralize URL logic in BaseLayout; minor cleanups (console easter egg comment if needed). | Frontend Implementer (Design reviews tokens) | 2-4 hours | None | Build + smoke test + reduced-motion pass |
| 2. Structural Unification (6-Section Exact) | Merge/combine BuildProcess + StackGrid into single combined "Build Process & Stack" section 4 (unified header, no conflicting chapters). Align or remove chapter labels in all sections for clean 6-section flow (Hero/About/Projects/Process+Stack/Insights/Connect). Minor index.astro refactor. | Frontend Implementer (Design owns visual hierarchy + spacing) | 4-8 hours | Phase 1 | Visual + scroll flow QA + build |
| 3. Design System Refinement & Polish | Per §6 guidance: typography/spacing audits, neon restraint, hover states, card hierarchy, cosmic depth consistency, responsive polish. Visual QA on 3 breakpoints. | Design Persona (then Frontend Implementer executes CSS/structural tweaks) | 1-2 days | Phase 2 | Design sign-off + visual regression spot-check |
| 4. SEO & Canonical Hardening | Fully env-driven URLs/canonicals/schema in BaseLayout; fix image mismatch; update robots/sitemap notes; domain-switch robustness + docs. | Frontend Implementer | 3-6 hours | Phase 1 (URLs) | Build + manual OG/SEO review + sitemap check |
| 5. Accessibility Deep Pass | Full WCAG 2.2 AA checklist execution (contrast, live regions for filters, strengthened focus trap, touch targets, keyboard/screen-reader sims). Remediation in code. | QA (findings) + Frontend Implementer (fixes) + Design (contrast) | 1-1.5 days | Phase 2-3 | QA report + keyboard + reduced-motion + basic SR test |
| 6. Performance Measurement & Tuning | Formal Lighthouse runs (dev + preview + deployed), bundle analysis, canvas perf profiling on devices, any micro-optimizations. CLS/INP focus. | QA + Frontend Implementer | 4-8 hours | Phase 2 | Lighthouse report (95+ targets) + <120KB JS verification |
| 7. QA Comprehensive Gate | Manual + edge-case testing (all breakpoints, filters/modal, canvas, nav, 404, domain-switch sim), visual regression, spellcheck/brand voice, all AGENTS quality gates. | QA Persona | 1 day | Phases 1-6 | Full QA report with pass/fail |
| 8. Reviewer Final Pass | Code review vs AGENTS.md + this plan. Security/maintainability/perf/a11y/consistency. Produces report. | Reviewer Persona (read-only) | 4-6 hours | Phase 7 | Reviewer sign-off report |
| 9. Final Deploy & Docs | Deploy verification on target domain, update README/UPDATING if needed, confirm production behavior. | Frontend Implementer (with user) | 2-4 hours | Phase 8 | User sign-off that site is "production-ready" |

**Parallelization:** Independent concerns (e.g., some SEO + quick wins) can run in parallel after plan approval. Never mutate without isolation/worktree for safety.

**Dependencies Between Personas:** Design before/parallel with Implementer on visual phases. QA never before implementation complete. Reviewer always last.

---

## 8. Risks, Open Questions, and Recommended Order of Operations

**Risks & Mitigations:**
- Canvas perf regression on low-end devices (mitigate: keep existing throttling + test devices).
- Domain switch breaks links/schema (centralize URLs early in Phase 1/4).
- Over-adding polish violates minimalism (Design + Reviewer gates).
- Chapter label removal or section merge changes perceived "story" flow (Design validates with user intent).
- Maintaining "100% Grok Build" provenance in any new copy.
- No current tests — rely on manual gates + Reviewer.

**Open Questions (Resolve with User Early):**
- Exact final copy tweaks for sections (if any)?
- Future expansion timeline (Insights as collections vs static)?
- Priority of custom domain cutover vs polish?
- Any specific Lighthouse targets beyond AGENTS baseline?

**Recommended Order:** Follow table exactly. Architect phase (this plan) complete → user approval of plan → spawn Design for Phase 3 guidance → sequential phases with pauses.

---

## 9. Immediate Quick Wins & Foundation Gaps (Discovered During Exploration)

- Remove `<link rel="preconnect" href="https://fonts.googleapis.com">` from BaseLayout.astro (system fonts only).
- Replace hardcoded `bg-[#0a0a0a]` in ProjectCard.astro with `bg-void` token.
- Centralize all canonical/URL strings using existing `siteUrl`/`base` logic.
- Unify section 4 (biggest structural gap).
- Add `decoding="async"` to project images.
- Run first Lighthouse baseline immediately after Phase 1.
- Verify all 7 project images load correctly with current BASE_URL.

These are low-risk and high-value.

---

## 10. Success Criteria for "Complete"

Beyond "build passes":
- Exact 6-section single-page scroll structure with combined Process + Stack.
- All AGENTS.md quality gates passed on every phase (build success, keyboard full pass, reduced-motion, Lighthouse 95+, visual spot-checks on 3 breakpoints, spellcheck + brand voice, no rule violations).
- SEO: Perfect meta/OG/schema/canonicals on both GH Pages and custom domain targets; sitemap/robots correct.
- A11y: WCAG 2.2 AA verified (tools + manual keyboard/SR).
- Performance: Targets met, canvas 60fps graceful, bundle lean.
- Design: x.ai minimalism + realfood.gov scannability + restrained professional cyberpunk achieved (Design + user visual approval).
- SSOT maintained (projects.ts only for content; global.css only for design tokens).
- Easy future updates (documented).
- Reviewer sign-off + user final approval.
- Deployed and verified at target URL(s) with zero runtime config issues.
- Clean diffs throughout; plan.md updated as living document if scope changes.

**"Ship sharp. Ship often. Survive the future."**

---

This plan is actionable, unbiased, and fully aligned with AGENTS.md and the user's quoted requirements. Ready for user review and approval before any persona spawning or implementation.