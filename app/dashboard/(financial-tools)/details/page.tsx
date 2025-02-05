"use client";

import { useState, useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster, toast } from "sonner";

export default function AdditionalDetailsPage() {
  const { isSignedIn, user } = useUser();
  const updateDetails = useMutation(api.users.updateAdditionalDetails);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
  });

  // Extract email safely when user data loads
  useEffect(() => {
    if (isSignedIn && user) {
      const email =
        typeof user.primaryEmailAddress === "string"
          ? user.primaryEmailAddress
          : user.primaryEmailAddress?.emailAddress ?? ""; // Ensure a string

      setFormData((prev) => ({ ...prev, email }));
    }
  }, [isSignedIn, user]);

  if (!isSignedIn || !user) {
    return <div className="text-center text-gray-400">Please sign in to update your details.</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (value: string) => {
    setFormData({ ...formData, gender: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateDetails({
      clerkId: user.id, // Now safe to access
      email: formData.email,
      phone: formData.phone,
      age: formData.age ? parseInt(formData.age) : undefined,
      gender: formData.gender,
      city: formData.city,
    });

    toast.success("Details submitted successfully!");
    setFormData((prev) => ({
      email: prev.email, // Keep email the same
      phone: "",
      age: "",
      gender: "",
      city: "",
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <Toaster />
      <Card className="bg-[#0f1f0f] border border-green-600 w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-green-400">Update Additional Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              className="border-green-600 text-white"
              disabled
            />
            <Input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border-green-600 text-white"
            />
            <Input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="border-green-600 text-white"
            />
            <Select onValueChange={handleGenderChange}>
              <SelectTrigger className="border-green-600 text-white">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-green-600">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border-green-600 text-white"
            />
            <Button type="submit" className="bg-green-600 text-black hover:bg-green-500">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
