import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const langs = ["ko", "en"] as const;

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
    date: z.date(),
    lastModified: z.date().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    lang: z.enum(langs).default("ko"),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
