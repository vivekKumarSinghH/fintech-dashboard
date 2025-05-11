import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Outfit, Poppins } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import DashboardLayoutWrapper from "./dashboard-layout-wrapper"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"

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
  title: {
    default: "FinTech Dashboard - Manage Your Financial Operations",
    template: "%s | FinTech Dashboard",
  },
  description:
    "A comprehensive financial dashboard for managing transactions, stocks, assets, and user accounts with real-time analytics and reporting.",
  keywords: [
    "fintech",
    "financial dashboard",
    "stock portfolio",
    "asset management",
    "transaction tracking",
    "financial analytics",
    "wealth management",
    "investment tracking",
    "financial reporting",
    "portfolio management",
  ],
  authors: [{ name: "FinTech Team" }],
  creator: "FinTech Inc.",
  publisher: "FinTech Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fintech-dashboard.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FinTech Dashboard - Manage Your Financial Operations",
    description:
      "A comprehensive financial dashboard for managing transactions, stocks, assets, and user accounts with real-time analytics and reporting.",
    url: "https://fintech-dashboard.vercel.app",
    siteName: "FinTech Dashboard",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FinTech Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech Dashboard - Manage Your Financial Operations",
    description:
      "A comprehensive financial dashboard for managing transactions, stocks, assets, and user accounts with real-time analytics and reporting.",
    images: ["/twitter-image.png"],
    creator: "@fintech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
