"use client";

import { useEffect, useState } from "react";
import CartItemComponenet from "@/pageComponents/product/cartItemsComponent";
import { IProduct, IcartItem } from "../utils/interfaces";
import axiosInstance from "../utils/axiosInstance";

const CheckoutPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const getCartItems = async () => {
    setisLoading(true);
    try {
      const response = await axiosInstance.get(`/website/products/cart`);
      setisLoading(false);
      setcartItems(response.data.data);
    } catch (e) {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <section className="container mx-auto mt-24">
      <div className="2xl:mx-28  lg:mx-4 mx-2 ">
        {cartItems.length > 0 ? (
          <>
            <h1 className="text-4xl font-bold mb-6">Cart Items</h1>
            {cartItems.map((cartItem: IcartItem, i: any) => (
              <CartItemComponenet key={i} cartItem={cartItem} />
            ))}
          </>
        ) : (
          <div className="text-center font-bold text-4xl">No items in cart</div>
        )}
      </div>
    </section>
  );
};

export default CheckoutPage;
