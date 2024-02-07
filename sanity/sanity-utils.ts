import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "7n9s8rfi",
    dataset: "production",
    apiVersion: "2024-02-07",
  });
}

client.fetch();
