"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import {
  Key,
  Plus,
  Copy,
  Eye,
  EyeOff,
  RefreshCw,
  BarChart,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react"
import type { APIKeyData, APIUsageData } from "@/types"
import { motion } from "framer-motion"

// Mock data
const apiKeys: APIKeyData[] = [
  {
    id: "key_1",
    name: "Production API Key",
    key: "pk_live_51NxT3QJHMNgVBcXXXXXXXXXXX",
    created: "2023-05-15",
    lastUsed: "2023-10-28",
    status: "active",
    permissions: ["read", "write"],
  },
  {
    id: "key_2",
    name: "Test API Key",
    key: "pk_test_51NxT3QJHMNgVBcXXXXXXXXXXX",
    created: "2023-06-22",
    lastUsed: "2023-10-25",
    status: "active",
    permissions: ["read", "write"],
  },
  {
    id: "key_3",
    name: "Development Key",
    key: "pk_dev_51NxT3QJHMNgVBcXXXXXXXXXXX",
    created: "2023-08-10",
    lastUsed: "2023-10-20",
    status: "inactive",
    permissions: ["read"],
  },
]

const apiUsage: APIUsageData[] = [
  { date: "2023-10-22", requests: 1250, errors: 12, latency: 145 },
  { date: "2023-10-23", requests: 1420, errors: 8, latency: 132 },
  { date: "2023-10-24", requests: 1380, errors: 15, latency: 158 },
  { date: "2023-10-25", requests: 1510, errors: 10, latency: 140 },
  { date: "2023-10-26", requests: 1680, errors: 14, latency: 152 },
  { date: "2023-10-27", requests: 1420, errors: 9, latency: 138 },
  { date: "2023-10-28", requests: 1350, errors: 7, latency: 130 },
]

export default function APIManagementPage() {
  const [activeTab, setActiveTab] = useState("keys")
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({})
  // Get animationsEnabled from localStorage to maintain consistency
  const [animationsEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("animationsEnabled")
      return saved !== null ? saved === "true" : true
    }
    return true
  })

  const toggleKeyVisibility = (keyId: string) => {
    setShowKeys((prev) => ({
      ...prev,
      [keyId]: !prev[keyId],
    }))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("API key copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">API Management</h1>
        <div className="flex gap-2">
          <Button variant="outline">Documentation</Button>
          <Button>Create New API Key</Button>
        </div>
      </div>

      {/* API Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total API Keys</p>
                  <h3 className="text-2xl font-bold mt-1">{apiKeys.length}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Key className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Daily Requests</p>
                  <h3 className="text-2xl font-bold mt-1">{apiUsage[apiUsage.length - 1].requests.toLocaleString()}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Error Rate</p>
                  <h3 className="text-2xl font-bold mt-1">
                    {((apiUsage[apiUsage.length - 1].errors / apiUsage[apiUsage.length - 1].requests) * 100).toFixed(2)}
                    %
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Latency</p>
                  <h3 className="text-2xl font-bold mt-1">{apiUsage[apiUsage.length - 1].latency} ms</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="keys" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="keys">API Keys</TabsTrigger>
          <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
          <TabsTrigger value="settings">API Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="keys" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your API Keys</CardTitle>
              <CardDescription>Manage your API keys for authentication</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((apiKey, index) => (
                  <motion.div
                    key={apiKey.id}
                    initial={animationsEnabled ? { opacity: 0, y: 10 } : false}
                    animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{apiKey.name}</h3>
                              <Badge variant={apiKey.status === "active" ? "default" : "secondary"}>
                                {apiKey.status === "active" ? "Active" : "Inactive"}
                              </Badge>
                            </div>
                            <div className="flex items-center mt-2">
                              <div className="font-mono text-sm bg-secondary p-2 rounded flex items-center">
                                {showKeys[apiKey.id]
                                  ? apiKey.key
                                  : apiKey.key.substring(0, 10) + "••••••••••••••••••••"}
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="ml-2 h-6 w-6 p-0"
                                  onClick={() => toggleKeyVisibility(apiKey.id)}
                                >
                                  {showKeys[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="ml-1 h-6 w-6 p-0"
                                  onClick={() => copyToClipboard(apiKey.key)}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                              <span>Created: {apiKey.created}</span>
                              <span>Last used: {apiKey.lastUsed}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 self-end md:self-center">
                            <Button variant="outline" size="sm">
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Rotate
                            </Button>
                            <Button variant="destructive" size="sm">
                              Revoke
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Create New API Key
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Usage Analytics</CardTitle>
              <CardDescription>Monitor your API usage and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 relative">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="none">
                      {/* Requests line */}
                      <path
                        d={`M 0 ${300 - (apiUsage[0].requests / 2000) * 280} ${apiUsage
                          .map((d, i) => {
                            const x = (i / (apiUsage.length - 1)) * 500
                            const y = 300 - (d.requests / 2000) * 280
                            return `L ${x} ${y}`
                          })
                          .join(" ")}`}
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="3"
                      />

                      {/* Errors line */}
                      <path
                        d={`M 0 ${300 - (apiUsage[0].errors / 20) * 280} ${apiUsage
                          .map((d, i) => {
                            const x = (i / (apiUsage.length - 1)) * 500
                            const y = 300 - (d.errors / 20) * 280
                            return `L ${x} ${y}`
                          })
                          .join(" ")}`}
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                  <div className="h-6 flex justify-between">
                    {apiUsage.map((d, i) => (
                      <div key={i} className="text-xs text-muted-foreground">
                        {new Date(d.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-8 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                  <span className="text-sm">Requests</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm">Errors</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-medium">Recent API Activity</h3>
                <div className="space-y-2">
                  {apiUsage
                    .slice(-5)
                    .reverse()
                    .map((usage, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-md">
                        <div>
                          <div className="font-medium">
                            {new Date(usage.date).toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {usage.requests.toLocaleString()} requests
                          </div>
                        </div>
                        <div className="flex items-center">
                          {usage.errors > 10 ? (
                            <Badge variant="destructive" className="flex items-center">
                              <XCircle className="h-3 w-3 mr-1" />
                              {usage.errors} errors
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                            >
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              {usage.errors} errors
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Settings</CardTitle>
              <CardDescription>Configure your API behavior and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Rate Limiting</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="rate-limit">Requests per minute</Label>
                    <Input id="rate-limit" type="number" defaultValue="60" />
                    <p className="text-sm text-muted-foreground">
                      Maximum number of requests allowed per minute per API key
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Security</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ip-whitelist">IP Whitelisting</Label>
                      <p className="text-sm text-muted-foreground">Restrict API access to specific IP addresses</p>
                    </div>
                    <Switch id="ip-whitelist" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="webhook-signing">Webhook Signing</Label>
                      <p className="text-sm text-muted-foreground">Sign webhook payloads for enhanced security</p>
                    </div>
                    <Switch id="webhook-signing" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-rotate">Auto-rotate API keys</Label>
                      <p className="text-sm text-muted-foreground">Automatically rotate API keys every 90 days</p>
                    </div>
                    <Switch id="auto-rotate" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="error-alerts">Error Rate Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when error rate exceeds threshold
                      </p>
                    </div>
                    <Switch id="error-alerts" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="usage-alerts">Usage Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when approaching usage limits
                      </p>
                    </div>
                    <Switch id="usage-alerts" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
