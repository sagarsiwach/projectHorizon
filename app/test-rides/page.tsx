"use client";
import Navigation from "@/components/navigation/Navigation";
import Ribbon from "@/components/navigation/Ribbon";
import * as Label from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

const testRideData = [
  {
    id: "r1",
    value: "km3000",
    name: "KM3000",
  },
  {
    id: "r2",
    value: "km4000",
    name: "KM5000",
  },
  {
    id: "r3",
    value: "km5000",
    name: "KM5000",
  },
];

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export function RadioGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
export default function HomePage() {
  return (
    <div>
      <Ribbon />
      <Navigation />
      <div className="mx-4 mt-2 flex flex-col border-neutral-300 border-[0.5px] divide-neutral-300 divide-y-[0.5px] mb-20">
        <div className="flex pt-16 flex-col items-center px-2 py-4 ">
          <h1 className="text-3xl font-medium tracking-tighter">
            Schedule a Test Ride
          </h1>
          <p className="text-lg tracking-tighter">Experience Electric Today.</p>
        </div>
        <div className="w-full h-[320px] bg-flamingo-100"></div>
        <div className="w-full flex flex-col">
          <Label.Root>Choose your Model?</Label.Root>
          {/* <RadioGroup.Root className="p-2 flex flex-col gap-2.5">
            {testRideData.map((data) => (
              <RadioGroup.Item
                key={data.id} // Added key for list rendering optimization
                className="p-4 w-full h-full flex flex-row items-center bg-white justify-between focus:bg-neutral-200 border-neutral-100 border data-[state=checked]:bg-flamingo-100  "
                value={data.value}
                id={data.id}
              >
                {data.name}
                <RadioGroup.Indicator className=" after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue-500"></RadioGroup.Indicator>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root> */}
          <RadioGroupForm />
        </div>
      </div>
    </div>
  );
}
