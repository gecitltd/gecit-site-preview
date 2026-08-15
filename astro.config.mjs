// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { visit } from 'unist-util-visit';

// Lets one codebase deploy either to the production custom domain (root path)
// or to a GitHub Pages project sub-path for staging previews, via DEPLOY_TARGET.
const isStaging = process.env.DEPLOY_TARGET === 'staging';
const site = isStaging ? 'https://gecitltd.github.io/gecit-site-preview/' : 'https://www.gecit.net';
const base = isStaging ? '/gecit-site-preview/' : '/';

/** Rewrites root-absolute image paths inside Markdown content (e.g. "/img/foo.png")
 *  to respect `base`, since remark/rehype don't know about it otherwise. */
function rehypeBaseImages() {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'img' &&
        typeof node.properties?.src === 'string' &&
        node.properties.src.startsWith('/') &&
        prefix &&
        !node.properties.src.startsWith(prefix)
      ) {
        node.properties.src = prefix + node.properties.src;
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site,
  base,
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    rehypePlugins: [rehypeBaseImages],
  },
  // Self-hosted, subset to latin-ext so Turkish diacritics (ğ ş ı İ ç ö ü) render
  // from the webfont rather than falling back mid-word.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Space Grotesk',
      cssVariable: '--font-display',
      // Headings are all one weight, so shipping a single face keeps the
      // preloaded payload to two small files.
      weights: [600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
  ],
});
