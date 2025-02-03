import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Landmark, Calculator, BookOpen, ArrowRight } from "lucide-react"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-green-50/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-green-800">Financial Learning Hub</h1>
          <p className="mt-4 text-lg text-gray-600">
            Learn about banking, loans, and smart financial management through simple, easy-to-understand lessons.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Banking Services Card */}
          <Link href="/learn/banking-services" className="transition-transform hover:scale-105">
            <Card className="h-full border-green-100">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Landmark className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-800">Banking Services</CardTitle>
                <CardDescription>Learn about banks and how they can help you</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="ml-5 list-disc space-y-2 text-gray-600">
                  <li>Understanding different types of accounts</li>
                  <li>Using ATMs and banking apps</li>
                  <li>Keeping your money safe</li>
                  <li>Digital banking and UPI</li>
                </ul>
                <div className="mt-4 flex items-center text-green-600">
                  <span className="text-sm">Start Learning</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Loans Card */}
          <Link href="/learn/loans" className="transition-transform hover:scale-105">
            <Card className="h-full border-green-100">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-800">Loans</CardTitle>
                <CardDescription>Understand how to borrow money safely</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="ml-5 list-disc space-y-2 text-gray-600">
                  <li>Different types of loans</li>
                  <li>How to apply for a loan</li>
                  <li>Understanding interest rates</li>
                  <li>Managing loan repayments</li>
                </ul>
                <div className="mt-4 flex items-center text-green-600">
                  <span className="text-sm">Start Learning</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Financial Education Card */}
          <Link href="/learn/financial-education" className="transition-transform hover:scale-105">
            <Card className="h-full border-green-100">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-800">Financial Education</CardTitle>
                <CardDescription>Learn how to manage and grow your money</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="ml-5 list-disc space-y-2 text-gray-600">
                  <li>Investment basics and options</li>
                  <li>Risk management strategies</li>
                  <li>Long-term wealth building</li>
                  <li>Safe vs risky investments</li>
                </ul>
                <div className="mt-4 flex items-center text-green-600">
                  <span className="text-sm">Start Learning</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Getting Started Section */}
        <div className="mt-12 rounded-lg bg-green-50 p-6">
          <h2 className="text-2xl font-semibold text-green-800">Getting Started</h2>
          <p className="mt-2 text-gray-600">
            Start with Banking Services to learn the basics of managing your money safely. Each section includes simple
            explanations, real examples, and practice questions to help you learn better.
          </p>
          <div className="mt-4 flex items-center text-green-600">
            <Link href="/learn/banking-services" className="flex items-center hover:underline">
              <span>Begin with Banking Services</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

