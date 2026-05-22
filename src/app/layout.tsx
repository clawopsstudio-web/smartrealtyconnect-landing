import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartRealtyConnect - AI Buyer & Seller Discovery for Real Estate Agents",
  description: "Stop chasing cold leads. Our AI discovers motivated buyers and sellers in your market — and delivers them to your calendar. Book your free strategy call today.",
  keywords: "real estate leads, AI lead generation, buyer leads, seller leads, real estate agent tools",
  openGraph: {
    title: "SmartRealtyConnect - AI Buyer & Seller Discovery",
    description: "AI discovers motivated buyers and sellers. You close more deals.",
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
