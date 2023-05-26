import { urlFor } from "@/sanity";
import Image from "next/image";
import React from "react";
interface Props {
  product: Product;
}
const Product = ({ product }: Props) => {
  return (
    <div>
      <div>
        <Image src={urlFor(product.image[0]).url()} alt="" fill />
      </div>
    </div>
  );
};

export default Product;
