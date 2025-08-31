
export const postsQuery = `*[_type  == "post"] | order(publishedAt desc){
    title,
    slug,
    image,
    body,
    publishedAt,
    author->{name,image}
}`