export interface SiteConfig {
  name: string;
  pronouns?: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  statement: string;
  shortBio: string;
  longBio: string[];
  philosophy: {
    title: string;
    description: string;
  }[];
  socials: {
    name: string;
    label: string;
    url: string;
    icon?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Sulthan Hanif & Lili suriani",
  pronouns: "he/him",
  role: "Senior Software Engineer & Product Architect",
  location: "Jakarta, Indonesia",
  email: "alexander@vane.dev",
  phone: "+62 (812) 8900-1234",
  statement: "I architect and engineer high-performance web systems and resilient digital products with an uncompromising focus on simplicity, speed, and maintainability.",
  shortBio: "With over 8 years of experience leading engineering initiatives across fintech, developer tooling, and modern distributed systems, I specialize in bridging nuanced user experience design with robust backend architecture.",
  longBio: [
    "I have spent the past eight years designing, shipping, and scaling web applications, distributed platforms, and foundational design systems. My focus centers on building software that feels effortless to use while remaining resilient, observable, and strictly typed under high load.",
    "Previously, I led frontend and infrastructure teams at high-growth tech companies, modernizing core systems, slashing latency, and fostering engineering cultures that value rigorous peer review, type safety, and clean API design.",
    "Outside of architecture and writing code, I actively contribute to open-source tooling, mentor emerging engineers, and research minimalist typography and human-computer interfaces."
  ],
  philosophy: [
    {
      title: "Simplicity over cleverness",
      description: "Code is read ten times more often than it is written. Clear abstractions and minimal dependencies outperform complex micro-optimizations every time."
    },
    {
      title: "Performance is UX",
      description: "Every millisecond of latency is cognitive friction. Static-first delivery, zero-JS where possible, and strict bundle budgeting are fundamental requirements."
    },
    {
      title: "Systems thinking",
      description: "Software isn't just code in isolation—it's the interaction between team communication, deployment pipelines, operational telemetry, and user feedback."
    }
  ],
  socials: [
    {
      name: "GitHub",
      label: "github.com/alexandervane",
      url: "https://github.com",
    },
    {
      name: "LinkedIn",
      label: "linkedin.com/in/alexandervane",
      url: "https://linkedin.com",
    },
    {
      name: "X (Twitter)",
      label: "x.com/alexandervane",
      url: "https://x.com",
    },
    {
      name: "Email",
      label: "alexander@vane.dev",
      url: "mailto:alexander@vane.dev",
    }
  ],
  skills: [
    {
      category: "Frontend Architecture",
      items: ["TypeScript", "React", "Next.js", "Astro", "Tailwind CSS", "Web Performance (CWV)", "Design Systems", "Web Accessibility (WCAG)"]
    },
    {
      category: "Backend & Systems",
      items: ["Node.js", "Go", "PostgreSQL", "Prisma", "Redis", "REST & GraphQL APIs", "Event-Driven Architecture", "gRPC"]
    },
    {
      category: "Infrastructure & DevOps",
      items: ["Docker", "Kubernetes", "AWS (ECS, S3, CloudFront)", "Terraform", "CI/CD (GitHub Actions)", "Vercel", "Cloudflare Workers"]
    },
    {
      category: "Methodology & Tooling",
      items: ["Domain-Driven Design", "Distributed Tracing (OpenTelemetry)", "Test-Driven Development", "Figma", "Git", "Linux"]
    }
  ]
};
