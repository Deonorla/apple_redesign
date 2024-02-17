import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { useMediaQuery } from "react-responsive";
import { GetServerSideProps } from "next";
import Currency from "react-currency-formatter";
import { fetchLineItems } from "@/utils/fetchLineItems";

interface Props {
  products: StripeProduct[];
}

const success = ({ products }: Props) => {
  console.log(products);
  const router = useRouter();
  const { session_id } = router.query;
  const [mount, setMounted] = useState<boolean>(false);
  const [showOrderSummary, setShowOrderSummary] = useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;

  const subTotal = products.reduce(
    (acc, product) => acc + product.price.unit_amount / 100,
    0
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShowOrderSummary = () => {
    setShowOrderSummary(!showOrderSummary);
  };

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
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </Link>
      </header>
      <main className="">
        <section className="lg:mx-w-none lg:max-0 order-2 mx-auto max-w-xl pb-12 lg:mx-0 lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
              <CheckIcon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Order #{session_id?.slice(-5)}
              </p>
              <h4 className="text-lg">
                Thank You
                {/* {session ? session?.user?.name..split(" ")[0] : "Guest"} */}
              </h4>
            </div>
          </div>
          <div className="mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14">
            <div className="space-y-2 pb-3">
              <p>Your Order is Confirmed</p>
              <p className="text-sm text-gray-600">
                we've accepted your order, and we're getting it ready. Come back
                to this page for updates on your shipment status.
              </p>
            </div>
            <div className="pt-3 text-sm">
              <p className="font-medium text-gray-600">
                Order tracking number:
              </p>
              <p>CBK25875830</p>
            </div>
          </div>
          <div className=" m-4 space-y-2  rounded-md border border-gray-300 p-4 lg:ml-14">
            <p> Order updates</p>
            <p className="text-sm text-gray-600">
              You will get shipping and delivery updates via email and sms.
            </p>
          </div>
          <div>
            <p className="hidden lg:inline">Need help? Contact us</p>
            {mount && (
              <Button
                title="Continue Shoping"
                onClick={() => router.push("/")}
                width={isTabletOrMobile ? "w-full" : undefined}
                padding="py-4"
              />
            )}
          </div>
        </section>
        {mount && (
          <section>
            <div
              className={`w-full ${showOrderSummaryCondition && "border-b"}`}
            >
              <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-6">
                <button
                  className="flex items-center space-x-2"
                  onClick={() => handleShowOrderSummary()}
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                  <p>Show order summary</p>
                  {showOrderSummaryCondition ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
                <p className="text-xl font-medium text-black">
                  <Currency quantity={subTotal + 20} />
                </p>
              </div>
            </div>
            {showOrderSummaryCondition && (
              <div>
                <div></div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default success;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const sessionId = query.session_id as string;
  const products = await fetchLineItems(sessionId);
  return {
    props: {
      products,
    },
  };
};
