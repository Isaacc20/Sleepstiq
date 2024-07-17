import { poppinsBold, poppinsRegular } from "@/app/fonts";
import React from "react";

const HeroText = ({ span, heading }: { span: String; heading: String }) => {
  return (
    <>
      <div>
        <span className={`${poppinsRegular.className} text-lg text-primary`}>
          {span}
        </span>
        <h1 className={`${poppinsBold.className} text-primary`}>{heading}</h1>
      </div>
    </>
  );
};

export default HeroText;
