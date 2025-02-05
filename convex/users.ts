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
  