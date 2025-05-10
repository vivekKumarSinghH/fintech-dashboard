import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, Poppins } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import DashboardLayoutWrapper from "./dashboard-layout-wrapper"

// Font definitions
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "FinTech Dashboard",
  description: "Manage your fintech operations with ease",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
