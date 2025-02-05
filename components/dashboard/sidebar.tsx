"use client"
import {
  BookOpen,
  Bot,
  BrainCircuit,
  Calculator,
  CreditCard,
  Factory,
  FormInput,
  LayoutDashboard,
  LineChart,
  PiggyBank,
  Trophy,
  Users
} from "lucide-react"
import { usePathname } from "next/navigation"

import { silkScreen } from "@/app/layout"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

const navigation = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
      },
    ],
  },
  {
    title: "Learning",
    items: [
      {
        title: "Financial Education",
        icon: BookOpen,
        href: "/dashboard/learn",
      },
      {
        title: "AI Finance Coach",
        icon: BrainCircuit,
        href: "/dashboard/ai-assistant",
      },
    ],
  },
  {
    title: "Financial Tools",
    items: [
      {
        title: "Details",
        icon: FormInput,
        href: "/dashboard/details"
      },
      {
        title: "Expense Tracking",
        icon: PiggyBank,
        href: "/dashboard/expenses",
      },
      {
        title: "Budget Planner",
        icon: Bot,
        href: "/dashboard/budget",
      },
      {
        title: "Credit Health",
        icon: CreditCard,
        href: "/dashboard/credit",
      },
      {
        title: "Investment Strategy",
        icon: LineChart,
        href: "/dashboard/investment-insights",
      },
    ],
  },
  {
    title: "Loans",
    items: [
      {
        title: "Loan Calculator",
        icon: Calculator,
        href: "/dashboard/loan-calculator",
      },
      {
        title: "Status",
        icon: Users,
        href: "/dashboard/status",
      },
      {
        title: "Lend or Borrow",
        icon: Factory,
        href: "/dashboard/lend-or-borrow",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        title: "Forum",
        icon: Users,
        href: "/dashboard/forum",
      },
      {
        title: "Rural Business Hub",
        icon: Factory,
        href: "/dashboard/rural-support",
      },
      {
        title: "Rewards",
        icon: Trophy,
        href: "/dashboard/rewards",
      },
    ],
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r dark:bg-black white:bg-white">
      <SidebarHeader className="border-b">
        <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/" className="flex items-center justify-center gap-2">
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className={`${silkScreen.className} text-2xl font-semibold text-green-600`}>FinEase</span>
                    <span className="text-xs text-center text-muted-foreground">Dashboard</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {navigation.map((group, i) => (
          <SidebarGroup key={i}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      className="hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
                <UserButton />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
