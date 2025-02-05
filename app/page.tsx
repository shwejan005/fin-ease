"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Calculator, CreditCard, PiggyBank, Smartphone, BellRing, Languages, Bot, Trophy, Users, BrainCircuit, Factory, LineChart } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

interface Feature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  className: string
}

const features: Feature[] = [
  {
    title: "Mobile Authentication",
    description: "Experience hassle-free, secure login with our OTP-based mobile authentication. No need for complex passwords or email addresses – just your mobile number for quick and safe access to all our financial tools.",
    icon: Smartphone,
    href: "/auth",
    className: "md:col-span-2 bg-gradient-to-br from-green-50 to-50% dark:from-green-900/20",
  },
  {
    title: "Financial Education",
    description: "Embark on a comprehensive journey to financial literacy. Our interactive modules cover everything from basic banking concepts to advanced investment strategies, tailored specifically for rural entrepreneurs. Learn at your own pace and apply your knowledge to grow your business.",
    icon: BookOpen,
    href: "/learn",
    className: "md:col-span-2 row-span-2 bg-gradient-to-br from-green-50 via-white to-50% dark:from-green-900/20 dark:via-green-900/10",
  },
  {
    title: "Expense Tracking",
    description: "AI-powered expense insights with smart categorization.",
    icon: PiggyBank,
    href: "/expenses",
    className: "bg-green-50/50 dark:bg-green-900/20",
  },
  {
    title: "Loan Calculator",
    description: "Smart EMI calculations with repayment visualizations.",
    icon: Calculator,
    href: "/tools/loan-calculator",
    className: "bg-green-50/50 dark:bg-green-900/20",
  },
  {
    title: "Smart Budget Planner",
    description: "Take charge of your financial future with our AI-driven budget planner. Get personalized recommendations, set realistic goals, and watch your savings grow. Our system adapts to your spending patterns, helping you make informed decisions about your business and personal finances.",
    icon: Bot,
    href: "/budget",
    className: "md:col-span-2 row-span-2 bg-gradient-to-br from-green-50 to-50% dark:from-green-900/20",
  },
  {
    title: "Community Forum",
    description: "Collaborate with fellow entrepreneurs nationwide.",
    icon: Users,
    href: "/community",
    className: "bg-green-50/50 dark:bg-green-900/20",
  },
  {
    title: "Financial Gamification",
    description: "Earn rewards while mastering financial literacy.",
    icon: Trophy,
    href: "/rewards",
    className: "bg-green-50/50 dark:bg-green-900/20",
  },
  {
    title: "Credit Health",
    description: "Take control of your creditworthiness. Our AI-powered system not only monitors your credit score but also provides actionable insights to improve it. Understand factors affecting your score and get personalized recommendations to boost your financial credibility.",
    icon: CreditCard,
    href: "/credit",
    className: "md:col-span-2 bg-gradient-to-br from-green-50 to-50% dark:from-green-900/20",
  },
  {
    title: "Smart Alerts",
    description: "Personalized financial reminders via SMS/WhatsApp.",
    icon: BellRing,
    href: "/notifications",
    className: "bg-green-50/50 dark:bg-green-900/20",
  },
  {
    title: "Multilingual Support",
    description: "Available in 12+ Indian regional languages.",
    icon: Languages,
    href: "/settings/language",
    className: "bg-green-50/50 dark:bg-green-900/20",
  },
  {
    title: "AI Finance Coach",
    description: "Meet your personal financial advisor, available 24/7. Our AI-powered chatbot offers tailored guidance on budgeting, investments, and business financial strategies. Get instant answers to your queries and receive proactive tips to optimize your financial decisions, all in simple, easy-to-understand language.",
    icon: BrainCircuit,
    href: "/ai-assistant",
    className: "md:col-span-2 row-span-2 bg-gradient-to-br from-green-50 to-50% dark:from-green-900/20",
  },
  {
    title: "Investment Strategy",
    description: "Data-driven investment recommendations.",
    icon: LineChart,
    href: "/investment-insights",
    className: "bg-green-50/50 dark:bg-green-900/20",
  },
  {
    title: "Rural Business Hub",
    description: "Specialized resources for rural enterprises.",
    icon: Factory,
    href: "/rural-support",
    className: "bg-green-50/50 dark:bg-green-900/20",
  },
]

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-24 lg:py-32 text-center bg-gradient-to-b from-green-50 to-white dark:from-background dark:to-background">
        <div className="container mx-auto space-y-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-green-800 dark:text-foreground">
              Rural Financial Empowerment
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-green-700 dark:text-muted-foreground"
          >
            Transform your business with AI-driven financial tools designed for India's rural entrepreneurs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/20 transition-all duration-300"
            >
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-4 py-12 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center mb-12 text-foreground"
          >
            Your Financial Toolkit
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={cn("relative group", feature.className)}
              >
                <Link href={feature.href}>
                  <Card className={cn(
                    "h-full flex flex-col justify-between transition-all duration-300 ease-in-out",
                    "border-2 hover:border-green-600 dark:hover:border-green-400",
                    "bg-green-50 hover:bg-green-100 dark:bg-background dark:hover:bg-background",
                    "hover:shadow-xl dark:hover:shadow-green-900/20",
                    "hover:scale-[1.03] active:scale-[0.97]",
                    "before:absolute before:inset-0 before:rounded-lg before:bg-green-100/50 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 dark:before:bg-green-900/30"
                  )}>
                    <CardHeader className="flex flex-col items-start space-y-3 relative z-10">
                      <div className="p-3 rounded-lg bg-green-200 dark:bg-green-900/50 transition-colors duration-300">
                        <feature.icon className="h-6 w-6 text-green-700 dark:text-green-400" />
                      </div>
                      <CardTitle className="text-xl text-green-800 dark:text-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-green-700 dark:text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
