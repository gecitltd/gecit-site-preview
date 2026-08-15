import { getCollection, type CollectionEntry } from 'astro:content';
import { getRelativeLocaleUrl } from 'astro:i18n';

const HOT_END_ORDER = ['lingnan', 'falorni', 'famor', 'rurex'];
const COLD_END_ORDER = ['iris', 'antonini', 'pietro', 'tecno5'];
const CERAMICS_ORDER = ['nabaltec', 'schunk', 'estiva', 'rwsilicium', 'gk-graphite'];

function byOrder(byId: Record<string, CollectionEntry<'companies'>>, order: string[]) {
  return order.map((id) => byId[id]).filter(Boolean);
}

export async function getGroupedCompanies() {
  const all = await getCollection('companies');
  const byId = Object.fromEntries(all.map((e) => [e.id, e]));
  return {
    hotEnd: byOrder(byId, HOT_END_ORDER),
    coldEnd: byOrder(byId, COLD_END_ORDER),
    ceramics: byOrder(byId, CERAMICS_ORDER),
  };
}

export async function getEnglishById(): Promise<Record<string, CollectionEntry<'companiesEn'>>> {
  const en = await getCollection('companiesEn');
  return Object.fromEntries(en.map((e) => [e.id, e]));
}

export interface CardProps {
  href: string;
  blurb: string;
  external: boolean;
}

export function getCardProps(
  entry: CollectionEntry<'companies'>,
  locale: 'tr' | 'en',
  enById: Record<string, CollectionEntry<'companiesEn'>>,
): CardProps {
  if (locale === 'tr') {
    return {
      href: getRelativeLocaleUrl('tr', `/companies/${entry.id}/`),
      blurb: entry.data.summary,
      external: false,
    };
  }
  const enEntry = enById[entry.id];
  if (enEntry) {
    return {
      href: getRelativeLocaleUrl('en', `/companies/${entry.id}/`),
      blurb: enEntry.data.summary,
      external: false,
    };
  }
  return {
    href: entry.data.officialUrl ?? '#',
    blurb: entry.data.summaryEn ?? entry.data.summary,
    external: true,
  };
}
