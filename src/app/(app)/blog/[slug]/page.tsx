import { ContainerLayout } from "@/components/layout";
import { getPost, getPosts } from "@/helpers/blogs.helper";
import { SanityLive } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import React, { FC } from "react";
import { PortableText } from "@portabletext/react";
import { BlogHeroSection, BlogMainImageSection } from "@/components/section/blog";
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

const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="mt-12 mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl leading-tight font-bold text-transparent text-white">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="relative mt-10 mb-6 text-3xl font-semibold text-white">
        <span className="absolute top-0 -left-4 h-full w-1 rounded-full bg-gradient-to-b from-purple-500 to-blue-500"></span>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-8 mb-5 flex items-center gap-3 text-2xl font-semibold text-white">
        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mt-6 mb-4 text-xl font-semibold text-purple-300">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-6 text-lg leading-relaxed font-light text-gray-300">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-8 rounded-r-xl border-l-4 border-purple-500 bg-purple-900/20 py-4 pr-4 pl-6 text-purple-200 italic backdrop-blur-sm">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-bold text-transparent text-white">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="text-purple-200 italic">{children}</em>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="font-medium text-purple-400 underline decoration-purple-500/50 decoration-2 transition-all duration-300 hover:text-purple-300 hover:decoration-purple-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    code: ({ children }: any) => (
      <code className="rounded-lg border border-purple-500/30 bg-gray-800/80 px-3 py-1 font-mono text-sm text-purple-300">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-6 space-y-3 text-gray-300">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="counter-reset-item mb-6 space-y-3 text-gray-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3">
        <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500"></div>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: any) => (
      <li className="flex items-start gap-3">
        <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
          •
        </div>
        <span>{children}</span>
      </li>
    ),
  },
};

const BlogDetailsPage: FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <>

      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={"Read this article"} />
        <meta property="og:image" content={urlFor(post.mainImage.source).width(1200).height(630).url()} />
        <meta property="og:url" content={`${baseUrl}/blog/${post.slug}`} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={"Read this article"} />
        <meta name="twitter:image" content={urlFor(post.mainImage.source).width(1200).height(630).url()} />
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

            {/* Premium Content Area */}
            <article className="relative">
              <div className="absolute -inset-x-4 -inset-y-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-purple-900/10 to-transparent backdrop-blur-sm"></div>
              <div className="relative px-8 py-12">
                {post.body && post.body.length > 0 && (
                  <div className="prose prose-invert prose-lg max-w-none">
                    <PortableText
                      value={post.body}
                      components={portableTextComponents}
                    />
                  </div>
                )}

                {/* Reading Progress Indicator */}
                <div className="fixed top-0 left-0 z-50 h-1 w-full bg-gray-800">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            </article>

            {/* Elegant Footer */}
            <div className="mt-16 border-t border-white/10 pt-8">
              <div className="flex items-center justify-between">
                <div className="text-gray-400">
                  <p className="text-sm">Thanks for reading!</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-purple-500"></div>
                  <div
                    className="h-3 w-3 animate-pulse rounded-full bg-blue-500"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-3 w-3 animate-pulse rounded-full bg-purple-300"
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
