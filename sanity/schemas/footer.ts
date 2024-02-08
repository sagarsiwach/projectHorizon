import { defineType, defineField, defineArrayMember } from "sanity";

const footerSchema = defineType({
  name: "Footer",
  type: "document",
  title: "Comprehensive Footer Configuration",
  description:
    "Defines the structure for the website's footer, encapsulating social media links, navigational elements, and company information in a unified layout. Intended for a single instance to maintain consistency across the website.",
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
        "Primary title for the footer, summarizing the content below.",
      group: "corporateDetails",
    }),
    defineField({
      name: "socialMediaLinks",
      type: "object",
      title: "Social Media Links",
      description:
        "Direct links to social media platforms for engaging with the company's online presence.",
      group: "socialMediaConnections",
      fields: [
        defineField({
          name: "facebookUrl",
          type: "url",
          title: "Facebook URL",
          description: "Direct URL to the company's Facebook page.",
        }),
        defineField({
          name: "xUrl",
          type: "url",
          title: "X (formerly Twitter) URL",
          description: "Direct URL to the company's X profile.",
        }),
        defineField({
          name: "instagramUrl",
          type: "url",
          title: "Instagram URL",
          description: "Direct URL to the company's Instagram profile.",
        }),
        defineField({
          name: "linkedinUrl",
          type: "url",
          title: "LinkedIn URL",
          description: "Direct URL to the company's LinkedIn page.",
        }),
        defineField({
          name: "youtubeUrl",
          type: "url",
          title: "YouTube URL",
          description: "Direct URL to the company's YouTube channel.",
        }),
      ],
    }),
    defineField({
      name: "navigationLinks",
      type: "array",
      title: "Footer Navigation Links",
      description:
        "Organized list of links for navigating the website, grouped by main headings and sub-links.",
      group: "navigationalLinksInformation",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              type: "number",
              title: "ID",
              description: "Unique identifier for each navigational item.",
            }),
            defineField({
              name: "heading",
              type: "string",
              title: "Heading Name",
              description: "Name of the main navigation heading.",
            }),
            defineField({
              name: "subNavigationLinks",
              type: "array",
              title: "Sub-navigation Links",
              description:
                "Collection of links under a specific navigation heading.",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({
                      name: "id",
                      type: "number",
                      title: "ID",
                      description:
                        "Unique identifier for each sub-navigation item.",
                    }),
                    defineField({
                      name: "name",
                      type: "string",
                      title: "Link Name",
                      description:
                        "Descriptive name of the sub-navigation link.",
                    }),
                    defineField({
                      name: "url",
                      type: "slug",
                      title: "Navigation URL",
                      description:
                        "URL slug pointing to the specific page or section.",
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
        "Detailed information about the company, including contact details and a brief description.",
      group: "corporateDetails",
      fields: [
        defineField({
          name: "companyName",
          type: "string",
          title: "Company Name",
          description: "Official name of the company.",
        }),
        defineField({
          name: "description",
          type: "array",
          title: "Company Descriptions",
          description:
            "Brief descriptions highlighting the company's mission, values, or services.",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "telephoneTitle",
          type: "string",
          title: "Telephone Title",
          description: "Label for the company's telephone contact information.",
        }),
        defineField({
          name: "telephoneNumber",
          type: "string",
          title: "Telephone Number",
          description: "Primary contact telephone number for the company.",
        }),
        defineField({
          name: "emailTitle",
          type: "string",
          title: "E-Mail Title",
          description: "Label for the company's email contact information.",
        }),
        defineField({
          name: "emailAddress",
          type: "string",
          title: "E-Mail Address",
          description: "Primary contact email address for the company.",
        }),
        defineField({
          name: "bottomLineText",
          type: "string",
          title: "Bottom Line Text",
          description:
            "Final statement or copyright notice displayed in the footer.",
        }),
      ],
    }),
  ],
});

export default footerSchema;
