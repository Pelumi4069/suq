"use client";

import { useState } from 'react';
import Image from 'next/image';
import ServiceBanner from '../../public/images/servb.png';
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaEnvelopeOpen } from "react-icons/fa6";
import { ImCalendar } from "react-icons/im";

const Services = () => {
  const services = [
    {
      title: 'Power & Utility Vending',
      icon: "/images/serv1.png",
      description: ['Prepaid Electricity Vending: Secure and reliable platforms for prepaid electricity token purchases', 'Utility Bill Payment Solutions: Streamlined payment processing for water, gas, and other utility bills.', 'Vendor Management Systems: Comprehensive solutions for managing and optimizing utility vending networks.', 'Revenue Collection Systems: Efficient systems for utility revenue collection and management.', 'Smart Metering Integration: Integration and support for smart metering technologies.'],
      images: ['/images/ser1.png', '/images/ser2.png', '/images/ser3.png', '/images/ser4.png', '/images/ser5.png']
    },
    {
      title: 'Technology Support Services',
      icon: "/images/serv2.png",
      description: ['Payment Processing Solutions: Secure and efficient payment gateway integration and management', 'Collections Management Systems: Automated and effective systems for debt recovery and collections.', 'IT Infrastructure Support: Comprehensive IT support, including hardware, software, and network maintenance.', 'Software Development & Integration: Custom software solutions and seamless integration with existing systems.', 'Cybersecurity Services: Robust security solutions to protect sensitive data and systems.'],
      images: ['/images/ser6.png', '/images/ser7.png', '/images/ser8.png', '/images/ser9.png', '/images/ser10.png']
    },
    {
      title: 'Business Advisory & Consulting',
      icon: "/images/serv3.png",
      description: ['Strategic Business Planning: Development of strategic plans to drive business growth and profitability', 'Financial Advisory Services: Financial analysis, forecasting, and investment advisory.', 'Operational Efficiency Consulting: Process optimization and implementation of best practices.', 'Market Research & Analysis: Comprehensive market analysis and insights for informed decision-making.', 'Project Management Consulting: Expert project management services for successful project execution.'],
      images: ['/images/ser11.png', '/images/ser12.png', '/images/ser13.png', '/images/ser14.png', '/images/ser15.png']
    },
    {
      title: 'General Support Services',
      icon: "/images/serv4.png",
      description: ['Customer Support & Helpdesk: Dedicated customer support and technical assistance.', 'Training & Capacity Building: Customized training programs for staff and clients.', 'Logistics & Supply Chain Management: Efficient logistics and supply chain solutions.', 'Business Process Outsourcing (BPO): Outsourcing of non-core business functions.'],
      images: ['/images/ser16.png', '/images/ser17.png', '/images/ser18.png', '/images/ser19.png']
    },
    {
      title: 'Energy Services',
      icon: "/images/serv5.png",
      description: ['Energy Efficiency Audits: Assessments and recommendations for optimizing energy consumption.', 'Renewable Energy Solutions: Consulting and implementation of solar, wind, and other renewable energy systems.', 'Energy Management Systems: Implementation and support for energy monitoring and control systems.', 'Power System Design & Consulting: Expert consultation on power system design and implementation.'],
      images: ['/images/ser20.png', '/images/ser21.png', '/images/ser22.png', '/images/ser23.png']
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]); // Default to "Power & Utility Vending"

  return (
    <div className="min-h-screen">
      <div className="text-[#000] py-8 sm:py-10 px-2 sm:px-4 relative">
        <Image
          src={ServiceBanner}
          alt="Decorative Frame"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          className="z-0"
        />
        <div className="text-center mb-10 sm:mb-20 relative z-10 flex flex-col items-center">
          <p className="text-[#8f8f8f] mb-2 text-xs sm:text-sm font-bold">Our Services</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-[500] max-w-5xl mt-2">To empower our clients with cutting-edge technology and expert consulting, driving sustainable growth and development.</p>
        </div>
        <div className="grid grid-cols-2 justify-center items-center sm:grid-cols-3 md:grid-cols-5  space-y-2 sm:space-y-0 sm:space-x-4 mb-2 relative z-10 md:px-20 sm:px-6 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer p-2 hover:bg-blue-50 transition flex flex-col items-center justify-center text-center"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex items-center justify-center h-12 sm:h-16">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={30} sm={{ width: 40 }}
                  height={30}
                  className="object-contain"
                />
              </div>
              <h3 className="text-center text-[10px] sm:text-xs font-[500] mt-2 w-28 sm:w-40">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-8 sm:py-10 px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          {selectedService && (
            <div className="py-2 sm:py-4 px-4 sm:px-16 mt-4 sm:mt-6 w-full sm:w-[70%]">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{selectedService.title}</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-2 sm:mb-4 text-[10px] sm:text-[13px] tracking-wide leading-5 sm:leading-6">
                {selectedService.description.map((desc, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </ul>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                {selectedService.images.map((img, idx) => (
                  <div key={idx} className="relative w-full h-24 sm:h-40 md:h-[153px]">
                    <Image
                      src={img}
                      alt={`${selectedService.title} image ${idx + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="justify-center items-start w-full sm:w-[35%] flex flex-col gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 rounded-lg border-[#DBBD02] border-b-[3px] sm:border-b-[4px] flex items-center bg-gray-100 h-20 sm:h-28 gap-4 sm:gap-8">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-gray-800">Lets plan an online meeting</h2>
                <p className="text-gray-600 text-[10px] sm:text-xs">We are available now</p>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <ImCalendar className="text-[1.2rem] sm:text-[1.8rem]" />
              </div>
            </div>

            <div className="justify-start gap-2 sm:gap-4 flex flex-col">
              <p className="text-xs sm:text-base">Contact us today to discover how SCL Consulting Limited can help you achieve your goals.</p>
              <div className="flex items-center gap-1 sm:gap-2 flex-row">
                <div>
                  <BiSolidPhoneCall className="text-[1.2rem] sm:text-[1.8rem]" />
                </div>
                <div className="flex-col gap-0">
                  <div>
                    <p className="text-sm sm:text-xs font-bold">Phone Number</p>
                  </div>
                  <div>
                    <a href="tel:+2348166475855" className="font-[500] text-xs sm:text-sm">
                      +2348166475855
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 flex-row">
                <div>
                  <FaEnvelopeOpen className="text-[1.2rem] sm:text-[1.8rem] justify-start" />
                </div>
                <div className="flex-col gap-0">
                  <div>
                    <p className="text-base sm:text-xs font-bold">E-Mail Address</p>
                  </div>
                  <div>
                    <a href="" className="font-[500] text-xs sm:text-sm">
                      Info@sclglobalconsulting.com<br />
                      Sclconsulting07@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;