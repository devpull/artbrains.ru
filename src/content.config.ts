import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/projects" }),
  schema: z.object({
    id: z.number(),
    slug: z.string(),
    draft: z.boolean(),
    title: z.string(),
    heading: z.string(),
    projectUrl: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects };
