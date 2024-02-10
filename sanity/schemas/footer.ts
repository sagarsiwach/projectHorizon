import { defineType, defineField, defineArrayMember } from "sanity";

const footerSchema = defineType({
  name: "Footer",
  type: "document",
  title: "Footer",
  description:
    "Defines the website's footer structure. Encapsulates social media links, navigation components, and corporate information for presentation in a unified layout. This schema is intended for a single instance to maintain site-wide footer consistency.",
  options: {
    single: true,
  },
  groups: [
    { name: "socialMediaConnections", title: "Social Media Connections" },
    {
      name: "navigationalLinksInformation",
      title: "Navigational Links and Information",
    },
    { name: "corporateDetails", title: "Corporate Details" },
  ],
  fields: [
    defineField({
      name: "footerTitle",
      type: "string",
      title: "Footer Title",
      description:
        "The primary title displayed within the footer section, summarizing the content below.",
      group: "corporateDetails",
    }),
    defineField({
      name: "socialMediaLinks",
      type: "object",
      title: "Social Media Links",
      description:
        "Provides direct links to the company's social media profiles, facilitating online engagement.",
      group: "socialMediaConnections",
      fields: [
        defineField({
          name: "facebookUrl",
          type: "url",
          title: "Facebook URL",
          description: "The complete URL of the company's Facebook page.",
        }),
        defineField({
          name: "xUrl",
          type: "url",
          title: "X (formerly Twitter) URL",
          description: "The complete URL of the company's X profile.",
        }),
        defineField({
          name: "instagramUrl",
          type: "url",
          title: "Instagram URL",
          description: "The complete URL of the company's Instagram profile.",
        }),
        defineField({
          name: "linkedinUrl",
          type: "url",
          title: "LinkedIn URL",
          description: "The complete URL of the company's LinkedIn page.",
        }),
        defineField({
          name: "youtubeUrl",
          type: "url",
          title: "YouTube URL",
          description: "The complete URL of the company's YouTube channel.",
        }),
      ],
    }),
    defineField({
      name: "navigationLinks",
      type: "array",
      title: "Footer Navigation Links",
      description:
        "An organized list of internal website links presented in the footer. Links are grouped into main headings with optional sub-links.",
      group: "navigationalLinksInformation",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              type: "number",
              title: "ID",
              description:
                "A unique numerical identifier for each navigation item.",
            }),
            defineField({
              name: "heading",
              type: "string",
              title: "Heading Name",
              description: "The name of the primary navigation heading.",
            }),
            defineField({
              name: "subNavigationLinks",
              type: "array",
              title: "Sub-navigation Links",
              description:
                "A collection of links associated with a specific navigation heading.",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({
                      name: "id",
                      type: "number",
                      title: "ID",
                      description:
                        "A unique numerical identifier for each sub-navigation item.",
                    }),
                    defineField({
                      name: "name",
                      type: "string",
                      title: "Link Name",
                      description:
                        "The descriptive name displayed for the sub-navigation link.",
                    }),
                    defineField({
                      name: "link",
                      type: "string",
                      title: "Navigation URL",
                      description:
                        "The URL slug identifying the internal page or section.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "companyInformation",
      type: "object",
      title: "Company Information",
      description:
        "Detailed company information, including contact details and a brief description.",
      group: "corporateDetails",
      fields: [
        defineField({
          name: "companyName",
          type: "string",
          title: "Company Name",
          description: "The official name of the company.",
        }),
        defineField({
          name: "description",
          type: "array",
          title: "Company Descriptions",
          description:
            "Brief descriptions highlighting the company's mission, values, or services.",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  title: "Title",
                  description:
                    "The title for the description, summarizing the key point.",
                }),
                defineField({
                  name: "description",
                  type: "text", // Use 'text' for longer descriptions or 'string' for shorter ones
                  title: "Description",
                  description:
                    "The detailed description elaborating on the title.",
                }),
              ],
            }),
          ],
        }),

        defineField({
          name: "telephoneTitle",
          type: "string",
          title: "Telephone Title",
          description:
            "A label for the company's telephone contact information.",
        }),
        defineField({
          name: "telephoneNumber",
          type: "string",
          title: "Telephone Number",
          description: "The primary telephone number for the company.",
        }),
        defineField({
          name: "emailTitle",
          type: "string",
          title: "E-Mail Title",
          description: "A label for the company's email contact information.",
        }),
        defineField({
          name: "emailAddress",
          type: "string",
          title: "E-Mail Address",
          description: "The primary email address for the company.",
        }),
        defineField({
          name: "bottomLineText",
          type: "string",
          title: "Bottom Line Text",
          description:
            "A final statement or copyright notice displayed at the very bottom of the footer.",
        }),
      ],
    }),
  ],
});

export default footerSchema;
