export type Project = {
  name: string;
  url: string;
  description: string;
};

export const projects = [
  {
    name: "jspark.dev",
    url: "https://jspark.dev",
    description: "My personal website (here!)",
  },
] satisfies Project[];
