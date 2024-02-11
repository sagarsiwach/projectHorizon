import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Ribbon from "@/components/navigation/Ribbon";
import Navigation from "@/components/navigation/Navigation";
import { Toaster } from "@/components/ui/toaster";
import FooterBar from "@/components/navigation/footer";
import { getNavigation, getFooter } from "@/sanity/lib/query";

export const metadata: Metadata = {
  title: "Kabira Mobility",
  description: "Website description",
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

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
