"use client";

import { Button } from "antd";
import Search from "antd/es/input/Search";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export const NavBar = () => {
  return (
    <>
      {/* main Nav Bar */}
      <div className="flex flex-row bg-green-500 h-[10vh]">
        {/* Logo */}
        <div className="flex items-center justify-center font-extrabold text-white text-2xl px-4">
          Hamro Luga Pasal
        </div>

        {/* right side */}
        <div className="flex items-center ml-auto text-white text-lg px-4">
          <div className="flex flex-row gap-4 items-center p-[2px]">
            <Search placeholder="Search" style={{ width: 200 }} />
            <Link href="/login">
              <Button
                type="default"
                className="bg-green-500 flex flex-row text-white text-lg gap-3 p-1 m-0 w-[auto]"
              >
                <FaUserCircle className="mt-1" />
                LogIn
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
