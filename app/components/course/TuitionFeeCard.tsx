import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


function TuitionFeeCard() {
  return (
    <Card className="max-w-sm shadow-lg">
    <CardHeader>
      <CardTitle className="text-blue-900 text-center">TUITION FEE</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="mt-4 flex items-center space-x-1"> 
        <h3 className='text-bold text-blue-600'>TUITION FEE:</h3>15,000</div>
      <div className="mt-4 flex items-center space-x-1">
       <h3>RATINGS:</h3> {[...Array(4)].map((_, index) => (
          <Star key={index} className="text-yellow-400 h-5 w-5" />
        ))}
        <Star className="text-gray-400 h-5 w-5" />
      </div>
    </CardContent>
  </Card>
  )
}
import { Star } from 'lucide-react';

export default TuitionFeeCard