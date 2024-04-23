import React, { useEffect } from "react";
const MainPage = () => {
  useEffect(() => {
    const getAccessToken = localStorage.getItem("accessToken");
    if (!getAccessToken) {
      window.location.replace("/login");
    }
  });
  return (
    <>
      <div className="bg-zinc-200 h-[100vh] w-[100vw] flex flex-row">
        <div className="bg-zinc-500 h-[100vh] w-[20vw]">dashBoard</div>
        <div className="bg-zinc-300 h-[100vh] w-[80vw]">
          <div className="bg-">content</div>
        </div>
      </div>
    </>
  );
};
export default MainPage;
