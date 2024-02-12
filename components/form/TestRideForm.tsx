"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
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
  model: z.enum(
    [...testRideData.map((data) => data.value)] as [string, ...string[]],
    {
      required_error: "You need to select a Model",
    }
  ),
  location: z.string().length(6, "Pincode must be 6 digits").optional(),
  name: z.string().min(2).max(40, "Name must be between 2 and 40 characters"),
  email: z.string().email("Must be a valid email"),
  mobile: z.string().length(10, "Mobile number must be 10 digits"),
  referralCode: z
    .string()
    .length(6, "Referral code must be 6 digits")
    .optional(),
});

export default function TestRideForm() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("referralCode");
  // console.log(referralCode);

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      model: testRideData[0].value, // Default to the first model
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
        referralCode: data.referralCode,
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
        <FormField
          name="referralCode"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your Referral Code"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
