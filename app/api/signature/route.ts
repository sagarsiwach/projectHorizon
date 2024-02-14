// app/api/signature/route.ts

import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { order_id, razorpay_payment_id, razorpay_signature } = body;

  try {
    // Verify the payment signature
    const crypto = require("crypto");
    const secret = process.env.RAZORPAY_KEY_SECRET;
    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return new Response(
        JSON.stringify({ message: "Payment verification failed" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Payment verification successful, push data to the webhook
    const webhookResponse = await fetch(
      "https://hook.eu2.make.com/734tji722l5stfwzmd77qd1suydua1k1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_payment_id,
          razorpay_order_id: order_id,
          razorpay_signature,
        }),
      }
    );

    if (!webhookResponse.ok) {
      throw new Error("Failed to notify the success webhook.");
    }

    // Return success message
    return new Response(
      JSON.stringify({ message: "Payment verified successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
