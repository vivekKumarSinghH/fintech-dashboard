import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user", status: "active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "user", status: "inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "manager", status: "active" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "user", status: "pending" },
]

export function UserList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Badge
                variant={user.status === "active" ? "success" : user.status === "inactive" ? "secondary" : "warning"}
              >
                {user.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="text-red-500">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
