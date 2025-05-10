"use client"

import type React from "react"
import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"

export function StatsCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  animationsEnabled = true,
}: {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  icon: React.ElementType
  animationsEnabled?: boolean
}) {
  return (
    <motion.div
      className="rounded-lg border border-border bg-card overflow-hidden shadow-sm"
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
          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="pt-2">
          <div className="text-2xl font-bold font-outfit">{value}</div>
          <div className="flex items-center mt-1">
            {trend === "up" ? (
              <TrendingUp className="h-4 w-4 text-emerald-500 mr-1" />
            ) : trend === "down" ? (
              <TrendingDown className="h-4 w-4 text-rose-500 mr-1" />
            ) : null}
            <span
              className={`text-xs ${
                trend === "up" ? "text-emerald-500" : trend === "down" ? "text-rose-500" : "text-muted-foreground"
              }`}
            >
              {change} from last month
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
