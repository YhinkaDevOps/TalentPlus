import React from "react";
import Image from "next/image";
import Grade from "../public/assets/icons/grade.svg";
import { data } from "./data";

const SectionSix = () => {
  return (
    <div className="min-h-screen bg-[#F8F9F6]">
      <div className="lg:px-[120px]">
        <div className="flex flex-col gap-y-2 capitalize justify-center">
          <h1 className="class-header font-bold text-[56px] text-[#000F24] leading-[70px] mx-auto">
            browse our popular courses
          </h1>
          <p className="sectionefive-p capitalize text-[#A1A1A1] font-medium w-[65%] mx-auto">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>

        <div className="sectionefive-p font-bold mt-[40px] mx-auto capitalize flex justify-center space-between ">
          <div className="bg-white px-4 py-3 text-[#004DB3]">
            all categories
          </div>
          <div className="px-4 py-3 text-[#A1A1A1]">design</div>
          <div className="px-4 py-3 text-[#A1A1A1]">development</div>
          <div className="px-4 py-3 text-[#A1A1A1]">marketing</div>
        </div>

        <div className="mt-[40px] grid grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              className="bg-white py-4 px-5 rounded-lg flex flex-col gap-y-8"
              key={item.id}
            >
              <div className="flex flex-col gap-y-7">
                <div className="flex flex-col gap-y-4">
                  <div>
                    <Image
                      src={item.Image}
                      alt={item.name}
                      width={320}
                      height={200}
                    />
                  </div>
                  <div className="flex">
                    <span className="class-btn btn-bg font-bold py-1 px-5 capitalize text-[0.75rem] text-[#1E5DCE] rounded-2xl">
                      {item.type}
                    </span>

                    <div className="ml-auto flex gap-x-2">
                      <div className="flex items-center">
                        <span className="class-btn text-[0.75rem] text-[#A1A1A1]">
                          4.7K
                        </span>
                        <Image src={Grade} alt="grade__icon" />
                      </div>

                      <span className="class-btn flex items-center text-[0.75rem] text-[#A1A1A1]">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h1 className="class-header font-semibold text-[#000F24] w-[90%] text-xl"
                    >{item.header
                  }</h1>
                </div>
              </div>

              <div>bottom</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
