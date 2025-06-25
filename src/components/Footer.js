import Foot from '../../public/images/foot.png';
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaEnvelopeOpen } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-6 md:gap-8">
      <div className="relative py-6 md:py-8 flex items-center justify-center">
        {/* Background image */}
        <Image
          src={Foot}
          alt="Decorative Frame"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          className="z-0"
        />

        {/* Text content */}
        <div className="relative z-10 w-full flex flex-col text-center gap-4 md:gap-12 py-2 px-4 sm:px-10 md:px-20">
          <div className="w-full text-start flex flex-col md:flex-row md:gap-20">
            <div className="flex flex-col text-base md:text-lg mb-4 md:mb-0">
              <p>Have any questions?</p>
              <p>Contact Us</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 justify-around">
              <div className="flex items-center gap-2 flex-row">
                <div>
                  <BiSolidPhoneCall className="text-[1.5rem] md:text-[1.8rem]" />
                </div>
                <div className="flex-col gap-0">
                  <div>
                    <p className="text-xs">Phone Number</p>
                  </div>
                  <div>
                    <a href="tel:+2348166475855" className="font-[500] text-xs md:text-sm">
                      +2348166475855
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-row">
                <div>
                  <FaEnvelopeOpen className="text-[1.5rem] md:text-[1.8rem]" />
                </div>
                <div className="flex-col gap-0">
                  <div>
                    <p className="text-xs">E-Mail Address</p>
                  </div>
                  <div>
                    <a href="" className="font-[500] text-xs md:text-sm">
                       Info@sclglobalconsulting.com<br />
                      Sclconsulting07@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-row">
                <div>
                  <FaLocationDot className="text-[1.5rem] md:text-[1.8rem]" />
                </div>
                <div className="flex-col gap-0">
                  <div>
                    <p className="text-xs">Headquarters</p>
                  </div>
                  <div>
                    <a href="tel:+2348166475855" className="font-[500] text-xs md:text-sm">
                      No 203 Sarari Street Kano , Kano State
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full text-start flex flex-row gap-28 md:gap-40">
            <div className="mb-6 sm:mb-0">
              <h3 className="text-sm md:text-base font-[500] mb-4">Services</h3>
              <ul className="flex flex-col gap-3 md:gap-4">
                <li className="text-[0.65rem] md:text-xs hover:underline cursor-pointer duration-300">
                  Prepaid Electricity Vending
                </li>
                <li className="text-[0.65rem] md:text-xs hover:underline cursor-pointer duration-300">
                  Utility Bill Payment Solutions
                </li>
                <li className="text-[0.65rem] md:text-xs hover:underline cursor-pointer duration-300">
                  Vendor Management Systems
                </li>
                <li className="text-[0.65rem] md:text-xs hover:underline cursor-pointer duration-300">
                  Revenue Collection Systems
                </li>
                <li className="text-[0.65rem] md:text-xs hover:underline cursor-pointer duration-300">
                  Smart Metering Integration
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-[500] mb-4">Corporate</h3>
              <ul className="flex flex-col gap-3 md:gap-4">
                <li className="text-[0.65rem] md:text-xs hover:underline cursor-pointer duration-300">
                  About Us
                </li>
                <li className="text-[0.65rem] md:text-xs hover:underline cursor-pointer duration-300">
                  Our Values
                </li>
                <li className="text-[0.65rem] md:text-xs hover:underline cursor-pointer duration-300">
                  Human Resources
                </li>
                <li className="text-[0.65rem] md:text-xs hover:underline cursor-pointer duration-300">
                  News
                </li>
                <li className="text-[0.65rem] md:text-xs hover:underline cursor-pointer duration-300">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between py-4 items-center text-xs md:text-sm px-4 sm:px-10 md:px-20 gap-4 sm:gap-0">
        <p>Copyright by | All rights reserved.</p>
        <p>Our Privacy and Personal Data Protection Policy | Terms and Conditions of Use</p>
      </div>
    </div>
  );
};

export default Footer;