"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import * as RadioGroup from "@radix-ui/react-radio-group";
const testRideData = [
  { id: "r1", value: "km3000", name: "KM3000" },
  { id: "r2", value: "km4000", name: "KM4000" },
  { id: "r3", value: "km5000", name: "KM5000" },
];

// Updated schema to include the 'type' field
const FormSchema = z.object({
  model: z.enum([...testRideData.map((data) => data.value)], {
    required_error: "You need to select a Model",
  }),
  location: z.string().length(6, "Pincode must be 6 digits").optional(),
  city: z.string().min(1, "City name is required").optional(),
  state: z.string().min(1, "State name is required").optional(),
  name: z.string().min(2).max(40, "Name must be between 2 and 40 characters"),
  email: z.string().email("Must be a valid email"),
  mobile: z.string().length(10, "Mobile number must be 10 digits"),
  referralCode: z
    .string()
    .length(6, "Referral code must be 6 digits")
    .optional(),
});

export default function TestRideForm() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      model: testRideData[0].value, // Default to the first model
      location: "",
      name: "",
      email: "",
      mobile: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Form Submission",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>{" "}
        </pre>
      ),
    });
  }
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Model Selection */}
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Choose Your Model</FormLabel>
              <RadioGroup.Root {...field} className="flex flex-col">
                {testRideData.map((option) => (
                  <RadioGroup.Item
                    key={option.id}
                    value={option.value}
                    id={option.id}
                  >
                    {option.name}
                  </RadioGroup.Item>
                ))}
              </RadioGroup.Root>
            </FormItem>
          )}
        />

        {/* Location */}
        <FormField
          name="location"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Where Are You Located</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Pincode" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Name */}
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>What Should We Call You?</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Your Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Mobile */}
        <FormField
          name="mobile"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Mobile Number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
