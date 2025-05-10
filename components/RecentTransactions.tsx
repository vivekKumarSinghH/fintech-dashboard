import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentTransactions() {
  const transactions = [
    {
      id: "1",
      amount: "+$350",
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      status: "success",
    },
    {
      id: "2",
      amount: "-$280",
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      status: "pending",
    },
    {
      id: "3",
      amount: "+$1,200",
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      status: "success",
    },
    {
      id: "4",
      amount: "-$150",
      name: "William Kim",
      email: "will@email.com",
      status: "success",
    },
    {
      id: "5",
      amount: "+$2,000",
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      status: "success",
    },
  ]

  return (
    <div className="space-y-8">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/${transaction.id}.png`} alt="Avatar" />
            <AvatarFallback>{transaction.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.name}</p>
            <p className="text-sm text-muted-foreground">{transaction.email}</p>
          </div>
          <div className="ml-auto font-medium">
            <span className={transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"}>
              {transaction.amount}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
