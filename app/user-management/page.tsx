"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, UserPlus, Edit, Lock, Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { UserData } from "@/types"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Users, UserCheck, Shield } from "lucide-react"

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  // Get animationsEnabled from localStorage to maintain consistency
  const [animationsEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("animationsEnabled")
      return saved !== null ? saved === "true" : true
    }
    return true
  })

  // Sample user data
  const allUsers: UserData[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      status: "active",
      lastLogin: "2023-06-15",
      createdAt: "2022-01-10",
      location: "New York, USA",
      department: "Engineering",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "user",
      status: "active",
      lastLogin: "2023-06-14",
      createdAt: "2022-02-15",
      location: "London, UK",
      department: "Marketing",
    },
    // More users...
  ]

  // Filter users based on search term and role
  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRole = filterRole === "all" || user.role === filterRole

    return matchesSearch && matchesRole
  })

  // Paginate users
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full rounded-md border border-border bg-background py-2 pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            className="rounded-md border border-border bg-card px-3 py-2 text-sm w-40"
            onChange={(e) => setFilterRole(e.target.value === "All Roles" ? "all" : e.target.value.toLowerCase())}
            defaultValue="All Roles"
          >
            <option>All Roles</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>User</option>
          </select>
          <Button className="gap-1">
            <UserPlus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value={allUsers.length.toString()}
          change="All registered users"
          trend="neutral"
          icon={Users}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title="Active Users"
          value={allUsers.filter((user) => user.status === "active").length.toString()}
          change={`${((allUsers.filter((user) => user.status === "active").length / allUsers.length) * 100).toFixed(0)}% of total users`}
          trend="up"
          icon={UserCheck}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title="Admins"
          value={allUsers.filter((user) => user.role === "admin").length.toString()}
          change="Users with admin privileges"
          trend="neutral"
          icon={Shield}
          animationsEnabled={animationsEnabled}
        />
        <StatsCard
          title="New Users"
          value="3"
          change="Added this month"
          trend="up"
          icon={UserPlus}
          animationsEnabled={animationsEnabled}
        />
      </div>

      <Card className="border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">User</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Role</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Location</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Department</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Last Login</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  className="border-b border-border hover:bg-secondary/50"
                  initial={animationsEnabled ? { opacity: 0, y: 10 } : { opacity: 1 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm capitalize">{user.role}</td>
                  <td className="px-4 py-3">
                    <Badge
                      className={
                        user.status === "active"
                          ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400"
                          : user.status === "pending"
                            ? "bg-amber-100 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400"
                            : "bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400"
                      }
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-sm">{user.location}</td>
                  <td className="px-4 py-3 text-sm">{user.department}</td>
                  <td className="px-4 py-3 text-sm">{user.lastLogin}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 rounded-md hover:bg-secondary" title="Edit user">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded-md hover:bg-secondary" title="Reset password">
                        <Lock className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded-md hover:bg-destructive/10 text-destructive" title="Delete user">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} users
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
