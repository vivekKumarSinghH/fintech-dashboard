"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { month: "Jan", newUsers: 100, activeUsers: 500 },
  { month: "Feb", newUsers: 120, activeUsers: 550 },
  { month: "Mar", newUsers: 140, activeUsers: 600 },
  { month: "Apr", newUsers: 160, activeUsers: 650 },
  { month: "May", newUsers: 180, activeUsers: 700 },
  { month: "Jun", newUsers: 200, activeUsers: 750 },
]

export function UserStats() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" stroke="#888888" />
        <YAxis stroke="#888888" />
        <Tooltip />
        <Bar dataKey="newUsers" fill="#8884d8" name="New Users" />
        <Bar dataKey="activeUsers" fill="#82ca9d" name="Active Users" />
      </BarChart>
    </ResponsiveContainer>
  )
}
