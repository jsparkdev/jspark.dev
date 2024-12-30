import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export type ContentType = "blog";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  draft: z.boolean().default(false),
  date: z.date(),
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
