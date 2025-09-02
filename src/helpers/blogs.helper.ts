import { sanityFetch } from "@/sanity/lib/live";
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
    }`

async function getPosts(preview = false) {
  const isDraft = preview ? (await draftMode()).isEnabled : true
  const { data } = await sanityFetch({
    query: `*[_type == "post"] ${blogFilterFields}`,
    perspective: isDraft ? "drafts" : "published"
  });

  return data;
}

async function getPost(slug: string) {
  const { data } = await sanityFetch({
    query: `*[_type == "post" && slug.current == $slug][0] ${blogFilterFields}`,
    params: { slug },
  });

  return data;
}




export { getPosts, getPost };
