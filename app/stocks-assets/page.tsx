"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, DollarSign, TrendingUp, Briefcase, Download, Plus } from "lucide-react"
import type { AssetData, PortfolioSummary } from "@/types"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ExportDataModal } from "@/components/modals/export-data-modal"
import { useToast } from "@/hooks/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AddAssetModal } from "@/components/modals/add-asset-modal"

// Mock data
const assetAllocation: AssetData[] = [
  { name: "Stocks", value: 45, color: "#4f46e5" },
  { name: "Bonds", value: 25, color: "#0ea5e9" },
  { name: "Cash", value: 15, color: "#10b981" },
  { name: "Real Estate", value: 10, color: "#f59e0b" },
  { name: "Crypto", value: 5, color: "#ef4444" },
]

const portfolioSummary: PortfolioSummary = {
  totalValue: 1250000,
  totalChange: 125000,
  totalChangePercent: 11.1,
  dayChange: 2500,
  dayChangePercent: 0.2,
}

const performanceData = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 120 },
  { month: "Mar", value: 115 },
  { month: "Apr", value: 130 },
  { month: "May", value: 145 },
  { month: "Jun", value: 140 },
  { month: "Jul", value: 155 },
  { month: "Aug", value: 165 },
  { month: "Sep", value: 185 },
  { month: "Oct", value: 180 },
  { month: "Nov", value: 195 },
  { month: "Dec", value: 210 },
]

export default function StocksAssetsPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [addAssetOpen, setAddAssetOpen] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)
  // Get animationsEnabled from localStorage to maintain consistency
  const [animationsEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("animationsEnabled")
      return saved !== null ? saved === "true" : true
    }
    return true
  })
  const { toast } = useToast()

  const handleRefresh = () => {
    toast({
      title: "Refreshing Data",
      description: "Portfolio data is being updated",
      duration: 2000,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Assets & Portfolio</h1>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" onClick={() => setExportOpen(true)}>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </TooltipTrigger>
              <TooltipContent>Export portfolio data</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={() => setAddAssetOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Asset
                </Button>
              </TooltipTrigger>
              <TooltipContent>Add a new asset to your portfolio</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Portfolio Value"
          value={`$${portfolioSummary.totalValue.toLocaleString()}`}
          change="11.1% from last year"
          trend="up"
          icon={Briefcase}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title="Total Return"
          value={`$${portfolioSummary.totalChange.toLocaleString()}`}
          change={`${portfolioSummary.totalChangePercent}% from initial investment`}
          trend="up"
          icon={TrendingUp}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title="Day Change"
          value={`$${portfolioSummary.dayChange.toLocaleString()}`}
          change={`${portfolioSummary.dayChangePercent}% today`}
          trend="up"
          icon={DollarSign}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title="Asset Classes"
          value={assetAllocation.length.toString()}
          change="Diversified portfolio"
          trend="neutral"
          icon={PieChart}
          animationsEnabled={animationsEnabled}
        />
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="allocation">Asset Allocation</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>Your current asset distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg width="100%" height="100%" viewBox="0 0 200 200">
                      <g transform="translate(100, 100)">
                        {assetAllocation.map((asset, i) => {
                          const startAngle =
                            i > 0
                              ? (assetAllocation.slice(0, i).reduce((sum, a) => sum + a.value, 0) / 100) * Math.PI * 2
                              : 0
                          const endAngle =
                            (assetAllocation.slice(0, i + 1).reduce((sum, a) => sum + a.value, 0) / 100) * Math.PI * 2

                          const x1 = Math.sin(startAngle) * 80
                          const y1 = -Math.cos(startAngle) * 80
                          const x2 = Math.sin(endAngle) * 80
                          const y2 = -Math.cos(endAngle) * 80

                          const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0

                          return (
                            <path
                              key={i}
                              d={`M 0 0 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                              fill={asset.color}
                              stroke="white"
                              strokeWidth="1"
                            />
                          )
                        })}
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {assetAllocation.map((asset, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: asset.color }}></div>
                      <span className="text-sm">
                        {asset.name}: {asset.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>Year-to-date performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <div className="w-full h-full flex flex-col">
                    <div className="flex-1 relative">
                      <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="none">
                        <path
                          d={`M 0 ${300 - (performanceData[0].value / 210) * 280} ${performanceData
                            .map((d, i) => {
                              const x = (i / (performanceData.length - 1)) * 500
                              const y = 300 - (d.value / 210) * 280
                              return `L ${x} ${y}`
                            })
                            .join(" ")}`}
                          fill="none"
                          stroke="#4f46e5"
                          strokeWidth="3"
                        />
                        <path
                          d={`M 0 ${300 - (performanceData[0].value / 210) * 280} ${performanceData
                            .map((d, i) => {
                              const x = (i / (performanceData.length - 1)) * 500
                              const y = 300 - (d.value / 210) * 280
                              return `L ${x} ${y}`
                            })
                            .join(" ")} L 500 300 L 0 300 Z`}
                          fill="url(#gradient)"
                          fillOpacity="0.2"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="h-6 flex justify-between">
                      {performanceData.map(
                        (d, i) =>
                          i % 2 === 0 && (
                            <div key={i} className="text-xs text-muted-foreground">
                              {d.month}
                            </div>
                          ),
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="allocation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Asset Allocation</CardTitle>
              <CardDescription>Breakdown of your investment portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {assetAllocation.map((asset, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: asset.color }}></div>
                        <span className="font-medium">{asset.name}</span>
                      </div>
                      <span className="font-medium">{asset.value}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${asset.value}%`,
                          backgroundColor: asset.color,
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${((portfolioSummary.totalValue * asset.value) / 100).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historical Performance</CardTitle>
              <CardDescription>Track your portfolio's performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 relative">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="none">
                      <path
                        d={`M 0 ${300 - (performanceData[0].value / 210) * 280} ${performanceData
                          .map((d, i) => {
                            const x = (i / (performanceData.length - 1)) * 500
                            const y = 300 - (d.value / 210) * 280
                            return `L ${x} ${y}`
                          })
                          .join(" ")}`}
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="3"
                      />
                      <path
                        d={`M 0 ${300 - (performanceData[0].value / 210) * 280} ${performanceData
                          .map((d, i) => {
                            const x = (i / (performanceData.length - 1)) * 500
                            const y = 300 - (d.value / 210) * 280
                            return `L ${x} ${y}`
                          })
                          .join(" ")} L 500 300 L 0 300 Z`}
                        fill="url(#gradient)"
                        fillOpacity="0.2"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="h-6 flex justify-between">
                    {performanceData.map((d, i) => (
                      <div key={i} className="text-xs text-muted-foreground">
                        {d.month}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground">1 Year Return</div>
                    <div className="text-xl font-bold mt-1 text-green-600">+21.0%</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground">3 Year Return</div>
                    <div className="text-xl font-bold mt-1 text-green-600">+45.5%</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground">5 Year Return</div>
                    <div className="text-xl font-bold mt-1 text-green-600">+72.3%</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modals */}
      <AddAssetModal open={addAssetOpen} onOpenChange={setAddAssetOpen} />
      <ExportDataModal open={exportOpen} onOpenChange={setExportOpen} dataType="assets" />
    </div>
  )
}
