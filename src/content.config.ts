/**
 * src/content.config.ts
 * Astro Content Collections schema (Astro 6+ location).
 * Future-proof foundation. Projects & Insights can be authored as .md later.
 */

import { defineCollection, z } from 'astro:content';

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.enum([
    'CLI',
    'Agent System',
    'Web App',
    'Creative Tool',
    'Game',
    'Infrastructure',
  ]),
  shortDesc: z.string(),
  date: z.string(), // YYYY-MM
  tech: z.array(z.string()),
  demoUrl: z.string().optional(),
  repoUrl: z.string().optional(),
  xUrl: z.string().optional(),
  featured: z.boolean().default(false),
});

const insightSchema = z.object({
  title: z.string(),
  date: z.string(),
  readTime: z.string(),
  excerpt: z.string(),
  xUrl: z.string(),
  tags: z.array(z.string()).optional(),
});

export const collections = {
  projects: defineCollection({
    type: 'content',
    schema: projectSchema,
  }),
  insights: defineCollection({
    type: 'content',
    schema: insightSchema,
  }),
};

// Export the inferred types for use in data/projects.ts and components
export type ProjectFrontmatter = z.infer<typeof projectSchema>;
export type InsightFrontmatter = z.infer<typeof insightSchema>;