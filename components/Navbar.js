import React from "react";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-[#004DB3] pb-4 md:pb-0 pt-10 px-4 md:px-[10px] lg:px-[120px] md:pt-12">
      <div className="mx-auto ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="logo text-white flex items-center italics text-[19px] md:text-[32px] lg:text-[47px] hover:text-gray-300">
              <Link href="/">Techtime</Link>
            </span>
          </div>

          <div className="hidden md:block">
            <ul className="nav-list flex gap-x-6 items-center text-base font-medium">
              <li className="text-white hover:text-gray-300">
                <Link href="#">Home</Link>
              </li>
              <li className="text-[#AAC4E6] hover:text-white">
                <Link href="#">About</Link>
              </li>
              <li className="text-[#AAC4E6] hover:text-white">
                <Link href="#">Courses</Link>
              </li>
              <li className="text-[#AAC4E6] hover:text-white">
                <Link href="#">Testimonials</Link>
              </li>
              <li className="text-[#AAC4E6] hover:text-white">
                <Link href="#">Community</Link>
              </li>
              <button className="flex items-center py-4 px-8 rounded bg-white text-[#004DB3] hover:text-gray-300 ">
                <Link href="#">Enroll Now</Link>
              </button>
            </ul>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-100`}>
        <ul className=".nav-list  flex flex-col items-center gap-y-4 py-3 px-4 text-lg font-bold">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Courses</Link>
          </li>
          <li>
            <Link href="#">Testimonials</Link>
          </li>
          <li className="text-[#004DB3]">
            <button>
              <Link href="#">Enroll Now</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
