import * as React from "react";

// Mock QueryClient for now
export class QueryClient {
  constructor(config?: any) {}
}

export function QueryClientProvider({
  client,
  children,
}: {
  client: QueryClient;
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
