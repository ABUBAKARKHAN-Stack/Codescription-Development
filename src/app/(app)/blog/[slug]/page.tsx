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
import { baseUrl, brandName } from "@/constants/constants";
import type { Metadata, ResolvingMetadata } from 'next'


export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ slug }) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};


export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {
      title: `Blog not found | ${brandName}`,
      description: "Sorry, this blog post does not exist.",
      robots: { index: false }
    }
  }

  const title = post.title;
  const description =
    post.description || `Read ${post.title} on ${brandName}`;
  const imageUrl = urlFor(post.mainImage.source)
    .quality(85)
    .width(800)
    .height(600)
    .format("jpg")
    .url();
  const authorName = post.author.name;

  return {
    title: `${title} | ${brandName}`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: post.mainImage.alt || title,
        }
      ],
      type: "article",
      siteName: brandName,
    
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: imageUrl, alt: post.mainImage.alt }],
      creator: authorName,
      site: baseUrl
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    publisher: brandName,
    creator: authorName,
    keywords: post.title,
    authors: {
      name: authorName,
      url: "www.linkedin.com/in/abubakar-aijaz-dev",
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description,
        author: {
          "@type": "Person",
          name: post.author.name,
        },
        datePublished: post.publishedAt,
        image: [imageUrl],
        publisher: {
          "@type": "Organization",
          name: brandName,
        },
      }),
    }

  }
}

const BlogDetailsPage: FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (

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
  );
};

export default BlogDetailsPage;
