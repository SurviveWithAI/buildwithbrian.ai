# Updating Your Portfolio

This guide explains how to update **buildwithbrian.ai** with your real information and add new projects over time.

The site is built with Astro and designed to be easy to maintain.

---

## 1. Quick Overview

| Section              | Where to Edit                              | Difficulty |
|----------------------|--------------------------------------------|----------|
| Personal Info (Bio, Stats, Name) | `src/components/About.astro`, `src/components/Hero.astro`, `src/layouts/BaseLayout.astro` | Easy |
| Add / Edit Projects  | `src/data/projects.ts` + images            | Easy-Medium |
| Grok Build Stack     | `src/components/StackGrid.astro`           | Easy |
| Latest Insights      | `src/components/Insights.astro`            | Easy |
| Build Process        | `src/components/BuildProcess.astro`        | Easy |
| Design / Colors      | `src/styles/global.css`                    | Medium |
| Deployment           | Just `git push` (GitHub Actions handles it)| Easy |

---

## 2. Updating Personal Information

### Name, Tagline, and Hero Text
- Open: `src/components/Hero.astro`
- Edit the large name, "AI Survivalist" tagline, and the two buttons.

### About Section (Bio + Stats)
- Open: `src/components/About.astro`
- Update the bio text and the four metric numbers (50+ prototypes, 14 live systems, etc.).

### Contact Links & Footer
- Open: `src/components/Footer.astro`
- Update the email address and X link.
- Update the disclaimer text if needed.

### Page Title & SEO
- Open: `src/layouts/BaseLayout.astro`
- Update the default `title` and `description`.

---

## 3. Adding a New Project (Most Common Task)

This is the main way you'll keep the site fresh.

### Step-by-step:

1. **Add the project data**

   Open `src/data/projects.ts`

   Add a new object to the `projects` array following the existing pattern:

   ```ts
   {
     id: "your-project-slug",           // used for image filename and links
     title: "Your Project Name",
     category: "Web App",               // Must match one of the filter categories
     shortDesc: "Short one-sentence description.",
     longDesc: "Longer description shown in the modal.",
     problem: "What problem did this solve?",
     grokRole: "How did you use Grok Build to build it?",
     results: [
       "First result",
       "Second result",
     ],
     tech: ["TypeScript", "Astro", "Canvas"],
     date: "2026-05",
     demoUrl: "https://...",            // optional
     repoUrl: "https://...",            // optional
     xUrl: "https://x.com/...",         // optional
     featured: false,                   // true = appears first
   },
   ```

2. **Add the project image**

   - Create a high-quality cyberpunk-style image (recommended size: ~1400×768 or 900×492).
   - Save it as a **WebP** file:
     ```
     public/images/projects/your-project-slug.webp
     ```

   > Tip: You can use the same style as the existing project images.

3. **(Optional) Update the modal content**

   Most of the rich content lives in the `projects.ts` file above (problem, grokRole, results). No need to edit other files.

4. **Test locally**

   ```bash
   npm run dev
   ```

   Go to `http://localhost:4321` and check that your new project appears and the modal looks good.

5. **Deploy**

   ```bash
   git add .
   git commit -m "Add new project: Your Project Name"
   git push
   ```

   GitHub Actions will automatically build and deploy the site.

---

## 4. Editing or Removing a Project

- To **edit** a project: Just modify the object in `src/data/projects.ts`.
- To **remove** a project: Delete the object from the array and delete its `.webp` image.
- To **reorder** projects: Move objects around in the array (featured projects appear first).

---

## 5. Updating Other Sections

### Grok Build Stack
Edit: `src/components/StackGrid.astro`

Just update the `stackItems` array. You can also swap out the inline SVGs.

### Latest Insights
Edit: `src/components/Insights.astro`

Update the `insights` array. Each item needs a title, excerpt, date, read time, and link to an X post.

### Build Process
Edit: `src/components/BuildProcess.astro`

The four steps are defined in the `steps` array near the top.

---

## 6. Changing Design / Branding

Main file: `src/styles/global.css`

Key variables at the top:

```css
--accent-cyan: #00f5ff;
--accent-teal: #00d4aa;
--accent-green: #22c55e;
```

You can also edit the glitch, neon, and scanline effects in the same file.

---

## 7. Building and Deploying

Every time you make changes:

```bash
# 1. Preview locally
npm run dev

# 2. When ready to ship
npm run build

# 3. Push to GitHub (this triggers deployment)
git add .
git commit -m "Your message here"
git push
```

The GitHub Action in `.github/workflows/deploy.yml` will automatically build and publish the site.

---

## 8. Switching to Your Custom Domain (Later)

When you're ready to use `buildwithbrian.ai`:

1. In `astro.config.mjs`, change the config to:
   ```js
   site: 'https://buildwithbrian.ai',
   // base: '/',   // usually not needed for custom domains
   ```

2. Rename the file:
   ```bash
   mv public/CNAME.custom-domain public/CNAME
   ```

3. Push the changes.

4. In your GitHub repo settings → Pages, make sure the custom domain is configured.

---

## 9. Tips

- **Always test locally first** with `npm run dev`.
- Keep project images reasonably sized (under 150KB as WebP is ideal).
- The `id` field in projects must match the image filename (without extension).
- You can safely edit text and data without touching the design system.
- If something looks broken after a push, check the **Actions** tab on GitHub to see if the build succeeded.

---

## Need Help?

You can always ask Grok Build to help you add a new project, rewrite copy, or adjust the design.

Example prompt:
> "Add a new project to my portfolio called 'Echo Weaver'. It should be in the Creative Tool category. Here's the description..."

Happy building! 🚀
