import { getProjects } from "@/sanity/sanity-utils";
import Navigation from "@/components/navigation/Navigation";
import Ribbon from "@/components/navigation/Ribbon";

export default async function HomePage() {
  return (
    <div>
      <Ribbon />

      <Navigation />
    </div>
  );
}
