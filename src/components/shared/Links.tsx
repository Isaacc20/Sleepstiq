"use client";

import { poppinsBold, poppinsRegular } from "@/app/fonts";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

const Links = ({
  path,
  currentPath,
  content,
}: {
  path: Url;
  currentPath: String;
  content: String;
}) => {
  return (
    <>
      <Link
        href={path}
        className={
          path == currentPath
            ? `${poppinsBold.className} text-lg leading-[27px] text-primary`
            : `${poppinsRegular} text-lg leading-[27px] text-primary`
        }
      >
        {content}
      </Link>
    </>
  );
};

export default Links;
