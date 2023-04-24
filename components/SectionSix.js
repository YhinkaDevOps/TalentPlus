import React from "react";

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
          <div className="px-4 py-3 text-[#004DB3]">all categories</div>
          <div className="px-4 py-3">design</div>
          <div className="px-4 py-3">development</div>
          <div className="px-4 py-3">marketing</div>
        </div>

        <div className="mt-[40px] grid grid-cols-3 gap-6">
          <div className="bg-white py-4 px-5 rounded-lg"></div>
          <div className="bg-white py-4 px-5 rounded-lg"></div>
          <div className="bg-white py-4 px-5 rounded-lg"></div>
          <div className="bg-white  py-4 px-5 rounded-lg"></div>
          <div className="bg-white  py-4 px-5 rounded-lg"></div>
          <div className="bg-white  py-4 px-5 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
