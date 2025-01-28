import React from 'react';

function Content2() {
  return (
    <div className="max-w-7xl mx-auto p-4 text-xl">

      <div className="bg-gray-100 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 text-black">What We Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
          <div className="bg-gray-10 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="text-left">
              <h3 className="font-semibold text-lg md:text-xl mb-4">Language Learning Courses</h3>
              <p className="text-sm md:text-base text-gray-700">
                Our platform offers a comprehensive range of courses in German, French, and IELTS preparation, 
                taught by experienced instructors who are experts in their fields.
              </p>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                From mastering grammar and vocabulary 
                to developing conversation skills and cultural understanding, our courses are designed to empower you 
                on your language learning journey.
              </p>
            </div>
          </div>

     
          <div className="bg-gray-10 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="text-start">
              <h3 className="font-semibold text-lg md:text-xl mb-4">IELTS Exam</h3>
              <p className="text-sm md:text-base text-gray-700">
                Our specialized IELTS preparation program provides targeted instruction, practice tests, 
                and valuable tips to help you achieve your desired score.
              </p>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                With our proven strategies 
                and personalized guidance, you all be well prepared to tackle every section of the exam 
                with confidence.
              </p>
            </div>
          </div>

      
          <div className="bg-gray-10 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="text-start">
              <h3 className="font-semibold text-lg md:text-xl mb-4">Journey to Success</h3>
              <p className="text-sm md:text-base text-gray-700">
                Begin your journey to language proficiency and exam success today. Explore our courses, 
                connect with our passionate instructors, and embark on an exciting adventure of learning and discovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content2;
