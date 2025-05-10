"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "2023-05-01", logins: 200, transactions: 150, apiCalls: 1000 },
  { date: "2023-05-02", logins: 220, transactions: 160, apiCalls: 1100 },
  { date: "2023-05-03", logins: 240, transactions: 180, apiCalls: 1200 },
  { date: "2023-05-04", logins: 280, transactions: 200, apiCalls: 1300 },
  { date: "2023-05-05", logins: 300, transactions: 220, apiCalls: 1400 },
  { date: "2023-05-06", logins: 320, transactions: 240, apiCalls: 1500 },
  { date: "2023-05-07", logins: 340, transactions: 260, apiCalls: 1600 },
]

export function UserActivity() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" />
        <YAxis stroke="#888888" />
        <Tooltip />
        <Line type="monotone" dataKey="logins" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="transactions" stroke="#82ca9d" strokeWidth={2} />
        <Line type="monotone" dataKey="apiCalls" stroke="#ffc658" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
