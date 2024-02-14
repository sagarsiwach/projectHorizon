"use client";
import { z } from "zod";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import Image from "next/image";
const testRideData = [
  {
    id: "r1",
    value: "km3000",
    name: "KM3000",
    image: "/test-ride/KM3000.png",
    alt: "KM3000",
  },
  {
    id: "r2",
    value: "km4000",
    name: "KM4000",
    image: "/test-ride/KM4000.png",
    alt: "KM4000",
  },
];

// Updated schema to include the 'type' field
const FormSchema = z.object({
  model: z.string({
    required_error: "Please select the model.",
  }),
  location: z.string().length(6, "Pincode must be 6 digits").optional(),
  name: z.string().min(2).max(40, "Name must be between 2 and 40 characters"),
  email: z.string().email("Must be a valid email"),
  mobile: z.string().length(10, "Mobile number must be 10 digits"),
});

export default function TestRideForm() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("referralCode");
  // console.log(referralCode);

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      model: "km3000",
      location: "",
      name: "",
      email: "",
      mobile: "",
      referralCode: referralCode || "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const formEndpoint = "/api/form/";
      const formResponse = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!formResponse.ok) {
        const errorData = await formResponse.json();
        throw new Error(
          errorData.message || "Failed to submit test ride request"
        );
      }

      // Assuming the second API call depends on the success of the first
      const sendEndpoint = "/api/send/";
      const sendPayload = {
        model: data.model,
        location: data.location,
        email: data.email,
        mobile: data.mobile,
        name: data.name,
        toEmail: data.email, // Assuming the user's email is the destination. Adjust if necessary.
      };

      const sendResponse = await fetch(sendEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendPayload),
      });

      if (!sendResponse.ok) {
        const errorData = await sendResponse.json();
        throw new Error(errorData.message || "Failed to send data");
      }
      // If both requests are successful
      toast({
        title: "Success",
        description:
          "Thank you For Registering for Test Rides, We've sent you an E-Mail with more information. Our team will get in touch shortly",
      });

      // Redirect after a short delay to allow the toast to be visible
      setTimeout(() => {
        window.location.href = "https://www.kabiramobility.com";
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: `There was an issue with your submission: ${error.message || "An unknown error occurred"}`,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4 mx-auto"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg tracking-tighter text-neutral-500 font-medium">
                Please select your model
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your Model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="KM3000">KM3000</SelectItem>
                  <SelectItem value="KM4000">KM4000</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          name="location"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg tracking-tighter text-neutral-500 font-medium">
                Please Enter your Pincode
              </FormLabel>
              <FormControl>
                <Input type="input" placeholder="403722" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg tracking-tighter text-neutral-500 font-medium">
                What is your Name?
              </FormLabel>
              <FormControl>
                <Input type="input" placeholder="Jane Doe" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg tracking-tighter text-neutral-500 font-medium">
                E-Mail Address
              </FormLabel>
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
              <FormLabel className="text-lg tracking-tighter text-neutral-500 font-medium">
                Mobile Number
              </FormLabel>
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
