import Button from "@/components/Button";
import Header from "@/components/Header";
import { selectBasketItems } from "@/redux/slices/basketSlice";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const checkout = () => {
  const items = useSelector(selectBasketItems);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Bag -Apple</title>
        <link rel='icon href="/favicon.ico' />
      </Head>
      <Header />
      <main>
        <div>
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? "Review your bag" : "Your bag is empty"}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>
          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}
        </div>
        {items.length > 0 && <div></div>}
      </main>
    </div>
  );
};

export default checkout;
