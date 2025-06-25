import React from 'react';

const Banner = () => {
  return (
    <div className='h-[45vh] bg-[url(/images/banner.png)] bg-cover bg-center flex items-center justify-center w-full'>
      <div className='flex flex-col items-center text-center gap-4 w-[80%] md:w-[60%]'>
        <h3 className='text-blaq-1 font-bold text-2xl md:text-4xl leading-snug'>
        Don't miss out on the opportunity to take control of your learning. 
        </h3>
        <p className='text-blaq-1 text-lg'>
        Your academic success is just a click away. Join Rolic International School’s learning community today and unlock your full potential.
        </p>
        <button
          type="button"
          className=" sm:text-sm bg-purple-1  mt-2 flex justify-center items-center text-sm  rounded py-2 px-8 text-white">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Banner;
