import React from 'react'

function FrenchDescription() {
  return (
 <div className="max-w-7xl mx-auto p-4">
      {/* Outer Big Card */}
      <div className=" p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 text-black">Course Description</h2>
        <div className='text-2xl ms-11 mb-4 font-semibold text-indigo-500'>
            <h3> French Course Description</h3>
          </div>
        {/* Inner Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
          {/* First Card */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-medium mb-4">Beginner French (A1/A2):</h3>
              <ul className="list-disc text-sm pl-5">
                <li>Introduction to basic French vocabulary and grammar</li>
                <li>Building foundational skills in listening, speaking, reading, and writing.</li>
                <li>Preparation for DELF A1/A2 exams.</li>
              </ul>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-medium mb-4" >Intermediate French (B1/B2):</h3>
              <ul className="list-disc text-sm pl-5">
                <li>Introduction to basic French vocabulary and grammar</li>
                <li>Building foundational skills in listening, speaking, reading, and writing.</li>
                <li>Preparation for DELF A1/A2 exams.</li>
              </ul>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-medium mb-4" >Advanced French (C1/C2):</h3>
              <ul className="list-disc text-sm pl-5">
                <li> Expansion of vocabulary and more complex grammatical structures.</li>
                <li> Practice in expressing opinions, discussing various topics, and understanding authentic texts.</li>
                <li>Preparation for DELF B1/B2 exams.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrenchDescription;