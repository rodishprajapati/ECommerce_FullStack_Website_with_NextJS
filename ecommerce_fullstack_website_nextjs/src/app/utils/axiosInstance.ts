// "use client";

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8000/api/v1",
//   //   timeout: 3000,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + localStorage.getItem("accessToken"),
//   },
// });

// export default axiosInstance;

import axios from "axios";
import { useEffect } from "react";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  // timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

const setAuthorizationHeader = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

const useAxiosInterceptors = () => {
  useEffect(() => {
    setAuthorizationHeader();

    // Listen for changes in localStorage and update Authorization header accordingly
    window.addEventListener("storage", setAuthorizationHeader);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("storage", setAuthorizationHeader);
    };
  }, []);
};

export default useAxiosInterceptors;
