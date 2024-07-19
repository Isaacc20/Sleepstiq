"use client";

import { poppinsBold, poppinsRegular } from "@/app/fonts";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

const Links = ({
  path,
  currentPath,
  content,
  moreStyles
}: {
  path: Url;
  currentPath: String;
  content: String;
  moreStyles: String
}) => {
  return (
    <>
      <Link
        href={path}
        className={`
          ${path == currentPath
            ? `${poppinsBold.className} text-lg leading-[27px] text-primary`
            : `${poppinsRegular.className} text-lg leading-[27px] text-primary`}
            ${moreStyles}
        `}
      >
        {content}
      </Link>
    </>
  );
};

export default Links;
