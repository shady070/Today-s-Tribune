/* eslint-disable react/no-unescaped-entities */
import { Open_Sans as FontSans } from "next/font/google";
import { Noto_Sans_Georgian as FontGeorgian } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import Head from 'next/head';
import { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Today's Tribune",
  description: "Created By ByteBrush",
};

const fontGeorgian = FontGeorgian({
  subsets: ["latin"],
  variable: "--font-georgian",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.variable,
          fontGeorgian.variable 
        )}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}