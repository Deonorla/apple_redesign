import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const success = () => {
  const router = useRouter();
  const { session_id } = router.query;
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
          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
              <CheckIcon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Order #{session_id!.slice(-5)}
              </p>
              <h4 className="text-lg">
                Thank You
                {/* {session ? session?.user?.name..split(" ")[0] : "Guest"} */}
              </h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default success;
