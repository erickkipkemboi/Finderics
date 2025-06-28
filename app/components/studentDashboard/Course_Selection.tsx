"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode";



interface Course {
  id: string;
  name: string;
  image: string;
  price: number;
}
interface DecodedToken {
  userId: number;
  username: string;
  role: string;
  iat: number;
  exp: number;
}

const courses: Course[] = [
  { id: "french", name: "French Course", image: "/images/french.jpg", price: 1 },
  { id: "german", name: "German Course", image: "/images/german.jpg", price: 2 },
  { id: "ielts", name: "IELTS Course", image: "/images/ielts.png", price: 3},
];

// ✅ Your backend base URL

function CourseSelection() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const isValidPhone = (phone: string) => /^2547\d{8}$/.test(phone);

  const handleSelect = (course: Course) => {
    setSelectedCourse(course);
    setDialogOpen(true);
  };

  const handlePayment = async () => {
    if (!selectedCourse) return;
  
    if (!isValidPhone(phone)) {
      toast.error("Enter a valid Safaricom number (2547XXXXXXXX)");
      return;
    }
  
    setLoading(true);
  
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("You must be logged in to make a payment.");
        return;
      }
  
      const decoded: DecodedToken = jwtDecode(token);
      const username = decoded.username;
  
      const baseline = process.env.NEXT_PUBLIC_API_BASE_URL;
  
      const response = await axios.post(`${baseline}/api/payment/stk-push`, {
        phoneNumber: phone,
        amount: selectedCourse.price,
        username,
        course: selectedCourse.name,
      });
  
      const data = response.data;
  
      if (data && data.success && data.data.ResponseCode === "0") {
        toast.success("✅ STK Push sent. Enter M-Pesa PIN on your phone.");
      } else {
        toast.error("Payment initiation failed. Try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Error sending STK Push. Try again.");
    } finally {
      setLoading(false);
      setDialogOpen(false);
    }
  };
  
  
  return (
    
    <div className="max-w-7xl mx-auto mt-12 px-6 text-xl">
          <ToastContainer position="top-right" autoClose={5000} />
      <div className="rounded-lg shadow-lg p-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-black">
          Select a Course to Enroll
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer rounded-xl border flex flex-col">
              <CardHeader className="p-0 flex-shrink-0">
                <Image
                  src={course.image}
                  alt={course.name}
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-t-xl"
                  priority
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                <p className="text-lg font-bold mt-2 text-gray-700">Ksh {course.price}</p>
              </CardContent>
              <CardFooter className="p-6 flex-shrink-0">
                <Button variant="default" onClick={() => handleSelect(course)} className="w-full" aria-label={`Select ${course.name}`}>
                  Select Course
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Payment Confirmation</DialogTitle>
            </DialogHeader>

            {selectedCourse && (
              <div className="text-lg text-gray-700 space-y-4">
                <p><strong>Course:</strong> {selectedCourse.name}</p>
                <p><strong>Amount:</strong> Ksh {selectedCourse.price}</p>

                <Input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Safaricom number (2547XXXXXXXX)"
                  className="mt-2"
                />
              </div>
            )}

            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button
                onClick={handlePayment}
                disabled={loading || !isValidPhone(phone)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {loading ? "Processing..." : "Pay via M-Pesa"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default CourseSelection;
