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
        "Assign an ID number to each navigation item to facilitate ordering and retrieval in a sequential manner.",
    }),
    defineField({
      name: "isEnabled",
      type: "boolean",
      title: "Enabled?",
      description:
        "This flag indicates whether the navigation item is active and should be displayed. It is enabled by default.",
      initialValue: true,
    }),
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      description:
        "The name of the navigation item as it should appear in the user interface.",
    }),
    defineField({
      name: "uid",
      type: "string",
      title: "UID",
      description:
        "A unique identifier for each navigation item, ensuring that each element can be distinctly referenced.",
    }),
    defineField({
      name: "type",
      type: "string",
      title: "Type",
      description:
        "Specifies the type of the navigation item, determining its behavior and interaction model. Options are 'single' for individual links or 'multiple' for dropdowns containing sub-navigation items.",
      options: {
        list: ["single", "multiple"],
      },
    }),
    defineField({
      name: "link",
      type: "slug",
      title: "Link",
      description:
        "The URL slug pointing to the destination of this navigation item. This field is applicable only when the type is set to 'single'.",
      hidden: ({ parent }) => parent?.type !== "single",
    }),
    defineField({
      name: "subNavigation",
      type: "array",
      title: "Sub Navigation",
      description:
        "Defines a collection of sub-navigation items under this navigation element, applicable only for items of type 'multiple'.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              type: "number",
              title: "ID",
              description:
                "Assign an ID number to each sub-navigation item for ordering purposes.",
            }),
            defineField({
              name: "isEnabled",
              type: "boolean",
              title: "Enabled?",
              description:
                "Indicates whether the sub-navigation item is active and should be displayed. Defaults to true.",
              initialValue: true,
            }),
            defineField({
              name: "name",
              type: "string",
              title: "Name",
              description:
                "The name of the sub-navigation item, displayed in the navigation menu.",
            }),
            defineField({
              name: "link",
              type: "slug",
              title: "Link",
              description:
                "The URL slug for the sub-navigation item, directing users to the appropriate content or page.",
            }),
            defineField({
              name: "type",
              type: "string",
              title: "Type",
              description:
                "Defines the appearance or format of the sub-navigation item, with options 'text' for text-based links and 'image' for visually represented links.",
              options: {
                list: ["text", "image"],
              },
            }),
            defineField({
              name: "image",
              type: "image",
              title: "Image",
              description:
                "An image associated with the sub-navigation item. This field is only applicable and visible if the type is set to 'image'.",
              hidden: ({ parent }) => parent?.type !== "image",
            }),
          ],
        }),
      ],
      hidden: ({ parent }) => parent?.type !== "multiple",
    }),
  ],
});

export default navigationSchema;
