"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// COMPONENTS
import Links from "@/components/shared/Links";

// IMAGES
import logo from "@/assets/logo/logo_blue.svg";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RiCloseLargeFill } from "react-icons/ri";

const Nav = () => {
  const [open, setopen] = useState(false)
  const currentPath = usePathname();

  return (
    <>
      <div className="w-full absolute top-0 left-0 flex items-start gap-[171px] md:pl-[166px] pt-6 justify-around md:justify-normal">
        <Link href={"/"} className="z-10">
          <Image src={logo} priority alt="sleepstiq logo" />
        </Link>
        <div className="md:flex hidden items-center gap-16 mt-2">
          <Links path={"/"} content={"Home"} currentPath={currentPath} moreStyles={"hover:underline"} />
          <Links path={currentPath == "/"? "#about": "/"} content={"About"} currentPath={currentPath} moreStyles={"hover:underline"} />
          <Links path={"/shop"} content={"Shop"} currentPath={currentPath} moreStyles={"hover:underline"} />
          <Links path={"/faqs"} content={"FAQs"} currentPath={currentPath} moreStyles={"hover:underline"} />
        </div>
        <button onClick={()=>open? setopen(false): setopen(true)} className="text-4xl text-primary md:hidden"><BiMenu /></button>
        <div className={`${open? 'top-0': '-top-[1000px]'} absolute left-0 right-0 w-full bg-white flex md:hidden flex-col items-stretch text-end`}>
          <Links path={"/"} content={"Home"} currentPath={currentPath} moreStyles={"p-5"} />
          <hr />
          <Links path={"#about"} content={"About"} currentPath={currentPath} moreStyles={"p-5"} />
          <hr />
          <Links path={"/shop"} content={"Shop"} currentPath={currentPath} moreStyles={"p-5"} />
          <hr />
          <Links path={"/faqs"} content={"FAQs"} currentPath={currentPath} moreStyles={"p-5"} />
          <hr />
          <button onClick={()=>setopen(false)} className={`text-4xl text-primary p-5`}><RiCloseLargeFill /></button>
        </div>
      </div>
    </>
  );
};

export default Nav;
