"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { activityData } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TransactionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Volume</CardTitle>
        <CardDescription>Transaction activity over the past week</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="volume">
          <TabsList className="mb-4">
            <TabsTrigger value="volume">Volume</TabsTrigger>
            <TabsTrigger value="logins">Logins</TabsTrigger>
            <TabsTrigger value="api">API Calls</TabsTrigger>
          </TabsList>
          <TabsContent value="volume">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--card-foreground))",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="transactions"
                  name="Transactions"
                  stroke="#8884d8"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="logins">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--card-foreground))",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="logins"
                  name="User Logins"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="api">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--card-foreground))",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="apiCalls"
                  name="API Calls"
                  stroke="#ffc658"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
