
import React from 'react'
import Content3 from '@/app/components/Content3'
import TuitionFeeCard from '@/app/components/course/TuitionFeeCard'

function page() {
  return (
  <>  <Content3 />

<div className="max-w-7xl mx-auto mt-[-3rem] text-xl">
      <div className=" rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 text-black">Our Courses Catalogue</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="flex-1">
                <img
                src="/images/french.jpg" 
                alt="Team Discussion"
                className="rounded-lg shadow-md w-full object-cover"
                />
            </div>
                  
            <div className="text-start">
                <TuitionFeeCard/>
          
            </div>
          </div>
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
               <div className="flex-1">
            <img
            src="/images/german.jpg" 
            alt="Team Discussion"
            className="rounded-lg shadow-md w-full object-cover"
            />
         </div>
                        
         <div className="text-start">
                <TuitionFeeCard/>
          
            </div>
          </div>
           <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
             <div className="flex-1">
        <img
          src="/images/ielts.png" 
          alt="Team Discussion"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>
      <div className="text-start">
                <TuitionFeeCard/>
                </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page