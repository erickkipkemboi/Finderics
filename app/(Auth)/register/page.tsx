"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface FormData {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const fields = ["name", "username", "email", "phone", "password", "confirmPassword"];

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!/^\+?\d{10,15}$/.test(formData.phone)) newErrors.phone = "Valid phone number is required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await registerUser(formData);
      router.push("/login");
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Enter your details to register.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
              <div key={field} className="space-y-2">
                <Label htmlFor={field}>
                  {field.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
                </Label>
                <Input
                  id={field}
                  type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
                  placeholder={`Enter your ${field}`}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  className={`border ${errors[field] ? "border-red-500" : ""}`}
                  aria-invalid={!!errors[field]}
                  aria-describedby={errors[field] ? `${field}-error` : undefined}
                />
                {errors[field] && <p id={`${field}-error`} className="text-sm text-red-500">{errors[field]}</p>}
              </div>
            ))}
            <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white" type="submit" disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-600">
          Already have an account? <Link href="/login" className="text-blue-600 hover:underline ml-1">Login here</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
