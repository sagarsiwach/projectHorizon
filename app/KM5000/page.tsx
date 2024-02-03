import Navigation from "@/components/navigation/Navigation";
import Ribbon from "@/components/navigation/Ribbon";
import { Button } from "@/components/ui/button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { DownloadCloud } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <Ribbon />
      <Navigation />
      <Button variant="secondary">Test Ride</Button>
      <Button variant="destructive">Test Ride</Button>
      <Button variant="ghost">Test Ride</Button>
      <Button variant="link">Test Ride</Button>
      <Button variant="outline" size="icon">
        <DownloadCloud className="h-4 w-4" />
      </Button>
      <Button>Hello</Button>
      <Button>
        <EnvelopeClosedIcon className="h-4 w-4" />
        Hello
      </Button>
    </div>
  );
}
