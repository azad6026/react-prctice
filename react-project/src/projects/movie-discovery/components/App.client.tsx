// components/App.client.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "./Search";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto mt-8">
        <Search />
      </div>
    </QueryClientProvider>
  );
}
