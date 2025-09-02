import { ContainerLayout } from "@/components/layout";
import { PageHeader } from "@/components/reusable";
import { browserSupportStyles } from "@/constants/style.constants";
import React from "react";
import { SanityLive } from "@/sanity/lib/live";
import { BlogPostsSection } from "@/components/section/blog";
import BlogSearchFilterSection from "@/components/section/blog/BlogSearchFilterSection";

const Blog = async () => {
  return (
    <div className="relative h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <SanityLive />
      <div className="relative z-10 py-20">
        <ContainerLayout>
          <PageHeader
            pageHeading="Insights & Stories"
            subText="Explore insights, tutorials, and stories from our team.  
              Stay updated with the latest trends and guides."
          />

          {/* <BlogSearchFilterSection /> */}

          <BlogPostsSection />
        </ContainerLayout>
      </div>
    </div>
  );
};

export default Blog;
