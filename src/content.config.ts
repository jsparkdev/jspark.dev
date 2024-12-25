import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const langs = ["en", "ko"] as const;

export type Lang = (typeof langs)[number];
export type ContentType = "blog";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  draft: z.boolean().default(false),
  date: z.date(),
  lastModified: z.date().optional(),
  category: z.string(),
  tags: z.array(z.string()),
  lang: z.enum(langs),
});

function createCollection(type: ContentType) {
  return defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: `./src/data/${type}`,
    }),
    schema: baseSchema,
  });
}

export const collections = {
  blog: createCollection("blog"),
};
