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

});
