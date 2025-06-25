import React from 'react';

const About = () => {
  return (
    <div className=" py-12 px-4 lg:px-16 sm:px-8 ">
        <div className="text-start item-start">
            <p className='text-[#8f8f8f] mb-2 text-xs sm:text-sm font-bold'>WHO WE ARE</p>
          <h1 className="text-2xl sm:text-3xl  text-[#000] sm:mb-2 mb-1 font-extrabold ">ABOUT SCL</h1>
          <div className=" mb-4">
        <div className="w-32 sm:w-48 border-b-[6px] sm:border-b-[8px]  border-[#2D4BFF]"></div>
      </div>
        </div>

      <div className="text-start  items-center">
          <p className="text-[#636363] mb-4 text-[13px] tracking-[0.035rem] leading-6">
          SCL Consulting Limited was founded in 2010 with a vision to provide innovative and reliable solutions in the power, utility, and technology sectors. Incorporated in Nigeria, we have established ourselves as a trusted partner for businesses and communities, with offices strategically located in Abuja and Kano. Our team of experienced professionals is dedicated to delivering exceptional services and building long-term relationships with our clients.
            </p>

        </div>
    </div>
  )
}

export default About;
