"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose, IoIosCart, IoMdSearch } from "react-icons/io";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchData, setSearchData] = useState("");

  console.log(searchData);

  const Navlinks = () => {
    return (
      <>
        <Link onClick={() => setOpen(false)} href="/">
          Home
        </Link>
        <Link onClick={() => setOpen(false)} href="/products">
          Products
        </Link>
        <span
          onClick={() => {
            setOpen(false);
            setSearchData("");
            setSearch(true);
          }}
        >
          <IoMdSearch className="text-2xl" />
        </span>
        <Link onClick={() => setOpen(false)} href="/checkout">
          <IoIosCart className="text-2xl" />
        </Link>
        <Link
          className="px-5 py-2 rounded-md text-white bg-black"
          onClick={() => setOpen(false)}
          href="/login"
        >
          Login
        </Link>
      </>
    );
  };
  return (
    <>
      <>
        <div
          className={`bg-black z-50 bg-opacity-60 fixed  h-full w-full top-0 duration-500 ease-in-out ${
            search ? "translate-y-0" : "-translate-y-[100%]"
          } `}
        >
          <div className="absolute right-10 top-6 bg-white rounded-full p-2">
            <IoMdClose
              onClick={() => setSearch(false)}
              className={` text-3xl lg:text-4xl`}
            />
          </div>
          <div className="grid place-items-center h-full">
            <div className="flex flex-col lg:flex-row px-2 space-y-4 lg:space-y-0 lg:space-x-4">
              <input
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                type="text"
                placeholder="Search for products"
                className="w-[90vw] lg:w-[25rem] p-4 rounded-md"
              />

              <Link
                className="text-white py-3 px-8 bg-black rounded-md text-xl"
                onClick={() => {
                  setSearch(false);
                }}
                href={`/search?search=${searchData}`}
              >
                Search
              </Link>
            </div>
          </div>{" "}
        </div>
      </>

      <main className="relative">
        <header className=" w-full fixed top-0 z-10 shadow-md bg-white">
          <div className=" container mx-auto ">
            <nav className="2xl:mx-28  lg:mx-4 mx-2  flex justify-between items-center py-4 relative">
              <Link href="/">
                <Image
                  src={"/logo.png"}
                  alt=""
                  className=" w-[150px]"
                  width={1000}
                  height={1000}
                />
              </Link>
              <FaBarsStaggered
                onClick={() => setOpen(!open)}
                className={`${
                  open ? "hidden" : ""
                }  lg:hidden  text-3xl lg:text-4xl`}
              />{" "}
              <IoMdClose
                onClick={() => setOpen(!open)}
                className={` ${
                  !open ? "hidden" : ""
                } lg:hidden  text-3xl lg:text-4xl`}
              />
              <div className={`lg:flex items-center  space-x-10   hidden`}>
                <Navlinks />
              </div>
            </nav>
          </div>
          <div
            className={`  ${
              open ? "" : "translate-x-[1000px]"
            } lg:hidden bg-white z-50 h-[100dvh] w-[100vw] absolute flex flex-col items-center ease-in-out duration-500   space-y-8 top-0 mt-[90px] py-12`}
          >
            <Navlinks />
          </div>
        </header>
      </main>
    </>
  );
};
