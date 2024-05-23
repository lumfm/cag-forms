import type { Metadata } from "next";
import { noto_sans } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: 'CAG',
  description: "CAG FNOL forms, powered and handled by TSO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
        <div className="h-screen flex flex-col justify-between">
          <Header></Header>
          <main className="flex h-full">{children}</main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
