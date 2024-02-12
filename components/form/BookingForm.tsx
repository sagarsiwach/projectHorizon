// @ts-nocheck
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import * as RadioGroup from "@radix-ui/react-radio-group";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useEffect, useState } from "react";
import crypto from "crypto"; // Import the crypto library for generating HMAC SHA256 hash

const formSchema = z.object({
  model: z.enum(["km3000", "km4000", "km5000"]),
  modelColor: z.enum(["Matte Black", "Matte Red"]),
  modelType: z.enum(["Standard", "Premium"]),
  firstName: z.string().min(2).max(40),
  lastName: z.string().min(2).max(40),
  email: z.string().email(),
  mobile: z.string().length(10),
  addressLine1: z.string().min(2).max(40),
  addressLine2: z.string().min(2).max(40),
  pinCode: z.string().length(6),
  city: z.string().min(2).max(40),
  state: z.string().min(2).max(40),
  referralCode: z.string().length(6).optional(),
  couponCode: z.string().length(6).optional(),
});

export function BookingForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "km3000",
      modelColor: "Matte Black",
      modelType: "Standard",
      firstName: "Sagar",
      lastName: "Siwach",
      email: "sagar@classicgroup.asia",
      mobile: "9225980117",
      addressLine1: "Plot No. L-148 & 149",
      addressLine2: "Verna Industrial Estate",
      pinCode: "403722",
      city: "Verna",
      state: "Goa",
      referralCode: "123456",
      couponCode: "987654",
    },
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Razorpay SDK loaded");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data); // For debugging purposes
    try {
      // Step 1: Send form data to your webhook or server
      const webhookUrl =
        "https://hook.eu2.make.com/2ndhcwe3zmyqiuj8nctr5ayar9pkwe3n";
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send data to the webhook.");

      // Assuming the response includes Razorpay order details
      const orderDetails = await response.json();

      // Step 2: Initialize Razorpay with the order details from the response
      if ((window as any).Razorpay && orderDetails.id) {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: orderDetails.amount,
          currency: "INR",
          name: "Acme Corp",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: orderDetails.id,
          handler: async (response) => {
            console.log("Payment successful:", response);

            // Step 3: Verify Payment Signature
            const secret = process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET; // The key_secret from Razorpay Dashboard
            const generated_signature = crypto
              .createHmac("sha256", secret)
              .update(orderDetails.id + "|" + response.razorpay_payment_id)
              .digest("hex");

            if (generated_signature === response.razorpay_signature) {
              // If the signatures match, it's a successful payment verification
              console.log("Payment verified successfully");

              // Step 4: Send the Razorpay payment success data and the generated signature to the specified webhook URL for further processing
              const payload = {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                order_id: orderDetails.id, // The initial order ID from your server
                razorpay_signature: response.razorpay_signature,
                hashed_signature: generated_signature, // The locally generated signature for verification
              };

              try {
                const webhookResponse = await fetch(
                  "https://hook.eu2.make.com/pkgeivdux4e9gauimmvdk1e7ii54msu2",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                  }
                );

                if (!webhookResponse.ok) {
                  throw new Error("Failed to notify the success webhook.");
                }

                console.log("Success webhook notified");
                toast({
                  title: "Payment Success",
                  description: "Your payment was successful and verified.",
                });
              } catch (error) {
                console.error("Webhook notification error:", error);
                toast({
                  title: "Error",
                  description:
                    "Payment was successful, but notification failed.",
                });
              }
            } else {
              // Handle the case where the payment verification fails
              console.error("Payment verification failed");
              toast({
                title: "Verification Failed",
                description:
                  "Payment verification failed. Please contact support.",
              });
            }
          },
          prefill: {
            name: data.firstName + " " + data.lastName,
            email: data.email,
            contact: data.mobile,
          },
          notes: {
            ...data, // Include all form data in notes for reference
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new (window as any).Razorpay(options);
        rzp1.open();
      } else {
        throw new Error("Razorpay SDK not loaded or order creation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "There was an issue processing your request.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-6 gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem className=" col-span-6">
              <FormLabel>Choose your Model</FormLabel>
              <FormControl>
                <RadioGroup.Root
                  className="flex flex-col space-y-4 "
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormItem>
                    <FormControl>
                      <RadioGroup.Item
                        className="p-2 w-full border-neutral-300 border rounded-md hover:bg-neutral-100 focus:bg-flamingo-400 data-[state=checked]:bg-flamingo-500"
                        value="km3000"
                      >
                        KM3000
                      </RadioGroup.Item>
                    </FormControl>
                    <FormLabel className="sr-only">KM3000</FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioGroup.Item
                        className="p-2 w-full border-neutral-300 border rounded-md hover:bg-neutral-100 focus:bg-flamingo-400 data-[state=checked]:bg-flamingo-500"
                        value="km4000"
                      >
                        KM4000
                      </RadioGroup.Item>
                    </FormControl>
                    <FormLabel className="sr-only">KM5000</FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioGroup.Item
                        className="p-2 w-full border-neutral-300 border rounded-md hover:bg-neutral-100 focus:bg-flamingo-400 data-[state=checked]:bg-flamingo-500"
                        value="km5000"
                      >
                        KM5000
                      </RadioGroup.Item>
                    </FormControl>
                    <FormLabel className="sr-only">KM5000</FormLabel>
                  </FormItem>
                </RadioGroup.Root>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="modelColor"
          render={({ field }) => (
            <FormItem className=" col-span-6">
              <FormLabel>Choose your Model</FormLabel>
              <FormControl>
                <RadioGroup.Root
                  className="grid grid-cols-2 gap-2 w-full"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormItem>
                    <FormControl>
                      <RadioGroup.Item
                        className="p-2 w-full border-neutral-300 border flex-grow rounded-md hover:bg-neutral-100 focus:bg-flamingo-400 data-[state=checked]:bg-flamingo-500"
                        value="Matte Black"
                      >
                        Matte Black
                      </RadioGroup.Item>
                    </FormControl>
                    <FormLabel className="sr-only">Matte Black</FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioGroup.Item
                        className="p-2 w-full border-neutral-300 border rounded-md hover:bg-neutral-100 focus:bg-flamingo-400 flex-grow data-[state=checked]:bg-flamingo-500"
                        value="Matte Red"
                      >
                        Matte Red
                      </RadioGroup.Item>
                    </FormControl>
                    <FormLabel className="sr-only">Matte Red</FormLabel>
                  </FormItem>
                </RadioGroup.Root>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="modelType"
          render={({ field }) => (
            <FormItem className=" col-span-6">
              <FormLabel>Choose your Variant</FormLabel>
              <FormControl>
                <RadioGroup.Root
                  className="grid grid-cols-2 gap-2 w-full"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormItem>
                    <FormControl>
                      <RadioGroup.Item
                        className="p-2 w-full border-neutral-300 border flex-grow rounded-md hover:bg-neutral-100 focus:bg-flamingo-400 data-[state=checked]:bg-flamingo-500"
                        value="Standard"
                      >
                        Standard
                      </RadioGroup.Item>
                    </FormControl>
                    <FormLabel className="sr-only">Standard</FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioGroup.Item
                        className="p-2 w-full border-neutral-300 border rounded-md hover:bg-neutral-100 focus:bg-flamingo-400 flex-grow data-[state=checked]:bg-flamingo-500"
                        value="Premium"
                      >
                        Premium
                      </RadioGroup.Item>
                    </FormControl>
                    <FormLabel className="sr-only">Premium</FormLabel>
                  </FormItem>
                </RadioGroup.Root>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className=" col-span-3">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>Please enter your first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className=" col-span-3">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>Please enter your last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className=" col-span-3">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem className=" col-span-3">
              <FormLabel>Mobile</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your mobile number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="addressLine1"
          render={({ field }) => (
            <FormItem className=" col-span-6">
              <FormLabel>Address Line 1</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your address line 1.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="addressLine2"
          render={({ field }) => (
            <FormItem className=" col-span-6">
              <FormLabel>Address Line 2</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your address line 2.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pinCode"
          render={({ field }) => (
            <FormItem className=" col-span-2">
              <FormLabel>Pin Code</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>Please enter your pin code.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className=" col-span-2">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>Please enter your city.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className=" col-span-2">
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>Please enter your state.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="referralCode"
          render={({ field }) => (
            <FormItem className=" col-span-3">
              <FormLabel>Referral Code</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your referral code (if applicable).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="couponCode"
          render={({ field }) => (
            <FormItem className=" col-span-3">
              <FormLabel>Coupon Code</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your coupon code (if applicable).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
