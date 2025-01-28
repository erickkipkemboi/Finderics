import { Button } from "@/components/ui/button";
import React from "react";

export default function MiddlePage() {
  return (
    <div className="relative min-h-screen">
      
      <div
        className="absolute inset-0 bg-[url('/images/chumba.jpg')] bg-bottom bg-cover brightness-50">
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-32">
        <div className="text-xl md:text-4xl font-bold mb-4 leading-tight">
                 WELCOME TO FINDERS INTERNATIONAL CONSULTANCY
        </div>
       <div className="text-2xl font-light">
         Your Ultimate Destination for Language Learning and IELTS 
                <div className="text-center">Exams Preparation!</div>
        </div>
        <div className="pt-10 flex space-x-4">
          <Button className="bg-yellow-600 text-xl h-15 font-bold text-white-500 py-3 px-6 w-auto">Check Our Courses</Button>
          <Button className="bg-blue-950 text-xl  h-15  text-white py-3 px-6 w-auto">About Us</Button>
                  </div>
   </div>
    </div>
  );
}
