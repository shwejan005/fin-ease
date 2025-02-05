import { LearnLayout } from "@/components/learn/learn-layout"
import { StoryCard } from "@/components/learn/story-card"
import { QuickTip } from "@/components/learn/quick-tip"
import { ConceptCard } from "@/components/learn/concept-card"
import { PracticeExercise } from "@/components/learn/practice-exercise"
import { Card, CardContent } from "@/components/ui/card"
import { Landmark, CreditCard, PiggyBank, ArrowRight } from "lucide-react"

export default function BankingServicesPage() {
  const completedSections = [
    "banking.intro",
    "banking.what-is-bank",
    "banking.account-types",
    "banking.digital-services",
    "banking.safety",
  ]

  return (
    <LearnLayout currentPage="banking" completedSections={completedSections}>
      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="space-y-4">
          <h1 className="text-center text-4xl font-bold text-green-500 dark:text-green-400">
            Understanding Banking Services
          </h1>

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-muted-foreground">
              Banks are safe places to keep your money and help you manage it better. Let's learn about different
              banking services and how they can help you.
            </p>
          </div>
        </section>

        {/* What is a Bank Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400">What is a Bank?</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ConceptCard
              title="Safe Place for Money"
              description="A bank is like a secure vault where you can keep your money safe. Unlike keeping money at home, banks protect your money from theft, loss, or damage."
              difficulty="easy"
              tips={[
                "Banks are protected by security guards",
                "Your money is insured by the government",
                "You can access your money anytime through ATMs",
              ]}
            />

            <StoryCard
              title="A Story About Safety"
              story="Ramesh, a vegetable seller, kept his money under his mattress. During the monsoon, his house flooded and all his cash was destroyed. His neighbor suggested opening a bank account. Now, even in heavy rains, Ramesh's money stays safe in the bank."
              moral="Bank accounts protect your money from unexpected disasters."
            />
          </div>
        </section>

        {/* Types of Bank Accounts */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400">Types of Bank Accounts</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-green-800/20 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-900/20">
                  <PiggyBank className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-foreground">Basic Savings Account</h3>
                <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
                  <li>Minimum balance: ₹500-1000</li>
                  <li>Earn interest on your savings</li>
                  <li>Free ATM card</li>
                  <li>Mobile banking facility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-800/20 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-900/20">
                  <Landmark className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-foreground">Zero Balance Account</h3>
                <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
                  <li>No minimum balance required</li>
                  <li>Perfect for students and low-income groups</li>
                  <li>Basic banking services</li>
                  <li>Limited free transactions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-800/20 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-900/20">
                  <CreditCard className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-foreground">Current Account</h3>
                <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
                  <li>For businesses and shops</li>
                  <li>Higher transaction limits</li>
                  <li>Checkbook facility</li>
                  <li>No interest earned</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Digital Banking Services */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400">Digital Banking Services</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ConceptCard
              title="UPI Payments"
              description="UPI (Unified Payments Interface) lets you send and receive money instantly using your phone. Apps like PhonePe, Google Pay, and Paytm use UPI."
              difficulty="medium"
              tips={[
                "Keep your UPI PIN secret",
                "Double-check phone numbers before sending money",
                "Enable SMS alerts for all transactions",
              ]}
            />

            <div className="space-y-4">
              <Card className="border-green-800/20 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <h3 className="mb-4 text-lg font-medium text-foreground">How to Set Up UPI</h3>
                  <ol className="ml-4 space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-500" />
                      Download a UPI app (PhonePe, Google Pay, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-500" />
                      Link your bank account
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-500" />
                      Set up your UPI PIN
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-500" />
                      Start sending/receiving money
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <QuickTip
                title="Safety First!"
                description="Never share your UPI PIN with anyone, not even bank officials. They will never ask for it."
              />
            </div>
          </div>
        </section>

        {/* Practice Exercise */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400">Test Your Knowledge</h2>

          <PracticeExercise
            title="Banking Basics Quiz"
            description="Let's see how much you've learned about banking services"
            questions={[
              {
                question: "Which is the safest place to keep your money?",
                type: "multiple-choice",
                options: ["Under the mattress", "In a bank account", "With a friend", "In a box at home"],
                correctAnswer: "In a bank account",
                explanation: "Bank accounts are insured and protected by security measures.",
              },
              {
                question: "What is the minimum balance needed for a zero balance account?",
                type: "number",
                correctAnswer: 0,
                explanation: "Zero balance accounts don't require any minimum balance.",
              },
              {
                question: "Which of these should you NEVER share with anyone?",
                type: "multiple-choice",
                options: ["Bank name", "UPI PIN", "Account type", "Branch address"],
                correctAnswer: "UPI PIN",
                explanation: "Your UPI PIN is like your ATM PIN. Keep it secret to protect your money.",
              },
            ]}
          />
        </section>
      </div>
    </LearnLayout>
  )
}

