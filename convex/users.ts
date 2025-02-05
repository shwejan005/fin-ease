import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ✅ Sync user from Clerk (Insert or Update)
export const syncUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    clerkId: v.string(),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (existingUser) {
      await ctx.db.patch(existingUser._id, {
        name: args.name,
        email: args.email,
        image: args.image ?? existingUser.image, // Keep existing image if not provided
      });
      return existingUser._id;
    }

    return await ctx.db.insert("users", args);
  },
});

// ✅ Fetch user by Clerk ID
export const getUserByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();
  },
});

// Fetch additional details by Clerk ID
export const getAdditionalDetails = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("additionalDetails")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();
  },
});
export const updateAdditionalDetails = mutation({
    args: {
      clerkId: v.string(),
      email: v.string(),
      phone: v.optional(v.string()),
      age: v.optional(v.number()),
      gender: v.optional(v.string()),
      city: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
      const existingDetails = await ctx.db
        .query("additionalDetails")
        .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
        .first();
  
      if (existingDetails) {
        await ctx.db.patch(existingDetails._id, {
          email: args.email, // Always update email
          phone: args.phone ?? existingDetails.phone,
          age: args.age ?? existingDetails.age,
          gender: args.gender ?? existingDetails.gender,
          city: args.city ?? existingDetails.city,
        });
        return existingDetails._id;
      }
  
      return await ctx.db.insert("additionalDetails", args);
    },
  });

  export const getExpenses = query({
    args: { clerkId: v.string() },
    handler: async (ctx, args) => {
      return await ctx.db
        .query("expenses")
        .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
        .collect();
    },
  });
  
  // Add an expense
  export const addExpense = mutation({
    args: {
      clerkId: v.string(),
      title: v.string(),
      amount: v.number(),
      category: v.string(),
      date: v.string(),
    },
    handler: async (ctx, args) => {
      return await ctx.db.insert("expenses", args);
    },
  });
  
  // Update an expense
  export const updateExpense = mutation({
    args: {
      id: v.id("expenses"),
      title: v.optional(v.string()),
      amount: v.optional(v.number()),
      category: v.optional(v.string()),
      date: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
      await ctx.db.patch(args.id, args);
    },
  });
  
  // Delete an expense
  export const deleteExpense = mutation({
    args: { id: v.id("expenses") },
    handler: async (ctx, args) => {
      await ctx.db.delete(args.id);
    },
  });
  
  export const getBudgets = query({
    args: { clerkId: v.string() },
    handler: async (ctx, args) => {
      return await ctx.db
        .query("budgets")
        .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
        .collect();
    },
  });
  
  // Add a budget
  export const addBudget = mutation({
    args: {
      clerkId: v.string(),
      name: v.string(),
      limit: v.number(),
      startDate: v.string(),
      endDate: v.string(),
    },
    handler: async (ctx, args) => {
      return await ctx.db.insert("budgets", args);
    },
  });
  
  // Update a budget
  export const updateBudget = mutation({
    args: {
      id: v.id("budgets"),
      name: v.optional(v.string()),
      limit: v.optional(v.number()),
      startDate: v.optional(v.string()),
      endDate: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
      await ctx.db.patch(args.id, args);
    },
  });
  
  // Delete a budget
  export const deleteBudget = mutation({
    args: { id: v.id("budgets") },
    handler: async (ctx, args) => {
      await ctx.db.delete(args.id);
    },
  });
  