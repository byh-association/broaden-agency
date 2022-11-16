"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

import { TRPCProvider } from "./trpc-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <TRPCProvider>{children}</TRPCProvider>
    </SessionProvider>
  );
};

export default Providers;
