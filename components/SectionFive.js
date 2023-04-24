import React from "react";
import Image from "next/image";
import SectionFiveimg from "../public/assets/images/section-five.svg";
import BoundingBox from "../public/assets/icons/bounding-box.svg";
import Schedule from "../public/assets/icons/schedule.svg";
import LocalAtm from "../public/assets/icons/local-atm.svg";
import Education from "../public/assets/icons/cast-for-education.svg";

const SectionFive = () => {
  return (
    <div className="min-h-screen bg-[#F8F9F6]">
      <div className="px-4 md:px-[10px] lg:px-[120px] pt-[70px]">
        <div className="flex gap-x-[50px]">
          <div className="basis-[55%] flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-4">
              <h1 className="class-header font-bold text-[56px] text-[#000F24] leading-[70px]">
                This is why we are best from others
              </h1>

              <p className="sectionefive-p capitalize text-[#A1A1A1] font-medium">
                high-defination video is video of higher resolution and quality
                than standard definition. while there’s no standard meaning for
                high definition, generally any standard video image
              </p>
            </div>
            <Image src={SectionFiveimg} alt="section__five__image" />
          </div>

          <div className="flex-1 mt-[80px] mb-[85px] grid grid-cols-2 gap-6 ">
            <div className="bg-white rounded-lg py-8 px-4 flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-6">
                <Image src={Education} alt="education__icon" />
                <div className="flex flex-col gap-y-1">
                  <h1 className=".sectionefive-p capitalize text-[#000000] font-bold">
                    experienced mentors
                  </h1>

                  <p className=".sectionefive-p capitalize text-medium text-[#A1A1A1] text-[0.75rem]">
                    high-defination video is video of higher resolution and
                    quality than standard definition. high-defination video is
                    video of higher resolution and quality than standard
                    definition.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg py-8 px-4 ">
              <div className="flex flex-col gap-y-6">
                <Image src={Schedule} alt="schedule__icon" />
                <div className="flex flex-col gap-y-1">
                  <h1 className=".sectionefive-p capitalize text-[#000000] font-bold">
                    one-on-one-meetings
                  </h1>

                  <p className=".sectionefive-p capitalize text-medium text-[#A1A1A1] text-[0.75rem]">
                    high-defination video is video of higher resolution and
                    quality than standard definition. high-defination video is
                    video of higher resolution and quality than standard
                    definition.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg py-8 px-4 ">
              <div className="flex flex-col gap-y-6">
                <Image src={BoundingBox} alt="bounding__icon" />
                <div className="flex flex-col gap-y-1">
                  <h1 className=".sectionefive-p capitalize text-[#000000] font-bold">
                    one-on-one-meetings
                  </h1>

                  <p className=".sectionefive-p capitalize text-medium text-[#A1A1A1] text-[0.75rem]">
                    high-defination video is video of higher resolution and
                    quality than standard definition. high-defination video is
                    video of higher resolution and quality than standard
                    definition.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg py-8 px-4 ">
              <div className="flex flex-col gap-y-6">
                <Image src={LocalAtm} alt="atm__icon" />
                <div className="flex flex-col gap-y-1">
                  <h1 className=".sectionefive-p capitalize text-[#000000] font-bold">
                    affordable prices
                  </h1>

                  <p className=".sectionefive-p capitalize text-medium text-[#A1A1A1] text-[0.75rem]">
                    high-defination video is video of higher resolution and
                    quality than standard definition. high-defination video is
                    video of higher resolution and quality than standard
                    definition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
