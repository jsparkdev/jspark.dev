import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const langs = ["en", "ko"] as const;

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
    date: z.date(),
    lastModified: z.date().optional(),
    tags: z.array(z.string()),
    lang: z.enum(langs),
  }),
});

const til = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/til" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
    date: z.date(),
    lastModified: z.date().optional(),
    tags: z.array(z.string()),
    lang: z.enum(langs),
  }),
});

export const collections = { blog, til };
