import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Nav from "@/components/general/Nav";

export const metadata: Metadata = {
  title: "Sleepstiq",
  description: "Relax & Rest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
