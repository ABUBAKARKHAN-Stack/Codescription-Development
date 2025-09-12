import { ContainerLayout } from "@/components/layout";
import { PageHeader } from "@/components/reusable";
import { getPost, getPosts } from "@/helpers/blogs.helper";
import { SanityLive } from "@/sanity/lib/live";
import { IBlog } from "@/types/main.types";
import { notFound } from "next/navigation";
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
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <div className="relative h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <SanityLive />
      <div className="relative z-10 py-20">
        <ContainerLayout>
          <PageHeader pageHeading={post?.title || "Blog Unavailable"} />
          {post?.title}
        </ContainerLayout>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
