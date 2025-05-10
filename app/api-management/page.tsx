"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function APIManagementPage() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">API Management</h1>

      {/* Coming Soon Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Coming Soon</DialogTitle>
            <DialogDescription>
              The API Management page is currently under development. Please check back later!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Placeholder Content */}
      <Card>
        <CardHeader>
          <CardTitle>API Management</CardTitle>
          <CardDescription>This feature is coming soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This page is under development. Please check back later.</p>
        </CardContent>
      </Card>
    </div>
  )
}
