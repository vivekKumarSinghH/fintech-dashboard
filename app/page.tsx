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
import { DollarSign, Users, CreditCard, Activity } from "lucide-react"
import { useState } from "react"
import { revenueData, customerData, regionData, productData, statsCardsData } from "@/lib/data"

export default function DashboardPage() {
  // Get animationsEnabled from localStorage to maintain consistency
  const [animationsEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("animationsEnabled")
      return saved !== null ? saved === "true" : true
    }
    return true
  })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title={statsCardsData[0].title}
          value={statsCardsData[0].value}
          change={statsCardsData[0].change}
          trend={statsCardsData[0].trend  as "up" | "down" | "neutral"}
          icon={DollarSign}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title={statsCardsData[1].title}
          value={statsCardsData[1].value}
          change={statsCardsData[1].change}
          trend={statsCardsData[1].trend as "up" | "down" | "neutral"}
          icon={Users}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title={statsCardsData[2].title}
          value={statsCardsData[2].value}
          change={statsCardsData[2].change}
          trend={statsCardsData[2].trend  as "up" | "down" | "neutral"}
          icon={CreditCard}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title={statsCardsData[3].title}
          value={statsCardsData[3].value}
          change={statsCardsData[3].change}
          trend={statsCardsData[3].trend  as "up" | "down" | "neutral"}
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
