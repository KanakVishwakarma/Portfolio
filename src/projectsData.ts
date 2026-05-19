export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  demo: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack storefront with product catalog, cart, secure checkout, and an admin dashboard. Built for speed and conversion.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=900&h=600&fit=crop",
    tags: ["React", "Node", "MongoDB", "Stripe"],
    link: "https://github.com",
    demo: "https://demo.example.com",
    year: "2025",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A keyboard-first task tool with real-time collaboration, drag-and-drop boards, and a calm, focused UI.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&h=600&fit=crop",
    tags: ["React", "Firebase", "Tailwind"],
    link: "https://github.com",
    demo: "https://demo.example.com",
    year: "2025",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather companion with hourly forecasts, location search, and a UI that adapts to current conditions.",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=900&h=600&fit=crop",
    tags: ["React", "REST API", "Tailwind"],
    link: "https://github.com",
    demo: "https://demo.example.com",
    year: "2024",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A modern writing platform with markdown support, comments, draft autosave, and SEO-friendly rendering.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&h=600&fit=crop",
    tags: ["React", "Node", "PostgreSQL"],
    link: "https://github.com",
    demo: "https://demo.example.com",
    year: "2024",
  },
];
