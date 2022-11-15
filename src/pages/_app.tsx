import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";
import { Noto_Sans as NotoSans } from "@next/font/google";

const notoSans = NotoSans({
  weight: ["400", "500", "700"],
  variable: "--font-noto_sans",
  subsets: ['latin']
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={`${notoSans.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
