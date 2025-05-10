"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import type { MenuItem, Page } from "@/types"

export function Sidebar({
  menuItems,
  currentPage,
  navigateTo,
  animationsEnabled,
}: {
  menuItems: MenuItem[]
  currentPage: Page
  navigateTo: (page: Page) => void
  animationsEnabled: boolean
}) {
  return (
    <div className="h-full w-64 flex flex-col shadow-md border-r border-border bg-card">
      <div className="p-4 border-b border-border">
        <motion.h1
          className="text-2xl font-bold text-primary flex items-center font-outfit"
          initial={animationsEnabled ? { opacity: 0 } : false}
          animate={animationsEnabled ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mr-2">💰</span>
          <span>FinTech</span>
        </motion.h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.li
                key={index}
                initial={animationsEnabled ? { opacity: 0, x: -20 } : false}
                animate={animationsEnabled ? { opacity: 1, x: 0 } : { opacity: 1 }}
                transition={{ delay: animationsEnabled ? index * 0.05 : 0 }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center w-full p-3 rounded-md text-left transition-all duration-200 ${
                    currentPage === item.page
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => navigateTo(item.page)}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  <span className="font-medium font-poppins">{item.label}</span>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-border">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">JD</div>
          <div className="ml-3">
            <p className="text-sm font-medium font-poppins">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}
