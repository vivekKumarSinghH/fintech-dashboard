import type React from "react"
// Type definitions
export type Page = "dashboard" | "transactions" | "user-management" | "settings"
export type ColorMode = "light" | "dark"
export type AnimationsEnabled = boolean

export type MenuItem = {
  icon: React.ElementType
  label: string
  page: Page
}

export type Transaction = {
  id: string
  amount: string
  name: string
  email: string
  status: string
  date?: string
  type?: string
  category?: string
  paymentMethod?: string
}

export type ActivityData = {
  date: string
  logins: number
  transactions: number
  apiCalls: number
}

export type OverviewData = {
  name: string
  total: number
}

export type AssetData = {
  name: string
  value: number
}

export type UserData = {
  id: number
  name: string
  email: string
  role: string
  status: string
  lastLogin?: string
  createdAt?: string
  location?: string
  department?: string
}

export type NotificationSetting = {
  id: string
  name: string
  description: string
  enabled: boolean
}

export type SecuritySetting = {
  id: string
  name: string
  description: string
  enabled: boolean
}

export type ProfileData = {
  name: string
  email: string
  role: string
  bio: string
  phone: string
  location: string
  joinDate: string
}

export type RevenueData = {
  month: string
  actual: number
  forecast: number
}

export type CustomerData = {
  month: string
  new: number
  returning: number
  churn: number
}

export type RegionData = {
  name: string
  value: number
  users: number
}

export type ProductData = {
  name: string
  sales: number
  revenue: number
  growth: number
}

export type KPIData = {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  icon: React.ElementType
}
