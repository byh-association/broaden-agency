import { Noto_Sans as NotoSans } from "@next/font/google";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const notoSans = NotoSans({
  weight: ["400", "500", "700"],
  variable: "--font-noto_sans",
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <div className={`${notoSans.variable} bg-neutral-50 font-sans `}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
};

export default trpc.withTRPC(MyApp);
