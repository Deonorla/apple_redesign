import { urlFor } from "@/sanity";
import Image from "next/image";
import React from "react";

interface Props {
  items: Product[];
  id: string;
}

const CheckoutProduct = ({ items, id }: Props) => {
  return (
    <div>
      <div>
        <Image
          src={urlFor(items[0].image[0]).url()}
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default CheckoutProduct;
