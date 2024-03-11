import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
export default function WhatWeDo() {
  return (
    <>
    <div className="what-we-do">
      <div className="flex flex-col justify-center items-center mt-20 pb-20 pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-5">What we do?</h1>
          <p className="text-lg mb-20">
            Each property has its own meaning and we are ready to help you to
            get a property according to your taste.
          </p>
        </div>
        <div className="flex justify-center gap-5 mx-10">
          <div className="flex flex-col items-center bg-neutral-500 w-2/12 p-5 hover:bg-white">
            <div className="bg-white p-3 rounded-full">
              <BiSolidMessageAltDetail size="2em" />
            </div>
            <h3 className="font-bold pb-5 pt-5">Communications</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda commodi aperiam magni cum illo nesciunt similique
              voluptate officia.
            </p>
          </div>
          <div className="flex flex-col items-center bg-neutral-500 w-2/12 p-5 hover:bg-white">
            <div className="bg-white p-3 rounded-full">
              <IoShieldCheckmarkSharp size="2em" />
            </div>
            <h3 className="font-bold pb-5 pt-5">Reliability</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda commodi aperiam magni cum illo nesciunt similique
              voluptate officia.
            </p>
          </div>
          <div className="flex flex-col items-center bg-neutral-500 w-2/12 p-5 hover:bg-white">
            <div className="bg-white p-3 rounded-full">
              <FaMedal size="2em" />
            </div>
            <h3 className="font-bold pb-5 pt-5">Quality First</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda commodi aperiam magni cum illo nesciunt similique
              voluptate officia.
            </p>
          </div>
          <div className="flex flex-col items-center bg-neutral-500 w-2/12 p-5 hover:bg-white">
            <div className="bg-white p-3 rounded-full">
              <MdFamilyRestroom size="2em" />
            </div>
            <h3 className="font-bold pb-5 pt-5">Families</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda commodi aperiam magni cum illo nesciunt similique
              voluptate officia.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
