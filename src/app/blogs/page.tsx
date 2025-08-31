import { client } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import type {Post} from '@/types/post'

export default async function page() {
    const posts:Post[] = await client.fetch(postsQuery)

    return(
        <div>
            <h1>blogs</h1>
            {posts.map((post) => (
        <div key={post.slug.current} className="mb-8">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-500">
            {new Date(post.publishedAt).toDateString()}
          </p>
          <p>By {post.author?.name}</p>
        </div>
      ))}
        </div>
    )
}