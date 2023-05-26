import { urlFor } from "@/sanity";
import Image from "next/image";
import React from "react";
interface Props {
  product: Product;
}
const Product = ({ product }: Props) => {
  return (
    <div className="flex h-fit w-[320px] ">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          alt=""
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Product;
