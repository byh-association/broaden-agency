import React from "react";
import Providers from "./providers";
import { Noto_Sans as NotoSans } from "@next/font/google";

const notoSans = NotoSans({
  weight: ["400", "500", "700"],
  variable: "--font-noto_sans",
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
