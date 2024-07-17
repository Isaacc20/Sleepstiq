import { poppinsBold, poppinsItalic, poppinsRegular } from "@/app/fonts";
import Header from "@/ui/Header";
import Image from "next/image";
import React from "react";

import user from "@/assets/images/user.svg";

const Customers = () => {
  return (
    <>
      <div className="flex pt-44 pb-36 justify-between">
        <div className="max-w-[474px] flex flex-col gap-7">
          <span
            className={`${poppinsRegular.className} text-sm text-primary leading-5`}
          >
            Our Amazing Story
          </span>
          <Header text={"10k+Happy Customers"} />
          <span
            className={`${poppinsRegular.className} text-base text-primary leading[26px] pt-7`}
          >
            There&apos;s no secret sauce, no wizard behind the curtain. What
            makes Aerolab tick is an interdisciplinary team with a framework
            that fosters candid collaboration.
          </span>
          <p
            className={`${poppinsBold.className} text-base leading-6 text-primary underline`}
          >
             More know About us
          </p>
        </div>
        <div className="max-w-[475px] bg-card shadow-2xl flex flex-col gap-14 pt-14 pb-10 pl-10">
          <span
            className={`${poppinsItalic.className} text-2xl text-reviews leading-10`}
          >
            I&apos;m a very anxious person but use this and feel so relaxed and
            sleep way better now with the aid of sleepstiq.{" "}
          </span>
          <div className="flex items-center gap-9">
            <Image src={user} alt="user" />
            <div className="flex flex-col">
              <span
                className={`${poppinsBold.className} text-[22px] leading-8 text-reviews`}
              >
                James Miller
              </span>
              <span
                className={`${poppinsRegular.className} text-base leading-6 text-[#152934]`}
              >
                CEO, Techbias
              </span>
            </div>
          </div>
          <div className="flex gap-5 mx-auto -my-5">
            <div className="w-[10px] h-[10px] bg-[#C4C4C4] rounded-full"></div>
            <div className="w-[10px] h-[10px] bg-[#C4C4C4] rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
