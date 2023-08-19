"use client";

import { SearchProvider } from "@/context/search/serchs";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SearchProvider>
  );
}
