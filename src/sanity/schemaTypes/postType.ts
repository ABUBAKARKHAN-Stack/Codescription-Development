import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .error("Post title is required")
          .min(5)
          .error("Title must be at least 5 characters long")
          .max(100)
          .error("Title must not exceed 100 characters"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) =>
            Rule.required().error(
              "Alternative text is required for accessibility",
            ),
        }),
      ],
      validation: (Rule) => Rule.required().error("Main image is required"),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required().error("Publish date is required"),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) =>
        Rule.required().error("Author reference is required"),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("Post body content is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
