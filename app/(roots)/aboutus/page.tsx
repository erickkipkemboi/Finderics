import React from 'react';
import Image from 'next/image';
import Content3 from '@/app/components/Content3';
import About from '@/app/components/elements/About';

function page() {
  return (
    <>
      <div className="relative">
        <Content3 />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h3 className="text-4xl font-bold">About Us</h3>
          <p className="text-xl">Home/About Us</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-4 py-20 bg-white-500 rounded-lg mt-[-3rem]">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            {/* Optimized Image */}
            <Image
              src="/images/banner.jpg"
              alt="Banner showcasing our mission"
              width={800} 
              height={600} 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 text-yellow-400">
              Our Mission
            </h2>
            <p className="text-black">
              At Finders International Consultancy, we believe that language is the key to unlocking new opportunities, broadening horizons, and connecting with people from diverse cultures. Our mission is to increasingly globalized world.
            </p>
          </div>
        </div>
      </div>

      <About />
    </>
  );
}

export default page;
