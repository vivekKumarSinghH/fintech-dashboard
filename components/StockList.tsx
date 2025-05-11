import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { stockData } from "@/lib/data"

export function StockList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>Market Cap</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stockData.map((stock) => (
          <TableRow key={stock.symbol}>
            <TableCell className="font-medium">{stock.symbol}</TableCell>
            <TableCell>{stock.name}</TableCell>
            <TableCell>${stock.price.toFixed(2)}</TableCell>
            <TableCell className={stock.change > 0 ? "text-green-600" : "text-red-600"}>
              <div className="flex items-center">
                {stock.change > 0 ? "+" : ""}
                {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
              </div>
            </TableCell>
            <TableCell>{(stock.volume / 1000000).toFixed(1)}M</TableCell>
            <TableCell>{stock.marketCap}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
