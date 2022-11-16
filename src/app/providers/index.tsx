"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { TRPCProvider } from "./trpc-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <TRPCProvider>{children}</TRPCProvider>
    </SessionProvider>
  );
};

export default Providers;
