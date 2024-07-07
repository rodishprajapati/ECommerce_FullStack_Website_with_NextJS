import { useEffect } from "react";
import React from "react";
import Header from "../pageComponents/header";

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
      <h1>this is main page</h1>
    </>
  );
};

export default MainPage;
