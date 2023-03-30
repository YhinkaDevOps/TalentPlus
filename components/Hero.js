import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heroimg from "../public/assets/images/hero.svg";
import Arrowicon from "../public/assets/icons/arrow_outward.svg";
import Heroframes from "../public/assets/images/hero-frames.svg";

const Hero = () => {
  return (
    <div className="px-4 md:px-[10px] lg:px-[120px] bg-[#004DB3]">
      <div className="flex gap-x-[35px]">
        <div classNaame="basis-1/2">
          <div className="mb-4">
            <div className="flex flex-col gap-y-4 pt-[60px] mb-4 ">
              <h1 className="hero-heading font-bold text-white text-[50px]">
                Grow your skills to <br /> advance your career path{" "}
              </h1>
              <p className="hero-text text-white font-medium text-base">
                build your future with our quality education. the best and
                largest all-
                <br />
                in-one online tutoring platform in the world
              </p>
            </div>
            <div className="flex gap-x-6 text-base">
              <button className="hero-btn flex items-center border-[1px] font-bold border-white py-4 px-8 rounded text-white bg-[#004DB3] hover:text-gray-300 ">
                <Link href="#">Get Started Now</Link>
                <span className=" ml-[8px]">
                  <Image src={Arrowicon} alt="arrow__icon" />
                </span>
              </button>
              <button className="hero-btn flex items-center font-bold py-4 px-8 rounded bg-white text-[#004DB3] hover:text-gray-300 ">
                <Link href="#">Enroll Now</Link>
              </button>
            </div>
          </div>

          <div className="flex">
            <Image src={Heroframes} alt="hero__frames" />
            <span className="ml-2 flex flex-col">
              <span className="hero-frame-text text-white font-bold  text-2xl">
                255k+
              </span>        
              <span className="hero-frame-text flex items-center text-base text-white">
                previews
              </span>
            </span>
          </div>
        </div>
        <div className="basis-1/2">
          <Image src={Heroimg} alt="Hero image" width={450} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
