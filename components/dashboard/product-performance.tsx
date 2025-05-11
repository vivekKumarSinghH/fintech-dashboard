"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { ProductData } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProductPerformance({
  data,
  animationsEnabled = true,
}: { data: ProductData[]; animationsEnabled?: boolean }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Product Performance</CardTitle>
        <CardDescription>Sales and revenue by product</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((product, index) => (
            <motion.div
              key={index}
              className="p-4 border border-border rounded-lg"
              initial={animationsEnabled ? { opacity: 0, y: 10 } : { opacity: 1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{product.name}</h4>
                <Badge variant={product.growth > 10 ? "success" : product.growth > 0 ? "warning" : "destructive"}>
                  {product.growth > 0 ? "+" : ""}
                  {product.growth}%
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Sales</p>
                  <p className="text-sm font-medium">{product.sales.toLocaleString()} units</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                  <p className="text-sm font-medium">${product.revenue.toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-3 w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full ${product.growth > 10 ? "bg-green-500" : product.growth > 0 ? "bg-primary" : "bg-red-500"}`}
                  style={{ width: `${Math.min(100, product.growth * 3)}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
