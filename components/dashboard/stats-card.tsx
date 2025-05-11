"use client"

import type React from "react"
import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export function StatsCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  animationsEnabled = true,
  className = "",
}: {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  icon: React.ElementType
  animationsEnabled?: boolean
  className?: string
}) {
  return (
    <motion.div
      className={`rounded-lg border border-border bg-card overflow-hidden shadow-sm ${className}`}
      whileHover={
        animationsEnabled
          ? { y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }
          : {}
      }
      initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div
            className={`h-8 w-8 rounded-md ${trend === "down" ? "bg-red-100 dark:bg-red-900/30" : trend === "up" ? "bg-green-100 dark:bg-green-900/30" : "bg-primary/10"} flex items-center justify-center`}
          >
            <Icon
              className={`h-5 w-5 ${trend === "down" ? "text-red-600" : trend === "up" ? "text-green-600" : "text-primary"}`}
            />
          </div>
        </div>
        <div className="pt-2">
          <div className="text-2xl font-bold font-outfit">{value}</div>
          <div className="flex items-center mt-1">
            {trend === "up" ? (
              <TrendingUp className="h-4 w-4 text-emerald-500 mr-1" />
            ) : trend === "down" ? (
              <TrendingDown className="h-4 w-4 text-rose-500 mr-1" />
            ) : (
              <Minus className="h-4 w-4 text-muted-foreground mr-1" />
            )}
            <span
              className={`text-xs ${
                trend === "up" ? "text-emerald-500" : trend === "down" ? "text-rose-500" : "text-muted-foreground"
              }`}
            >
              {change}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
