import { createClient, groq } from "next-sanity";

export async function getNavigation() {
  // Initialize the Sanity client
  const client = createClient({
    projectId: "7n9s8rfi",
    dataset: "deployment",
    apiVersion: "2024-02-07", // Ensure this matches the current date or your preferred API version
  });

  // Fetch data using the Sanity client and GROQ query
  return await client.fetch(
    groq`*[_type == "Navigation"]{
  _id,
  _createdAt,
  name,
  isEnabled,
  id,
  uid,
  type,
  "link": slug.current,
  "subNavigation": subNavigation[]{
    id,
    name
  }
} | order(id asc)

`
  );
}
