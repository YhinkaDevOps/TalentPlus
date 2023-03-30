import React from "react";
import Image from "next/image";
import Zoom from "../public/assets/icons/zoom.svg";
import Stripe from "../public/assets/icons/stripe.svg";
import Monday from "../public/assets/icons/monday.svg";
import Slack from "../public/assets/icons/slack.svg";
import Dropbox from "../public/assets/icons/dropbox.svg";

const SocialPlatforms = () => {
  return (
    <div className="bg-[#CCDBF0] py-[40px]">
      <div className="mx-auto">
        <div className="flex justify-center items-center gap-x-10">
          <div>
            <Image src={Zoom} alt="zoom__icon" />
          </div>
          <div>
            <Image src={Stripe} alt="stripe__icon" />
          </div>
          <div>
            <Image src={Monday} alt="monday__icon" />
          </div>
          <div>
            <Image src={Slack} alt="slack__icon" />
          </div>
          <div>
            <Image src={Dropbox} alt="dropbox__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPlatforms;
