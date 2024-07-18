import { poppinsBold, poppinsItalic } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import star from "@/assets/icons/star.svg";
import pen from "@/assets/images/pen.svg";

const ReviewCard = ({
    review,
    name,
  }: {
    review: String;
    name: String;
  }) => {
  return (
    <>
        <div className="w-[306px] min-w-72 flex flex-col gap-4 shadow-lg rounded-lg">
            <Image className='w-full h-1/2' src={pen} alt="product image" />
            <div className="flex flex-col gap-3 p-7 pr-2">
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
        </div>
    </>
  )
}

export default ReviewCard