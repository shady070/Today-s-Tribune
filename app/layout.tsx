import { Open_Sans as FontSans } from "next/font/google"
import { Noto_Sans_Georgian as Font } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const font = Font({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children:ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
