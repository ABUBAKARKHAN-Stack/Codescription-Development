import { ContainerLayout } from "@/components/layout";
import { PageHeader } from "@/components/reusable";
import { browserSupportStyles } from "@/constants/style.constants";
import React, { FC } from "react";
import { getPosts } from "@/helpers/blogs.helper";

import { SanityLive } from "@/sanity/lib/live";

import BlogCard from "@/components/cards/card/blogs/BlogsCard";
import { IBlog } from "@/types/main.types";

const Blog = async () => {
  const posts: IBlog[] = await getPosts();

  return (
    <div className="relative h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <div className="relative z-10 py-20">
        <ContainerLayout>
          <SanityLive />
          <PageHeader pageHeading="Our Blogs" />

          {/* Enhanced grid with better responsive design */}
          <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </section>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default Blog;



