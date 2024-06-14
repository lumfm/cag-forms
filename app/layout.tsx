import type { Metadata } from "next";
import { noto_sans } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
          justifyContent={'flex-start'}
          height={'100vh'}
        >
          <Header />

          {/* <main className="flex justify-center h-fit w-full bg-slate-600">{children}</main> */}
          
            <Box
              display={"flex"}
              justifyContent={"center"}
              bgcolor={grey[400]}
              height={'100%'}
              flexGrow={1}
              overflow={'auto'}
            >
              {children}
            </Box>


          <Footer />
        </Box>
      </body>
    </html>
  );
}
