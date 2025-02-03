import Link from "next/link"
import { Book, Calculator, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type React from "react" // Added import for React

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
      totalSections: 5, // Total number of sections in banking
    },
    {
      id: "loans",
      title: "Loans",
      icon: Calculator,
      href: "/learn/loans",
      totalSections: 5, // Total number of sections in loans
    },
    {
      id: "education",
      title: "Financial Education",
      icon: Book,
      href: "/learn/financial-education",
      totalSections: 6, // Total number of sections in financial education
    },
  ]

  const calculateProgress = (pageId: string) => {
    const pageSections = completedSections.filter((section) => section.startsWith(pageId))
    const totalSections = pages.find((p) => p.id === pageId)?.totalSections || 1
    return Math.round((pageSections.length / totalSections) * 100)
  }

  return (
    <div className="min-h-screen bg-green-50/30">
      <header className="border-b border-green-100 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/learn" className="text-xl font-bold text-green-800">
            Financial Learning Hub
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-green-800">Your Progress</span>
          <span className="text-sm text-green-600">{calculateProgress(currentPage)}%</span>
        </div>
        <Progress value={calculateProgress(currentPage)} className="h-2" />
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
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "text-green-800 hover:bg-green-50"
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

      <footer className="border-t border-green-100 bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-green-50 p-4">
            <h3 className="mb-2 font-semibold text-green-800">Next Steps</h3>
            <p className="text-green-600">
              {currentPage === "banking" &&
                "Next up: Learn about different types of loans and how they can help you grow."}
              {currentPage === "loans" && "Next up: Discover how to manage your money better with financial education."}
              {currentPage === "education" &&
                "You've completed all modules! Try the practice exercises to test your knowledge."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

