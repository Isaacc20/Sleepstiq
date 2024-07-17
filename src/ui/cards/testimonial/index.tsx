import { poppinsBold, poppinsItalic } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import star from "@/assets/icons/star.svg";

const TestimonialCard = ({
  review,
  name,
}: {
  review: String;
  name: String;
}) => {
  return (
    <>
      <div className="w-[306px] aspect-video p-7 pr-2 bg-card flex flex-col justify-between rounded-lg">
        <span
          className={`${poppinsItalic.className} text-base leading-[26px] text-reviews`}
        >
          {review}
        </span>
        <div className="flex flex-col gap-2">
          <p
            className={`${poppinsBold.className} text-base leading-6 text-reviews`}
          >
            {name}
          </p>
          <div className="flex gap-[10px]">
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
