"use client";
import { TestRideForm } from "@/components/form/TestRideForm";
import Navigation from "@/components/navigation/Navigation";
import Ribbon from "@/components/navigation/Ribbon";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export default function HomePage() {
  const { toast } = useToast();
  return (
    <div>
      <TestRideForm />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
    </div>
  );
}
