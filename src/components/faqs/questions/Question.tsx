'use client'
import { poppinsRegular, poppinsSemiBold } from '@/app/fonts'
import React, { useState } from 'react'

const Question = ({question}:{question: String}) => {
    const [open, setopen] = useState(false)
  return (
    <>
        <button onClick={()=>open? setopen(false): setopen(true)} className='flex flex-col gap-[18px] cursor-pointer py-5'>
            <p className={`${open? poppinsSemiBold.className: poppinsRegular.className} text-[18px] text-primary leading-7`}>{question}</p>
            <span className={`${poppinsRegular.className} text-start text-base leading-6 text-black ${open? "flex": "hidden"}`}>Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.</span>
        </button>
    </>
  )
}

export default Question