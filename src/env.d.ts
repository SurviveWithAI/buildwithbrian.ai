/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/**
 * Project-level environment & global type augmentations.
 * 
 * - Astro auto-generates .astro/types.d.ts during dev/build.
 * - Add custom process.env or import.meta.env typings here when needed.
 * - Example: interface ImportMetaEnv { readonly CUSTOM_FLAG: string; }
 */

// Ensure our custom global for reduced-motion (set in BaseLayout)
declare global {
  interface Window {
    __REDUCED_MOTION?: boolean;
  }
}

export {};
