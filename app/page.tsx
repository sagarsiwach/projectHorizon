import Navigation from "@/components/navigation/Navigation";
import Ribbon from "@/components/navigation/Ribbon";
import { client } from "../sanity/lib/client";
import FooterBar from "@/components/navigation/footer";
import { Suspense } from "react";
import TestRideForm from "@/components/form/TestRideForm";

export default async function HomePage() {
  return (
    <div className="mx-auto p-4 lg:max-w-screen-md my-10 lg:my-20 ">
      <h1 className="text-4xl font-bold text-neutral-900 tracking-tighter mb-10">
        Register for Test Rides
      </h1>
      <Suspense fallback={<p>Loading Feed</p>}>
        <TestRideForm />
      </Suspense>
    </div>
  );
}
