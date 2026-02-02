import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Oak and Barrel | Family Restaurant in Manhattan",
  description: "A family-friendly New York restaurant specializing in steaks, sushi, burgers, and craft beers. Founded in 2004 by Leon van Zyl. Live music on Friday evenings and Sunday afternoons.",
  keywords: ["restaurant", "Manhattan", "steaks", "sushi", "burgers", "craft beer", "live music", "family dining"],
  openGraph: {
    title: "The Oak and Barrel",
    description: "We Serve The Taste You Love - Family restaurant in Manhattan since 2004",
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
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
