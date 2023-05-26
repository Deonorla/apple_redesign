import { urlFor } from "@/sanity";
import Image from "next/image";
import React from "react";
interface Props {
  product: Product;
}
const Product = ({ product }: Props) => {
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative flex h-64 w-full items-center justify-center md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          alt=""
          width={150}
          height={150}
        />
      </div>
      <div>
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
