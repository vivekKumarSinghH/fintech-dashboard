import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function NotificationSettings() {
  return (
    <form className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="email-notifications" />
        <Label htmlFor="email-notifications">Receive email notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="sms-notifications" />
        <Label htmlFor="sms-notifications">Receive SMS notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="push-notifications" />
        <Label htmlFor="push-notifications">Receive push notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="marketing-emails" />
        <Label htmlFor="marketing-emails">Receive marketing emails</Label>
      </div>
      <Button type="submit">Save Preferences</Button>
    </form>
  )
}
