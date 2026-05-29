# buildwithbrian.ai

> **AI Survivalist — Adapt. Survive. Thrive. In the age of AI.**

Production-ready, single-page Astro + Tailwind cyberpunk portfolio for Brian Phillips.  
**100% built from scratch with Grok Build (xAI).** No templates. No fluff.

- **Live**: [buildwithbrian.ai](https://buildwithbrian.ai)
- **X**: [@survivewithai](https://x.com/survivewithai)
- **All projects on this site were prototyped and shipped exclusively using Grok Build**

---

## Development Rules (Read First)

**All contributors and AI agents must follow [AGENTS.md](AGENTS.md) at all times.**

- Clean Astro + Tailwind 4 conventions
- Strict accessibility (WCAG 2.2 AA), SEO, and performance gates
- GitHub Pages + custom domain deployment discipline
- **Plan Mode required** for any ambiguous or high-impact work
- Specialized sub-agents/personas (Architect, Design, Implementer, QA, Reviewer) via the spawn system
- One major phase at a time with explicit user approval between phases
- Clean diffs only (`search_replace` after reading files)
- Use `todo_write` for all multi-step work

This is not optional. The AGENTS.md document is the law.

---

## Tech Stack

- **Astro 6.4+** (static output)
- **Tailwind CSS 4.3+** (via official `@tailwindcss/vite`)
- **TypeScript** (strict)
- **Vanilla JavaScript** only for all interactivity (canvas neural network, filters, accessible modal, scroll-spy, etc.)
- Zero heavy frameworks. Zero bloat.

---

## Local Development

```bash
# 1. Clone
git clone https://github.com/YOUR_USERNAME/buildwithbrian.ai.git
cd buildwithbrian.ai

# 2. Install
npm install

# 3. Run dev server
npm run dev
```

Open http://localhost:4321

### Key Commands

| Command                | Description                                          |
|------------------------|------------------------------------------------------|
| `npm run dev`          | Start local dev server with HMR                      |
| `npm run build`        | Production build → `dist/` (run before every deploy) |
| `npm run preview`      | Preview the production build locally                 |
| `npm run preview:host` | Preview on local network (for mobile testing)        |
| `npm run check`        | Run typecheck + full production build (quality gate) |
| `npm run typecheck`    | TypeScript strict check only                         |
| `npm run astro`        | Run Astro CLI commands                               |

---

## Quality Gates (Run Before Every Deploy)

These are the minimum gates per AGENTS.md §13:

```bash
npm run check                    # TypeScript + production build
```

Recommended additional verification:
- Lighthouse (Performance / Accessibility / Best Practices / SEO)
- Manual keyboard + reduced-motion test
- Visual check on mobile + desktop

Record Lighthouse scores in your deploy notes for evidence.

---

## Project Structure (Key Files)

```
src/
├── components/
│   ├── Nav.astro                 # Fixed nav + mobile hamburger (vanilla)
│   └── ui/                       # Reusable neon buttons, badges, etc.
├── content/                      # Future-proof Content Collections schemas
├── data/
│   └── projects.ts               # SINGLE SOURCE OF TRUTH — 7 rich projects
├── env.d.ts                      # Astro + project global type augmentations
├── layouts/
│   └── BaseLayout.astro          # Full SEO, OG, JSON-LD, schema
├── pages/
│   ├── index.astro               # The complete scroll site
│   └── 404.astro                 # Beautiful cyberpunk 404
├── styles/
│   └── global.css                # THE DESIGN SYSTEM (neon, glitch, scanlines, etc.)
├── types/
│   └── index.ts                  # Central barrel for all domain types (scalable)
└── utils/                        # Vanilla JS helpers (keep tiny)
```

**Root (critical):**
- `AGENTS.md` — The law. Read before any work.
- `plan.md` — Created by Architect persona. Living architecture doc.
- `astro.config.mjs` — Deployment (site/base) is the only thing that changes for GitHub vs custom domain.

---

## Design System Highlights

- Deep space black (`#0a0a0a` / `#111111`)
- Electric cyan (`#00f5ff`) + teal (`#00d4aa`) + matrix green (`#22c55e`)
- Hand-crafted multi-layer neon glows
- Subtle glitch effect on hover (headings, badges)
- Custom scanlines + faint matrix grid overlays
- IntersectionObserver-powered scroll reveals
- Fully responsive, 60fps canvas neural network in hero
- Perfect keyboard + screen reader accessibility

All effects are pure CSS + lightweight vanilla JS. No external animation libraries.

---

## Quick Deploy to GitHub Pages (Right Now)

**You currently want to deploy to GitHub first** (before pointing your custom domain).

### Recommended Steps (Fastest Path)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial production build"
   git remote add origin https://github.com/SurviveWithAI/buildwithbrian.ai.git
   git branch -M main
   git push -u origin main
   ```

2. **Go to your repo on GitHub**
   - Settings → Pages
   - Source: **GitHub Actions**

3. **(Important) Configure for GitHub Pages**
   - Open `astro.config.mjs`
   - Comment out the custom domain lines and uncomment the GitHub Pages lines (see comments in the file)
   - Commit and push the change

4. The workflow will automatically deploy. Your site will be live at:
   `https://survivewithai.github.io/buildwithbrian.ai`

Once you're ready to use your custom domain later, just switch the config back and add the `CNAME` file.

---

## Deployment: GitHub Pages (Full Details)

See the **"Quick Deploy to GitHub Pages (Right Now)"** section above for the fastest way to get it live on GitHub.

When you're ready to switch to your custom domain (`buildwithbrian.ai`) later:
- Update `astro.config.mjs` back to the custom domain settings.
- Rename `public/CNAME.custom-domain` → `public/CNAME`
- Push the changes. GitHub will automatically provision HTTPS for the custom domain once DNS is pointed correctly.

### Path B — Simple `/docs` folder method

In `astro.config.mjs`, change:

```js
export default defineConfig({
  outDir: './docs',
  // ... rest of config
});
```

Then enable GitHub Pages to deploy from the `/docs` folder on the `main` branch.

---

## Updating Content

**Projects** — Edit `src/data/projects.ts`. This is the single source of truth for cards + modals.

**Future blog / deeper project pages** — The Content Collections schema in `src/content/config.ts` is already wired and ready. Add `.md` files under `src/content/projects/` or `src/content/insights/` when you want to expand.

**Images** — Place optimized images in `public/images/`. Update references in components.

---

## Customization Notes

- **Colors & Effects**: All defined in `src/styles/global.css`. Search for `--accent-cyan` and the `@theme` block.
- **Neural Canvas**: Fully implemented in `Hero.astro` (adaptive, reduced-motion aware) and `404.astro`.
- **SEO**: Everything lives in `BaseLayout.astro`. Update JSON-LD and meta as needed.
- **New Projects**: Edit `src/data/projects.ts` (single source of truth). Add to the array for new cards + modals.

---

## Performance & Quality

This site targets:
- Lighthouse 95+ / 100 / 100 / 100
- < 120KB total JavaScript (gzipped)
- 60fps canvas on modern hardware, gracefully degraded on mobile
- Full keyboard navigation + focus management in the modal
- Perfect reduced-motion support

**Pre-Deploy Checklist (AGENTS.md §13 + Reviewer Phase 8):**
1. `npm run check` (must pass cleanly)
2. `npm run build` + inspect `dist/` (no stale artifacts)
3. Run Lighthouse (record scores)
4. Manual keyboard + reduced-motion test
5. Visual regression on mobile + desktop

---

## Final Notes

This portfolio was built through a rigorous multi-persona process (Architect → Design → Implementer → QA → Reviewer) following the rules in AGENTS.md. All high-priority issues identified in the final review have been addressed.

---

## License & Attribution

All code in this repository was written from scratch by Brian Phillips using **Grok Build** (xAI).

The site and every project featured on it exist because of the incredible velocity and architectural insight Grok Build provides.

**This is an independent project and is not affiliated with, endorsed by, or sponsored by xAI.**

---

## Credits

- Built exclusively with [Grok Build](https://x.ai/cli) by xAI
- Cyberpunk soul by Brian Phillips (@survivewithai)
- Astro + Tailwind 4 + vanilla JS

---

**Ship sharp. Ship often. Survive the future.**

If you build something cool with Grok Build, tag @survivewithai. I’m always watching the signal.
