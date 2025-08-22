import * as React from "react";

// Mock QueryClient for now
export class QueryClient {
  constructor(_config?: any) {}
}

export function QueryClientProvider({
  children,
}: {
  client?: QueryClient;
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
