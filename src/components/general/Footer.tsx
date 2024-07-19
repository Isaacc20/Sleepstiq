import Image from 'next/image'
import React from 'react'
import logo_white from "@/assets/logo/logo_white.svg"
import vr from "@/assets/images/vr.svg"
import { poppinsBold, poppinsRegular, poppinsSemiBold } from '@/app/fonts'
import Link from 'next/link'
import { FaFacebookF, FaGooglePlus, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className="footer flex flex-col items-center gap-12 p-16 bg-primary">
            <Image src={logo_white} alt='sleepstiq logo' />
            <div className="flex flex-wrap xl:flex-nowrap justify-around items-start gap-12">
                <div className="w-full sm:w-1/4 flex flex-col gap-5">
                    <h5 className={`${poppinsSemiBold.className} text-base leading-9 text-white`}>COMPANY</h5>
                    <div className="flex flex-col gap-5">
                        <Link href={"/#about"} className={`${poppinsRegular.className} text-base leading-10 text-footer hover:underline`} >About</Link>
                        <Link href={"#"} className={`${poppinsRegular.className} text-base leading-10 text-footer hover:underline`} >Blog</Link>
                        <Link href={"#"} className={`${poppinsRegular.className} text-base leading-10 text-footer hover:underline`} >Contact</Link>
                        <Link href={"#"} className={`${poppinsRegular.className} text-base leading-10 text-footer hover:underline`} >Jobs</Link>
                    </div>
                </div>
                <div className="w-full sm:w-1/4 flex flex-col gap-5">
                    <h5 className={`${poppinsSemiBold.className} text-base leading-9 text-white`}>CONTACT</h5>
                    <div className="flex flex-col gap-5">
                        <span className={`${poppinsRegular.className} text-base leading-10 text-footer`}>Phone</span>
                        <span className={`${poppinsBold.className} text-base leading-10 text-white`}>+234 708 507 3128</span>
                        <span className={`${poppinsRegular.className} text-base leading-10 text-footer`}>Address</span>
                        <span className={`${poppinsBold.className} text-base leading-10 text-white`}>16, Ogindipe Close, Upston  Close</span>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 min-w-80 flex flex-col gap-5">
                    <h5 className={`${poppinsSemiBold.className} text-base leading-9 text-white`}>CONSUMER ADVISORY</h5>
                    <div className="flex flex-col gap-5">
                        <span className={`${poppinsRegular.className} text-base leading-[26px] text-white`}>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary. <br />
                            <br />
                            By using our website or product, you agree to follow our <Link href={"#"} className='text-[#8FE2FF] hover:underline'>terms of service</Link>.
                        </span>
                    </div>
                </div>
                {/* <div className="w-[1px] h-[300px] bg-reviews"></div> */}
                <Image src={vr} alt='' className='hidden xl:flex' />
                <div className="w-full sm:w-1/4 flex flex-col gap-5">
                    <h5 className={`${poppinsSemiBold.className} text-base leading-9 text-white`}>GET IN TOUCH</h5>
                    <div className="flex flex-col gap-5">
                    <span className={`${poppinsRegular.className} text-base leading-[26px] text-footer`}>Feel free to get in touch with us vai email</span>
                    <span className={`${poppinsBold.className} text-2xl leading-8 text-white`}>hello@sleepstiq.com</span>
                    <div className="flex items-stretch gap-3">
                        <Link href={"#"} className='p-2 aspect-square rounded-full text-primary bg-[#8FE2FF]'><FaFacebookF /></Link>
                        <Link href={"#"} className='p-2 aspect-square rounded-full text-primary bg-[#8FE2FF]'><FaTwitter /></Link>
                        <Link href={"#"} className='aspect-square rounded-full text-3xl text-[#8FE2FF]'><FaGooglePlus /></Link>
                        <Link href={"#"} className='p-2 aspect-square rounded-full text-primary bg-[#8FE2FF]'><FaLinkedin /></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer