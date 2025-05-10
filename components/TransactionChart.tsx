"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "2023-05-01", volume: 5000 },
  { date: "2023-05-02", volume: 7000 },
  { date: "2023-05-03", volume: 6000 },
  { date: "2023-05-04", volume: 8000 },
  { date: "2023-05-05", volume: 9000 },
  { date: "2023-05-06", volume: 8500 },
  { date: "2023-05-07", volume: 7500 },
]

export function TransactionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" />
        <YAxis stroke="#888888" />
        <Tooltip />
        <Line type="monotone" dataKey="volume" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
