import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

function TuitionFeeCard() {
  return (
    <Card className="w-full rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-blue-900 text-center text-base md:text-lg lg:text-xl">
          TUITION FEE
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-2 flex justify-between items-center">
          <h3 className="text-blue-600 font-bold text-sm md:text-base lg:text-lg">TUITION FEE:</h3>
          <span className="text-sm md:text-base lg:text-lg"> Ksh.15,000/=</span>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <h3 className="text-sm md:text-base lg:text-lg">RATINGS:</h3>
          <div className="flex items-center space-x-1">
            {[...Array(4)].map((_, index) => (
              <Star key={index} className="text-yellow-400 h-4 w-4 md:h-5 md:w-5" />
            ))}
            <Star className="text-gray-400 h-4 w-4 md:h-5 md:w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TuitionFeeCard;
