import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    // One-line hook shown under the title on cards and the article hero.
    dek: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
    role: z.string(),
    period: z.string().optional(),
    date: z.coerce.date(),
    readTime: z.string().optional(),
    // draft: card + hero page are public, body is NOT rendered until published.
    status: z.enum(["published", "draft"]).default("draft"),
    // Lower = shown first on the homepage.
    order: z.number().default(99),
    visual: z.enum(["pipeline", "ledger"]),
    tags: z.array(z.string()).default([]),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    tldr: z.array(z.string()).default([]),
    // Short labels for the visual flow in the TL;DR pop-up.
    steps: z.array(z.string()).default([]),
  }),
});

export const collections = { writing };
