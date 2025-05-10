"use client"

import type React from "react"
import { useState, useCallback, Suspense, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Home, DollarSign, Users, Settings } from "lucide-react"
import { useTheme } from "next-themes"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import type { Page } from "@/types"

// Define the MenuItem type
interface MenuItem {
  icon: React.ComponentType
  label: string
  page: Page
  href: string
}

export default function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(true)

  // Get current path to determine active page
  const pathname = usePathname()
  const currentPage = getPageFromPath(pathname)

  // Menu items for sidebar
  const menuItems: MenuItem[] = [
    { icon: Home, label: "Dashboard", page: "dashboard" as Page, href: "/" },
    { icon: DollarSign, label: "Transactions", page: "transactions" as Page, href: "/transactions" },
    { icon: Users, label: "User Management", page: "user-management" as Page, href: "/user-management" },
    { icon: Settings, label: "Settings", page: "settings" as Page, href: "/settings" },
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

  // Use the theme context
  const { theme, setTheme } = useTheme()

  // Toggle color mode
  const toggleColorMode = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  // Toggle animations
  const toggleAnimations = useCallback(() => {
    setAnimationsEnabled((prev) => !prev)
  }, [])

  // Effect to handle initial loading
  useEffect(() => {
    // Simulate initial loading
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }, [])

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
          theme={theme || "system"}
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

// Helper function to determine current page from path
function getPageFromPath(path: string): Page {
  if (path.startsWith("/transactions")) return "transactions"
  if (path.startsWith("/user-management")) return "user-management"
  if (path.startsWith("/settings")) return "settings"
  return "dashboard" // Default to dashboard
}
