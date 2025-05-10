"use client"

import type React from "react"
import { useState, useCallback, Suspense, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, DollarSign, Users, Settings } from "lucide-react"
import { Outfit, Poppins } from "next/font/google"
import { ThemeProvider, useTheme } from "@/components/theme-provider"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import type { Page } from "@/types"

// ===== FONT DEFINITIONS =====
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

export function AppShell({
  children,
  currentPage = "dashboard",
}: {
  children: React.ReactNode
  currentPage?: Page
}) {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(true)

  // Effect to handle CSS setup
  useEffect(() => {
    setMounted(true)

    // Add class to body for font variables
    document.body.classList.add(outfit.variable, poppins.variable)

    // Add CSS variables to document
    const style = document.createElement("style")
    style.innerHTML = `
      :root {
        --background: 0 0% 100%;
        --foreground: 222.2 84% 4.9%;
        --card: 0 0% 100%;
        --card-foreground: 222.2 84% 4.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 222.2 84% 4.9%;
        --primary: 221.2 83.2% 53.3%;
        --primary-foreground: 210 40% 98%;
        --secondary: 210 40% 96.1%;
        --secondary-foreground: 222.2 47.4% 11.2%;
        --muted: 210 40% 96.1%;
        --muted-foreground: 215.4 16.3% 46.9%;
        --accent: 210 40% 96.1%;
        --accent-foreground: 222.2 47.4% 11.2%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 210 40% 98%;
        --success: 142.1 76.2% 36.3%;
        --success-foreground: 355.7 100% 97.3%;
        --warning: 38 92% 50%;
        --warning-foreground: 48 96% 89%;
        --border: 214.3 31.8% 91.4%;
        --input: 214.3 31.8% 91.4%;
        --ring: 221.2 83.2% 53.3%;
        --radius: 0.75rem;
      }

      .dark {
        --background: 222.2 84% 4.9%;
        --foreground: 210 40% 98%;
        --card: 222.2 84% 9.8%;
        --card-foreground: 210 40% 98%;
        --popover: 222.2 84% 9.8%;
        --popover-foreground: 210 40% 98%;
        --primary: 217.2 91.2% 59.8%;
        --primary-foreground: 222.2 47.4% 11.2%;
        --secondary: 217.2 32.6% 17.5%;
        --secondary-foreground: 210 40% 98%;
        --muted: 217.2 32.6% 17.5%;
        --muted-foreground: 215 20.2% 65.1%;
        --accent: 217.2 32.6% 17.5%;
        --accent-foreground: 210 40% 98%;
        --destructive: 0 62.8% 50.6%;
        --destructive-foreground: 210 40% 98%;
        --success: 142.1 70.6% 45.3%;
        --success-foreground: 144.9 80.4% 10%;
        --warning: 48 96% 89%;
        --warning-foreground: 38 92% 50%;
        --border: 217.2 32.6% 17.5%;
        --input: 217.2 32.6% 17.5%;
        --ring: 224.3 76.3% 48%;
      }

      * {
        border-color: hsl(var(--border));
      }
      
      body {
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
        font-family: var(--font-poppins), system-ui, sans-serif;
      }

      body.dark {
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
      }
      
      .dark .bg-card {
        background-color: hsl(var(--card));
      }

      .dark .text-card-foreground {
        color: hsl(var(--card-foreground));
      }

      .dark .bg-primary {
        background-color: hsl(var(--primary));
      }

      .dark .text-primary {
        color: hsl(var(--primary));
      }

      .dark .bg-secondary {
        background-color: hsl(var(--secondary));
      }

      .dark .text-secondary {
        color: hsl(var(--secondary));
      }

      .dark .text-muted-foreground {
        color: hsl(var(--muted-foreground));
      }

      .dark .border-border {
        border-color: hsl(var(--border));
      }
      
      .font-outfit {
        font-family: var(--font-outfit), system-ui, sans-serif;
      }
      
      .font-poppins {
        font-family: var(--font-poppins), system-ui, sans-serif;
      }
      
      .bg-background {
        background-color: hsl(var(--background));
      }
      
      .bg-card {
        background-color: hsl(var(--card));
      }
      
      .text-card-foreground {
        color: hsl(var(--card-foreground));
      }
      
      .bg-primary {
        background-color: hsl(var(--primary));
      }
      
      .text-primary {
        color: hsl(var(--primary));
      }
      
      .bg-primary\\/10 {
        background-color: hsl(var(--primary) / 0.1);
      }
      
      .bg-secondary {
        background-color: hsl(var(--secondary));
      }
      
      .text-secondary {
        color: hsl(var(--secondary));
      }
      
      .text-muted-foreground {
        color: hsl(var(--muted-foreground));
      }
      
      .border-border {
        border-color: hsl(var(--border));
      }
      
      .rounded-lg {
        border-radius: var(--radius);
      }
      
      .rounded-md {
        border-radius: calc(var(--radius) - 2px);
      }
      
      .rounded-sm {
        border-radius: calc(var(--radius) - 4px);
      }

      .text-success {
        color: hsl(var(--success));
      }

      .bg-success {
        background-color: hsl(var(--success));
      }

      .text-warning {
        color: hsl(var(--warning));
      }

      .bg-warning {
        background-color: hsl(var(--warning));
      }

      .text-destructive {
        color: hsl(var(--destructive));
      }

      .bg-destructive {
        background-color: hsl(var(--destructive));
      }

      .bg-destructive\\/10 {
        background-color: hsl(var(--destructive) / 0.1);
      }

      /* Animation classes */
      .animate-spin {
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      /* Transition utilities */
      .transition-all {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }

      .transition-colors {
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }

      .transition-transform {
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }

      .transition-opacity {
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }

      /* Scrollbar styling */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: hsl(var(--muted-foreground) / 0.3);
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: hsl(var(--muted-foreground) / 0.5);
      }
    `
    document.head.appendChild(style)

    // Simulate data loading
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }, [])

  // Menu items for sidebar
  const menuItems = [
    { icon: Home, label: "Dashboard", page: "dashboard" as Page },
    { icon: DollarSign, label: "Transactions", page: "transactions" as Page },
    { icon: Users, label: "User Management", page: "user-management" as Page },
    { icon: Settings, label: "Settings", page: "settings" as Page },
  ]

  // Handle page navigation
  const navigateTo = useCallback((page: Page) => {
    setIsMobileMenuOpen(false)

    // Simulate page loading
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  // Don't render with SSR to avoid hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <AppContent
        currentPage={currentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isLoading={isLoading}
        error={error}
        setError={setError}
        animationsEnabled={animationsEnabled}
        setAnimationsEnabled={setAnimationsEnabled}
        menuItems={menuItems}
        navigateTo={navigateTo}
      >
        {children}
      </AppContent>
    </ThemeProvider>
  )
}

// Define the MenuItem type
interface MenuItem {
  icon: React.ComponentType
  label: string
  page: Page
}

// App Content Component - Separated to use the theme context
function AppContent({
  currentPage,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isLoading,
  error,
  setError,
  animationsEnabled,
  setAnimationsEnabled,
  menuItems,
  navigateTo,
  children,
}: {
  currentPage: Page
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  isLoading: boolean
  error: string | null
  setError: (error: string | null) => void
  animationsEnabled: boolean
  setAnimationsEnabled: (enabled: boolean) => void
  menuItems: MenuItem[]
  navigateTo: (page: Page) => void
  children: React.ReactNode
}) {
  // Use the theme context
  const { theme, setTheme } = useTheme()

  // Toggle color mode
  const toggleColorMode = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  // Toggle animations
  const toggleAnimations = useCallback(() => {
    setAnimationsEnabled((prev) => !prev)
  }, [setAnimationsEnabled])

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar Component - Hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar
          menuItems={menuItems}
          currentPage={currentPage}
          navigateTo={navigateTo}
          animationsEnabled={animationsEnabled}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar - Shown when menu is open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-y-0 left-0 z-50 w-64 md:hidden"
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <Sidebar
              menuItems={menuItems}
              currentPage={currentPage}
              navigateTo={navigateTo}
              animationsEnabled={animationsEnabled}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Component */}
        <Header
          onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          currentPage={currentPage}
          theme={theme}
          onToggleColorMode={toggleColorMode}
          animationsEnabled={animationsEnabled}
          onToggleAnimations={toggleAnimations}
        />

        {/* Main Content */}
        <ErrorBoundary>
          <motion.main
            className="flex-1 overflow-y-auto p-4 md:p-6 bg-background"
            initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
            animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : error ? (
              <div className="p-6 rounded-lg border border-destructive bg-destructive/10 text-destructive">
                <h3 className="text-lg font-semibold mb-2">Error</h3>
                <p>{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="mt-4 px-4 py-2 bg-card border border-border rounded-md hover:bg-secondary transition-colors"
                >
                  Dismiss
                </button>
              </div>
            ) : (
              <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
            )}
          </motion.main>
        </ErrorBoundary>
      </div>
    </div>
  )
}
