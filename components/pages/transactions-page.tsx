"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Download, Eye, Edit } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select } from "@/components/ui/select"
import type { Transaction } from "@/types"

export function TransactionsPage({ animationsEnabled = true }: { animationsEnabled?: boolean }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Sample transaction data
  const allTransactions: Transaction[] = [
    {
      id: "1",
      amount: "+$350",
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      status: "completed",
      date: "2023-06-01",
      type: "deposit",
      category: "Income",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "2",
      amount: "-$280",
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      status: "pending",
      date: "2023-06-02",
      type: "withdrawal",
      category: "Shopping",
      paymentMethod: "Credit Card",
    },
    {
      id: "3",
      amount: "+$1,200",
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      status: "completed",
      date: "2023-06-03",
      type: "deposit",
      category: "Income",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "4",
      amount: "-$150",
      name: "William Kim",
      email: "will@email.com",
      status: "completed",
      date: "2023-06-04",
      type: "withdrawal",
      category: "Entertainment",
      paymentMethod: "Debit Card",
    },
    {
      id: "5",
      amount: "+$2,000",
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      status: "completed",
      date: "2023-06-05",
      type: "deposit",
      category: "Income",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "6",
      amount: "-$450",
      name: "Ethan Johnson",
      email: "ethan@email.com",
      status: "failed",
      date: "2023-06-06",
      type: "withdrawal",
      category: "Travel",
      paymentMethod: "Credit Card",
    },
    {
      id: "7",
      amount: "+$780",
      name: "Ava Wilson",
      email: "ava@email.com",
      status: "completed",
      date: "2023-06-07",
      type: "deposit",
      category: "Income",
      paymentMethod: "PayPal",
    },
    {
      id: "8",
      amount: "-$120",
      name: "Noah Brown",
      email: "noah@email.com",
      status: "pending",
      date: "2023-06-08",
      type: "withdrawal",
      category: "Dining",
      paymentMethod: "Debit Card",
    },
    {
      id: "9",
      amount: "+$1,500",
      name: "Emma Taylor",
      email: "emma@email.com",
      status: "completed",
      date: "2023-06-09",
      type: "deposit",
      category: "Income",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "10",
      amount: "-$350",
      name: "Liam Anderson",
      email: "liam@email.com",
      status: "failed",
      date: "2023-06-10",
      type: "withdrawal",
      category: "Shopping",
      paymentMethod: "Credit Card",
    },
    {
      id: "11",
      amount: "+$920",
      name: "Mia Thomas",
      email: "mia@email.com",
      status: "completed",
      date: "2023-06-11",
      type: "deposit",
      category: "Income",
      paymentMethod: "PayPal",
    },
    {
      id: "12",
      amount: "-$200",
      name: "Lucas Martinez",
      email: "lucas@email.com",
      status: "pending",
      date: "2023-06-12",
      type: "withdrawal",
      category: "Utilities",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "13",
      amount: "+$3,000",
      name: "Amelia Garcia",
      email: "amelia@email.com",
      status: "completed",
      date: "2023-06-13",
      type: "deposit",
      category: "Income",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "14",
      amount: "-$175",
      name: "Oliver Rodriguez",
      email: "oliver@email.com",
      status: "completed",
      date: "2023-06-14",
      type: "withdrawal",
      category: "Groceries",
      paymentMethod: "Debit Card",
    },
    {
      id: "15",
      amount: "+$650",
      name: "Charlotte Lewis",
      email: "charlotte@email.com",
      status: "completed",
      date: "2023-06-15",
      type: "deposit",
      category: "Income",
      paymentMethod: "Bank Transfer",
    },
  ]

  // Filter transactions based on search term and status
  const filteredTransactions = allTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.paymentMethod?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "all" || transaction.status === filterStatus

    return matchesSearch && matchesStatus
  })

  // Paginate transactions
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
  const paginatedTransactions = filteredTransactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full rounded-md border border-border bg-background py-2 pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Select
            options={["All Status", "Completed", "Pending", "Failed"]}
            defaultValue="All Status"
            onChange={(value) => setFilterStatus(value === "All Status" ? "all" : value.toLowerCase())}
          />
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card className="border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Customer</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Category</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Payment Method</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.map((transaction, index) => (
                <motion.tr
                  key={transaction.id}
                  className="border-b border-border hover:bg-secondary/50"
                  initial={animationsEnabled ? { opacity: 0, y: 10 } : { opacity: 1 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <td className="px-4 py-3 text-sm">#{transaction.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                        {transaction.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{transaction.name}</div>
                        <div className="text-xs text-muted-foreground">{transaction.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">
                    <span className={transaction.amount.startsWith("+") ? "text-emerald-500" : "text-rose-500"}>
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      variant={
                        transaction.status === "completed"
                          ? "success"
                          : transaction.status === "pending"
                            ? "warning"
                            : "destructive"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-sm">{transaction.date}</td>
                  <td className="px-4 py-3 text-sm">{transaction.category}</td>
                  <td className="px-4 py-3 text-sm">{transaction.paymentMethod}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 rounded-md hover:bg-secondary" title="View details">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded-md hover:bg-secondary" title="Edit">
                        <Edit className="h-4 w-4" />
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
            {Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length}{" "}
            transactions
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
