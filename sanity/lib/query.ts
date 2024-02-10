import { client } from "../lib/client";

export async function getNavigation() {
  const query = `
  *[_type == "Navigation"]{
  _id,
  _createdAt,
  name,
  isEnabled,
  id,
  uid,
  type,
  "link": link.current,
  "subNavigation": subNavigation[]{
    id,
    name,
    type,
    "link": link.current,
  }
} | order(id asc)
`;

  const data = await client.fetch(query);

  return data;
}

export async function getFooter() {
  const query = `
  *[_type == "Footer"]{...}



`;

  const data = await client.fetch(query);

  return data;
}
