import React from 'react'

function IeltsDescription() {
  return (
    <div className="max-w-7xl mx-auto p-4">
    {/* Outer Big Card */}
          <div className='text-2xl ms-11 mb-4 font-semibold text-indigo-500'>
          <h3>IELTS Preparation Courses </h3>
        </div>
      {/* Inner Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
        {/* First Card */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-medium mb-4">IELTS Listening & Speaking</h3>
            <ul className="list-disc text-sm pl-5">
              <li>Strategies and techniques for improving listening comprehension and spoken communication.</li>
              <li>Practice in various types of speaking tasks and simulated speaking tests..</li>
              <li> Preparation for the IELTS Listening and Speaking sections...</li>
            </ul>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-medium mb-4" >IELTS Reading & Writing</h3>
            <ul className="list-disc text-sm pl-5">
              <li>Skills development in reading comprehension and academic writing</li>
              <li> Analysis of different text types and practice in writing essays, reports, and summaries.</li>
              <li>Preparation for the IELTS Reading and Writing sections</li>
            </ul>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-medium mb-4" >IELTS Comprehensive Course</h3>
            <ul className="list-disc text-sm pl-5">
              <li> Comprehensive preparation covering all sections of the IELTS exam.</li>
              <li>Intensive practice in all language skills, with focus on test-taking strategies and time management.</li>
              <li>Preparation for the IELTS Academic or General Training exam..</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default IeltsDescription;