"use client";

import React from 'react';
import Image from 'next/image';
import Banner from '../../public/images/ban.png';

const Mission = () => {
  return (
    <div className="relative text-white py-6 md:py-8 px-2 md:px-6 flex items-center justify-center">
      {/* Background image */}
      <Image
        src={Banner}
        alt="Decorative Frame"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
        className="z-0"
      />

      {/* Text content */}
      <div className="relative z-10 w-full flex flex-col text-center gap-4 sm:gap-6 md:gap-12 py-2 px-4 sm:px-6 lg:px-[8rem]">
        <div className="w-full text-center">
          <h2 className="text-base sm:text-lg mb-1">Our Mission</h2>
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-center">
            We believe that access to reliable, clean energy is fundamental to Africa's development. Our mission is to transform communities by providing innovative energy solutions that drive economic growth, improve quality of life, and create sustainable futures.
          </p>
        </div>
        <div className="w-full text-center">
          <h2 className="text-base sm:text-lg mb-1">Our Vision</h2>
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-center">
            Integrity, Innovation, Excellence, Client Focus, and Community Development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;