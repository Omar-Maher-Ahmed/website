import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    titleAr: z.string().optional(),
    description: z.string(),
    descriptionAr: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    articleNumber: z.number().optional(),
    youtubeUrl: z.string().url().optional().or(z.literal('')),
    githubUrl: z.string().url().optional().or(z.literal('')),
    featured: z.boolean().default(false),
    tools: z.array(z.object({
      name: z.string(),
      description: z.string(),
      i18nDesc: z.string().optional(),
    })).default([]),
  }),
});

export const collections = {
  articles,
};
