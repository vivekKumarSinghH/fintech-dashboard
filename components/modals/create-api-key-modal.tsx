"use client"

import type React from "react"

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

interface CreateAPIKeyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateAPIKeyModal({ open, onOpenChange }: CreateAPIKeyModalProps) {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [readPermission, setReadPermission] = useState(true)
  const [writePermission, setWritePermission] = useState(false)
  const [deletePermission, setDeletePermission] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [generatedKey, setGeneratedKey] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newKey = `pk_${Math.random().toString(36).substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`
      setGeneratedKey(newKey)
      setIsSubmitting(false)

      toast({
        title: "API Key Created",
        description: `Your new API key "${name}" has been created successfully.`,
      })
    }, 1000)
  }

  const handleClose = () => {
    setName("")
    setReadPermission(true)
    setWritePermission(false)
    setDeletePermission(false)
    setGeneratedKey("")
    onOpenChange(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedKey)
    toast({
      title: "Copied to Clipboard",
      description: "Your API key has been copied to clipboard.",
    })
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New API Key</DialogTitle>
          <DialogDescription>Create a new API key for accessing the platform programmatically.</DialogDescription>
        </DialogHeader>

        {!generatedKey ? (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Key Name
                </Label>
                <Input
                  id="name"
                  placeholder="Production API Key"
                  className="col-span-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right pt-2">Permissions</Label>
                <div className="col-span-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="read"
                      checked={readPermission}
                      onCheckedChange={(checked) => setReadPermission(checked as boolean)}
                    />
                    <Label htmlFor="read" className="font-normal">
                      Read (Get data from API)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="write"
                      checked={writePermission}
                      onCheckedChange={(checked) => setWritePermission(checked as boolean)}
                    />
                    <Label htmlFor="write" className="font-normal">
                      Write (Create and update data)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="delete"
                      checked={deletePermission}
                      onCheckedChange={(checked) => setDeletePermission(checked as boolean)}
                    />
                    <Label htmlFor="delete" className="font-normal">
                      Delete (Remove data)
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create API Key"}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label>Your New API Key</Label>
              <div className="p-3 bg-muted rounded-md font-mono text-sm break-all">{generatedKey}</div>
              <p className="text-sm text-muted-foreground mt-2">
                Make sure to copy your API key now. You won't be able to see it again!
              </p>
            </div>
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={copyToClipboard}>Copy to Clipboard</Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
