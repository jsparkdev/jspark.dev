export type Project = {
  title: string;
  url: string;
  description: string;
  technologies: string[];
};

export const projects = [
  {
    title: "jspark.dev",
    url: "https://jspark.dev",
    description: "My personal website (here!)",
    technologies: ["Astro", "Tailwind CSS", "TypeScript"],
  },
] satisfies Project[];
