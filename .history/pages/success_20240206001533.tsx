import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const success = () => {
  return (
    <div>
      <Head>
        <title>Thank you! - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <div className="relative ml-4 h-16 w-8 cursor-pointer transition lg:hidden ">
            <Image
              src="https://www.freeiconspng.com/uploads/apple-icon-4.png"
              width={50}
              height={50}
              alt=""
            />
          </div>
        </Link>
      </header>
    </div>
  );
};

export default success;
