import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Songa — Work Without The Hassle",
  description: "Songa helps gig workers — drivers and couriers — manage earnings, stay compliant, and grow their income across Uber, Bolt, Glovo, and Wolt.",
  keywords: ["gig economy", "driver earnings", "courier platform", "tax compliance", "Poland gig workers"],
  openGraph: {
    title: "Songa — Work Without The Hassle",
    description: "Manage your gig income effortlessly. We handle contracts, taxes, and tools.",
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
      <body className="antialiased">
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
