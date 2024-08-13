import { Open_Sans as FontSans } from "next/font/google";
import { Noto_Sans_Georgian as FontGeorgian } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import NavBar from "@/components/NavBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontGeorgian = FontGeorgian({
  subsets: ["latin"],
  variable: "--font-georgian",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.variable, // Apply the font-sans variable
          fontGeorgian.variable // Apply the font-georgian variable
        )}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}