import { LearnLayout } from "@/components/learn-layout"
import { StoryCard } from "@/components/story-card"
import { QuickTip } from "@/components/quick-tip"
import { ConceptCard } from "@/components/concept-card"
import { PracticeExercise } from "@/components/practice-exercise"
import { Card, CardContent } from "@/components/ui/card"
import { Landmark, CreditCard, PiggyBank, ArrowRight } from 'lucide-react'

export default function BankingServicesPage() {
  // Track completed sections
  const completedSections = [
    'banking.intro',
    'banking.what-is-bank',
    'banking.account-types',
    'banking.digital-services',
    'banking.safety'
  ]

  return (
    <LearnLayout currentPage="banking" completedSections={completedSections}>
      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="space-y-4">
          <h1 className="text-center text-4xl font-bold text-green-800">Understanding Banking Services</h1>

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-600">
              Banks are safe places to keep your money and help you manage it better. Let's learn about different
              banking services and how they can help you.
            </p>
          </div>
        </section>

        {/* What is a Bank Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">What is a Bank?</h2>

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
          <h2 className="text-2xl font-semibold text-green-700">Types of Bank Accounts</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-green-100">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <PiggyBank className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-green-800">Basic Savings Account</h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>Minimum balance: ₹500-1000</li>
                  <li>Earn interest on your savings</li>
                  <li>Free ATM card</li>
                  <li>Mobile banking facility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Landmark className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-green-800">Zero Balance Account</h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>No minimum balance required</li>
                  <li>Perfect for students and low-income groups</li>
                  <li>Basic banking services</li>
                  <li>Limited free transactions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-green-800">Current Account</h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
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
          <h2 className="text-2xl font-semibold text-green-700">Digital Banking Services</h2>

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
              <Card className="border-green-100">
                <CardContent className="pt-6">
                  <h3 className="mb-4 text-lg font-medium text-green-800">How to Set Up UPI</h3>
                  <ol className="ml-4 list-decimal space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600" />
                      Download a UPI app (PhonePe, Google Pay, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600" />
                      Link your bank account
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600" />
                      Set up your UPI PIN
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600" />
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
          <h2 className="text-2xl font-semibold text-green-700">Test Your Knowledge</h2>

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

        {/* Additional Resources */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Helpful Resources</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-100">
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-medium text-green-800">Important Phone Numbers</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center justify-between">
                    <span>Banking Helpline</span>
                    <span className="font-medium">1800-111-111</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Block ATM Card</span>
                    <span className="font-medium">1800-222-222</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>UPI Help</span>
                    <span className="font-medium">1800-333-333</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-medium text-green-800">Documents Needed</h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  <li>Aadhaar Card</li>
                  <li>PAN Card</li>
                  <li>Passport size photo</li>
                  <li>Address proof</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </LearnLayout>
  )
}
