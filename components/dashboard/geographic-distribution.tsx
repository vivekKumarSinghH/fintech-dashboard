"use client"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import type { RegionData } from "@/types"

export function GeographicDistribution({
  data,
  animationsEnabled = true,
}: { data: RegionData[]; animationsEnabled?: boolean }) {
  const COLORS = ["hsl(var(--primary))", "#06b6d4", "#f59e0b", "#8b5cf6", "#ec4899"]

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              animationDuration={animationsEnabled ? 1500 : 0}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: any, name: string, props: any) => {
                return [`${value}%`, name]
              }}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--card-foreground))",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full md:w-1/2">
        <div className="space-y-4">
          {data.map((region, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm">{region.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">{region.users.toLocaleString()} users</span>
                <span className="text-sm font-medium">{region.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
