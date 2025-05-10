"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", usage: 400 },
  { name: "Feb", usage: 300 },
  { name: "Mar", usage: 200 },
  { name: "Apr", usage: 278 },
  { name: "May", usage: 189 },
  { name: "Jun", usage: 239 },
  { name: "Jul", usage: 349 },
]

export function APIUsage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Usage Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip />
            <Line type="monotone" dataKey="usage" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
