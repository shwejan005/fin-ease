import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/components/dashboard/overview";
import { RecentActivity } from "@/components/dashboard/recent-activity";

interface MetricCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    trend: string;
  };
  icon: string;
}

function MetricCard({ title, value, change, icon }: MetricCardProps) {
  return (
    <Card className="bg-black border border-green-500/30 shadow-lg hover:shadow-xl transition-all rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-green-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-semibold text-white">{value}</div>
        <p className="text-xs text-green-400 flex items-center gap-1">
          {icon} {change.value} {change.trend}
        </p>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10 max-w-full">
      <div className="w-full mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-green-400">Welcome to FinEase 🚀</h1>
          <p className="text-lg text-gray-400">Your AI-powered financial companion—track, plan, and grow smarter.</p>
          <p className="text-sm text-gray-500">*Demo data for illustration purposes.</p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard title="Total Balance" value="₹45,231.89" change={{ value: "+20.1%", trend: "from last month" }} icon="📈" />
          <MetricCard title="Expenses" value="₹12,234.89" change={{ value: "+4%", trend: "from last month" }} icon="📊" />
          <MetricCard title="Savings" value="₹4,231.89" change={{ value: "+8%", trend: "from last month" }} icon="💰" />
          <MetricCard title="Active Goals" value="4" change={{ value: "2", trend: "completed this month" }} icon="🏆" />
        </div>

        {/* Charts and Activity */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4 bg-[#121212] border border-green-500/30 shadow-lg hover:shadow-xl transition-all rounded-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">📊 Financial Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Overview />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3 bg-[#121212] border border-green-500/30 shadow-lg hover:shadow-xl transition-all rounded-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">🔍 Recent Activity</CardTitle>
              <CardDescription className="text-gray-400">Your latest financial activities</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>
        </div>

        {/* Loan Tracker */}
        <Card className="bg-[#121212] border border-green-500/30 shadow-lg hover:shadow-xl transition-all rounded-xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">💳 Loan Tracker</CardTitle>
            <CardDescription className="text-gray-400">Track your loan applications and repayments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Loan Application</span>
                <span className="text-green-400">Approved</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Repayment Progress</span>
                <span className="text-green-400">₹20,000 / ₹50,000</span>
              </div>
              <progress
                className="w-full h-2 bg-gray-700 rounded-full"
                value={40}
                max={100}
              ></progress>
            </div>
          </CardContent>
        </Card>

        {/* AI Agent Integration */}
        <Card className="bg-[#121212] border border-green-500/30 shadow-lg hover:shadow-xl transition-all rounded-xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">🤖 AI Financial Assistant</CardTitle>
            <CardDescription className="text-gray-400">Ask questions and get personalized advice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <textarea
                rows={3}
                placeholder="Ask me anything about finance..."
                className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors">
                Get Advice
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Gamification Section */}
        <Card className="bg-[#121212] border border-green-500/30 shadow-lg hover:shadow-xl transition-all rounded-xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">🏆 Achievements</CardTitle>
            <CardDescription className="text-gray-400">Earn rewards for your financial progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-green-400">🌟</span>
                <span className="text-sm text-gray-400">Saved ₹10,000 this month</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">🎯</span>
                <span className="text-sm text-gray-400">Completed 5 financial lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">💡</span>
                <span className="text-sm text-gray-400">Reduced expenses by ₹2,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Tips */}
        <Card className="bg-[#121212] border border-green-500/30 shadow-lg hover:shadow-xl transition-all rounded-xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">💡 Financial Tips</CardTitle>
            <CardDescription className="text-gray-400">Personalized advice to improve your finances</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">
                📈 Save ₹50 daily to build an emergency fund of ₹18,250 in one year.
              </li>
              <li className="text-sm text-gray-400">
                💳 Always repay loans on time to maintain a good credit score.
              </li>
              <li className="text-sm text-gray-400">
                🛡️ Enable SMS notifications to track all transactions and prevent fraud.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}