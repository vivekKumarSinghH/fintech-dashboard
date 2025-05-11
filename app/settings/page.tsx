"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { ProfileData, NotificationSetting, SecuritySetting } from "@/types"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  // Get animationsEnabled from localStorage to maintain consistency
  const [animationsEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("animationsEnabled")
      return saved !== null ? saved === "true" : true
    }
    return true
  })

  // Sample profile data
  const profileData: ProfileData = {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    bio: "Experienced financial administrator with a passion for data analytics and process optimization.",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joinDate: "January 10, 2022",
  }

  // Sample notification settings
  const notificationSettings: NotificationSetting[] = [
    {
      id: "email-notifications",
      name: "Email Notifications",
      description: "Receive notifications via email",
      enabled: true,
    },
    {
      id: "sms-notifications",
      name: "SMS Notifications",
      description: "Receive notifications via SMS",
      enabled: false,
    },
    // More settings...
  ]

  // Sample security settings
  const securitySettings: SecuritySetting[] = [
    {
      id: "two-factor",
      name: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      enabled: false,
    },
    {
      id: "login-alerts",
      name: "Login Alerts",
      description: "Get notified when someone logs into your account",
      enabled: true,
    },
    // More settings...
  ]

  return (
    <div className="space-y-6">
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-xl font-outfit">Settings</CardTitle>
          <CardDescription>Manage your account settings and preferences</CardDescription>
        </CardHeader>
        <div className="border-b border-border mb-3">
          <div className="flex overflow-x-auto">
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === "profile"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === "notifications"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
              onClick={() => setActiveTab("notifications")}
            >
              Notifications
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === "security"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
              onClick={() => setActiveTab("security")}
            >
              Security
            </button>
          </div>
        </div>
        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={animationsEnabled ? { opacity: 0, y: 10 } : { opacity: 1 }}
              animate={{ opacity: 1, y: 0 }}
              exit={animationsEnabled ? { opacity: 0, y: -10 } : { opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "profile" && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="flex flex-col items-center p-6 border border-border rounded-lg">
                        <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-medium mb-4">
                          {profileData.name.charAt(0)}
                        </div>
                        <h3 className="text-lg font-medium">{profileData.name}</h3>
                        <p className="text-sm text-muted-foreground">{profileData.role}</p>
                        <p className="text-sm text-muted-foreground mt-1">Member since {profileData.joinDate}</p>
                        <Button className="mt-4 w-full">Change Avatar</Button>
                      </div>
                    </div>
                    <div className="md:w-2/3 space-y-4">
                      <h3 className="text-lg font-medium">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium block mb-1">Full Name</label>
                          <input
                            type="text"
                            className="w-full rounded-md border border-border bg-background py-2 px-3 text-sm"
                            defaultValue={profileData.name}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-1">Email</label>
                          <input
                            type="email"
                            className="w-full rounded-md border border-border bg-background py-2 px-3 text-sm"
                            defaultValue={profileData.email}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-1">Phone</label>
                          <input
                            type="tel"
                            className="w-full rounded-md border border-border bg-background py-2 px-3 text-sm"
                            defaultValue={profileData.phone}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-1">Location</label>
                          <input
                            type="text"
                            className="w-full rounded-md border border-border bg-background py-2 px-3 text-sm"
                            defaultValue={profileData.location}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-1">Bio</label>
                        <textarea
                          className="w-full rounded-md border border-border bg-background py-2 px-3 text-sm min-h-[100px]"
                          defaultValue={profileData.bio}
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button>Save Changes</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Notification Preferences</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure how you receive notifications and alerts from the system.
                  </p>

                  <div className="space-y-4">
                    {notificationSettings.map((setting) => (
                      <div
                        key={setting.id}
                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                      >
                        <div>
                          <h4 className="text-sm font-medium">{setting.name}</h4>
                          <p className="text-xs text-muted-foreground">{setting.description}</p>
                        </div>
                        <div
                          className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted cursor-pointer"
                          data-state={setting.enabled ? "checked" : "unchecked"}
                          onClick={() => {
                            // Toggle logic would go here
                          }}
                        >
                          <span
                            className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${
                              setting.enabled ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Button>Save Preferences</Button>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Security Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your account security and authentication methods.
                  </p>

                  <div className="space-y-4">
                    {securitySettings.map((setting) => (
                      <div
                        key={setting.id}
                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                      >
                        <div>
                          <h4 className="text-sm font-medium">{setting.name}</h4>
                          <p className="text-xs text-muted-foreground">{setting.description}</p>
                        </div>
                        <div
                          className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted cursor-pointer"
                          data-state={setting.enabled ? "checked" : "unchecked"}
                          onClick={() => {
                            // Toggle logic would go here
                          }}
                        >
                          <span
                            className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${
                              setting.enabled ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-6 mt-6">
                    <h3 className="text-lg font-medium mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-1">Current Password</label>
                        <input
                          type="password"
                          className="w-full rounded-md border border-border bg-background py-2 px-3 text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-1">New Password</label>
                        <input
                          type="password"
                          className="w-full rounded-md border border-border bg-background py-2 px-3 text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-1">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full rounded-md border border-border bg-background py-2 px-3 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <Button>Update Password</Button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}
