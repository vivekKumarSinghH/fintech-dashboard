"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import type { ActivityData } from "@/types"

export function UserActivity({
  animationsEnabled = true,
  data,
}: {
  animationsEnabled?: boolean
  data?: ActivityData[]
}) {
  // Use provided data or fallback to default data
  const activityData: ActivityData[] = data || [
    { date: "2023-05-01", logins: 200, transactions: 150, apiCalls: 1000 },
    { date: "2023-05-02", logins: 220, transactions: 160, apiCalls: 1100 },
    { date: "2023-05-03", logins: 240, transactions: 180, apiCalls: 1200 },
    { date: "2023-05-04", logins: 280, transactions: 200, apiCalls: 1300 },
    { date: "2023-05-05", logins: 300, transactions: 220, apiCalls: 1400 },
    { date: "2023-05-06", logins: 320, transactions: 240, apiCalls: 1500 },
    { date: "2023-05-07", logins: 340, transactions: 260, apiCalls: 1600 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={activityData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} />
        <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
            color: "hsl(var(--card-foreground))",
          }}
          itemStyle={{
            color: (name) => {
              if (name === "Logins") return "hsl(var(--primary))"
              if (name === "Transactions") return "#06b6d4"
              if (name === "API Calls") return "#f59e0b"
              return undefined
            },
          }}
        />
        <Legend />
        <Line
          name="Logins"
          type="monotone"
          dataKey="logins"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
          animationDuration={animationsEnabled ? 1500 : 0}
        />
        <Line
          name="Transactions"
          type="monotone"
          dataKey="transactions"
          stroke="#06b6d4"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
          animationDuration={animationsEnabled ? 1500 : 0}
          animationBegin={animationsEnabled ? 300 : 0}
        />
        <Line
          name="API Calls"
          type="monotone"
          dataKey="apiCalls"
          stroke="#f59e0b"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
          animationDuration={animationsEnabled ? 1500 : 0}
          animationBegin={animationsEnabled ? 600 : 0}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
