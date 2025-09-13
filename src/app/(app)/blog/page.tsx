import { ContainerLayout } from "@/components/layout";
import { PageHeader } from "@/components/reusable";

import React from "react";
import { SanityLive } from "@/sanity/lib/live";
import { BlogPostsSection } from "@/components/section/blog";

const Blog = async () => {
  return (
    <div className="relative h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <SanityLive />
      <PageHeader
        pageHeading="Insights & Stories"
        subText="Explore our universe of ideas, guides, and stories. 
           Stay in orbit with the latest trends and explorations."
      />
      <ContainerLayout>
        <BlogPostsSection />
      </ContainerLayout>
    </div>
  );
};

export default Blog;
