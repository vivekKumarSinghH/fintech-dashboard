"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown, RefreshCw, Star, Filter } from "lucide-react"
import type { StockData } from "@/types"
import { motion } from "framer-motion"

// Mock data
const stocks: StockData[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 178.72,
    change: 2.35,
    changePercent: 1.33,
    volume: 59482910,
    marketCap: "2.81T",
    sector: "Technology",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 329.81,
    change: 4.21,
    changePercent: 1.29,
    volume: 21563200,
    marketCap: "2.45T",
    sector: "Technology",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 125.3,
    change: 1.56,
    changePercent: 1.26,
    volume: 23698500,
    marketCap: "1.59T",
    sector: "Technology",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 127.74,
    change: -0.89,
    changePercent: -0.69,
    volume: 41256300,
    marketCap: "1.31T",
    sector: "Consumer Cyclical",
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 214.65,
    change: -3.21,
    changePercent: -1.47,
    volume: 108521600,
    marketCap: "681.15B",
    sector: "Automotive",
  },
  {
    symbol: "META",
    name: "Meta Platforms, Inc.",
    price: 318.36,
    change: 4.85,
    changePercent: 1.55,
    volume: 19874500,
    marketCap: "817.23B",
    sector: "Technology",
  },
  {
    symbol: "NFLX",
    name: "Netflix, Inc.",
    price: 401.78,
    change: 7.32,
    changePercent: 1.86,
    volume: 5236900,
    marketCap: "178.45B",
    sector: "Entertainment",
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    price: 145.12,
    change: -0.45,
    changePercent: -0.31,
    volume: 8965400,
    marketCap: "421.87B",
    sector: "Financial Services",
  },
  {
    symbol: "V",
    name: "Visa Inc.",
    price: 235.56,
    change: 1.23,
    changePercent: 0.53,
    volume: 6325800,
    marketCap: "485.32B",
    sector: "Financial Services",
  },
  {
    symbol: "WMT",
    name: "Walmart Inc.",
    price: 162.35,
    change: 0.87,
    changePercent: 0.54,
    volume: 5214700,
    marketCap: "437.18B",
    sector: "Consumer Defensive",
  },
]

const marketIndices = [
  { name: "S&P 500", value: "4,136.25", change: "+0.83%", trend: "up" },
  { name: "Dow Jones", value: "33,762.76", change: "+0.50%", trend: "up" },
  { name: "Nasdaq", value: "13,240.77", change: "+1.28%", trend: "up" },
  { name: "Russell 2000", value: "1,922.45", change: "-0.14%", trend: "down" },
]

export default function StocksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  // Get animationsEnabled from localStorage to maintain consistency
  const [animationsEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("animationsEnabled")
      return saved !== null ? saved === "true" : true
    }
    return true
  })

  const filteredStocks = stocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Stocks</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <TrendingUp className="h-4 w-4 mr-2" />
            Trade
          </Button>
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketIndices.map((index, i) => (
          <motion.div
            key={index.name}
            initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
            animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{index.name}</p>
                    <h3 className="text-2xl font-bold mt-1">{index.value}</h3>
                    <p
                      className={`text-sm font-medium flex items-center mt-1 ${
                        index.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {index.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                      )}
                      {index.change}
                    </p>
                  </div>
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      index.trend === "up" ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"
                    }`}
                  >
                    {index.trend === "up" ? (
                      <TrendingUp className={`h-5 w-5 text-green-600`} />
                    ) : (
                      <TrendingDown className={`h-5 w-5 text-red-600`} />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Stock List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Stock Watchlist</CardTitle>
              <CardDescription>Track and monitor your favorite stocks</CardDescription>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search stocks..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Symbol</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Change</TableHead>
                  <TableHead className="text-right">% Change</TableHead>
                  <TableHead className="text-right">Volume</TableHead>
                  <TableHead className="text-right">Market Cap</TableHead>
                  <TableHead className="text-right">Sector</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStocks.map((stock, index) => (
                  <motion.tr
                    key={stock.symbol}
                    initial={animationsEnabled ? { opacity: 0, y: 10 } : false}
                    animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="hover:bg-muted/50"
                  >
                    <TableCell className="font-medium">{stock.symbol}</TableCell>
                    <TableCell>{stock.name}</TableCell>
                    <TableCell className="text-right">${stock.price.toFixed(2)}</TableCell>
                    <TableCell className={`text-right ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {stock.change >= 0 ? "+" : ""}
                      {stock.change.toFixed(2)}
                    </TableCell>
                    <TableCell className={`text-right ${stock.changePercent >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {stock.changePercent >= 0 ? "+" : ""}
                      {stock.changePercent.toFixed(2)}%
                    </TableCell>
                    <TableCell className="text-right">{stock.volume.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{stock.marketCap}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline">{stock.sector}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Star className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredStocks.length} of {stocks.length} stocks
          </p>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardFooter>
      </Card>

      {/* Market News */}
      <Card>
        <CardHeader>
          <CardTitle>Market News</CardTitle>
          <CardDescription>Latest financial news and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Fed Signals Potential Rate Cut in Coming Months",
                source: "Financial Times",
                time: "2 hours ago",
                snippet:
                  "Federal Reserve officials indicated they could begin cutting interest rates in the coming months if inflation continues to cool.",
              },
              {
                title: "Tech Stocks Rally on Strong Earnings Reports",
                source: "Wall Street Journal",
                time: "4 hours ago",
                snippet:
                  "Technology stocks surged following better-than-expected quarterly earnings from several major companies in the sector.",
              },
              {
                title: "Oil Prices Drop Amid Supply Concerns",
                source: "Bloomberg",
                time: "6 hours ago",
                snippet:
                  "Crude oil prices fell as concerns about global supply outweighed expectations of increased demand in the coming months.",
              },
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={animationsEnabled ? { opacity: 0, y: 10 } : false}
                animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 border rounded-md"
              >
                <h3 className="font-medium">{news.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <span>{news.source}</span>
                  <span>•</span>
                  <span>{news.time}</span>
                </div>
                <p className="mt-2 text-sm">{news.snippet}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All News
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
