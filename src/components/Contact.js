import React from 'react';
import Image from 'next/image';
import Mapp from '../../public/images/mapp.png';

const Contact = () => {
  return (
    <div className=" py-12 flex items-start justify-center flex-col md:px-16 px-4 sm:px-8 ">
        <div className="text-start item-start">
            <p className='text-[#8f8f8f] mb-2 text-xs sm:text-sm font-bold'>Contact Us </p>
          <h1 className="text-2xl sm:text-3xl text-[#000] mb-2 font-extrabold ">Reach Out Today</h1>
          <div className=" mb-6">
        <div className="w-48 border-b-[8px]  border-[#2D4BFF]"></div>
      </div>
        </div>

        <div className='w-full '>
        <form className="bg-white py-6  mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full p-3 rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-3 rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-3 rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Your Address"
              className="w-full p-3 rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Enter Your Message Here..."
            className="w-full h-32 p-3 rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-[#2D4BFF] text-white rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        </div>

        <div className='w-full'>
        <div className="flex md:flex-row flex-col gap-6 w-full">
          <div className="relative  h-64 rounded-lg overflow-hidden grid-cols-2 md:w-[65%] w-full">
            <Image
              src="/images/mapp.png"
              alt="Company Location Map"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>


          <div className=' justify-center items-center md:w-[35%] w-full '>
          <div className=" p-6 rounded-lg  border-[#DBBD02] border-b-[4px] flex items-center bg-gray-100 h-32 ">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Company Address</h2>
              <p className="text-gray-600">No 203 Sarari Street Kano , Kano State</p>
            </div>
            <div className="flex items-center space-x-2">
            </div>
          </div>
          </div>


        </div>
        </div>
    </div>
  )
}

export default Contact
