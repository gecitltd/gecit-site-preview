// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { visit } from 'unist-util-visit';

// Lets one codebase deploy either to the production custom domain (root path)
// or to a GitHub Pages project sub-path for staging previews, via DEPLOY_TARGET.
const isStaging = process.env.DEPLOY_TARGET === 'staging';
const site = isStaging ? 'https://gecitltd.github.io/gecit-site-preview/' : 'https://www.gecit.net';
const base = isStaging ? '/gecit-site-preview/' : '/';

/** Rewrites root-absolute image paths inside Markdown content (e.g. "/img/foo.png")
 *  to respect `base`, since remark/rehype don't know about it otherwise. Handles both
 *  genuine Markdown image syntax (parsed into real `img` elements) and raw HTML
 *  `<img>` tags written directly in the Markdown source, which at this point in the
 *  pipeline are still unparsed `raw` text nodes rather than elements. */
function rehypeBaseImages() {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    visit(tree, (node) => {
      if (
        node.type === 'element' &&
        node.tagName === 'img' &&
        typeof node.properties?.src === 'string' &&
        node.properties.src.startsWith('/') &&
        !node.properties.src.startsWith(prefix)
      ) {
        node.properties.src = prefix + node.properties.src;
      } else if (node.type === 'raw' && typeof node.value === 'string' && node.value.includes('<img')) {
        node.value = node.value.replace(
          /(<img\b[^>]*\bsrc=")(\/[^"]*)"/g,
          (match, pre, src) => (src.startsWith(prefix) ? match : `${pre}${prefix}${src}"`),
        );
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
