"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { Transaction } from "@/types"

export function RecentTransactions({ animationsEnabled = true }: { animationsEnabled?: boolean }) {
  const transactions: Transaction[] = [
    {
      id: "1",
      amount: "+$350",
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      status: "completed",
      category: "Income",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "2",
      amount: "-$280",
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      status: "pending",
      category: "Shopping",
      paymentMethod: "Credit Card",
    },
    {
      id: "3",
      amount: "+$1,200",
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      status: "completed",
      category: "Income",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "4",
      amount: "-$150",
      name: "William Kim",
      email: "will@email.com",
      status: "completed",
      category: "Entertainment",
      paymentMethod: "Debit Card",
    },
    {
      id: "5",
      amount: "+$2,000",
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      status: "completed",
      category: "Income",
      paymentMethod: "Bank Transfer",
    },
  ]

  return (
    <div className="space-y-4">
      {transactions.map((transaction, index) => (
        <motion.div
          key={transaction.id}
          className="flex items-center p-2 rounded-lg transition-colors hover:bg-secondary"
          whileHover={animationsEnabled ? { scale: 1.01 } : {}}
          initial={animationsEnabled ? { opacity: 0, y: 10 } : { opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            {transaction.name[0]}
          </div>
          <div className="ml-4 space-y-1 flex-1 min-w-0">
            <div className="flex justify-between">
              <p className="text-sm font-medium leading-none font-poppins">{transaction.name}</p>
              <Badge
                variant={
                  transaction.status === "completed"
                    ? "success"
                    : transaction.status === "pending"
                      ? "warning"
                      : "destructive"
                }
                className="ml-2"
              >
                {transaction.status}
              </Badge>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-muted-foreground truncate">{transaction.category}</p>
              <p className="text-xs text-muted-foreground">{transaction.paymentMethod}</p>
            </div>
          </div>
          <div className="font-medium ml-4">
            <span
              className={
                transaction.amount.startsWith("+") ? "text-emerald-500 font-semibold" : "text-rose-500 font-semibold"
              }
            >
              {transaction.amount}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
