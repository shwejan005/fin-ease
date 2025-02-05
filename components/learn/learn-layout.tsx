import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Book, Calculator, Landmark } from "lucide-react"
import Link from "next/link"
import type React from "react"

interface LayoutProps {
  children: React.ReactNode
  currentPage: "banking" | "loans" | "education"
  completedSections: string[]
}

export function LearnLayout({ children, currentPage, completedSections }: LayoutProps) {
  const pages = [
    {
      id: "banking",
      title: "Banking Services",
      icon: Landmark,
      href: "/learn/banking-services",
      totalSections: 5,
    },
    {
      id: "loans",
      title: "Loans",
      icon: Calculator,
      href: "/learn/loans",
      totalSections: 5,
    },
    {
      id: "education",
      title: "Financial Education",
      icon: Book,
      href: "/learn/financial-education",
      totalSections: 6,
    },
  ]

  const calculateProgress = (pageId: string) => {
    const pageSections = completedSections.filter((section) => section.startsWith(pageId))
    const totalSections = pages.find((p) => p.id === pageId)?.totalSections || 1
    return Math.round((pageSections.length / totalSections) * 100)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/learn" className="text-xl font-bold text-foreground">
            Financial Learning Hub
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Your Progress</span>
          <span className="text-sm text-muted-foreground">{calculateProgress(currentPage)}%</span>
        </div>
        <Progress value={calculateProgress(currentPage)} className="h-2 bg-secondary" />
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2">
          {pages.map((page) => {
            const Icon = page.icon
            const progress = calculateProgress(page.id)

            return (
              <Link key={page.id} href={page.href}>
                <Button
                  variant={currentPage === page.id ? "default" : "outline"}
                  className={`gap-2 ${
                    currentPage === page.id
                      ? "bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{page.title}</span>
                  <span className="ml-2 text-xs">({progress}%)</span>
                </Button>
              </Link>
            )
          })}
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">{children}</main>

      <div className="border-t bg-card py-6">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-accent p-4">
            <h3 className="mb-2 font-semibold text-foreground">Next Steps</h3>
            <p className="text-muted-foreground">
              {currentPage === "banking" &&
                "Next up: Learn about different types of loans and how they can help you grow."}
              {currentPage === "loans" && "Next up: Discover how to manage your money better with financial education."}
              {currentPage === "education" &&
                "You've completed all modules! Try the practice exercises to test your knowledge."}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

