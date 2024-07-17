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
      <div className="w-full h-max">
        <div className="absolute -top-16 right-0 flex justify-around items-center bg-white shadow-2xl py-10">
          <Image src={google} alt="Google logo" />
          <Image src={forbes} alt="Forbes logo" />
          <Image src={bloomberg} alt="Bloomberg logo" />
          <Image src={sleepReview} alt="Sleep review logo" />
          <Image src={influencive} alt="Influencive logo" />
        </div>
      </div>
    </>
  );
};

export default Partners;
