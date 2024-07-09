// "use client";

// import Login from "@/app/login/page";
// import { Button, Input } from "antd";
// import Search from "antd/es/input/Search";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { FaRegCopyright, FaUserCircle } from "react-icons/fa";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { IoMdClose, IoIosCart, IoMdSearch, IoIosSearch } from "react-icons/io";

// export const NavBar = () => {
//   const LogInButton = () => {};
//   return (
//     <>
//       {/* main Nav Bar */}
//       <div className=" flex flex-row bg-green-500 h-[12vh]">
//         {/* Logo */}
//         <div className="flex items-center justify-center font-extrabold text-white text-2xl px-4">
//           Hamro Luga Pasal
//         </div>

//         {/* right side */}
//         <div className="flex items-center justify-end text-white text-lg px-4">
//           <div className="flex flex-row gap-4 p-[2px]">
//             <Search placeholder="Search" style={{ width: 200 }} />
//             <Link href="/login">
//               <Button
//                 type="default"
//                 className="bg-green-500 flex flex-row text-white text-lg gap-3 p-1 m-0 w-[auto]"
//               >
//                 <FaUserCircle className="mt-1" />
//                 LogIn
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

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

{
  /* <div className="flex items-center justify-center text-white text-lg px-4 ml-auto">
          <div className="flex flex-row gap-4 p-[2px]">
            <Search placeholder="Search" style={{ width: 200 }} />

            <Link href="/login">
              <Button
                type="default"
                className="bg-green-500 flex flex-row  text-white  text-lg gap-3  p-1 m-0 w-[auto] "
              >
                <FaUserCircle className="mt-1" />
                LogIn
              </Button>
            </Link>
          </div>
        </div> */
}
