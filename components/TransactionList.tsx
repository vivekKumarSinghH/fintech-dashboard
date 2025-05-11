import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { EyeIcon, MoreHorizontalIcon } from "lucide-react"
import { transactionData } from "@/lib/data"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TransactionList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactionData.slice(0, 10).map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span>{transaction.name}</span>
                <span className="text-xs text-muted-foreground">{transaction.email}</span>
              </div>
            </TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>
              <Badge
                variant={
                  transaction.type === "deposit" ? "success" : transaction.type === "withdrawal" ? "warning" : "default"
                }
                className="capitalize"
              >
                {transaction.type}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  transaction.status === "completed"
                    ? "success"
                    : transaction.status === "pending"
                      ? "warning"
                      : "destructive"
                }
                className="capitalize"
              >
                {transaction.status}
              </Badge>
            </TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <EyeIcon className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontalIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Approve</DropdownMenuItem>
                    <DropdownMenuItem>Reject</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
