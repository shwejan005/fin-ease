"use client"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  Calculator,
  CreditCard,
  PiggyBank,
  BellRing,
  Bot,
  Trophy,
  Users,
  BrainCircuit,
  Factory,
  LineChart,
  LayoutDashboard,
  Settings,
} from "lucide-react"

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
import { silkScreen } from "@/app/layout"
import ModeToggle from "../mode-toggle"

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
        title: "Loan Calculator",
        icon: Calculator,
        href: "/dashboard/tools/loan-calculator",
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
    title: "Community",
    items: [
      {
        title: "Forum",
        icon: Users,
        href: "/dashboard/community",
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
  {
    title: "Preferences",
    items: [
      {
        title: "Notifications",
        icon: BellRing,
        href: "/dashboard/notifications",
      },
      {
        title: "Settings",
        icon: Settings,
        href: "/dashboard/settings",
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
          <div className="flex justify-between">
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/dashboard" className="flex items-center justify-center gap-2">
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className={`${silkScreen.className} text-2xl font-semibold text-green-600`}>FinEase</span>
                    <span className="text-xs text-center text-muted-foreground">Dashboard</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {/* Mode Toggle component */}
            <ModeToggle />
          </div>
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
                      <a href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
