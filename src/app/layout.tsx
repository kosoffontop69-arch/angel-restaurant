import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angel Restaurant | Fine Dining Experience",
  description:
    "Experience culinary excellence at Angel Restaurant. Modern cuisine crafted with passion, served in an atmosphere of timeless elegance.",
  keywords: ["restaurant", "fine dining", "cuisine", "reservations"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-body antialiased bg-neutral-50 text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
