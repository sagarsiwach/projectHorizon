import { NextRequest, NextResponse } from "next/server";
import axios from "axios"; // Import Axios

export async function POST(req: NextRequest) {
  const body = await req.json();
  const webhookUrl = process.env.TESTRIDE_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("TESTRIDE_WEBHOOK_URL is not defined.");
    return new NextResponse(
      JSON.stringify({
        error: "Webhook URL is not defined in environment variables.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    // Using Axios to make the POST request
    await axios.post(webhookUrl, body, {
      headers: {},
    });

    // Success response now focuses on the submitted data alone
    return new NextResponse(
      JSON.stringify({
        message: "Test ride request submitted successfully.",
        submittedData: body, // Highlighting the data that was submitted
      }),
      {
        status: 200, // Reflecting success status
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Submission failed:", error);
    // Handling Axios errors
    let errorMessage = "An unexpected error occurred";
    let statusCode = 500; // Default to internal server error

    if (error.response) {
      // Response from the server indicating an error
      errorMessage = error.response.data.error || error.message;
      statusCode = error.response.status;
    } else if (error.request) {
      // No response received to the request made
      errorMessage =
        "The server did not respond to the test ride submission request";
    } else {
      // Error in setting up the request
      errorMessage = error.message;
    }

    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: statusCode,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
