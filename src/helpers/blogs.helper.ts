import { sanityFetch } from "@/sanity/lib/live";

async function getPosts() {
  const { data } = await sanityFetch({
    query: `*[_type == "post"] {
    title,
    "slug":slug.current,
    mainImage{
    "source":asset._ref,
    alt
    },
    publishedAt,
    author->{
    name,
    "source": image.asset._ref,
    "slug": slug.current,
    bio
    },
    body
    }`,
  });

  return data;
}

export { getPosts };
