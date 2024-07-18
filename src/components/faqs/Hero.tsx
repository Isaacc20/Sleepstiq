import React from 'react'
import HeroText from '../shared/HeroText'
import { FaSearch } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { poppinsRegular } from '@/app/fonts'

const Hero = () => {
  return (
    <>
        <div className="hero bg-[#FBF9F2] h-full">
            <div className="pt-[188px] pb-72 w-4/6 mx-auto flex flex-col items-start gap-4">
                <HeroText span={"We're here to help you"} heading={"How can we assist?"} />
                <label className='flex items-center gap-7 w-5/6 md:w-3/4 text-3xl text-primary' htmlFor="search"><BiSearch /><input type="text" name="" id="search" placeholder='Search FAQs here' className={`${poppinsRegular.className}bg-transparent border-none outline-primary placeholder-primary text-[18px] leading-7 w-full h-full py-2 px-1`} /></label>
            </div>
        </div>
    </>
  )
}

export default Hero