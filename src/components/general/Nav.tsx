"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// COMPONENTS
import Links from "@/components/shared/Links";

// IMAGES
import logo from "@/assets/logo/logo_blue.svg";

const Nav = () => {
  const currentPath = usePathname();

  return (
    <>
      <div className="w-screen absolute top-0 left-0 flex items-start gap-[171px] pl-[166px] pt-6">
        <Link href={"/"}>
          <Image src={logo} priority alt="sleepstiq logo" />
        </Link>
        <div className="flex lg:gap-16 mt-2">
          <Links path={"/"} content={"Home"} currentPath={currentPath} />
          <Links path={"#about"} content={"About"} currentPath={currentPath} />
          <Links path={"/Shop"} content={"Shop"} currentPath={currentPath} />
          <Links path={"/faqs"} content={"FAQs"} currentPath={currentPath} />
        </div>
      </div>
    </>
  );
};

export default Nav;
