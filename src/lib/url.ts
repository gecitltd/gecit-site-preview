/**
 * Prefixes a root-absolute asset path (e.g. "/img/foo.png") with Astro's BASE_URL,
 * so images and static assets still resolve when the site is deployed under a
 * sub-path (GitHub Pages project sites) instead of a domain root.
 */
export function withBase(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
