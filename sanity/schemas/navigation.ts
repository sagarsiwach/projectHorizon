import { defineType, defineField, defineArrayMember } from "sanity";

const navigationSchema = defineType({
  name: "Navigation",
  type: "document",
  title: "Navigation",
  fields: [
    defineField({
      name: "id",
      type: "number",
      title: "ID",
      description:
        "Provide the ID Number for the Navigation Item, allows you to render it in the chronological order",
    }),
    defineField({
      name: "isEnabled",
      type: "boolean",
      title: "Enabled?",
      initialValue: true,
    }),
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "uid",
      type: "string",
      title: "UID",
      description: "Unique Identifier for the Navigation Item",
    }),
    defineField({
      name: "type",
      type: "string",
      title: "Type",
      description: "Type of the Navigation Item (single or multiple)",
      options: {
        list: ["single", "multiple"],
      },
    }),
    defineField({
      name: "link",
      type: "slug",
      title: "Link",
      description: "Link for the Navigation Item (applies to single type)",
      hidden: ({ parent }) => parent?.type !== "single",
    }),
    defineField({
      name: "subNavigation",
      type: "array",
      title: "Sub Navigation",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              type: "number",
              title: "ID",
            }),
            defineField({
              name: "isEnabled",
              type: "boolean",
              title: "Enabled?",
              initialValue: true,
            }),
            defineField({
              name: "name",
              type: "string",
              title: "Name",
            }),
            defineField({
              name: "link",
              type: "slug",
              title: "Link",
            }),
            defineField({
              name: "type",
              type: "string",
              title: "Type",
              description: "Type of the Sub Navigation Item (image or large)",
              options: {
                list: ["Image", "Text"],
              },
            }),
            defineField({
              name: "image",
              type: "image",
              title: "Image",
              hidden: ({ parent }) => parent?.type !== "Image",
            }),
          ],
        }),
      ],
      hidden: ({ parent }) => parent?.type !== "multiple",
    }),
  ],
});

export default navigationSchema;
