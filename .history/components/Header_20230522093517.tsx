import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative w-fit cursor-pointer opacity-75 transition hover:opacity-100 ">
            <Image
              src="https://www.freeiconspng.com/uploads/apple-icon-4.png"
              width={50}
              height={50}
              alt=""
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex ">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="">
        <MagnifyingGlassIcon className="headerIcon" />
        <div className="relative cursor-pointer">
          <span className="absolute -right-1">5</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
