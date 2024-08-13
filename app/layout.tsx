/* eslint-disable react/no-unescaped-entities */
import { Open_Sans as FontSans } from "next/font/google";
import { Noto_Sans_Georgian as FontGeorgian } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import Head from 'next/head';

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
      <Head>
        <title>Today's Tribune</title>
        <meta name="description" content="This is a News Website Created by Hassan Malik." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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