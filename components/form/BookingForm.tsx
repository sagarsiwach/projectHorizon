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
import { useEffect } from "react";

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
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      addressLine1: "",
      addressLine2: "",
      pinCode: "",
      city: "",
      state: "",
      referralCode: "",
      couponCode: "",
    },
  });

  // Dynamically load Razorpay script
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
    console.log(data);
    // Initialize Razorpay and open the checkout modal
    if (window.Razorpay) {
      var options = {
        key: "YOUR_KEY_ID", // Replace with your key
        amount: "50000", // Example: 50000 paise = INR 500
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: "order_9A33XWu170gUtm",
        handler: function (response) {
          alert(`Payment successful: ${response.razorpay_payment_id}`);
          // Handle further operations after payment success
        },
        prefill: {
          name: data.firstName + " " + data.lastName,
          email: data.email,
          contact: data.mobile,
        },
        notes: {
          address: data.addressLine1 + ", " + data.addressLine2,
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      console.error("Razorpay SDK failed to load");
    }
  };

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast({
      title: "Form Submission",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 ">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>{" "}
        </pre>
      ),
    });
  }

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
