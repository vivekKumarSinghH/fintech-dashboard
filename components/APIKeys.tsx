import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function APIKeys() {
  const apiKeys = [
    { id: 1, name: "Production Key", key: "pk_live_1234567890abcdef", created: "2023-01-15" },
    { id: 2, name: "Test Key", key: "pk_test_1234567890abcdef", created: "2023-02-20" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input placeholder="Enter key name" className="max-w-sm" />
        <Button>Generate New Key</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Key</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiKeys.map((apiKey) => (
            <TableRow key={apiKey.id}>
              <TableCell>{apiKey.name}</TableCell>
              <TableCell>{apiKey.key}</TableCell>
              <TableCell>{apiKey.created}</TableCell>
              <TableCell>
                <Button variant="ghost">Revoke</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
