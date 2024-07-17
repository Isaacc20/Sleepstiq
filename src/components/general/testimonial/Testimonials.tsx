import React from "react";
import { TestimonialList } from "./TestimonialList";
import TestimonialCard from "@/ui/cards/testimonial";
import { poppinsBold, poppinsItalic } from "@/app/fonts";
import star from "@/assets/icons/star.svg";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <div className="w-full flex items-stretch gap-[26px] overflow-x-auto">
        {TestimonialList.map((el, i) => (
          <TestimonialCard key={i} name={el.name} review={el.review} />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
