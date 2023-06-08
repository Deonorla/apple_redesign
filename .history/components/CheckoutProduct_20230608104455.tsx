import { urlFor } from "@/sanity";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

interface Props {
  items: Product[];
  id: string;
}

const CheckoutProduct = ({ items, id }: Props) => {
  return (
    <div>
      <div className="relative h-44 w-44">
        <Image
          src={urlFor(items[0].image[0]).url()}
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-1 items-end lg:items-center">
        <div>
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              {items.length}
              <ChevronDownIcon className="h-6 w-6 text-blue-500" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
