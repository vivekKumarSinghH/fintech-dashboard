import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SecuritySettings() {
  return (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="current-password">Current Password</Label>
        <Input type="password" id="current-password" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="new-password">New Password</Label>
        <Input type="password" id="new-password" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="confirm-password">Confirm New Password</Label>
        <Input type="password" id="confirm-password" />
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="2fa" />
        <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
      </div>
      <Button>Update Security Settings</Button>
    </div>
  )
}
