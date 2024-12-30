export type Project = {
  title: string;
  description: string;
  url: `https://${string}`;
  github: `https://github.com/${string}`;
  technologies: string[];
};

export const projects = [
  {
    title: "jspark.dev",
    description: "My personal website (here)",
    url: "https://jspark.dev",
    github: "https://github.com/jsparkdev/jspark.dev",
    technologies: ["Astro", "Tailwind CSS", "TypeScript"],
  },
] satisfies Project[];
