import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
        <div className="flex items-center justify-center md:w-1/5">
        <Link  href="/">
        <div className="relative cursor-pointer opacity-75 hover:opacity-100 w-fit transition ">
            <Image
            src="https://www.freeiconspng.com/uploads/apple-icon-4.png"
            width={50}
            height={50}
            alt=""
            />
        </div>
        </Link>

        </div>
    </header>
  );
};

export default Header;
