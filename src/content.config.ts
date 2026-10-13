import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    category: z.enum(['qa', 'uiux', 'development']),
    role: z.string().min(1),
    projectType: z.string().optional(),
    period: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    published: z.boolean(),
    cover: z.object({ src: image(), alt: z.string().min(1) }).optional(),
    links: z.array(z.object({
      label: z.string().min(1),
      url: z.url().refine((value) => value.startsWith('https://'), 'Use a public HTTPS URL'),
    })).default([]),
    evidence: z.array(z.object({
      src: image(), alt: z.string().min(1), caption: z.string().optional(),
    })).default([]),
  }),
});

export const collections = { projects };
