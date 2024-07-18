import React from 'react'
import "@/style/style.css"
import About from './About'
import Hero from './Hero'
import Testimonials from '../general/testimonial'

const AboutProduct = () => {
  return (
    <>
      <Hero />
      <About />
      <div className="md:pl-[154px] pb-20"><Testimonials /></div>
    </>
  )
}

export default AboutProduct