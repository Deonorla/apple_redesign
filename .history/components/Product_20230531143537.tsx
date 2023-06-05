import { addToBasket } from "@/redux/slices/basketSlice";
import { urlFor } from "@/sanity";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
interface Props {
  product: Product;
}

const Product = ({ product }: Props) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));
    toast.success(`${product.title} added to cart`, {
      position: "bottom-center",
    });
  };

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
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p className="text-[1rem]">{product.title}</p>
          <p className="text-[.8rem]">{`$${product.price}`}</p>
        </div>
        <div
          className="flex h-[3rem]  w-[3rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full  bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]"
          onClick={addItemToBasket}
        >
          <ShoppingCartIcon className="h-[1.3rem] text-white" />
        </div>
      </div>
    </div>
  );
};

export default Product;
