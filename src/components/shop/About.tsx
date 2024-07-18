import React from 'react'
import Image from 'next/image'
import ProductCard from '../general/productCard'
import ProductAds from '../general/productAds'
import shop from "@/assets/images/shop.svg";

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
          <ProductAds className={"flex"} />
        )} />
      </div>
    </>
  )
}

export default About