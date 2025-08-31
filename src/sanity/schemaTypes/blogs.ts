export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'mainImage', type: 'image', options: { hotspot: true } },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
  ],
}
