"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Doc, Id } from "@/convex/_generated/dataModel"; // Import required types
import { useUser } from "@clerk/clerk-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster, toast } from "sonner";

export default function ExpensesPage() {
  const { user, isSignedIn } = useUser();

  // Always pass the query reference, conditionally pass arguments
  const expenses = useQuery(api.users.getExpenses, 
    isSignedIn ? { clerkId: user?.id ?? "" } : "skip"
  );

  const addExpense = useMutation(api.users.addExpense);
  const deleteExpense = useMutation(api.users.deleteExpense);

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignedIn || !user) return;

    const amount = parseFloat(formData.amount);
    if (isNaN(amount)) {
      toast.error("Please enter a valid amount");
      return;
    }

    try {
      await addExpense({
        clerkId: user.id,
        title: formData.title,
        amount,
        category: formData.category,
        date: formData.date,
      });
      toast.success("Expense added!");
      setFormData({ title: "", amount: "", category: "", date: "" });
    } catch (error) {
      toast.error("Error adding expense!");
    }
  };

  const handleDelete = async (id: Id<"expenses">) => {
    try {
      await deleteExpense({ id });
      toast.success("Expense deleted!");
    } catch (error) {
      toast.error("Error deleting expense!");
    }
  };

  return (
    <div className="p-4">
      <Toaster />
      <Card className="bg-[#0f1f0f] border border-green-600">
        <CardHeader>
          <CardTitle className="text-green-400">Manage Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
            <Input 
              name="amount" 
              placeholder="Amount" 
              type="number" 
              step="0.01" 
              value={formData.amount} 
              onChange={handleChange} 
              required 
            />
            <Input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
            <Input name="date" placeholder="Date" type="date" value={formData.date} onChange={handleChange} required />
            <Button type="submit" className="bg-green-600 text-black hover:bg-green-500">Add Expense</Button>
          </form>

          <div className="mt-4 space-y-2">
            {expenses === undefined ? (
              <div className="text-gray-400">Loading expenses...</div>
            ) : expenses.length === 0 ? (
              <div className="text-gray-400">No expenses found.</div>
            ) : (
              expenses.map((expense: Doc<"expenses">) => (
                <div key={expense._id} className="flex justify-between p-2 border-b border-green-600">
                  <div>
                    {expense.title} - ${expense.amount.toFixed(2)} 
                    <span className="text-gray-400 text-sm ml-2">
                      ({expense.category}, {new Date(expense.date).toLocaleDateString()})
                    </span>
                  </div>
                  <Button 
                    variant="destructive" 
                    onClick={() => handleDelete(expense._id)}
                  >
                    Delete
                  </Button>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}