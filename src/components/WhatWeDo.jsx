import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";

export default function WhatWeDo() {
  return (
    <>
      <div className="what-we-do bg-gray-100">
        <div className="flex flex-col justify-center items-center pt-20 pb-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-5 text-gray-800">What we do?</h1>
            <p className="text-xl mb-20 text-gray-600">
              Each property has its own meaning and we are ready to help you to get a property according to your taste.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-10">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-blue-500 p-4 rounded-full mb-5">
                <BiSolidMessageAltDetail size="2em" className="text-white" />
              </div>
              <h3 className="font-bold text-xl pb-3 text-gray-800">Communications</h3>
              <p className="text-center text-gray-600">
                We believe in open and transparent communication with our clients to ensure their needs are met and expectations are exceeded.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-green-500 p-4 rounded-full mb-5">
                <IoShieldCheckmarkSharp size="2em" className="text-white" />
              </div>
              <h3 className="font-bold text-xl pb-3 text-gray-800">Reliability</h3>
              <p className="text-center text-gray-600">
                Our team is dedicated to providing reliable services and support throughout the entire property acquisition process.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-yellow-500 p-4 rounded-full mb-5">
                <FaMedal size="2em" className="text-white" />
              </div>
              <h3 className="font-bold text-xl pb-3 text-gray-800">Quality First</h3>
              <p className="text-center text-gray-600">
                We prioritize quality in every aspect of our services, from property selection to customer support, ensuring the best experience for our clients.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-purple-500 p-4 rounded-full mb-5">
                <MdFamilyRestroom size="2em" className="text-white" />
              </div>
              <h3 className="font-bold text-xl pb-3 text-gray-800">Families</h3>
              <p className="text-center text-gray-600">
                We understand the unique needs of families and strive to find properties that cater to their specific requirements and preferences.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-red-500 p-4 rounded-full mb-5">
                <RiCustomerService2Fill size="2em" className="text-white" />
              </div>
              <h3 className="font-bold text-xl pb-3 text-gray-800">Customer Support</h3>
              <p className="text-center text-gray-600">
                Our dedicated customer support team is always ready to assist you with any questions, concerns, or guidance you may need throughout your property journey.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-orange-500 p-4 rounded-full mb-5">
                <GiTakeMyMoney size="2em" className="text-white" />
              </div>
              <h3 className="font-bold text-xl pb-3 text-gray-800">Competitive Pricing</h3>
              <p className="text-center text-gray-600">
                We offer competitive pricing options and work closely with our clients to find properties that fit their budget without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}