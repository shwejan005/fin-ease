import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import type React from "react"
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConvexClerkProvider>
      <SidebarProvider>
        <div className="flex h-screen w-full overflow-hidden">
          <DashboardSidebar />
          <main className="flex-1 w-full overflow-y-auto border-l bg-background">
            <div className="mx-auto">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ConvexClerkProvider>
  )
}