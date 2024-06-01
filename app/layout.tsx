import type { Metadata } from "next";
import { noto_sans } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

export const metadata: Metadata = {
  title: "CAG",
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
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"100vh"}
        >
          <Header />

          {/* <main className="flex justify-center h-fit w-full bg-slate-600">{children}</main> */}
          <Box display={"flex"} justifyContent={"center"} height={'100vh'} bgcolor={grey[400]}>
            {children}
          </Box>

          <Footer />
        </Box>
      </body>
    </html>
  );
}
