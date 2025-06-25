'use client';

import React from 'react';
import Image from 'next/image';
import Social1 from '../../public/images/soc1.png';
import Social2 from '../../public/images/soc2.png';
import Social3 from '../../public/images/soc3.png';
import Social4 from '../../public/images/soc4.png';

const Socials = () => {
  return (
    <div className="bg-tertiary sm:py-8 py-4">
      <div className="text-center mb-8">
        <p className="text-[#808080] text-sm">Trusted Partners across the globe!</p>
      </div>

      <div className="flex flex-wrap justify-around items-center md:px-20 px-6">
        <Image src={Social1} alt="KEDCO" className="w-16 sm:w-36 lg:w-32 object-contain" />
        <Image src={Social2} alt="Cremona" className="w-16 sm:w-36 lg:w-36 object-contain" />
        <Image src={Social3} alt="DCIM" className="w-16 sm:w-36 lg:w-28 object-contain" />
        <Image src={Social4} alt="P&I" className="w-12 sm:w-28 lg:w-24 object-contain" />
      </div>
    </div>
  );
};

export default Socials;
