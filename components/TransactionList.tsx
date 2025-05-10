import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const transactions = [
  { id: 1, user: "John Doe", amount: 1000, type: "deposit", status: "completed", date: "2023-06-01" },
  { id: 2, user: "Jane Smith", amount: 500, type: "withdrawal", status: "pending", date: "2023-06-02" },
  { id: 3, user: "Bob Johnson", amount: 250, type: "transfer", status: "completed", date: "2023-06-03" },
  { id: 4, user: "Alice Brown", amount: 750, type: "deposit", status: "completed", date: "2023-06-04" },
  { id: 5, user: "Charlie Davis", amount: 100, type: "withdrawal", status: "failed", date: "2023-06-05" },
]

export function TransactionList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.user}</TableCell>
            <TableCell>${transaction.amount.toFixed(2)}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>
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
            </TableCell>
            <TableCell>{transaction.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
