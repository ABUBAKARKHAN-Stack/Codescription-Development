"use server"

import BlogCard from '@/components/cards/card/blogs/BlogsCard'
import { getPosts } from '@/helpers/blogs.helper';
import { IBlog } from '@/types/main.types';
import { FileIcon } from 'lucide-react';
import React from 'react'

const BlogPostsSection = async () => {
    const posts: IBlog[] = await getPosts();

    if (!posts || posts.length === 0) {
        return (
            <section className="flex flex-col items-center justify-center text-center">
                <div className="max-w-lg mx-auto px-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-xl">
                        <FileIcon className="size-20 text-white/40 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                            No Blog Posts Yet
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            We're working on creating amazing content for you. Check back soon for our latest blog posts and insights!
                        </p>
                        <div className="inline-flex items-center text-sm text-white/50 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                            Coming Soon
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
            ))}
        </section>
    )
}

export default BlogPostsSection