import { getPost, getPosts } from "@/helpers/blogs.helper";
import { IBlog } from "@/types/main.types";
import React, { FC } from "react";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(({ slug }) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const BlogDetailsPage: FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const post: IBlog = await getPost(slug);

  return <div>{post.slug} Details Page</div>;
};

export default BlogDetailsPage;
