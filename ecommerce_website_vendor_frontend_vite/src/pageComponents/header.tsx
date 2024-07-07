import React, { useContext } from "react";
import { userContext } from "../contexts/userContext";
const Header = () => {
  const userContextData = useContext(userContext);

  return (
    <>
      <header className="bg-green-500 h-[6vh] flex justify-between">
        <div
          className="ml-[4vw] mt-[1vh] text-xl font-bold text-zinc-700"
          id="leftSide "
        >
          ABC Pasal
        </div>
        <div className="mr-[5vw] mt-[1vh]" id="rightSide ">
          Welcome {userContextData.user_name}
        </div>
      </header>
    </>
  );
};
export default Header;
