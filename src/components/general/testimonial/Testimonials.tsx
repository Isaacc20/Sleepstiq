import React from "react";
import { TestimonialList } from "./TestimonialList";
import TestimonialCard from "@/components/general/testimonial/testimonial";

const Testimonials = () => {
  return (
    <>
      <div className="md:w-full flex items-stretch gap-[26px] overflow-x-auto px-4 md:p-0">
        {TestimonialList.map((el, i) => (
          <TestimonialCard key={i} name={el.name} review={el.review} />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
