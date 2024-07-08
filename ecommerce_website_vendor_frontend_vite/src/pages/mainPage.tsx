import { useEffect } from "react";
import React from "react";
import Header from "../pageComponents/header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashBoard";
import Products from "../functionPages/products";
import Orders from "../functionPages/orders";
import SideBar from "../pageComponents/sidebar";

const MainPage = () => {
  useEffect(() => {
    const getAccessToken = localStorage.getItem("accessToken");
    if (!getAccessToken) {
      window.location.replace("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <div className="w-[100vw] h-[100vh]  flex">
        <div className="  h-[100vh] w-[20%]">
          <SideBar />
        </div>

        <div className=" h-[100vh]  w-[80%]">
          <div className="">{/* <Header /> */}</div>

          <div className="">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
