import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartRealtyConnect - AI Listing Growth Team for Real Estate Agents",
  description: "Send a listing and get buyer channels, seller opportunities, outreach drafts, promo angles, and follow-up summaries prepared for your approval.",
  keywords: "real estate listing marketing, buyer opportunity report, real estate follow up, listing growth, real estate agent marketing",
  openGraph: {
    title: "SmartRealtyConnect - AI Listing Growth Team",
    description: "Every listing gets buyer and seller opportunities, outreach drafts, and follow-up support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
