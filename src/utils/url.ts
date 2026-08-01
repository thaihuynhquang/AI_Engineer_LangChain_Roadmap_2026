export const GITHUB_REPO_BASE_URL = 'https://github.com/thaihuynhquang/applied-ai-engineer-roadmap-2026-vn/blob/master';

/**
 * Resolves a resource URL. If it's a relative path (e.g. docs/content/foo.md),
 * prepends the GitHub repo base URL so it renders properly in GitHub's Markdown viewer.
 */
export function resolveResourceUrl(url: string): string {
  if (!url) return '#';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return `${GITHUB_REPO_BASE_URL}/${cleanPath}`;
}
