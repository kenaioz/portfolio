import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

import { ThemeProvider } from "next-themes";

const jetBrainsMono = JetBrains_Mono({
  variable: "--jetbrains-mono",
  fallback: ["monospace"],
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kenaioz Portfolio | Developer FullStack",
  description: "Meu portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${jetBrainsMono.variable} grid h-screen content-start antialiased transition-all duration-300 ease-in-out`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex h-16 items-center justify-between px-8 py-4">
            <h1 className="text-2xl">Kenaioz | Silvio Cesar</h1>
            <ThemeSwitcher />
          </header>

          <main className="p-8">{children}</main>

          <footer className="bg-foreground text-background flex items-center justify-between px-8 py-4">
            <p>Footer</p>
            <p>Teste</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
