"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { Doc } from "@/convex/_generated/dataModel";

export default function LoanCalculator() {
  const { user } = useUser();
  const [loanData, setLoanData] = useState({
    amount: "",
    interestRate: "",
    term: "",
    title: "",
  });
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createLoan = useMutation(api.users.addLoan);

  const calculatePayment = () => {
    const principal = parseFloat(loanData.amount);
    const interest = parseFloat(loanData.interestRate) / 100 / 12;
    const term = parseInt(loanData.term) * 12;

    if (isNaN(principal) || isNaN(interest) || isNaN(term)) {
      setError("Please fill all fields with valid numbers");
      return;
    }

    const payment = (principal * interest * Math.pow(1 + interest, term)) / 
                   (Math.pow(1 + interest, term) - 1);
    setMonthlyPayment(payment);
    setError("");
  };

  const submitLoanRequest = async () => {
    if (!user) {
      setError("Please sign in to request a loan");
      return;
    }

    if (!monthlyPayment) {
      setError("Please calculate payment first");
      return;
    }

    try {
      setLoading(true);
      await createLoan({
        clerkId: user.id,
        title: loanData.title || `Loan ${new Date().toLocaleDateString()}`,
        amount: parseFloat(loanData.amount),
        interestRate: parseFloat(loanData.interestRate),
        loanTerm: parseInt(loanData.term),
        startDate: new Date().toISOString(),
        status: "pending",
        remainingBalance: parseFloat(loanData.amount),
      });
      setError("");
      alert("Loan request submitted! Our team will contact you at ******* for verification");
      // Reset form
      setLoanData({ amount: "", interestRate: "", term: "", title: "" });
      setMonthlyPayment(null);
    } catch (err) {
      setError("Failed to submit loan request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Loan Request Form</h1>
      <div className="space-y-4">
        <Input
          placeholder="Loan Title (Optional)"
          value={loanData.title}
          onChange={(e) => setLoanData({...loanData, title: e.target.value})}
        />
        <Input
          placeholder="Loan Amount ($)"
          type="number"
          value={loanData.amount}
          onChange={(e) => setLoanData({...loanData, amount: e.target.value})}
        />
        <Input
          placeholder="Annual Interest Rate (%)"
          type="number"
          step="0.01"
          value={loanData.interestRate}
          onChange={(e) => setLoanData({...loanData, interestRate: e.target.value})}
        />
        <Input
          placeholder="Loan Term (Years)"
          type="number"
          value={loanData.term}
          onChange={(e) => setLoanData({...loanData, term: e.target.value})}
        />

        <div className="flex gap-4">
          <Button onClick={calculatePayment} disabled={loading}>
            Calculate Payment
          </Button>
          <Button 
            onClick={submitLoanRequest} 
            disabled={!monthlyPayment || loading}
            variant="secondary"
          >
            {loading ? "Submitting..." : "Submit Loan Request"}
          </Button>
        </div>

        {error && <div className="text-red-500">{error}</div>}

        {monthlyPayment !== null && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-lg font-semibold">Estimated Monthly Payment:</h2>
            <p className="text-2xl font-bold">${monthlyPayment.toFixed(2)}</p>
            <p className="text-sm mt-2 text-gray-600">
              After submitting, our team will contact you within 24 hours at ******* 
              to complete verification
            </p>
          </div>
        )}
      </div>
    </div>
  );
}