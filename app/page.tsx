"use client"

import { DollarSign, Users, CreditCard, ShoppingCart, Percent, Target, RefreshCw, Zap } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatsCard } from "@/components/dashboard/stats-card"
import { RevenueForecast } from "@/components/dashboard/revenue-forecast"
import { CustomerGrowth } from "@/components/dashboard/customer-growth"
import { GeographicDistribution } from "@/components/dashboard/geographic-distribution"
import { ProductPerformance } from "@/components/dashboard/product-performance"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { UserActivity } from "@/components/dashboard/user-activity"
import type { KPIData, RevenueData, CustomerData, RegionData, ProductData } from "@/types"
import { useState } from "react"

export default function DashboardPage() {
  // Get animationsEnabled from localStorage to maintain consistency
  const [animationsEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("animationsEnabled")
      return saved !== null ? saved === "true" : true
    }
    return true
  })

  // KPI data
  const kpiData: KPIData[] = [
    {
      title: "Total Revenue",
      value: "$1,245,890",
      change: "+18.7%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Active Users",
      value: "12,345",
      change: "+15.3%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Transactions",
      value: "48,592",
      change: "+24.5%",
      trend: "up",
      icon: CreditCard,
    },
    {
      title: "Avg. Order Value",
      value: "$258",
      change: "+12.2%",
      trend: "up",
      icon: ShoppingCart,
    },
    {
      title: "Conversion Rate",
      value: "3.8%",
      change: "+0.5%",
      trend: "up",
      icon: Percent,
    },
    {
      title: "Customer Acquisition",
      value: "$42",
      change: "-8.1%",
      trend: "down",
      icon: Target,
    },
    {
      title: "Active Subscriptions",
      value: "8,942",
      change: "+5.3%",
      trend: "up",
      icon: RefreshCw,
    },
    {
      title: "Churn Rate",
      value: "2.1%",
      change: "-0.3%",
      trend: "up",
      icon: Zap,
    },
  ]

  // Revenue forecast data
  const revenueData: RevenueData[] = [
    { month: "Jan", actual: 120000, forecast: 110000 },
    { month: "Feb", actual: 135000, forecast: 125000 },
    { month: "Mar", actual: 140000, forecast: 145000 },
    { month: "Apr", actual: 155000, forecast: 150000 },
    { month: "May", actual: 165000, forecast: 160000 },
    { month: "Jun", actual: 180000, forecast: 175000 },
    { month: "Jul", actual: 190000, forecast: 185000 },
    { month: "Aug", actual: 195000, forecast: 200000 },
    { month: "Sep", actual: 0, forecast: 210000 },
    { month: "Oct", actual: 0, forecast: 220000 },
    { month: "Nov", actual: 0, forecast: 230000 },
    { month: "Dec", actual: 0, forecast: 240000 },
  ]

  // Customer growth data
  const customerData: CustomerData[] = [
    { month: "Jan", new: 850, returning: 1200, churn: 120 },
    { month: "Feb", new: 920, returning: 1250, churn: 115 },
    { month: "Mar", new: 980, returning: 1300, churn: 130 },
    { month: "Apr", new: 1050, returning: 1350, churn: 125 },
    { month: "May", new: 1120, returning: 1400, churn: 140 },
    { month: "Jun", new: 1200, returning: 1450, churn: 135 },
    { month: "Jul", new: 1250, returning: 1500, churn: 145 },
  ]

  // Region data
  const regionData: RegionData[] = [
    { name: "North America", value: 42, users: 4200 },
    { name: "Europe", value: 28, users: 2800 },
    { name: "Asia Pacific", value: 18, users: 1800 },
    { name: "Latin America", value: 8, users: 800 },
    { name: "Middle East", value: 4, users: 400 },
  ]

  // Product data
  const productData: ProductData[] = [
    { name: "Premium Plan", sales: 1245, revenue: 124500, growth: 18.5 },
    { name: "Standard Plan", sales: 2850, revenue: 142500, growth: 12.3 },
    { name: "Basic Plan", sales: 5420, revenue: 108400, growth: 5.7 },
    { name: "Add-on: Analytics", sales: 950, revenue: 47500, growth: 24.8 },
    { name: "Add-on: Support", sales: 1820, revenue: 54600, growth: 15.2 },
  ]

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.slice(0, 4).map((kpi, index) => (
          <StatsCard
            key={index}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
            icon={kpi.icon}
            animationsEnabled={animationsEnabled}
          />
        ))}
      </div>

      {/* Revenue Forecast Chart */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-1 overflow-hidden border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-outfit text-xl">Revenue Forecast</CardTitle>
            <CardDescription>Actual vs forecast revenue for the year</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <RevenueForecast data={revenueData} animationsEnabled={animationsEnabled} />
          </CardContent>
        </Card>

        <Card className="md:col-span-1 overflow-hidden border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-outfit text-xl">Customer Growth</CardTitle>
            <CardDescription>New vs returning customers</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <CustomerGrowth data={customerData} animationsEnabled={animationsEnabled} />
          </CardContent>
        </Card>
      </div>

      {/* Secondary KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.slice(4, 8).map((kpi, index) => (
          <StatsCard
            key={index}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
            icon={kpi.icon}
            animationsEnabled={animationsEnabled}
          />
        ))}
      </div>

      {/* Geographic Distribution and Product Performance */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-outfit text-xl">Geographic Distribution</CardTitle>
            <CardDescription>User distribution by region</CardDescription>
          </CardHeader>
          <CardContent>
            <GeographicDistribution data={regionData} animationsEnabled={animationsEnabled} />
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-outfit text-xl">Product Performance</CardTitle>
            <CardDescription>Sales and revenue by product</CardDescription>
          </CardHeader>
          <CardContent>
            <ProductPerformance data={productData} animationsEnabled={animationsEnabled} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions and Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-1 overflow-hidden border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-outfit text-xl">Recent Transactions</CardTitle>
            <CardDescription>Latest financial activities</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTransactions animationsEnabled={animationsEnabled} />
          </CardContent>
          <CardFooter className="border-t border-border pt-4">
            <Button variant="outline" className="w-full">
              View All Transactions
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-1 overflow-hidden border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="font-outfit text-xl">User Activity</CardTitle>
              <CardDescription>Platform usage metrics</CardDescription>
            </div>
            <select className="rounded-md border border-border bg-card px-3 py-2 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </CardHeader>
          <CardContent>
            <UserActivity animationsEnabled={animationsEnabled} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
