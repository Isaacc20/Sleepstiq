import Image from "next/image";
import React from "react";

// LOGOS
import google from "@/assets/logo/google.svg";
import forbes from "@/assets/logo/forbes.svg";
import bloomberg from "@/assets/logo/bloomberg.svg";
import sleepReview from "@/assets/logo/sleep-review.svg";
import influencive from "@/assets/logo/influencive.svg";

const Partners = () => {
  return (
    <>
      {/* <div className="h-max"> */}
        <div className="w-5/6 absolute -top-16 right-[8%] md:right-0 flex justify-around items-center bg-white shadow-2xl py-10">
          <Image className="logo" src={google} alt="Google logo" />
          <Image className="logo" src={forbes} alt="Forbes logo" />
          <Image className="logo" src={bloomberg} alt="Bloomberg logo" />
          <Image className="logo" src={sleepReview} alt="Sleep review logo" />
          <Image className="logo" src={influencive} alt="Influencive logo" />
        </div>
      {/* </div> */}
    </>
  );
};

export default Partners;
