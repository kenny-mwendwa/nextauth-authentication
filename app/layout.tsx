import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Authentication using next-auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
