import React from 'react'

function About() {
  return (
    <div className="max-w-screen-lg mx-auto py-6 px-6 sm:px-12 text-black bg-gray-50">
  <div className="flex-1 mb-6">
    <h2 className="text-2xl font-semibold text-start mb-2 text-black">Comprehensive Courses</h2>
    <p className="text-gray-800">
    We offer a wide range of courses in French, German, and IELTS preparation, designed to cater to learners 
    of all levels and learning styles. Whether you're a beginner or an advanced learner, our courses provide 
    structured instruction, interactive exercises, and personalized support to help you succeed.
    </p>
  </div>

  <div className="flex-1 mb-6">
    <h2 className="text-2xl font-semibold text-start mb-2 text-black">Expert Instructors</h2>
    <p className="text-gray-800">
    Our team of experienced instructors are experts in their respective fields, with years of teaching 
    experience and a passion for language learning. They are dedicated to providing engaging and effective
     instruction, guiding learners through their language learning journey with patience, encouragement, 
     and expertise.
    </p>
  </div>

  <div className="flex-1 mb-6">
    <h2 className="text-2xl font-semibold text-start mb-2 text-black">Flexible Learning</h2>
    <p className="text-gray-800">
    We understand that everyone has different schedules and learning preferences. That's why we offer flexible 
    learning options, allowing you to study at your own pace, on your own schedule, from anywhere in the world.
     Whether you prefer to learn on-the-go with our mobile app or dive deep into the material with our desktop 
     platform, we've got you covered.
    </p>
  </div>

  <div className="flex-1 mb-6">
    <h2 className="text-2xl font-semibold text-start mb-2 text-black">Community Engagement</h2>
    <p className="text-gray-800">
    Learning a new language is more fun and effective when you are part of a supportive community. Our platform
     provides opportunities for learners to connect with each other, share experiences, and practice their 
     language skills in a collaborative and encouraging environment. Join our vibrant community of language 
     enthusiasts and benefit from
    </p>
  </div>


  <div className="text-center mt-6">
    <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
      Join Our Courses
    </button>
  </div>
</div>

  )
}

export default About