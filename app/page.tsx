import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/next";
import Navigation from "@/components/navigation/Navigation";
import Ribbon from "@/components/navigation/Ribbon";

export default async function HomePage({ params }) {
  const client = createClient();

  const menu = await client.getSingle("navigation_menu");
  return (
    <div>
      <Ribbon />
      <Navigation />
    </div>
  );
}
