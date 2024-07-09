"use client";

import axiosInstance from "@/app/utils/axiosInstance";
import { IProduct, IcartItem } from "@/app/utils/interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";

const CartItemComponenet = (props: any) => {
  const cartItem: IcartItem = props.cartItem;

  const [quantity, setQuanity] = useState(0);

  const addQuantity = async () => {
    try {
      const response = await axiosInstance.post(`/website/products/addToCart`, {
        product_id: cartItem.product_id._id,
        quantity: 1,
      });
    } catch (e) {}
  };

  const decreaseQuantity = async () => {
    try {
      const response = await axiosInstance.delete(
        `/website/products/removeFromCart/${cartItem._id}`
      );
    } catch (e) {}
  };

  //   useEffect(() => {
  //     setQuanity(cartItem.quantity);
  //   }, []);

  return (
    <>
      <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 bg-gray-100 p-3 rounded-md mb-2 justify-between items-center">
        <h1 className=" font-bold text-xl">
          {" "}
          <Link href={`/product/${cartItem.product_id._id}`}>
            {cartItem.product_id.product_name}
          </Link>
        </h1>

        <div className="flex space-x-2 items-center mr-6">
          <div
            className=" h-[50px] w-[50px] flex items-center justify-center text-3xl  border-2 border-slate-400 rounded-md cursor-pointer"
            onClick={() => {
              if (quantity < 2) return;
              setQuanity(quantity - 1);
              decreaseQuantity();
            }}
          >
            -
          </div>
          <div className=" h-[50px] w-[50px] flex items-center justify-center text-3xl  border-2 border-slate-400 rounded-md">
            {quantity}
          </div>
          <div
            className=" h-[50px] w-[50px] flex items-center justify-center text-3xl  border-2 border-slate-400 rounded-md cursor-pointer"
            onClick={() => {
              setQuanity(quantity + 1);
              addQuantity();
            }}
          >
            +
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemComponenet;
