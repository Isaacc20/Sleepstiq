import { poppinsRegular } from "@/app/fonts";
import Button from "@/components/shared/button";
import Header from "@/components/shared/header";
import React from "react";

const ProductCard = ({
  head,
  body,
  button,
  other,
}: {
  head: String;
  body: String;
  button: String;
  other: any;
}) => {
  return (
    <>
      <div className="w-3/4 md:w-1/3 flex flex-col items-start gap-7">
        <Header text={head} />
        <span
          className={`${poppinsRegular.className} text-base leading-[26px] text-primary`}
        >
          {body}
        </span>
        {other}
        <Button text={button} />
      </div>
    </>
  );
};

export default ProductCard;
