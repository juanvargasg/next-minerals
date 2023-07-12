"use client";

import { ThemeProvider } from "@credijusto/minerals";

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
