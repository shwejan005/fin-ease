import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    type: "Expense",
    amount: "₹2,500",
    date: "2 hours ago",
    category: "Groceries",
    initials: "GR",
  },
  {
    id: 2,
    type: "Income",
    amount: "₹45,000",
    date: "Yesterday",
    category: "Salary",
    initials: "SA",
  },
  {
    id: 3,
    type: "Transfer",
    amount: "₹10,000",
    date: "2 days ago",
    category: "Savings",
    initials: "SV",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{activity.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.type}</p>
            <p className="text-sm text-muted-foreground">{activity.category}</p>
          </div>
          <div className="ml-auto font-medium">{activity.amount}</div>
        </div>
      ))}
    </div>
  )
}

