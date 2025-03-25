"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubmitForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const isValidPhoneNumber = (phone: string) => {
    return /^(2547\d{8}|07\d{8})$/.test(phone);
  };

  const isFormValid = Object.values(formData).every((field) => field.trim() !== "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidPhoneNumber(formData.phone)) {
      toast.error("Phone number should start with 2547 or 07 followed by 8 digits.");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      );

      toast.success("Form submitted successfully! Redirecting to login...");

      setFormData({ fullname: "", username: "", phone: "", email: "", password: "" });

      setTimeout(() => router.push("/login"), 2000);
    } catch (error) {
      let errorMessage = "Error submitting form.";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.error || "Request failed.";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      // ✅ Show toast for duplicate username, email, or phone
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <Button type="submit" className="w-full" disabled={loading || !isFormValid}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default SubmitForm;
