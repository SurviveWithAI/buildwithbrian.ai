/**
 * src/types/index.ts
 * Central barrel export for all project-specific TypeScript types.
 * This keeps imports clean and creates a single place to evolve the type system.
 *
 * Current: Re-exports from Astro Content Collections schemas (future-proof).
 * Add domain types here as the project grows (e.g., FilterType, ThemeVariant, etc.).
 */

// Re-export Content Collection inferred types (single source)
export type {
  ProjectFrontmatter,
  InsightFrontmatter,
} from '../content.config';

// Future domain types (examples — uncomment & extend when needed)
// export type ProjectCategory = 'CLI' | 'Agent System' | ...;
// export interface Project extends ProjectFrontmatter {
//   slug: string;
// }
