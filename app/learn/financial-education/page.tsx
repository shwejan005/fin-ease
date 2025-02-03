import { LearnLayout } from "@/components/learn-layout"
import { ConceptCard } from "@/components/concept-card"
import { PracticeExercise } from "@/components/practice-exercise"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from 'lucide-react'

export default function FinancialEducationPage() {
  // Track completed sections
  const completedSections = [
    'education.intro',
    'education.investment-categories',
    'education.safe-investments',
    'education.moderate-risk',
    'education.high-risk',
    'education.tips'
  ]

  return (
    <LearnLayout currentPage="education" completedSections={completedSections}>
      <div className="space-y-8">
        {/* Introduction */}
        <section className="space-y-4">
          <h1 className="text-center text-4xl font-bold text-green-800">Understanding Investments and Finance</h1>

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-600">
              Learn about different ways to grow your money, from safe options to higher-risk investments.
            </p>
          </div>
        </section>

        {/* Investment Categories Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Investment Categories</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-green-100">
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-800">Safe Options</Badge>
                <CardTitle className="text-lg">Low Risk, Steady Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>Fixed Deposits</li>
                  <li>Government Bonds</li>
                  <li>Public Provident Fund (PPF)</li>
                  <li>National Savings Certificate</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-100">
              <CardHeader>
                <Badge className="w-fit bg-yellow-100 text-yellow-800">Moderate Risk</Badge>
                <CardTitle className="text-lg">Balance of Risk & Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>Mutual Funds</li>
                  <li>Index Funds</li>
                  <li>Blue Chip Stocks</li>
                  <li>Corporate Bonds</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardHeader>
                <Badge className="w-fit bg-red-100 text-red-800">High Risk</Badge>
                <CardTitle className="text-lg">High Risk, Potential High Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>Small Cap Stocks</li>
                  <li>Cryptocurrencies</li>
                  <li>Forex Trading</li>
                  <li>Options Trading</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safe Investment Options */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Safe Investment Options</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ConceptCard
              title="Fixed Deposits (FD)"
              description="A Fixed Deposit is like a savings account where you agree to keep your money for a fixed time period. The bank pays you higher interest than a regular savings account."
              difficulty="easy"
              tips={[
                "Minimum investment: Usually ₹1,000",
                "Duration: 7 days to 10 years",
                "Interest rates: 5-7% per year",
                "Guaranteed returns by the bank",
              ]}
            />

            <ConceptCard
              title="Public Provident Fund (PPF)"
              description="A government-backed savings scheme that offers tax benefits and guaranteed returns. It's one of the safest long-term investment options."
              difficulty="easy"
              tips={[
                "Minimum yearly investment: ₹500",
                "Lock-in period: 15 years",
                "Tax-free returns",
                "Can be extended in blocks of 5 years",
              ]}
            />
          </div>
        </section>

        {/* Moderate Risk Investments */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Moderate Risk Investments</h2>

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <ConceptCard
                title="Systematic Investment Plans (SIP)"
                description="SIPs allow you to invest a fixed amount in mutual funds regularly. It's like a recurring deposit but in mutual funds, which invest in stocks and bonds."
                difficulty="medium"
                tips={[
                  "Start with as little as ₹500 per month",
                  "Automatic investment on fixed dates",
                  "Benefits from market ups and downs",
                  "Long-term wealth building tool",
                ]}
              />

              <Card className="border-green-100">
                <CardContent className="pt-6">
                  <h3 className="mb-4 text-lg font-medium text-green-800">How SIP Works</h3>
                  <ol className="ml-4 list-decimal space-y-3 text-gray-600">
                    <li>Choose a mutual fund</li>
                    <li>Decide monthly investment amount</li>
                    <li>Select investment date</li>
                    <li>Money automatically invested each month</li>
                    <li>Benefits from rupee cost averaging</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ConceptCard
                title="Index Funds"
                description="Index funds track a market index like NIFTY 50. They're a low-cost way to invest in India's top companies all at once."
                difficulty="medium"
                tips={[
                  "Lower risk than individual stocks",
                  "Very low management fees",
                  "No need to pick individual stocks",
                  "Good for long-term investment",
                ]}
              />

              <ConceptCard
                title="Blue Chip Stocks"
                description="Shares of well-established, financially sound companies. These are large, reliable companies with a history of good performance."
                difficulty="medium"
                tips={[
                  "Research companies before investing",
                  "Monitor quarterly results",
                  "Diversify across sectors",
                  "Suitable for long-term holding",
                ]}
              />
            </div>
          </div>
        </section>

        {/* High Risk Investments */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">High Risk Investments</h2>

          <div className="space-y-4">
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <p className="mt-2 text-red-800">
                These investments carry high risk of loss. Never invest more than you can afford to lose. Consider
                consulting with a financial advisor before making high-risk investments.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ConceptCard
                title="Cryptocurrency"
                description="Digital or virtual currencies that use cryptography for security. Highly volatile and can have large price swings."
                difficulty="hard"
                tips={[
                  "Extremely volatile prices",
                  "Research thoroughly before investing",
                  "Use only reputable exchanges",
                  "Keep security measures strong",
                ]}
              />

              <ConceptCard
                title="Small Cap Stocks"
                description="Shares of smaller companies with high growth potential but also higher risk. These companies are more vulnerable to economic changes."
                difficulty="hard"
                tips={[
                  "Higher potential returns but more risk",
                  "Need careful research",
                  "May be harder to buy/sell quickly",
                  "Consider as part of diversified portfolio",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Investment Tips */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Smart Investment Tips</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-100">
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-medium text-green-800">Basic Rules</h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>Never invest money you'll need soon</li>
                  <li>Diversify your investments</li>
                  <li>Research before investing</li>
                  <li>Start small and learn</li>
                  <li>Keep some money in safe options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-medium text-green-800">Risk Management</h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>Don't put all money in one place</li>
                  <li>Keep emergency fund separate</li>
                  <li>Understand the risks involved</li>
                  <li>Monitor your investments regularly</li>
                  <li>Have a long-term perspective</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practice Exercise */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Test Your Knowledge</h2>

          <PracticeExercise
            title="Investment Basics Quiz"
            description="Check your understanding of different investment options"
            questions={[
              {
                question: "Which of these is considered the safest investment option?",
                type: "multiple-choice",
                options: ["Cryptocurrency", "Fixed Deposit", "Small Cap Stocks", "Forex Trading"],
                correctAnswer: "Fixed Deposit",
                explanation:
                  "Fixed Deposits are considered very safe as they're backed by banks and offer guaranteed returns.",
              },
              {
                question: "What is the minimum monthly amount typically needed to start a SIP?",
                type: "number",
                correctAnswer: 500,
                explanation: "Most mutual funds allow you to start SIPs with just ₹500 per month.",
              },
              {
                question: "Which investment type typically has the highest risk?",
                type: "multiple-choice",
                options: ["Government Bonds", "Blue Chip Stocks", "Cryptocurrency", "PPF"],
                correctAnswer: "Cryptocurrency",
                explanation:
                  "Cryptocurrency is highly volatile and can have extreme price swings, making it one of the riskiest investments.",
              },
            ]}
          />
        </section>
      </div>
    </LearnLayout>
  )
}
