import Header from '@/components/shared/header'
import React from 'react'
import { ReviewList } from './ReviewList'
import ReviewCard from './ReviewCard'

const Review = () => {
  return (
    <>
        <div className='flex flex-col gap-[52px] md:pl-44 px-5 text-center md:text-start py-32'>
            <Header text={"Product Reviews"} />
            <div className="md:w-full flex items-stretch text-start gap-[26px] overflow-x-auto scrollbar-hidden px-4 md:p-0">
                {ReviewList.map((el, i) => (
                    <ReviewCard key={i} name={el.name} review={el.review} />
                ))}
            </div>
        </div>
    </>
  )
}

export default Review