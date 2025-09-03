import { sanityFetch } from "@/sanity/lib/live";
import { IBlog } from "@/types/main.types";
import { draftMode } from "next/headers";

const blogFilterFields = `{
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
    }`;

async function getPosts(preview = false) {
  try {
    const isDraft = preview ? (await draftMode()).isEnabled : true;
    const { data } = await sanityFetch({
      query: `*[_type == "post"] ${blogFilterFields}`,
      perspective: isDraft ? "drafts" : "published",
    });

    const posts = data as IBlog[];
    return posts || [];
  } catch (error) {
    console.log("Sanity Error :: ", error);
    throw error;
  }
}

async function getPost(slug: string) {
  try {
    const { data } = await sanityFetch({
      query: `*[_type == "post" && slug.current == $slug][0] ${blogFilterFields}`,
      params: { slug },
    });

    if (!data) return null;

    return data as IBlog;
  } catch (error) {
    console.log("Sanity Error :: ", error);
    throw error;
  }
}

export { getPosts, getPost };
