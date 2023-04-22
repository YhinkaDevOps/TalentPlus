import React from "react";
import Image from "next/image";
import Classesimg from "../public/assets/images/classes-image.svg";
import Volume from "../public/assets/icons/volume_up.svg";
import Description from "../public/assets/icons/description.svg";
import Autoplay from "../public/assets/icons/autoplay.svg";
import Settings from "../public/assets/icons/settings_input_antenna.svg";

const Classes = () => {
  return (
    <div className="min-h-screen bg-[#F8F9F6]">
      <div className="px-4 md:px-[10px] lg:px-[120px]">
        <div className="flex">
          <div className="basis-4/5 flex flex-col gap-y-6 pt-[146px]">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-4">
                <h1 className="class-header font-bold text-[56px] text-[#000F24]">
                  High quality video, audio & live classes
                </h1>
                <p className="class-text text-[#A1A1A1] font-medium text-base">
                  High-defination video is video of higher resolution and
                  quality than standard
                  <br /> definition. while there’s no standard meaning for high
                  definition, generally any
                  <br /> standard video image
                </p>
              </div>

              <div>
                <button className="class-btn text-white bg-[#004DB3] rounded py-4 px-8 flex items-center font-bold hover:text-gray-300">
                  View Courses
                </button>
              </div>
            </div>
            <div className="class-types flex flex-col gap-y-6 font-bold font-base text-[#000F24]">
              <div className="flex items-center gap-x-6">
                <div className="bg-white flex gap-x-4 py-4 pr-14 pl-6 rounded-lg">
                  <Image src={Volume} alt="volume_icon" />
                  <span>Audio Classes</span>
                </div>
                <div className="bg-white flex gap-x-4 py-4 pr-14 pl-6 rounded-lg">
                  <Image src={Settings} alt="settings_icon" />
                  <span>Live Classes</span>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <div className="bg-white flex gap-x-4 py-4 pr-14 pl-6 rounded-lg">
                  <Image src={Autoplay} alt="autoplay_icon" />
                  <span> Recorded Classes</span>
                </div>
                <div className="bg-white flex gap-x-4 py-4 pr-14 pl-6 rounded-lg">
                  <Image src={Description} alt="description_icon" />
                  <span>50+ notes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 pt-[96px]">
            <Image src={Classesimg} alt="classes_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
