"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Moon,
  Sun,
  Bell,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Activity,
} from "lucide-react";
import type { Page } from "@/types";

export function Header({
  onMenuClick,
  currentPage,
  theme,
  onToggleColorMode,
  animationsEnabled,
  onToggleAnimations,
}: {
  onMenuClick: () => void;
  currentPage: Page;
  theme?: string;
  onToggleColorMode: () => void;
  animationsEnabled: boolean;
  onToggleAnimations: () => void;
}) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="border-b border-border p-4 flex justify-between items-center shadow-sm bg-card">
      <div className="flex items-center">
        <button
          className="mr-4 md:hidden p-2 rounded-md hover:bg-secondary"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div>
          <h2 className="text-xl font-bold font-outfit">
            {getPageTitle(currentPage)}
          </h2>
          <p className="text-sm text-muted-foreground hidden sm:block">
            Welcome back to your financial dashboard
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={onToggleAnimations}
          aria-label={`${animationsEnabled ? "Disable" : "Enable"} animations`}
          title={`${animationsEnabled ? "Disable" : "Enable"} animations`}
        >
          {animationsEnabled ? (
            <Activity className="h-5 w-5" />
          ) : (
            <Activity className="h-5 w-5 opacity-50" />
          )}
        </button>
        <button
          className="p-2 rounded-md hover:bg-secondary transition-transform hover:rotate-12"
          onClick={onToggleColorMode}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </button>
        <button className="p-2 rounded-md hover:bg-secondary relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span>
        </button>
        <div className="relative">
          <button
            className="p-2 rounded-md hover:bg-secondary"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <User className="h-5 w-5" />
          </button>

          {/* User dropdown menu */}
          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-card border border-border z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2">
                  <div className="px-4 py-3 border-b border-border">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">
                      admin@example.com
                    </p>
                  </div>
                  <div className="py-1">
                    <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-secondary rounded-md">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </button>
                    <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-secondary rounded-md">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </button>
                    <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-secondary rounded-md">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help
                    </button>
                  </div>
                  <div className="py-1 border-t border-border">
                    <button className="flex w-full items-center px-4 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-md">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

// ===== PAGE TITLE HELPER =====
function getPageTitle(page: Page): string {
  switch (page) {
    case "dashboard":
      return "Dashboard";
    case "transactions":
      return "Transactions";
    case "user-management":
      return "User Management";
    case "settings":
      return "Settings";
    case "stocks":
      return "Stocks";
    case "stocks-assets":
      return "Stocks-Assets";
    case "api-management":
      return "API Management";

    default:
      return "Unknown Page";
  }
}
