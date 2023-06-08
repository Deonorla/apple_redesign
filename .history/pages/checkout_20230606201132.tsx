import Header from "@/components/Header";
import { selectBasketItems } from "@/redux/slices/basketSlice";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const checkout = () => {
  const items = useSelector(selectBasketItems);
  return (
    <div>
      <Head>
        <title>Bag -Apple</title>
        <link rel='icon href="/favicon.ico' />
      </Head>
      <Header />
      <main>
        <div>
          <h1>{items.length > 0 ? "Review your bag" : "Your bag is empty"}</h1>
          <p className="my-4">Free delivery and free returns.</p>
        </div>
      </main>
    </div>
  );
};

export default checkout;
