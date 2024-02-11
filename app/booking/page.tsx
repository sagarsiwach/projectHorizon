"use client";
import { BookingForm } from "@/components/form/BookingForm";

export default function BookingPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl">
        <BookingForm />
      </div>
    </div>
  );
}
