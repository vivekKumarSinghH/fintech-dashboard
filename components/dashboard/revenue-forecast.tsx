"use client"
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { formatNumber } from "@/lib/utils"
import type { RevenueData } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RevenueForecast({
  data,
  animationsEnabled = true,
}: { data: RevenueData[]; animationsEnabled?: boolean }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Revenue Forecast</CardTitle>
        <CardDescription>Actual vs forecasted revenue for the current year</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
            <YAxis stroke="var(--muted-foreground)" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip
              formatter={(value: any) => [`$${formatNumber(value)}`, "Revenue"]}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--card-foreground))",
              }}
            />
            <Legend />
            <Bar
              name="Actual Revenue"
              dataKey="actual"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
              animationDuration={animationsEnabled ? 1500 : 0}
            />
            <Line
              name="Forecast"
              type="monotone"
              dataKey="forecast"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={animationsEnabled ? 1500 : 0}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
