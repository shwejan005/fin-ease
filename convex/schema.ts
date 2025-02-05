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
});
