// Build an internal URL that respects the configured `base` (/decode-travel).
// Always use this helper for links to pages and files in /public, never a bare "/".
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = ''): string {
  const clean = path.replace(/^\//, '');
  return `${BASE}/${clean}`;
}

export const SITE_URL = 'https://chain4travel.com';
