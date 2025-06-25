"use client";

import React from 'react';
import Image from 'next/image';
import TeamBanner from '../../public/images/teamb.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'DR. Patrick Nwafor',
      role: 'Chief Executive Officer',
      image: '/images/team1.png',
    },
    // {
    //   name: 'Jesse Pinkman',
    //   role: 'Co-Founder & COO',
    //   image: '/images/team1.png',
    // },
    // {
    //   name: 'Skylar White',
    //   role: 'Chief Operating Officer',
    //   image: '/images/team1.png',
    // },
    // {
    //   name: 'Saul Goodman',
    //   role: 'Chief Legal Officer',
    //   image: '/images/team1.png',
    // },
    // {
    //   name: 'Hank Schrader',
    //   role: 'Security',
    //   image: '/images/team1.png',
    // },
    // {
    //   name: 'Mike Ehrmantraut',
    //   role: 'Chief of Staff',
    //   image: '/images/team1.png',
    // },
    // {
    //   name: 'Tuco Salamanca',
    //   role: 'Chief Financial Officer',
    //   image: '/images/team1.png',
    // },
    // {
    //   name: 'Gustavo Fring',
    //   role: 'Chief Marketing Officer',
    //   image: '/images/team1.png',
    // },
  ];

  return (
    <div className="relative text-white py-6 sm:py-8 flex items-center justify-center">
      {/* Background image */}
      <Image
        src={TeamBanner}
        alt="Decorative Frame"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
        className="z-0"
      />

      {/* Text content */}
      <div className="relative z-10 w-full flex flex-col text-center gap-4 sm:gap-6 md:gap-12 py-2 px-4 sm:px-8 md:px-16">
        <div>
          <div className="text-start item-start">
            <p className="text-[#8f8f8f] mb-2 text-xs sm:text-sm font-bold">OUR TEAM</p>
            <h1 className="text-2xl sm:text-3xl text-[#000] mb-2 font-extrabold">Meet The Team</h1>
            <div className="mb-4 sm:mb-6">
              <div className="w-32 sm:w-48 border-b-[6px] sm:border-b-[8px] border-[#2D4BFF]"></div>
            </div>
          </div>

          <div className="text-start items-center">
            {/* <p className="text-base sm:text-lg text-black mb-4">Meet Our Team dedicated to Serving you every need</p> */}
            {/* <p className="text-[#636363] mb-4 text-[10px] sm:text-[12px] tracking-[0.035rem] leading-5 sm:leading-6">
              Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.
            </p> */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 justify-around">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-full h-48 sm:h-60 md:h-72 relative mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name} profile`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">{member.name}</h3>
              {/* <p className="text-gray-600 mb-4">{member.role}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;