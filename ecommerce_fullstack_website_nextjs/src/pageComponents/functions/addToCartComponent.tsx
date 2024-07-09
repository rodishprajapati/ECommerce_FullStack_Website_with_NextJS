"use client";

import axios from "axios";
import { useState } from "react";
import { NavBar } from "../NavBar";
import { Modal } from "antd";
import { axiosInstance } from "@/app/utils/axiosInstance";

const AddToCartComponent = (props: any) => {
  const [isLoading, setisLoading] = useState(false);
  const [quantity, setQuanity] = useState(1);

  const addToCart = async () => {
    setisLoading(true);
    try {
      const response = await axiosInstance.post(`/website/products/addToCart`, {
        product_id: props.id,
        quantity: quantity,
      });
      setisLoading(false);
    } catch (e) {
      setisLoading(false);
    }
  };
  const [isAddToCartModalOpen, setIsAddToCartModalOpen] = useState(false);

  const showModal = () => {
    setIsAddToCartModalOpen(true);
  };

  const handleOk = () => {
    addToCart();
    setIsAddToCartModalOpen(false);
  };

  const handleCancel = () => {
    setIsAddToCartModalOpen(false);
  };

  return (
    <>
      <button
        className="bg-green-500 h-[4vh] text-white m-[2px] p-2 px-4 rounded-md hover:bg-green-600 float-right md:mr-[10vw]
              mr-[5vw]"
        //
        onClick={showModal}
      >
        Add To Cart
      </button>
      <Modal
        title="Add Item To Cart"
        open={isAddToCartModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex cursor-pointer">
          <div className="flex space-x-2 items-center mr-6">
            <div
              className=" h-[50px] w-[50px] flex items-center justify-center text-3xl  border-2 border-slate-400 rounded-md cursor-pointer"
              onClick={() => {
                if (quantity < 2) return;
                setQuanity(quantity - 1);
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
              }}
            >
              +
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default AddToCartComponent;
