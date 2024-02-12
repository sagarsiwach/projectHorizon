"use client";
import TestRideForm from "@/components/form/TestRideForm";
import Navigation from "@/components/navigation/Navigation";
import Ribbon from "@/components/navigation/Ribbon";
import { Suspense } from "react";

export default function TestRidePage() {
  return (
    <div>
      <Suspense fallback={<p>Loading Feed</p>}>
        <TestRideForm />
      </Suspense>
    </div>
  );
}
