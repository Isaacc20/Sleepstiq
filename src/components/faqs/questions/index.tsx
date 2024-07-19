import { poppinsBold, poppinsRegular } from '@/app/fonts'
import React from 'react'
import Accordion from './Accordion'

const Questions = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row items-start gap-16 mx-auto w-3/4 md:w-5/6 py-40">
            <div className="flex flex-row md:flex-col items-center gap-[30px]">
                <span className={`${poppinsBold.className} text-[18px] leading-7 text-primary flex items-center gap-2`}>Sleepstiq <span className='py-[10px] pr-12 bg-card rounded-md'>Product</span></span>
                <span className={`${poppinsRegular.className} text-[18px] leading-7 text-primary`}>Order</span>
                <span className={`${poppinsRegular.className} text-[18px] leading-7 text-primary mt-[10px]`}>Melantolin</span>
            </div>
            <Accordion />
        </div>
    </>
  )
}

export default Questions