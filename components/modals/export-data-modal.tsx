"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Download } from "lucide-react"
import { DateRangePicker } from "@/components/ui/date-range-picker"

interface ExportDataModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  dataType?: "transactions" | "users" | "assets" | "stocks" | "api" | "dashboard"
}

export function ExportDataModal({ open, onOpenChange, dataType = "transactions" }: ExportDataModalProps) {
  const { toast } = useToast()
  const [format, setFormat] = useState("csv")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [includeHeaders, setIncludeHeaders] = useState(true)

  const dataTypeLabels = {
    transactions: "Transactions",
    users: "Users",
    assets: "Assets",
    stocks: "Stocks",
    api: "API Usage",
    dashboard: "Dashboard",
  }

  const handleExport = async () => {
    setIsSubmitting(true)

    // Simulate export process
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: `Your ${dataTypeLabels[dataType]} data has been exported as ${format.toUpperCase()}.`,
      })

      setIsSubmitting(false)
      onOpenChange(false)
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Export {dataTypeLabels[dataType]} Data</DialogTitle>
          <DialogDescription>Choose your export options below.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Date Range</Label>
            <DateRangePicker />
          </div>

          <div className="space-y-2">
            <Label>Export Format</Label>
            <RadioGroup defaultValue="csv" value={format} onValueChange={setFormat}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="csv" id="csv" />
                <Label htmlFor="csv">CSV</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="excel" id="excel" />
                <Label htmlFor="excel">Excel</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pdf" id="pdf" />
                <Label htmlFor="pdf">PDF</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="json" id="json" />
                <Label htmlFor="json">JSON</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Options</Label>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="headers"
                checked={includeHeaders}
                onCheckedChange={(checked) => setIncludeHeaders(checked as boolean)}
              />
              <Label htmlFor="headers">Include column headers</Label>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleExport} disabled={isSubmitting}>
            {isSubmitting ? (
              "Exporting..."
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Export {dataTypeLabels[dataType]}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
