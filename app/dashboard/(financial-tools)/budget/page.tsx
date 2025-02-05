"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster, toast } from "sonner";
import type { Id, Doc } from "@/convex/_generated/dataModel";

export default function BudgetsPage() {
  const { user, isSignedIn } = useUser();

  // Fetch budgets
  const budgets = useQuery(api.users.getBudgets, 
    isSignedIn ? { clerkId: user?.id ?? "" } : "skip"
  );

  const addBudget = useMutation(api.users.addBudget);
  const deleteBudget = useMutation(api.users.deleteBudget);

  const [formData, setFormData] = useState({
    name: "",
    limit: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignedIn || !user) return;

    const limit = parseFloat(formData.limit);
    if (isNaN(limit)) {
      toast.error("Please enter a valid limit");
      return;
    }

    try {
      await addBudget({
        clerkId: user.id,
        name: formData.name,
        limit,
        startDate: formData.startDate,
        endDate: formData.endDate,
      });
      toast.success("Budget added!");
      setFormData({ name: "", limit: "", startDate: "", endDate: "" });
    } catch (error) {
      toast.error("Error adding budget!");
    }
  };

  const handleDelete = async (id: Id<"budgets">) => {
    try {
      await deleteBudget({ id });
      toast.success("Budget deleted!");
    } catch (error) {
      toast.error("Error deleting budget!");
    }
  };

  return (
    <div className="p-4">
      <Toaster />
      <Card className="bg-[#1a2b1a] border border-green-600 shadow-lg">
        <CardHeader>
          <CardTitle className="text-green-400">Manage Budgets</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input name="name" placeholder="Budget Name" value={formData.name} onChange={handleChange} required />
            <Input name="limit" placeholder="Limit" type="number" value={formData.limit} onChange={handleChange} required />
            <Input name="startDate" placeholder="Start Date" type="date" value={formData.startDate} onChange={handleChange} required />
            <Input name="endDate" placeholder="End Date" type="date" value={formData.endDate} onChange={handleChange} required />
            <Button type="submit" className="bg-green-600 text-black hover:bg-green-500">Add Budget</Button>
          </form>

          <div className="mt-4 space-y-4">
            {budgets === undefined ? (
              <div className="text-gray-400">Loading budgets...</div>
            ) : budgets.length === 0 ? (
              <div className="text-gray-400">No budgets found.</div>
            ) : (
              budgets.map((budget: Doc<"budgets">) => (
                <div key={budget._id} className="flex justify-between p-4 border-b border-green-600 rounded-lg shadow-md bg-[#1a2b1a]">
                  <div>
                    <div className="text-lg text-white font-semibold">{budget.name}</div>
                    <div className="text-sm text-gray-300">
                      ${budget.limit.toFixed(2)} | {new Date(budget.startDate).toLocaleDateString()} - {new Date(budget.endDate).toLocaleDateString()}
                    </div>
                  </div>
                  <Button variant="destructive" onClick={() => handleDelete(budget._id)}>
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
