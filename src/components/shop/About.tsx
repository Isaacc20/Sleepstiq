import React from 'react'
import Image from 'next/image'
import ProductCard from '../general/productCard'
import ProductAds from '../general/productAds'
import shop from "@/assets/images/shop.svg";
import { poppinsRegular, poppinsSemiBold } from '@/app/fonts';

const About = () => {
  return (
    <>
        <div className="w-full flex flex-col md:flex-row justify-around lg:justify-start gap-7 md:gap-14 items-center py-32">
        <div className="relative w-3/4 md:w-1/2">
          <Image src={shop} alt="shop img" />
          {/* <ProductAds className={"absolute bottom-0 right-0 shadow-lg rounded-lg bg-white hidden md:flex p-8 pr-4"} /> */}
        </div>
        <ProductCard head={"About Product"} body={"Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed."} button={"Buy"}
         other={(
          <>
            <ProductAds className={"flex"} />
            <div className="flex gap-14">
              <div className="flex flex-col">
                <span className={`${poppinsRegular} text-base leading-[26px] text-black`}>Price</span>
                <span className={`${poppinsSemiBold.className} text-base text-black leading-[26px]`}>USD 50</span>
              </div>
              <div className="flex flex-col">
                <span className={`${poppinsRegular} text-base leading-[26px] text-black`}>Unit</span>
                <input type="number" defaultValue={2} width={63} className='border rounded-md w-1/3 text-center' />
              </div>
            </div>
          </>
        )} />
      </div>
    </>
  )
}

export default About