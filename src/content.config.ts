import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const companySchema = z.object({
  name: z.string(),
  industry: z.enum(['glass', 'ceramics']),
  segment: z.enum(['hot-end', 'cold-end']).optional(),
  logo: z.string(),
  officialUrl: z.string().url().optional(),
  summary: z.string(),
  // Short English tagline for the EN homepage card, used only by Turkish-only
  // entries whose full body copy isn't translated (no matching companiesEn entry).
  summaryEn: z.string().optional(),
  gallery: z.array(z.string()).default([]),
});

const companies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/companies' }),
  schema: companySchema,
});

const companiesEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/companies-en' }),
  schema: companySchema,
});

export const collections = { companies, companiesEn };
