import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    clerkId: v.string(),
  }).index("by_clerk_id", ["clerkId"]),

  additionalDetails: defineTable({
    clerkId: v.string(),
    email: v.string(), // Added email here
    phone: v.optional(v.string()),
    age: v.optional(v.number()),
    gender: v.optional(v.string()),
    city: v.optional(v.string()),
  }).index("by_clerk_id", ["clerkId"]),

  expenses: defineTable({
    clerkId: v.string(),
    title: v.string(),
    amount: v.number(),
    category: v.string(),
    date: v.string(),
  }).index("by_clerk_id", ["clerkId"]),

  budgets: defineTable({
    clerkId: v.string(),
    name: v.string(),
    limit: v.number(),
    startDate: v.string(),
    endDate: v.string(),
  }).index("by_clerk_id", ["clerkId"]),

  loans: defineTable({
    clerkId: v.string(), // User's Clerk ID
    title: v.string(), // Title or description of the loan
    amount: v.number(), // Loan amount
    interestRate: v.number(), // Interest rate in percentage
    loanTerm: v.number(), // Loan term in months
    startDate: v.string(), // Loan start date (ISO string)
    status: v.string(), // Status of the loan (e.g., "active", "paid off", "pending")
    remainingBalance: v.number(), // Remaining balance of the loan
  }).index("by_clerk_id", ["clerkId"]),

  // Table to store transactions like lending or borrowing
  transactions: defineTable({
    clerkId: v.string(), // User's Clerk ID
    transactionType: v.string(), // Type of transaction ("lend" or "borrow")
    amount: v.number(), // Amount involved in the transaction
    interestRate: v.number(), // Interest rate for the transaction
    loanTerm: v.number(), // Loan term for the transaction in months
    startDate: v.string(), // Transaction start date (ISO string)
    endDate: v.string(), // End date of the transaction
    status: v.string(), // Status of the transaction (e.g., "pending", "completed")
  }).index("by_clerk_id", ["clerkId"]),

  // Table to store the user’s loan status
  loanStatus: defineTable({
    clerkId: v.string(),
    totalLoans: v.number(),
    activeLoans: v.number(),
    totalBorrowed: v.number(),
    totalLent: v.number(),
  }).index("by_clerk_id", ["clerkId"]),

});
