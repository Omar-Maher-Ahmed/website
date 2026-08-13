/**
 * Helper to generate base-aware paths for GitHub Pages / sub-path deployments.
 * Handles trailing/leading slashes gracefully regardless of Astro BASE_URL formatting.
 */
export function getPath(path: string = ''): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');
  
  if (!cleanPath) {
    return base ? `${base}/` : '/';
  }
  return base ? `${base}/${cleanPath}` : `/${cleanPath}`;
}
