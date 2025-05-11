"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import type { CustomerData } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CustomerGrowth({
  data,
  animationsEnabled = true,
}: { data: CustomerData[]; animationsEnabled?: boolean }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Customer Growth</CardTitle>
        <CardDescription>New, returning, and churned customers over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
            <YAxis stroke="var(--muted-foreground)" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--card-foreground))",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="new"
              name="New Customers"
              stackId="1"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary) / 0.7)"
              animationDuration={animationsEnabled ? 1500 : 0}
            />
            <Area
              type="monotone"
              dataKey="returning"
              name="Returning Customers"
              stackId="1"
              stroke="#06b6d4"
              fill="#06b6d4"
              fillOpacity={0.7}
              animationDuration={animationsEnabled ? 1500 : 0}
              animationBegin={animationsEnabled ? 300 : 0}
            />
            <Area
              type="monotone"
              dataKey="churn"
              name="Churned Customers"
              stackId="2"
              stroke="#f43f5e"
              fill="#f43f5e"
              fillOpacity={0.5}
              animationDuration={animationsEnabled ? 1500 : 0}
              animationBegin={animationsEnabled ? 600 : 0}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
