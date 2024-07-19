import React from 'react'
import { QuestionList } from './Questionlist'
import Question from './Question'

const Accordion = () => {
  return (
    <>
        <div className='flex flex-col items-stretch w-5/6 mx-auto'>
            <hr />
            {QuestionList.map((el, i)=>(
                <>
                    <Question key={i} question={el} />
                    <hr />
                </>
            ))}
        </div>
    </>
  )
}

export default Accordion