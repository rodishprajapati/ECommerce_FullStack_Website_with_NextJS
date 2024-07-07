import { useEffect } from "react";
import React from "react";

const MainPage = () => {
  useEffect(() => {
    const getAccessToken = localStorage.getItem("accessToken");
    if (!getAccessToken) {
      window.location.replace("/login");
    }
  }, []);

  return (
    <>
      <h1>this is main page</h1>
    </>
  );
};

export default MainPage;
