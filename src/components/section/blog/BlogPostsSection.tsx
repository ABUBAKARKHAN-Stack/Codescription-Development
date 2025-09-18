"use server";

import BlogCard from "@/components/cards/card/blogs/BlogsCard";
import { getPosts } from "@/helpers/blogs.helper";
import { IBlog } from "@/types/main.types";
import { FileIcon } from "lucide-react";
import React from "react";

const BlogPostsSection = async () => {
  const posts: IBlog[] = await getPosts();

  if (!posts || posts.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mx-auto max-w-lg px-6">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-8 shadow-xl backdrop-blur-sm">
            <FileIcon className="mx-auto mb-6 size-20 text-white/40" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              No Blog Posts Yet
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-white/50">
              We're working on creating amazing content for you. Check back soon
              for our latest blog posts and insights!
            </p>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
              <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-purple-400"></div>
              Coming Soon
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, i) => (
        <BlogCard priority={i === 0} key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default BlogPostsSection;
