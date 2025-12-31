import { defineCollection, z } from "astro:content";

// 1. BLOG
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

// 2. PROYECTOS (AQUÍ ESTÁ EL CAMBIO IMPORTANTE)
const projects = defineCollection({
  type: "content",
  // Ahora pasamos ({ image }) como argumento aquí vvv
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    // Cambiamos z.string() por image()
    heroImage: image().optional(), 
  }),
});

// 3. PÁGINAS (About)
const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, projects, pages };