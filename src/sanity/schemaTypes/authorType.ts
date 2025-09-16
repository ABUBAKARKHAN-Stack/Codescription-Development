import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .error("Author name is Required")
          .min(5)
          .error("Author name must be at least 5 characters long")
          .max(50)
          .error("Author name must not exceed 50 characters"),
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Author image is required"),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .error("Role must be Required")
          .min(2)
          .error("Role must be at least 2 characters long")
          .max(30)
          .error("Role must not exceed 30 characters"),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
