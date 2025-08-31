


import { ContainerLayout } from '@/components/layout'
import { PageHeader } from '@/components/reusabe/server'
import { browserSupportStyles } from '@/constants/style.constants'
import React from 'react'
import { getPosts } from '@/helpers/blogs.helper'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'
import { PortableText } from 'next-sanity'







const Blog = async () => {

  const posts = await getPosts()
  console.log(posts);



  return (
    <div
      className="relative h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 py-24"
      style={{ backgroundImage: browserSupportStyles.bg }}>
      <ContainerLayout>
        <SanityLive />
        <PageHeader
          pageHeading='Our Blogs'
        />
        {
          posts.map((post, i) => (
            <div
              key={i}
            >
              <h1>{post?.title}</h1>
              <Image
                src={urlFor(post?.mainImage?._ref).url()}
                width={400}
                height={400}
                alt='r'
              />
              <PortableText
                value={post.body}
                i18nIsDynamicList

              />
              <Image
                src={urlFor(post.author.source).url()}
                width={50}
                height={50}
                className='rounded-full'
              />


            </div>
          ))
        }
      </ContainerLayout>
    </div>
  )
}

export default Blog