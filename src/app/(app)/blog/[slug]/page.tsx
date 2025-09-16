import { ContainerLayout } from "@/components/layout";
import { PageHeader } from "@/components/reusable";
import { getPost, getPosts } from "@/helpers/blogs.helper";
import { SanityLive } from "@/sanity/lib/live";
import { IBlog } from "@/types/main.types";
import { notFound } from "next/navigation";
import Image from "next/image";
import React, { FC } from "react";
import { urlFor } from "@/sanity/lib/image";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ slug }) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const BlogDetailsPage: FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const post: IBlog | null = await getPost(slug);

  if (!post) notFound();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      <SanityLive />

      {/* Blog Header with Hero Image */}
      <PageHeader pageHeading={post?.title || "Blog Unavailable"} cl>
        {post?.mainImage?.source && (
          <div className="relative  mx-auto mt-6 max-w-5xl rounded-xl">
            {/* Fixed height container for fill image */}
            <div className="relative max-w-md  h-[350px] w-full">
              <Image
                src={urlFor(post.mainImage.source).url()}
                alt={post.mainImage.alt || post.title}
                fill
                priority
                className="rounded-xl object-cover brightness-90"
              />
            </div>

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
              <div className="mt-4 flex items-center gap-4">
                {post.author?.source && (
                  <Image
                    src={urlFor(post.author.source).url()}
                    alt={post.author.name}
                    width={45}
                    height={45}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-medium">{post.author?.name}</p>
                  <p className="text-sm text-gray-300">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </PageHeader>


      {/* Blog Content */}
      <ContainerLayout>
        <section className="prose prose-invert prose-purple mt-12 max-w-none">
          {post.body?.map((block) => {
            if (block._type === "block") {
              switch (block.style) {
                case "h2":
                  return (
                    <h2 key={block._key} className="text-3xl font-bold">
                      {block.children[0]?.text}
                    </h2>
                  );
                case "h4":
                  return (
                    <h4 key={block._key} className="text-xl font-semibold">
                      {block.children[0]?.text}
                    </h4>
                  );
                case "normal":
                  return (
                    <p key={block._key} className="leading-relaxed">
                      {block.children[0]?.text}
                    </p>
                  );
                default:
                  return (
                    <p key={block._key}>{block.children[0]?.text}</p>
                  );
              }
            }
            return null;
          })}
        </section>
      </ContainerLayout>
    </div>
  );
};

export default BlogDetailsPage;
