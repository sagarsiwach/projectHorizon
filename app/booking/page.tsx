"use client";
import { BookingForm } from "@/components/form/BookingForm";
import React from "react";

export default function BookingPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl">
        <BookingForm />
      </div>
    </div>
  );
}
