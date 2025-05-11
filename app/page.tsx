"use client"

import { StatsCard } from "@/components/dashboard/stats-card"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { RevenueForecast } from "@/components/dashboard/revenue-forecast"
import { CustomerGrowth } from "@/components/dashboard/customer-growth"
import { GeographicDistribution } from "@/components/dashboard/geographic-distribution"
import { ProductPerformance } from "@/components/dashboard/product-performance"
import { UserActivity } from "@/components/dashboard/user-activity"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Users, CreditCard, Activity, ShoppingCart, Percent, Target, RefreshCw, Zap } from "lucide-react"
import { useState } from "react"
import type { KPIData } from "@/types"

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
  const revenueData = [
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
  const customerData = [
    { month: "Jan", new: 850, returning: 1200, churn: 120 },
    { month: "Feb", new: 920, returning: 1250, churn: 115 },
    { month: "Mar", new: 980, returning: 1300, churn: 130 },
    { month: "Apr", new: 1050, returning: 1350, churn: 125 },
    { month: "May", new: 1120, returning: 1400, churn: 140 },
    { month: "Jun", new: 1200, returning: 1450, churn: 135 },
    { month: "Jul", new: 1250, returning: 1500, churn: 145 },
  ]

  // Region data
  const regionData = [
    { name: "North America", value: 42, users: 4200 },
    { name: "Europe", value: 28, users: 2800 },
    { name: "Asia Pacific", value: 18, users: 1800 },
    { name: "Latin America", value: 8, users: 800 },
    { name: "Middle East", value: 4, users: 400 },
  ]

  // Product data
  const productData = [
    { name: "Premium Plan", sales: 1245, revenue: 124500, growth: 18.5 },
    { name: "Standard Plan", sales: 2850, revenue: 142500, growth: 12.3 },
    { name: "Basic Plan", sales: 5420, revenue: 108400, growth: 5.7 },
    { name: "Add-on: Analytics", sales: 950, revenue: 47500, growth: 24.8 },
    { name: "Add-on: Support", sales: 1820, revenue: 54600, growth: 15.2 },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1% from last month"
          trend="up"
          icon={DollarSign}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title="New Customers"
          value="2,350"
          change="+180.1% from last month"
          trend="up"
          icon={Users}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title="Active Subscriptions"
          value="1,200"
          change="+19% from last month"
          trend="up"
          icon={CreditCard}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title="Active Users"
          value="573"
          change="-2% from last month"
          trend="down"
          icon={Activity}
          animationsEnabled={animationsEnabled}
        />
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>Monthly revenue and forecast</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <RevenueForecast data={revenueData} animationsEnabled={animationsEnabled} />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest financial activity</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentTransactions animationsEnabled={animationsEnabled} />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Customer Growth</CardTitle>
                <CardDescription>New and returning customers</CardDescription>
              </CardHeader>
              <CardContent>
                <CustomerGrowth data={customerData} animationsEnabled={animationsEnabled} />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>User distribution by region</CardDescription>
              </CardHeader>
              <CardContent>
                <GeographicDistribution data={regionData} animationsEnabled={animationsEnabled} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>User Activity</CardTitle>
                <CardDescription>User engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <UserActivity animationsEnabled={animationsEnabled} />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Product Performance</CardTitle>
                <CardDescription>Performance by product category</CardDescription>
              </CardHeader>
              <CardContent>
                <ProductPerformance data={productData} animationsEnabled={animationsEnabled} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>View and download financial reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Report content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Overview</CardTitle>
              <CardDescription>Customer metrics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Customer data will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
