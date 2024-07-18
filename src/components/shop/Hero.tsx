import React from 'react'
import HeroText from '../shared/HeroText'

const Hero = () => {
  return (
    <>
        <div className="hero shop-hero h-full">
        <div className="pt-[188px] pb-72 w-4/6 mx-auto flex flex-col items-start">
          <HeroText span={"We're here to help you"} heading={"Relax & Rest"} />
        </div>
      </div>
    </>
  )
}

export default Hero