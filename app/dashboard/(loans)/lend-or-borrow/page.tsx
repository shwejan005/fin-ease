"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";

export default function LendOrBorrow() {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    amount: "",
    interestRate: "",
    loanTerm: "",
    contactNumber: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const createTransaction = useMutation(api.users.addTransaction);

  const handleSubmit = async (transactionType: "lend" | "borrow") => {
    if (!user) {
      setError("Please sign in to continue");
      return;
    }

    try {
      setLoading(true);
      await createTransaction({
        clerkId: user.id,
        transactionType,
        amount: parseFloat(formData.amount),
        interestRate: parseFloat(formData.interestRate),
        loanTerm: parseInt(formData.loanTerm),
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year default
        status: "pending_verification"
      });
      
      setError("");
      alert(`Request submitted! Please call ***********8 to complete verification`);
      setFormData({ amount: "", interestRate: "", loanTerm: "", contactNumber: "" });
      
    } catch (err) {
      setError("Failed to submit request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Financial Services</h1>
      <div className="space-y-4">
        <Input
          placeholder="Amount ($)"
          type="number"
          value={formData.amount}
          onChange={(e) => setFormData({...formData, amount: e.target.value})}
        />
        <Input
          placeholder="Interest Rate (%)"
          type="number"
          step="0.01"
          value={formData.interestRate}
          onChange={(e) => setFormData({...formData, interestRate: e.target.value})}
        />
        <Input
          placeholder="Loan Term (Years)"
          type="number"
          value={formData.loanTerm}
          onChange={(e) => setFormData({...formData, loanTerm: e.target.value})}
        />
        <Input
          placeholder="Contact Number"
          type="tel"
          value={formData.contactNumber}
          onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
        />

        <div className="flex gap-4 mt-6">
          <Button 
            onClick={() => handleSubmit("lend")}
            disabled={loading}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            {loading ? "Processing..." : "Lend Money"}
          </Button>
          <Button 
            onClick={() => handleSubmit("borrow")}
            disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            {loading ? "Processing..." : "Borrow Money"}
          </Button>
        </div>

        {error && <div className="text-red-500 mt-4">{error}</div>}

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            After submitting your request, please contact our customer care team at
            <span className="font-semibold ml-2">***********8</span> within 24 hours
            to complete verification.
          </p>
        </div>
      </div>
    </div>
  );
}