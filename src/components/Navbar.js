"use client";

import React, { useState } from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex-col sticky top-0 z-50 bg-white shadow-md">
      <div className="flex border-b border-gray-200 justify-between items-center px-4 sm:px-6 lg:px-4 py-2 text-sm text-black">
        {/* Left Contact Info */}
        <div className="hidden sm:flex items-center gap-2 flex-row">
          <div>
            <BiSolidPhoneCall className="text-[1.5rem] sm:text-[1.8rem]" />
          </div>
          <div className="flex-col gap-0">
            <div>
              <p className="text-xs">Do you need help?</p>
            </div>
            <div>
              <a href="tel:+2348166475855" className="font-semibold text-xs sm:text-sm">
                +2348166475855
              </a>
            </div>
          </div>
        </div>

        {/* Center Logo and Nav (Logo always visible, Nav toggled on mobile) */}
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Image src="/images/logo1.png" alt="SCL Logo" width={40} height={24} sm={{ width: 56, height: 30 }} />
            <h1 className="font-bold text-xl sm:text-2xl">SCL CONSULTING</h1>
          </div>
        </div>

        {/* Right Social Icons and Language (Hidden on mobile, shown on larger screens) */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-4">
          <Link href="https://linkedin.com" target="_blank"><FaLinkedinIn className="text-sm sm:text-base" /></Link>
          <Link href="https://instagram.com" target="_blank"><FaInstagram className="text-sm sm:text-base" /></Link>
          <Link href="https://twitter.com" target="_blank"><FaTwitter className="text-sm sm:text-base" /></Link>
          <div className="flex items-center gap-1">
            <Image src="/images/Icon.png" alt="Flag" width={24} height={24} sm={{ width: 30, height: 30 }} />
            <div>
              <p className="text-xs text-gray-500">Language</p>
              <p className="text-xs text-[#000] font-semibold">English</p>
            </div>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Links (Hidden on mobile by default, shown when menu is open) */}
      <div className={`sm:flex sm:justify-center sm:items-center sm:py-4 ${isMenuOpen ? 'flex flex-col items-center py-4' : 'hidden'}`}>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm sm:text-base cursor-pointer">
          {['Home', 'About Us', 'Services', 'Mission/Vision', 'Contact'].map((item, index) => (
            <p
              key={index}
              // href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className={`hover:text-[#2D4BFF] ${item === 'Home' ? 'text-[#2D4BFF] font-bold' : ''}`}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;