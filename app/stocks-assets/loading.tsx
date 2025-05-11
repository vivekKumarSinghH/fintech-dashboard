import type { Metadata } from "next"
import { AssetAllocation } from "@/components/AssetAllocation"
import { StockList } from "@/components/StockList"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusIcon, DownloadIcon, RefreshCwIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Stocks & Assets",
  description: "Manage your investment portfolio",
}

export default function StocksAssetsPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-8 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Stocks & Assets</h2>
          <p className="text-muted-foreground">Manage your investment portfolio and track performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCwIcon className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Asset
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="other">Other Assets</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,245,678.90</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium">+$12,234.56 (2.3%)</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Change</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">+$5,678.90</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium">+0.45%</span> since market open
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Annual Return</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12.8%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium">+3.2%</span> above market average
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <AssetAllocation />
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent investment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">Bought AAPL</p>
                      <p className="text-xs text-muted-foreground">10 shares at $182.63</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$1,826.30</p>
                      <p className="text-xs text-muted-foreground">Jun 18, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">Sold TSLA</p>
                      <p className="text-xs text-muted-foreground">5 shares at $248.50</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$1,242.50</p>
                      <p className="text-xs text-muted-foreground">Jun 17, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">Dividend Payment</p>
                      <p className="text-xs text-muted-foreground">MSFT Quarterly Dividend</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$125.75</p>
                      <p className="text-xs text-muted-foreground">Jun 15, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Bought NVDA</p>
                      <p className="text-xs text-muted-foreground">3 shares at $419.38</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$1,258.14</p>
                      <p className="text-xs text-muted-foreground">Jun 14, 2023</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="stocks" className="space-y-4">
          <StockList />
        </TabsContent>
        <TabsContent value="crypto" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cryptocurrency Holdings</CardTitle>
              <CardDescription>Your cryptocurrency portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-orange-500 mr-3 flex items-center justify-center text-white font-bold">
                      ₿
                    </div>
                    <div>
                      <p className="font-medium">Bitcoin</p>
                      <p className="text-xs text-muted-foreground">BTC</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">0.85 BTC</p>
                    <p className="text-xs text-muted-foreground">$25,432.50</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 mr-3 flex items-center justify-center text-white font-bold">
                      Ξ
                    </div>
                    <div>
                      <p className="font-medium">Ethereum</p>
                      <p className="text-xs text-muted-foreground">ETH</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">4.2 ETH</p>
                    <p className="text-xs text-muted-foreground">$8,764.20</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500 mr-3 flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div>
                      <p className="font-medium">Solana</p>
                      <p className="text-xs text-muted-foreground">SOL</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">25 SOL</p>
                    <p className="text-xs text-muted-foreground">$1,875.00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="other" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Other Assets</CardTitle>
              <CardDescription>Real estate, commodities, and other investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Real Estate</p>
                    <p className="text-xs text-muted-foreground">2 properties</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$750,000.00</p>
                    <p className="text-xs text-green-500">+5.2% YTD</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Gold</p>
                    <p className="text-xs text-muted-foreground">10 oz</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$19,875.00</p>
                    <p className="text-xs text-green-500">+2.8% YTD</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Art Collection</p>
                    <p className="text-xs text-muted-foreground">5 pieces</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$125,000.00</p>
                    <p className="text-xs text-green-500">+1.5% YTD</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
