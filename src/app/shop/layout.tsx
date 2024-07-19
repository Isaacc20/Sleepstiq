import Footer from "@/components/general/Footer";
import Nav from "@/components/general/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleepstiq | About product",
  description: "Relax and rest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
