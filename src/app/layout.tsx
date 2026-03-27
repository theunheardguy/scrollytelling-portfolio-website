import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shivam Kumar | Software Engineer",
  description: "A high-end scrollytelling personal portfolio",
};

import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased text-white bg-[#121212]`}>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
