import React from 'react'
import Header from '../shared/header'
import { poppinsRegular } from '@/app/fonts'
import Button from '../shared/button'

const Shop = () => {
  return (
    <>
        <div className="flex flex-col items-center text-center mx-auto w-3/4 lg:w-4/6 gap-5">
            <Header text={"Visit Our Shop"} />
            <div className="flex flex-col items-center gap-[30px]">
                <span className={`${poppinsRegular.className} text-base leading-[26px] text-primary`}>Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</span>
                <Button text={"Visit Shop"} />
            </div>
        </div>
    </>
  )
}

export default Shop