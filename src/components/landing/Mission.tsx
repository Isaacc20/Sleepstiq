import React from 'react'
import Header from '../shared/header'
import { poppinsRegular } from '@/app/fonts'
import Image from 'next/image'
import mission from "@/assets/images/mission.svg"

const Mission = () => {
  return (
    <>
        <div className="w-3/4 md:w-full flex flex-col md:flex-row justify-around lg:justify-start gap-7 md:gap-14 lg:gap-28 items-center md:pl-44 py-32 mx-auto">
            <div className="flex flex-col gap-7">
                <Header text={"Our Mission"} />
                <span className={`${poppinsRegular.className} text-base leading-[26px] text-primary`}>We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That&apos;s why we created products that aim to - <br />
<br />
✓ Promote Calm <br />
✓ Support Sleep <br />
✓ Reduce Stress <br />
✓ Aid Relaxation</span>
            </div>
            <Image className='w-full md:w-1/2' src={mission} alt='sleeping woman' />
        </div>
    </>
  )
}

export default Mission