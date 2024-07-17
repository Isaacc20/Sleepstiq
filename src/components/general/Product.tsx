import Image from "next/image";
import React from "react";
import shop from "@/assets/images/shop.svg";

const Product = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/2">
          <Image src={shop} alt="shop img" />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Product;
