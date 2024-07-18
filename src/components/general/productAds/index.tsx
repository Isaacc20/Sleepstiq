import { poppinsItalic } from '@/app/fonts'
import React from 'react'

const productAds = ({className}: {className: String}) => {
  return (
    <>
        <div className={`flex-col ${className}`}>
          <span className={`${poppinsItalic.className} text-base leading-[26px] text-primary`}>😊  Promotes calm and relaxation. <br />
💤  Inhalation allows for a rapid effect. <br />
✅  100% drug-free, plant-based ingredients. <br />
‍⚕️  3rd-party lab tested.</span>
        </div>
    </>
  )
}

export default productAds