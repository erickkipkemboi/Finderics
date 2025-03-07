import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";


interface Course {
  id: string;
  name: string;
  image: string;
  price: number;
}

const courses: Course[] = [
  { id: "french", name: "French Course", image: "/images/french.jpg", price: 5000 },
  { id: "german", name: "German Course", image: "/images/german.jpg", price: 5500 },
  { id: "ielts", name: "IELTS Course", image: "/images/ielts.png", price: 6000 },
];

function CourseSelection() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSelect = (course: Course) => {
    setSelectedCourse(course);
    setDialogOpen(true);
  };

  const handlePayment = async () => {
    if (!phone.match(/^2547\d{8}$/)) {
      alert("Enter a valid Safaricom number (e.g., 2547XXXXXXXX)");
      return;
    }

    if (!selectedCourse) return;

    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:5000/mpesa/stkpush", {
        phone,
        amount: selectedCourse.price,
      });

      if (data.ResponseCode === "0") {
        alert("Check your M-Pesa phone to complete the payment.");
      } else {
        alert("Payment request failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Error processing payment. Please check your connection.");
    } finally {
      setLoading(false);
      setDialogOpen(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 px-6 text-xl">
      <div className="rounded-lg shadow-lg p-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-black">
          Select a Course to Enroll
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer rounded-xl border">
              <CardHeader className="p-0">
                <Image src={course.image} alt={course.name} layout="responsive" width={500} height={300} className="rounded-t-xl" />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                <p className="text-lg font-bold mt-2 text-gray-700">Ksh {course.price}</p>
              </CardContent>
              <CardFooter className="p-6">
                <Button variant="default" onClick={() => handleSelect(course)} className="w-full">
                  Select Course
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Order Summary</DialogTitle>
            </DialogHeader>

            {selectedCourse && (
              <div className="text-lg text-gray-700">
                <p>
                  <strong>Course:</strong> {selectedCourse.name}
                </p>
                <p>
                  <strong>Price:</strong> Ksh {selectedCourse.price}
                </p>

                <Input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Safaricom number (2547XXXXXXXX)"
                  className="mt-4"
                />
              </div>
            )}

            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handlePayment} disabled={loading || !phone.match(/^2547\d{8}$/)} className="bg-green-600 hover:bg-green-700 text-white">
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
