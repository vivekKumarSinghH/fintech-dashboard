import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 150.25, change: 2.5 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 2750.8, change: -0.8 },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 305.15, change: 1.2 },
  { symbol: "AMZN", name: "Amazon.com, Inc.", price: 3380.5, change: -1.5 },
  { symbol: "TSLA", name: "Tesla, Inc.", price: 725.6, change: 3.7 },
]

export function StockList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((stock) => (
          <TableRow key={stock.symbol}>
            <TableCell className="font-medium">{stock.symbol}</TableCell>
            <TableCell>{stock.name}</TableCell>
            <TableCell>${stock.price.toFixed(2)}</TableCell>
            <TableCell className={stock.change > 0 ? "text-green-600" : "text-red-600"}>
              {stock.change > 0 ? "+" : ""}
              {stock.change}%
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
