import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { trpc, trpcClientConfiguration } from "../../utils/trpc";

export const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(trpcClientConfiguration);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
