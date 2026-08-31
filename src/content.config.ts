import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.string(), // e.g. "Platform", "Web Application", "Design System", "Open Source"
    year: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(true),
    order: z.number(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    metrics: z.array(z.string()).optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string().optional(),
    period: z.string(),
    present: z.boolean().default(false),
    order: z.number(),
    achievements: z.array(z.string()),
    skills: z.array(z.string()).optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string().optional(),
    period: z.string(),
    honors: z.string().optional(),
    order: z.number(),
    highlights: z.array(z.string()).optional(),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/certifications' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    issueDate: z.string(),
    credentialId: z.string().optional(),
    url: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  projects,
  experience,
  education,
  certifications,
};
