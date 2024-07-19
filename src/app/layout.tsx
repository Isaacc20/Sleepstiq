import type { Metadata } from "next";
import { poppinsRegular } from "./fonts";
import "./globals.css";
import Nav from "@/components/general/Nav";
import Footer from "@/components/general/Footer";

export const metadata: Metadata = {
  title: "Sleepstiq | Relax & Rest",
  description: "Relax & Rest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsRegular.className} relative overflow-x-hidden`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
