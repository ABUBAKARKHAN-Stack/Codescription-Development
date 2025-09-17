import { ContainerLayout } from "@/components/layout";
import { getPost, getPosts } from "@/helpers/blogs.helper";
import { SanityLive } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import React, { FC } from "react";
import {
  BlogContentSection,
  BlogHeroSection,
  BlogMainImageSection,
} from "@/components/section/blog";
import Head from "next/head";
import { urlFor } from "@/sanity/lib/image";
import { baseUrl } from "@/constants/constants";

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
    <>
      <Head>
        <title>{post.title}</title>

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content="Read this article" />
        <meta
          property="og:image"
          content={urlFor(post.mainImage.source)
            .width(1200)
            .height(630)
            .format("jpg")
            .url()}
        />
        <meta property="og:url" content={`${baseUrl}/blog/${post.slug}`} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content="Read this article" />
        <meta
          name="twitter:image"
          content={urlFor(post.mainImage.source)
            .width(1200)
            .height(630)
            .format("jpg")
            .url()}
        />
      </Head>

      <div className="relative h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        <SanityLive />

        <BlogHeroSection
          author={post.author}
          publishedAt={post.publishedAt}
          title={post.title}
          role={post.author.role}
        />

        <ContainerLayout>
          <section className="mt-10 w-full">
            {/* Post Main Image */}
            <BlogMainImageSection
              mainImage={post.mainImage}
              title={post.title}
              slug={post.slug}
            />

            {/* Content Area */}
            <BlogContentSection body={post.body} />

            {/* Footer */}
            <div className="mt-16 border-t border-white/10 pt-8">
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">
                  <p className="text-sm">Thanks for reading!</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-purple-600"></div>
                  <div
                    className="h-3 w-3 animate-pulse rounded-full bg-purple-500"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-3 w-3 animate-pulse rounded-full bg-purple-400"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </ContainerLayout>
      </div>
    </>
  );
};

export default BlogDetailsPage;
