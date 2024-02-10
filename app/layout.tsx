import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Ribbon from "@/components/navigation/Ribbon";
import Navigation from "@/components/navigation/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { client } from "../sanity/lib/client";
import FooterBar from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "Kabira Mobility",
  description: "Website description",
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

async function getNavigation() {
  const query = `
  *[_type == "Navigation"]{
  _id,
  _createdAt,
  name,
  isEnabled,
  id,
  uid,
  type,
  "link": link.current,
  "subNavigation": subNavigation[]{
    id,
    name,
    type,
    "link": link.current,
  }
} | order(id asc)
`;

  const data = await client.fetch(query);

  return data;
}

async function getFooter() {
  const query = `
  *[_type == "Footer"]{...}



`;

  const data = await client.fetch(query);

  return data;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationData = await getNavigation();
  const footerData = await getFooter();

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Ribbon />
        <Navigation navigation={navigationData} />
        <main>{children}</main>
        <Toaster />
        <FooterBar footer={footerData[0]} />
      </body>
    </html>
  );
}
