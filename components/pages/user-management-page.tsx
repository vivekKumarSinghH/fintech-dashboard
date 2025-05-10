"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, UserPlus, Edit, Lock, Trash2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select } from "@/components/ui/select"
import type { UserData } from "@/types"

export function UserManagementPage({ animationsEnabled = true }: { animationsEnabled?: boolean }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

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
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "user",
      status: "inactive",
      lastLogin: "2023-05-20",
      createdAt: "2022-03-05",
      location: "Toronto, Canada",
      department: "Sales",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "manager",
      status: "active",
      lastLogin: "2023-06-13",
      createdAt: "2022-04-12",
      location: "Sydney, Australia",
      department: "Product",
    },
    {
      id: 5,
      name: "Charlie Davis",
      email: "charlie@example.com",
      role: "user",
      status: "pending",
      lastLogin: "2023-06-01",
      createdAt: "2022-05-18",
      location: "Berlin, Germany",
      department: "Support",
    },
    {
      id: 6,
      name: "Eva Wilson",
      email: "eva@example.com",
      role: "manager",
      status: "active",
      lastLogin: "2023-06-12",
      createdAt: "2022-06-22",
      location: "Paris, France",
      department: "Finance",
    },
    {
      id: 7,
      name: "Frank Miller",
      email: "frank@example.com",
      role: "user",
      status: "inactive",
      lastLogin: "2023-05-15",
      createdAt: "2022-07-30",
      location: "Tokyo, Japan",
      department: "HR",
    },
    {
      id: 8,
      name: "Grace Taylor",
      email: "grace@example.com",
      role: "admin",
      status: "active",
      lastLogin: "2023-06-10",
      createdAt: "2022-08-05",
      location: "San Francisco, USA",
      department: "Engineering",
    },
    {
      id: 9,
      name: "Henry Clark",
      email: "henry@example.com",
      role: "user",
      status: "active",
      lastLogin: "2023-06-09",
      createdAt: "2022-09-15",
      location: "Chicago, USA",
      department: "Marketing",
    },
    {
      id: 10,
      name: "Ivy Martinez",
      email: "ivy@example.com",
      role: "user",
      status: "pending",
      lastLogin: "2023-06-05",
      createdAt: "2022-10-20",
      location: "Madrid, Spain",
      department: "Sales",
    },
    {
      id: 11,
      name: "Jack Robinson",
      email: "jack@example.com",
      role: "manager",
      status: "active",
      lastLogin: "2023-06-08",
      createdAt: "2022-11-25",
      location: "Amsterdam, Netherlands",
      department: "Product",
    },
    {
      id: 12,
      name: "Karen White",
      email: "karen@example.com",
      role: "user",
      status: "active",
      lastLogin: "2023-06-07",
      createdAt: "2022-12-30",
      location: "Singapore",
      department: "Support",
    },
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
          <Select
            options={["All Roles", "Admin", "Manager", "User"]}
            defaultValue="All Roles"
            onChange={(value) => setFilterRole(value === "All Roles" ? "all" : value.toLowerCase())}
          />
          <Button className="gap-1">
            <UserPlus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
            <CardDescription>All registered users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{allUsers.length}</div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
            <CardDescription>Currently active users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{allUsers.filter((user) => user.status === "active").length}</div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Admins</CardTitle>
            <CardDescription>Users with admin privileges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{allUsers.filter((user) => user.role === "admin").length}</div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>New Users</CardTitle>
            <CardDescription>Users added this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
          </CardContent>
        </Card>
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
                      variant={
                        user.status === "active" ? "success" : user.status === "pending" ? "warning" : "destructive"
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
