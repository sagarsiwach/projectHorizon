import { render } from "@react-email/render";
import { Resend } from "resend";
import TestRideEmail from "@/app/_emails/TestRideEmail";
import dotenv from "dotenv";
import { NextRequest, NextResponse } from "next/server";
dotenv.config(); // Load environment variables from .env file

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, toEmail } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Kabira Mobility <no-reply@kabiramobility.com>",
      to: [toEmail],
      reply_to: ["info@kabiramobility.com"],
      subject: "Thank you for Registering for Test Rides",
      react: TestRideEmail({ name }),
    });

    return Response.json({ message: "Message sent successfully", data });
  } catch (error) {
    return Response.json({ error });
  }
}
