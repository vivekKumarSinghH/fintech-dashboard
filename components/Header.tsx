import { Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-background border-b p-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">FinTech Dashboard</h2>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}

export default Header
