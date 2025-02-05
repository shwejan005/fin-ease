// app/status/page.tsx
"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { Doc } from "@/convex/_generated/dataModel";

export default function StatusPage() {
  const { user, isLoaded: userLoaded } = useUser();
  const loans = useQuery(
    api.users.getLoans,
    user ? { clerkId: user.id } : ({} as never)
  );

  if (!userLoaded || !loans) {
    return <div>Loading loan status...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Your Loan Applications</h1>
      {loans?.length === 0 ? (
        <div>No active loan applications</div>
      ) : (
        <div className="space-y-4">
          {loans?.map((loan: Doc<"loans">) => (
            <div key={loan._id} className="p-4 border rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold">{loan.title}</h2>
                  <p className="text-sm text-gray-600">
                    Applied on {new Date(loan.startDate).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  loan.status === 'approved' ? 'bg-green-100 text-green-800' :
                  loan.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {loan.status}
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Loan Amount</p>
                  <p className="font-medium">${loan.amount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Remaining Balance</p>
                  <p className="font-medium">${loan.remainingBalance.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Interest Rate</p>
                  <p className="font-medium">{loan.interestRate}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Term</p>
                  <p className="font-medium">{loan.loanTerm} years</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}