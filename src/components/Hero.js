"use client";

import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { BiSolidPhoneCall } from "react-icons/bi";
import { Splide, SplideSlide } from '@splidejs/react-splide';


const slides = [
  {
    text: "Empowering Africa Through Energy Innovation",
    subtext: "SCL Consulting Limited, established in 2010, is a leading provider of power, utility, technology, and business advisory services in Nigeria. With offices in Abuja and Kano, we deliver tailored solutions to drive your success.",
    button1: "Our Services",
    button2: "Our Commitment",
    imageUrl: "/images/hero11.jpeg", 
  },
  {
    text: "Empowering Africa Through Energy Innovation",
    subtext: "SCL Consulting Limited, established in 2010, is a leading provider of power, utility, technology, and business advisory services in Nigeria. With offices in Abuja and Kano, we deliver tailored solutions to drive your success.",
    button1: "Insurance",
    button2: "Risk Portfolio Management",
    imageUrl: "/images/hero22.jpeg", 
  },
  {
    text: "Empowering Africa Through Energy Innovation",
    subtext: "SCL Consulting Limited, established in 2010, is a leading provider of power, utility, technology, and business advisory services in Nigeria. With offices in Abuja and Kano, we deliver tailored solutions to drive your success.",
    button1: "Consultancy",
    button2: "Claims Management",
    imageUrl: "/images/hero33.jpeg", 
  },
];

const Hero = () => {
  return (
    <div className="relative">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 4000,
          arrows: false,
          pagination: true,
        }}
        className="hero-slider"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div
              className="relative h-[560px] flex items-center justify-start text-center bg-cover bg-center "
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 text-start text-white px-4 sm:px-8 md:px-16 ">
                <h2 className="lg:text-4xl md:text-2xl text-xl max-w-xl font-bold md:my-6 my-4 ">{slide.text}</h2>
                <p className=" lg:text-[13px] leading-5 tracking-wider text-xs max-w-[800px] font-normal md:mb-6 mb-4">{slide.subtext}</p>
                <div className="md:mt-4 mt-2 flex md:gap-4 gap-2 justify-start  ">
                  <button className="px-4 py-2 md:text-sm text-xs bg-[#2D4BFF]  rounded text-white flex justify-between gap-10">
                    {slide.button1}
                    <span>{'>'}</span>
                  </button>

                  <div className="flex items-center gap-2 flex-row">
                            <div>
                            <BiSolidPhoneCall className="text-[1.9rem]" />
                            </div>
                  
                            <div className='flex-col'>
                              <div>
                            <p className='text-xs text-gray-300' >  Service Department</p>
                              </div>
                              <div>
                            <a href="tel:+2348166475855" className="  text-sm">
                              +2348166475855
                            </a>
                              </div>
                            </div>
                            </div>


                  {/* <button className="px-4 py-2 md:text-sm text-xs border font-semibold border-[#289BD4] rounded text-[#289BD4]">
                    {slide.button2}
                  </button> */}

                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Hero;
