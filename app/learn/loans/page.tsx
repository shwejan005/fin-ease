import { LearnLayout } from "@/components/learn-layout"
import { StoryCard } from "@/components/story-card"
import { QuickTip } from "@/components/quick-tip"
import { ConceptCard } from "@/components/concept-card"
import { PracticeExercise } from "@/components/practice-exercise"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, ArrowRight, FileText, Percent } from "lucide-react"

export default function LoansPage() {
  // Track completed sections
  const completedSections = ["loans.intro", "loans.understanding", "loans.types", "loans.application", "loans.interest"]

  return (
    <LearnLayout currentPage="loans" completedSections={completedSections}>
      <div className="space-y-8">
        {/* Introduction */}
        <section className="space-y-4">
          <h1 className="text-center text-4xl font-bold text-green-800">Understanding Loans</h1>

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-600">
              Learn about different types of loans, how to apply for them, and how to manage repayments responsibly.
            </p>
          </div>
        </section>

        {/* What is a Loan */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">What is a Loan?</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ConceptCard
              title="Understanding Loans"
              description="A loan is money borrowed from a bank or financial institution that you promise to pay back with interest. It's like borrowing ₹100 from someone and agreeing to pay back ₹110 later."
              difficulty="easy"
              tips={[
                "Only borrow what you can repay",
                "Understand the interest rate",
                "Check all fees and charges",
                "Read the loan agreement carefully",
              ]}
            />

            <StoryCard
              title="A Story About Smart Borrowing"
              story="Sita needed ₹20,000 for her small grocery shop. Instead of borrowing from a moneylender at high interest, she got a business loan from a bank. With lower interest rates and flexible repayment, she grew her business and repaid the loan easily."
              moral="Bank loans are safer and more affordable than informal lenders."
            />
          </div>
        </section>

        {/* Types of Loans */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Types of Loans</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-green-100">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-green-800">Business Loan</h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>For starting or expanding business</li>
                  <li>Flexible repayment options</li>
                  <li>Can be secured or unsecured</li>
                  <li>Interest rates: 11-16% per year</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-green-800">Education Loan</h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>For higher education expenses</li>
                  <li>Lower interest rates</li>
                  <li>Repayment starts after course</li>
                  <li>Tax benefits available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Percent className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-green-800">Personal Loan</h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>For any personal need</li>
                  <li>Quick approval process</li>
                  <li>No collateral needed</li>
                  <li>Higher interest rates: 14-24%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Loan Application Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">How to Apply for a Loan</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-100">
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-medium text-green-800">Required Documents</h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>Identity Proof (Aadhaar, PAN)</li>
                  <li>Address Proof</li>
                  <li>Income Proof / Bank Statements</li>
                  <li>Business documents (for business loans)</li>
                  <li>Property documents (for secured loans)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-medium text-green-800">Application Steps</h3>
                <ol className="ml-4 list-decimal space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600" />
                    Choose the right type of loan
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600" />
                    Compare interest rates from different banks
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600" />
                    Gather all required documents
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600" />
                    Fill the application form carefully
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600" />
                    Submit documents and wait for approval
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Understanding Interest Rates */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Understanding Interest Rates</h2>

          <div className="space-y-4">
            <ConceptCard
              title="Interest and EMI"
              description="Interest is the extra money you pay for borrowing. EMI (Equated Monthly Installment) is the fixed amount you pay each month, which includes both principal and interest."
              difficulty="medium"
              tips={[
                "Lower interest rate means lower EMI",
                "Longer loan term means more total interest",
                "Check for hidden charges",
                "Compare offers from different banks",
              ]}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-green-100">
                <CardContent className="pt-6">
                  <h3 className="mb-4 text-lg font-medium text-green-800">Example Calculation</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>For a loan of ₹100,000 at 12% interest for 1 year:</p>
                    <ul className="ml-4 list-disc space-y-2">
                      <li>Monthly EMI: ₹8,884</li>
                      <li>Total interest paid: ₹6,608</li>
                      <li>Total amount repaid: ₹106,608</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <QuickTip
                title="Important!"
                description="Always check the annual percentage rate (APR) and not just the monthly rate. A 1% monthly rate means 12% yearly!"
              />
            </div>
          </div>
        </section>

        {/* Practice Exercise */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Test Your Knowledge</h2>

          <PracticeExercise
            title="Loan Basics Quiz"
            description="Check your understanding of loans and borrowing"
            questions={[
              {
                question: "Which loan typically has the lowest interest rate?",
                type: "multiple-choice",
                options: ["Personal Loan", "Education Loan", "Credit Card", "Payday Loan"],
                correctAnswer: "Education Loan",
                explanation:
                  "Education loans typically have lower interest rates because they're considered an investment in your future and often come with government support.",
              },
              {
                question: "If you borrow ₹10,000 at 1% monthly interest, how much interest do you pay in a year?",
                type: "number",
                correctAnswer: 1200,
                explanation: "1% per month means 12% per year. 12% of ₹10,000 = ₹1,200",
              },
              {
                question: "Which document is MOST important for a loan application?",
                type: "multiple-choice",
                options: ["Social media profile", "PAN Card", "High school certificate", "Gym membership"],
                correctAnswer: "PAN Card",
                explanation:
                  "PAN Card is mandatory for all loan applications as it helps verify your identity and tax status.",
              },
            ]}
          />
        </section>
      </div>
    </LearnLayout>
  )
}

