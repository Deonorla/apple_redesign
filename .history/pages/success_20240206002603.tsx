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
      <header className="mx-auto max-w-xl">
        <Link href="/">
          <div className="relative ml-4 h-16 w-8 cursor-pointer transition lg:inline-flex ">
            <Image
              src="https://www.freeiconspng.com/uploads/apple-icon-4.png"
              width={50}
              height={50}
              alt=""
            />
          </div>
        </Link>
      </header>
      <main className="">
        <section className="lg:mx-w-none order-2 mx-auto max-w-xl pb-12 lg:pr-16 lg:pt-16 2xl:pl-44">
          <Link href={"/"}>
            <div className="relative ml-4 h-16 w-8 cursor-pointer transition lg:inline-flex ">
              <Image
                src="https://www.freeiconspng.com/uploads/apple-icon-4.png"
                width={50}
                height={50}
                alt=""
              />
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default success;
