import { getCollection } from "astro:content";

const postsCollection = await getCollection("blog", ({ data }) => !data.draft);
const posts = postsCollection.sort(
  (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
);

export { posts };
